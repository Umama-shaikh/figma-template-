import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PricingTable from "@/components/pricing";
import BigCompany from "@/components/big-companies";
import PricingFAQs from "@/components/pricing-faqs";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Pricing(){
    return(
        <div>
            <div className="text-center space-y-4 mt-24">
                <p className="font-semibold tracking-wider text-mygray">PRICING</p>
                <h2 className="font-bold lg:text-[58px] text-[40px] lg:tracking-wider">Simple Pricing</h2>
                <div className="flex gap-[15px] items-center justify-center">
                    <p className="font-bold text-sm">Home</p>
                    <span><MdOutlineKeyboardArrowRight size={20} className="text-gray-400 "/></span>
                    <p className="text-mygray font-bold text-sm">Pricing</p>
                </div>
            </div>

            {/* pricing cards */}
            <div>
                <PricingTable/>
            </div>

            {/* big companies logo */}
            <div className="bg-gray-100">
                <h6 className="text-xl tracking-wider text-center pt-24 text-slate-700">Trusted By Over 4000 Big Companies</h6>
                <BigCompany/>
            </div>

             {/* Pricing FAQs */}
            <div className="mt-32 ">
                 <div className="lg:text-center flex flex-col items-center">
                    <h2 className="text-[40px] font-bold lg:tracking-wider text-center ">Pricing FAQs</h2>
                    <p className="mt-2 text-xl tracking-wider  text-mygray lg:w-[552px] lg:h-[60px] px-5 lg:px-0 text-center ">
                    Problems trying to resolve the conflict between 
                    the two major realms of Classical physics</p>
                 </div>
                 {/* questions */}
                 <div className="lg:flex lg:justify-center lg:gap-36 mt-32 px-8 lg:px-0">
                    <div className="space-y-11">
                        <PricingFAQs/>
                        <PricingFAQs/>
                        <PricingFAQs/>
                    </div>
                    <div className="space-y-11 mt-10 lg:mt-0">
                        <PricingFAQs/>
                        <PricingFAQs/>
                        <PricingFAQs/>
                    </div>
                 </div>
                 <div><h6 className="text-mygray text-xl text-center mt-20 px-5 lg:px-0">Haven’t got your answer? Contact our support</h6></div>
            </div>

            {/* free trial section */}
            <div className="mt-48 mb-12">
                <div className="lg:text-center flex flex-col items-center space-y-8">
                        <h2 className="text-[40px] font-bold lg:tracking-wider text-center ">Start your 14 days free trial</h2>
                        <p className="mt-2 text-sm tracking-wider  text-mygray lg:w-[552px] lg:h-[60px] px-5 lg:px-0 text-center ">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.RELIT official consequent.</p>
                        <button className="bg-myblue text-white font-bold text-sm rounded-md px-[40px] py-[15px]">Try it free now</button>
                        <div className="flex gap-[34px] ">
                            <TiSocialTwitter  size={30} className="text-myblue"/>
                            <FaFacebook size={30} className="text-blue-950"/>
                            <FaInstagram  size={30} className="text-pink-600"/>
                            <FaLinkedin size={30} className="text-blue-800" />
                         </div>
                 </div>
            </div>
        </div>
    )
}