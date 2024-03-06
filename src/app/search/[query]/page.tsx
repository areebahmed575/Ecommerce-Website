import CardAll from "@/app/components/CardAll";
import { IProduct } from '@/app/page';
import { client } from "@/lib/sanityClient";
async function getAllProductsForSearch() {
    let response = await client.fetch(`*[_type == "testing"]`);
    return response;
};

const Search = async ({ params }: { params: { query: string } }) => {
    let data = await getAllProductsForSearch();
    let slug = params.query.toLowerCase();
    let dataToMap = data.filter((item: IProduct) => {
        return item.productName.toLowerCase().includes(slug);
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            {dataToMap.length === 0 ? (
                <div style={{ textAlign: 'center', fontSize: '30px', color: 'black'  }}>No products found</div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4">
                    {dataToMap.map((items: IProduct, index: number) => (
                        <CardAll key={index} singleProductData={items} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;