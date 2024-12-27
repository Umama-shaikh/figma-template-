
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () =>{
    return(
        <footer>
            {/* above section of footer */}
            <div className="lg:flex lg:justify-between lg:px-28 text-myblue h-32  bg-gray-100 py-12 pl-9  lg:ml-0">
                <div>
                    <h1 className="font-bold text-2xl text-black">Bandage</h1>
                </div>
                <div className="flex gap-5 mt-4 lg:mt-0">
                    <FaFacebook size={22}/>
                    <FaInstagram  size={22}/>
                    <TiSocialTwitter  size={22}/>
                </div>
            </div>
            <hr className="mt-2 mb-2"/>

            {/* down setion of footter */}
            <div className="lg:flex lg:gap-8 lg:justify-around mt-5 ml-9 lg:ml mb-5 space-y-4 lg:space-y-0 cursor-pointer">
                 {/* company Info */}
                <div>
                    <h2 className="font-bold text-base">Company Info</h2>
                    <ul className="font-bold text-sm text-mygray space-y-2 mt-5">
                        <li className="hover:underline">About Us</li>
                        <li className="hover:underline">Carrier</li>
                        <li className="hover:underline">We are hiring</li>
                        <li className="hover:underline">Blog</li>
                    </ul>
                </div>

                {/* legal */}
                <div>
                    <h2 className="font-bold text-base">Legal</h2>
                    <ul className="font-bold text-sm text-mygray space-y-2 mt-5 ">
                        <li className="hover:underline">About Us</li>
                        <li className="hover:underline">Carrier</li>
                        <li className="hover:underline">We are hiring</li>
                        <li className="hover:underline">Blog</li>
                    </ul>
                </div>
                
                 {/* Features */}
                 <div>
                    <h2 className="font-bold text-base">Features</h2>
                    <ul className="font-bold text-sm text-mygray space-y-2 mt-5">
                        <li className="hover:underline">Business Marketing</li>
                        <li className="hover:underline">User Analytic</li>
                        <li  className="hover:underline">Live Chat</li>
                        <li  className="hover:underline">Unlimited Support</li>
                    </ul>
                </div>

                 {/* Resources */}
                 <div>
                    <h2 className="font-bold text-base">Resources</h2>
                    <ul className="font-bold text-sm text-mygray space-y-2 mt-5">
                        <li  className="hover:underline">IOS & Android</li>
                        <li  className="hover:underline">Watch a Demo</li>
                        <li  className="hover:underline">Customers</li>
                        <li  className="hover:underline">API</li>
                    </ul>
                </div>

                 {/* email seciton */}
                <div className="flex flex-col">
                    <h2 className="font-bold ">Get In Touch</h2>

                    <div className="flex pr-2 lg:pr-0">
                        <input type="text" placeholder="Your Email" className="w-[204px] h-14 bg-gray-50 border border-gray-400 py-3 pl-3 text-mygray text-sm mt-5 " />
                        <button className="w-[117px] h-14 text-white bg-myblue hover:bg-darkblue mt-5">Subscribe</button>
                    </div>
                    <p className="text-[12px] mt-2">Lore imp sum dolor Amit</p>
                </div>
            </div>
            <div className="bg-gray-100 h-16">
                <h2 className="font-bold text-sm ml-20 text-mygray py-5">Made With Love By Umama Shaikh All Right Reserved </h2>
            </div>

        </footer>
    )
}

export default Footer;