import Image from 'next/image';

const products = [
  { id: 1, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/1.png" },
  { id: 2, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/2.png" },
  { id: 3, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/3.png" },
  { id: 4, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/4.png" },
  { id: 5, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/5.png" },
  { id: 6, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/6.png" },
  { id: 7, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/7.png" },
  { id: 8, title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", image: "/images/8.png" },
 
];

const  BestProducts =() => {
    return (
        <div className="lg:py-8  lg:px-32 py-6 px-9">
           <div className='text-center space-y-2'>
            <h2 className="text-xl text-mygray">Featured Products</h2>
            <h3 className="text-2xl font-bold ">BESTSELLER PRODUCTS</h3>
            <p className='text-sm tracking-wider text-mygray'>Problems trying to resolve the conflict between</p>
          </div>
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
      );
}
export default BestProducts;
