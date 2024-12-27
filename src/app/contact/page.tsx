import Image from "next/image"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { TiSocialTwitter } from "react-icons/ti"
import { BsTelephone } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
export default function Contact() {
    return(
        <div>
            {/* contace hero */}
            <div className="lg:flex lg:justify-between mt-24 lg:mt-0 text-center lg:text-left">
                {/* left side of the banner */}
                <div className="lg:space-y-[35px] lg:py-32 lg:px-36 space-y-[40px] flex flex-col items-center lg:items-start">
                    <h5 className="font-bold">CONTACT US</h5>
                    <h2 className="lg:w-[393px] lg:h-[160px] w-[331px] h-[100px] font-bold lg:text-[58px] text-[40px] tracking-wider">Get in touch today!</h2>
                    <p className="lg:w-[376px] lg:h-[60px] w-[274px] h-[120px] text-xl text-mygray tracking-wider">We know how large objects will act, 
                    but things on a small scale</p>
                    <h6 className="font-bold text-2xl">Phone ; +451 215 215 </h6>
                    <h6 className="font-bold text-2xl">Fax : +451 215 215</h6>
                    {/* icons */}
                    <div className="flex gap-[34px] ">
                        <TiSocialTwitter  size={30}/>
                        <FaFacebook size={30}/>
                        <FaInstagram  size={30}/>
                        <FaLinkedin size={30} />
                    </div>
                </div>
                {/* right side of the banner */}
                <div className="mt-24 lg:mt-0 px-6 lg:px-0  ">
                    <Image src="/images/contact-hero.png" alt="family-pic" width={632} height={612}></Image>
                </div>
            </div>

            {/* CONTACT CARDS */}
            <div className="lg:mt-36 mt-32 lg:h-[814px] h-[1531px] bg-gray-100 lg:bg-white pt-14 lg:pt-0">
                <div className="flex flex-col items-center">
                    <h6 className="font-bold text-sm">VISIT OUR OFFICE</h6>
                    <h2 className="lg:w-[555px] w-[290px] lg:h-[100px] font-bold text-[40px] lg:tracking-wider text-center ">We help small businesses with big ideas</h2>
                </div>
                {/* cards */}
                <div className="lg:flex  lg:justify-center lg:mt-[80px] mt-14 px-7 space-y-7 lg:space-y-0 ">
                    {/* 1st card */}
                    <div className="lg:w-[328px] lg:h-[343px]  h-[333px] lg:px-[40px] lg:py-[40px] py-[50px]  space-y-[15px] bg-white text-center">
                        <BsTelephone size={72} className="text-myblue mx-20"/>
                        <p>georgia.young@example.com</p>
                        <p>georgia.young@ple.com</p>
                        <h6>Get Support</h6>
                        <button type="submit" className="w-[193px] h-[54px] px-9 py-[15px] border border-myblue  rounded-full text-myblue">Submit Request</button>
                    </div>
                    {/* 2nd card */}
                    <div className="lg:w-[329px] lg:h-[403px] h-[393px] lg:px-[40px] lg:py-[40px] py-[50px] space-y-[15px] bg-darkblue text-center">
                        <IoLocationSharp size={72} className="text-myblue mx-[90px]"/>
                        <p className="text-white font-bold text-sm">georgia.young@example.com</p>
                        <p className="text-white">georgia.young@ple.com</p>
                        <h6 className="text-white font-bold">Get Support</h6>
                        <button type="submit" className="w-[193px] h-[54px] px-9 py-[15px] border border-myblue  rounded-full text-myblue">Submit Request</button>
                    </div>
                
                    {/* 3rd card */}
                    <div className="lg:w-[328px] lg:h-[343px] lg:px-[40px] lg:py-[40px] py-[50px] space-y-[15px] bg-white text-center">
                        <IoIosMail size={72} className="text-myblue mx-[90px]"/>
                        <p>georgia.young@example.com</p>
                        <p>georgia.young@ple.com</p>
                        <h6>Get Support</h6>
                        <button type="submit" className="w-[193px] h-[54px] px-9 py-[15px] border border-myblue  rounded-full text-myblue">Submit Request</button>
                    </div>
                </div>
            </div>

            {/* last section of Contact page */}
            <div className="flex flex-col gap-4 items-center text-center mb-16  mt-12 lg:mt-0">
                <div>
                    <Image src="/images/Arrow 2.png" alt="arrow" width={72.56} height={21.84}></Image>
                </div>
                <div className="space-y-4">
                    <p className="font-bold lg:tracking-wider">WE Can&apos;t WAIT TO MEET YOU</p>
                    <h2 className="font-bold text-[58px] lg:tracking-wider">Let&apos;s Talk</h2>
                    <button className="bg-myblue text-white font-bold text-sm rounded-md px-[40px] py-[15px]">Try it free now</button>
                </div>
            </div>
        </div>

    )
}