"use client"; // For Next.js App Router (if using Client Component)
import Image from "next/image";

const imageUrls = [
  "/images/cover-5.png",
  "/images/cover-5 (1).png",
  "/images/cover-5 (2).png",
  "/images/cover-5 (3).png",
  "/images/cover-5 (4).png",
  "/images/-cover-5.png",
  "/images/cover-5 (5).png",
  "/images/cover-5 (6).png",
];

const commonData = {
  title: "Graphic Design",
  department: "English Department",
  oldPrice: "$16.48",
  newPrice: "$6.48",
};

export default function ProductGrid() {
  const products = imageUrls.map((imgSrc) => ({
    ...commonData,
    imgSrc,
  }));

  return (
    <section className="px-8 md:px-12 lg:px-32 lg:mt-24 mt-9 pt-12 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">BESTSELLER PRODUCTS</h2>
      <hr  className="mt-6 mb-6"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white lg:w-[239px] lg:h-[442px] overflow-hidden"
          >
            <div className="relative h-[280px]">
              <Image
                src={product.imgSrc}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-[10px] ml-3">
              <h3 className=" font-bold">{product.title}</h3>
              <p className="text-gray-500">{product.department}</p>
              <div className="mt-2">
                <span className="line-through text-gray-400 mr-2">
                  {product.oldPrice}
                </span>
                <span className="text-green-500 font-bold text-viradian">
                  {product.newPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
