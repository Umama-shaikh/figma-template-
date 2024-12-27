import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="md:flex  items-center justify-center gap-16 p-6 lg:h-[598px] bg-gray-100">
      {/* Left Side - Image Carousel */}
      <div className="relative">
        {/* Main Image */}
        <div className="relative ">
          <Image
            src="/images/sofa-1.png" 
            alt="Floating sofa"
            width={506}
            height={450}/>
        </div>
        {/* Small Thumbnail Images */}
        <div className="flex gap-2 mt-3">
          <div className="w-[100px] h-[75px] relative">
            <Image
              src="/images/chair.jpg" 
              alt="Thumbnail 1"
              layout="fill"
              objectFit="cover"/>
          </div>
          <div className="w-[100px] h-[75px] relative">
            <Image
              src="/images/sofa-2.jpg" 
              alt="Thumbnail 2"
              layout="fill"
              objectFit="cover"/>
          </div>
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="lg:w-[510px] h-[471px]">
        {/* Product Title */}
        <h1 className=" md:text-xl tracking-wider">Floating Phone</h1>

        {/* Star Rating */}
        <div className="flex items-center space-x-1 mt-2">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-400 text-lg">★</span>
          ))}
          <span className="text-gray-500 text-sm">10 Reviews</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold mt-5">$1,139.33</p>
        <p className="text-sm text-green-500 font-bold">Availability: <span className="font-bold text-sm text-myblue">In Stock</span></p>

        {/* Product Description */}
        <p className="text-mygray text-sm lg:w-[445px] lg:h-[60px] tracking-wider mt-10 mb-5 w-[270px] h-[100px]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
        <hr className='text-mygray mb-8 '/>

        {/* Color Options */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-orange-500 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-green cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-gray-800 cursor-pointer"></div>
        </div>

        {/* Select Options Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition mt-6">
          Select Options
        </button>
      </div>
    </div>
  );
}
