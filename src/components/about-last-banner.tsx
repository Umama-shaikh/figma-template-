import Image from "next/image";


const AboutLastBanner = () =>{
    return(
        <div>
            <div className="md:h-[636px] h-[520px] bg-cobalt md:flex md:justify-between text-center md:text-left">
                {/* left area */}
                <div className="flex flex-col gap-6  md:py-40 md:px-32 items-center md:items-start py-24 mt-28 md:mt-0  ">
                    <h5 className="font-bold text-white tracking-wider">WORK WITH US</h5>
                    <h2 className=" w-[274px] md:w-[456px] font-bold text-[40px] md:tracking-wider  text-white">Now Let’s grow Yours</h2>
                    <p className="text-sm md:w-[440px] h-[40px] w-[257px] text-white tracking-wider"> The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                    <button className="w-[132px] h-[52px] text-white font-bold text-sm border border-white  rounded-md mt-8 md:mt-0 hover:bg-white hover:text-darkblue ">Button</button>
                </div>
                {/* right area */}
                <div>
                     <Image src="/images/about-last-banner.png" alt="girl" width={590} height={640} className=" hidden md:block"></Image>
                </div>
            </div>
        </div>
    )
}

export default AboutLastBanner;