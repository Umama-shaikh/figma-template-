import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-blue-500">
      {/* Mobile Image */}
      <div className="relative block lg:hidden w-full h-96 mt-9">
        <Image
          src="/images/product-slide-1.jpg" 
          alt="New Collection Mobile"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-base font-bold mb-2">SUMMER 2020</h1>
          <h2 className="text-4xl font-bold mb-4 mt-7">NEW COLLECTION</h2>
          <p className="text-base mb-6 mt-4 font-thin">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className='bg-green text-lg tracking-wider py-3 px-5'> <Link href="#">
          SHOP NOW</Link></button>
        </div>
      </div>

      {/* Desktop Image */}
      <div className="relative hidden lg:block mb-11 w-full h-[716px]">
        <Image
          src="/images/carousel-inner.png" 
          alt="New Collection Desktop"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col mt-40 ml-40 text-white px-16">
          <h1 className="text-basel font-bold leading-6 tracking-wider">SUMMER 2020</h1>
          <h2 className="text-5xl font-bold mt-12 tracking-widest">NEW COLLECTION</h2>
          <p className="text-xl mt-12 leading-8">
            We know how large objects will act, <br /> but things on a small scale.
          </p>
          <button className='bg-green w-[228px] h-16 mt-12 text-2xl font-semibold tracking-wider'> <Link href="#">
          SHOP NOW</Link></button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
