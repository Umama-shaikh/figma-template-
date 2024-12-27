import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { FaFacebook, FaInstagram } from "react-icons/fa";


const TopHeader = () => {
    return(
        <div className="hidden lg:block">
            <div className="flex justify-around bg-darkblue h-14 text-white py-5 font-bold text-sm">
                <div className="flex gap-11">
                    <div className="flex gap-1">
                        <FiPhone className="mt-1"/>
                        <p>(225) 555-0118</p>
                    </div>
                    <div className="flex gap-1">
                        <BsEnvelope className="mt-1"/>
                        <p>michelle.rivera@example.com</p>
                    </div>
                </div>
                <div>
                    <p>Follow Us  and get a chance to win 80% off</p>
                </div>
                <div>
                    <div className="flex gap-3">
                        <p>Follow us:</p>
                        <FaInstagram className="mt-1"/>
                        < FaFacebook className="mt-1"/>
                        <TiSocialYoutube className="mt-1"/>
                        <TiSocialTwitter className="mt-1"/>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopHeader