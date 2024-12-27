import Image from "next/image";


const GreenDiv=() =>{
    return(
        <section>
            <div className="bg-viradian lg:flex lg:justify-around lg:h-[709px]  ">
                <div className="lg:mt-[178px] lg:ml-14 px-6 lg:px-0 text-center lg:text-left mt-20 pt-40 lg:pt-0">
                        <p className="text-xl font-thin leading-6 tracking-widest text-white">SUMMER 2020</p>
                        <h3 className="font-bold text-4xl lg:text-[58px] lg:leading-[80px] tracking-wider mt-8 text-white">Vita Classic <br />
                        Product</h3>
                        <p className="text-xl leading-8 text-white mt-9 px-4 lg:px-0">We know how large objects will act, <br />
                        but things on a small scale.</p>
                        {/* buttons div */}
                        <div className="lg:flex lg:gap-8 mt-11 ">
                            <p className="font-bold text-2xl text-white mt-2">$16.48</p>
                            <button className=" mt-9 lg:mt-0 w-[183px] h-[52px] px-10 py-[15px] rounded-[5px] bg-green font-bold text-sm border border-green text-white">ADD TO CART</button>
                        </div>
                 </div>
                 <div>
                    <Image src="/images/greendiv-man.png" alt="men" width={443} height={685} className="mt-28"></Image>
                 </div>
            </div>
        </section>
    )
}

export default GreenDiv;