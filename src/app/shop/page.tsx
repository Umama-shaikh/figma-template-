import Image from "next/image";
import { MdWindow } from "react-icons/md";
import { IoIosList } from "react-icons/io";
import BigCompany from "@/components/big-companies";

const products = [
    { id: 9, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5.png" },
    { id: 10, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (1).png" },
    { id: 11, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (2).png" },
    { id: 12, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (3).png" },
    { id: 13, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (4).png" },
    { id: 14, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (5).png" },
    { id: 15, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (6).png" },
    { id: 16, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (7).png" },
    { id: 17, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (8).png" },
    { id: 18, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (9).png" },
    { id: 19, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (10).png" },
    { id: 20, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/product-cover-5 (11).png" },

   
  ];
  


export default function Shop(){
    return(
        <div>
            <div>
                {/* shop header */}
                <div className="lg:flex lg:justify-between py-6 lg:px-[195px] bg-gray-100 text-center"> 
                    <h2 className="font-bold text-2xl">SHOP</h2>
                    <div className="flex gap-3 ml-28 mt-6 lg:mt-0 lg:ml-0">
                        <h4 className="font-bold text-sm">HOME</h4>
                        <h4 className="text-mygray mfont-bold text-sm">SHOP</h4>
                    </div>
                </div>
                {/*  images section */}
                <div className="lg:flex lg:gap-4 lg:px-[195px] bg-gray-100 lg:mb-4 py-6 px-14 space-y-2 lg:space-y-0 ">
                    {/* 1st image */}
                    <div>
                        <Image src="/images/col-md-4.png" alt="girl" width={205} height={223}></Image>
                    </div>

                    {/* 2nd image */}
                    <div>
                        <Image src="/images/col-md-3.png" alt="girl" width={205} height={230}></Image>
                    </div>

                    {/* 3rd image */}
                    <div>
                        <Image src="/images/card-item(1).png" alt="girl" width={205} height={223}></Image>
                    </div>

                    {/* 4th image */}
                    <div>
                        <Image src="/images/card-item (4).png" alt="girl" width={205} height={223}></Image>
                    </div>

                    {/* 5th image */}
                    <div>
                        <Image src="/images/card-item (2).png" alt="girl" width={205} height={223}></Image>
                    </div>
                </div>

                {/* Showing all section */}
                <div className="lg:flex lg:justify-between lg:px-[195px] mb-4 text-center mt-5 lg:mt-0">
                    <div>
                        <p className="font-bold text-sm text-mygray mt-3">Showing all 12 results</p>
                    </div>
                    <div className="flex gap-4 mt-3 justify-center">
                        <p className="font-bold text-sm  text-mygray">Views:</p>
                        <div ><MdWindow size={16} /></div>
                        <div ><IoIosList size={16}/></div>
                    </div>

                    <div className="flex gap-3 justify-center mt-7 lg:mt-0" >
                        <div> <select  className=" text-center w-[141px] h-[50px] bg-gray-100 text-mygray border border-gray-300 rounded-md"><option className="" >Popularity</option></select></div>
                        <div> <button className="w-[94px] h-[50px] text-white font-bold text-sm bg-myblue rounded-md">Filter</button></div>
                    </div>
                </div>
            </div>
            <BigCompany/>

            {/* products */}

            <div className="lg:py-8  lg:px-32 py-6 px-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {products.map((product) => (
                <div key={product.id} className=" p-4">
                    <Image
                    src={product.image}
                    alt={product.title}
                    width={239}
                    height={427}
                    className="w-full "
                    />
                    <h4 className="text-lg font-medium mt-4">{product.title}</h4>
                    <p className="text-sm text-gray-500 mt-3">{product.department}</p>
                    <div className="flex justify-center mt-2 ">
                    <span className="text-gray-500 line-through mr-2">{product.oldPrice}</span>
                    <span className="text-green-600 font-bold">{product.newPrice}</span>
                    </div> 
                    <div className="ml-[70px] mt-3">
                        <Image src="/Images/product-colors.png" alt='colors' width={82.23} height={16} className=''></Image>
            
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    )
}