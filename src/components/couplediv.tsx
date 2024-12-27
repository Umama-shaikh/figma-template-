import Image from "next/image";

const CoupleDiv = () =>{
    return(
        <section >
            <div className="lg:flex lg:gap-24 lg:justify-center text-center lg:text-left  flex flex-col-reverse lg:flex-row mt-16 lg:mt-0">
                <div className="lg:mt-0 mt-8">
                    <Image src="/images/couple.png" alt="couple" width={600} height={600}></Image>
                </div>
                <div className="lg:mt-[178px] lg:ml-14 px-6 lg:px-0">
                    <p className="font-bold text-base leading-6 tracking-wider text-mygray">SUMMER 2020</p>
                    <h3 className="font-bold text-[40px] leading-10 tracking-wider mt-9">Part of the Neural  <br />
                    Universe</h3>
                    <p className="text-xl leading-8 text-mygray mt-9 px-4 lg:px-0">We know how large objects will act, <br />
                    but things on a small scale.</p>
                    {/* buttons div */}
                    <div className="lg:flex lg:gap-2 mt-11 ">
                        <button className="bg-myblue lg:bg-green lg:hover:bg-viradian w-[156px] h-[52px] px-10 py-[15px] rounded-[5px] text-white font-bold text-sm"> BUY NOW</button>
                        <button className="mt-2 lg:mt-0 w-[173px] h-[52px] px-10 py-[15px] rounded-[5px] text-myblue lg:text-green lg:hover:text-viradian font-bold text-sm border border-myblue lg:border-green">READ MORE</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CoupleDiv;