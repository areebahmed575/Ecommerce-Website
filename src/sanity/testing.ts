export const testing ={
    name: 'testing',
    type: 'document',
    title: 'Testing',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'ProductName'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'productName',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input: any) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "image",
            title: "Product Image",
            type: "image",
           
        },
        
        {
            name: 'productTypes',
            type: 'array',
            title: 'ProductType',
            of: [{ type: 'string' }]
        },

        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'size',
            type: 'array',
            title: 'Sizes',
            of: [{ type: 'string' }]
        },
        {
            name: 'quantity',
            type: 'number',
            title: 'Quantity'
        },
           

    ]
}