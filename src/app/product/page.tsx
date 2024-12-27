import ProductCard from "@/components/product"
import BigCompany from "@/components/big-companies"
import ProductGrid from "@/components/BestsellerProducts"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import ProductDescription from "@/components/product-detail"


export default function Products(){
    return(
        <div>
            <div className="flex gap-[15px] lg:pl-36 bg-gray-100 lg:pt-3  justify-center lg:justify-start">
                <p className="font-bold text-sm">Home</p>
                <span><MdOutlineKeyboardArrowRight size={20} className="text-gray-400 "/></span>
                <p className="text-mygray font-bold text-sm">shop</p>
            </div>
            <div>
                 <ProductCard/>
                 <ProductDescription/>
                 <ProductGrid/>
                 <BigCompany/>
            </div>
        </div>
    )
}