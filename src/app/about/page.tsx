
import AboutBanner from "@/components/about-banner"
import AboutLastBanner from "@/components/about-last-banner"
import BigCompany from "@/components/big-companies"
import Image from "next/image"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { TiSocialTwitter } from "react-icons/ti"

export default function About(){
    return(
        <div>
            {/* about hero section */}
            <div>
                <AboutBanner/>
            </div>
            {/* text that is below about hero section */}
            <div className="md:h-[236px] md:flex md:justify-around gap-16 text-center md:text-left">
                <div className="space-y-6 md:ml-5 mt-24 md:mt-0">
                    <p className="text-sm text-red-500">Problems trying</p>
                    <div className="md:w-[394px] md:h-[96px]">
                        <p className="font-bold text-2xl tracking-wider px-4 md:px-0">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                    </div>
                </div>
                <div className="md:w-[529px] h-[40px] mt-12">
                    <p className="text-sm text-mygray tracking-wider text-left mx-4 md:mx-0">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>

            {/* more down */}
            <div className="md:flex md:justify-around mt-24 md:mt-0 space-y-10  md:space-y-0">
                 <div>
                    <h2 className="font-bold text-[58px] text-center">15K</h2>
                    <p className="font-bold text-mygray mt-3 tracking-widest text-center md:text-left ">Happy Customers</p>
                 </div>
                 <div>
                    <h2 className="font-bold text-[58px] text-center">150K</h2>
                    <p className="font-bold text-mygray mt-3 tracking-widest  text-center md:text-left ">Monthly Visitors</p>
                 </div>
                 <div>
                    <h2 className="font-bold text-[58px] text-center">15</h2>
                    <p className="font-bold text-mygray mt-3 tracking-widest text-center md:text-left ">Countries  Worldwide</p>
                 </div>
                 <div>
                    <h2 className="font-bold text-[58px] text-center">100+</h2>
                    <p className="font-bold text-mygray mt-3 tracking-widest  text-center md:text-left ">Top Partners</p>
                 </div>
            </div>

            {/* video card */}

            <div className="flex flex-col items-center mt-32 px-9 lg:px-0">
                <Image src="/images/Video card.png" alt="video" width={989} height={540}></Image>
            </div>

            {/* Meet Our Team */}

            <div className="mt-36">
                <div className="flex flex-col items-center space-y-3">
                    <h2 className="font-bold text-[40px] leading-10  tracking-wider md:w-[324px] md:h-[50px] w-[302px] h-[100px] text-center">Meet Our Team</h2>
                    <p className="md:w-[463px] md:h-[40xp] text-center text-sm text-mygray w-[302px] h-[80px]">Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <div className="md:flex md:justify-center gap-[30px] md:mt-20 px-12 md:px-3 space-y-5 md:space-y-0 mt-5">
                    {/* first card */}
                    <div className="text-center">
                        <Image src="/images/media.jpg" alt="women" width={316} height={231}></Image>
                        <p className="font-bold mt-5">Username</p>
                        <p className="text-mygray font-bold mt-3">Profession</p>
                        <div className="flex gap-5 mt-4 lg:mt-5 justify-center text-myblue ">
                            <FaFacebook size={22}/>
                            <FaInstagram  size={22}/>
                            <TiSocialTwitter  size={22}/>
                        </div>
                    </div>
                     {/* second card */}
                     <div className="text-center">
                        <Image src="/images/media (1).jpg" alt="women" width={316} height={231}></Image>
                        <p className="font-bold mt-5">Username</p>
                        <p className="text-mygray font-bold mt-3">Profession</p>
                        <div className="flex gap-5 mt-4 lg:mt-5 justify-center text-myblue ">
                            <FaFacebook size={22}/>
                            <FaInstagram  size={22}/>
                            <TiSocialTwitter  size={22}/>
                        </div>
                    </div>
                     {/* third card */}
                     <div className="text-center">
                        <Image src="/images/media (2).jpg" alt="women" width={316} height={231}></Image>
                        <p className="font-bold mt-5">Username</p>
                        <p className="text-mygray font-bold mt-3">Profession</p>
                        <div className="flex gap-5 mt-4 lg:mt-5 justify-center text-myblue ">
                            <FaFacebook size={22}/>
                            <FaInstagram  size={22}/>
                            <TiSocialTwitter  size={22}/>
                        </div>
                    </div>
                </div>
            </div>

            {/* big companies are here */}
            <div className="mt-32 md:h-[479px] bg-gray-100">
                 <div className="flex flex-col items-center space-y-3  py-6">
                    <h2 className="font-bold text-[40px] leading-10  tracking-wider md:w-[517px] md:h-[50px] w-[302px] h-[100px] text-center">Big Companies Are Here</h2>
                    <p className="md:w-[463px] md:h-[40xp] text-center text-sm text-mygray w-[302px] h-[80px] pt-6 md:pt-0">Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <BigCompany/>
            </div>

            {/* about last banner */}
            <div>
                <AboutLastBanner/>
            </div>
        </div>
    )
}