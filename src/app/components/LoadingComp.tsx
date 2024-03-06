import Image from "next/image"
import { FC } from "react"


const LoadingComp: FC<{ size: string }> = ({ size }) => {
    return (
        <div className={`${size}`}>
            <Image src={"/Preloader.gif"} alt="Pre loader" />
        </div>
    )
}

export default LoadingComp