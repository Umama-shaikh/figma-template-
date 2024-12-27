import { FaHooli,  FaLyft, FaDiscord,  FaAws, FaStripe } from "react-icons/fa";

const BigCompany = () => {
    return(
        <section>
            <div className=" px-28 lg:flex text-mygray gap-8 lg:justify-between lg:px-[195px] lg:h-[175px] bg-gray-100 lg:py-10 lg:mb-8">
                <div>
                    <FaHooli size={130}/>
                </div>

                <div className="">
                    <FaLyft size={90}/>
                </div>

                <div>
                    <FaStripe size={100}/>
                </div>

                <div>
                    <FaAws size={100}/>
                </div>

                <div>
                    <FaDiscord size={100}/>
                </div>
            </div>
        </section>
    )
}
export default BigCompany;