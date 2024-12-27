import Image from "next/image";

const AboutBanner = () =>{
    return(
        <section>
            <div className="md:flex md:h-[729px] md:justify-around ">
                {/* left side */}
                <div className="space-y-9 mt-28 md:ml-20 text-center md:text-left">
                    <h5 className=" hidden md:block font-bold tracking-wider  ">ABOUT COMPANY</h5>
                    <h2 className="font-bold md:text-5xl text-4xl tracking-wider">ABOUT US</h2>
                    <p className="text-xl font-thin md:tracking-wider px-11 lg:px-0 text-mygray">We know how large objects will act, <br className="hidden md:block"/>
                    but things on a small scale</p>
                    <div>
                        <button type="submit" className="bg-myblue hover:bg-sky-800 text-white px-10 py-4 rounded-md font-bold">Get Quote Now</button>
                    </div>
                </div>
                {/* right side */}
                <div className="mt-36 lg:mt-0 px-3">
                    <Image src="/images/none.png" alt="girl" width={632} height={612}></Image>
                </div>
            </div>
        </section>
    )
}
export default AboutBanner;