import Image from "next/image";

const EditorsPick = () =>{
    return(
        <section>
            <div className="md:pt-6 md:h-[770px] bg-gray-50 mb-16 md:mb-0 mt-12 md:mt-0 px-8">
                <div className="space-y-4 text-center mb-20 ">
                    <h2 className="font-bold text-2xl tracking-wider">EDITOR’S PICK</h2>
                    <p className="text-sm tracking-wider text-mygray">Problems trying to resolve the conflict between </p>
                </div>
               {/* images div */}
                <div className="md:flex md:gap-8 md:justify-center space-y-4 lg:space-y-0">
                    <div className="relative">
                        <Image src="/images/men.png" alt="men" width={510} height={500} ></Image>
                        <button className="bg-white text-darkblue font-bold w-[170px] h-12 absolute bottom-8 left-4">MEN</button>
                    </div>
                    <div  className="relative">
                        <Image src="/images/women.png" alt="men" width={239} height={500}></Image>
                        <button className="bg-white text-darkblue font-bold w-[170px] h-14 absolute bottom-4 left-4">WOMEN</button>
                    </div>
                    <div className="md:flex md:flex-col md:gap-4 space-y-4 md:space-y-0">
                        <div className="relative">
                            <Image src="/images/asseccories.png" alt="men" width={239} height={242}></Image>
                            <button className="bg-white text-darkblue font-bold w-[170px] h-12 absolute bottom-4 left-4">ACCESSORIES</button>
                        </div>
                        <div className="relative">
                            <Image src="/images/kids.png" alt="men" width={239} height={242} ></Image>
                            <button className="bg-white text-darkblue font-bold w-[170px] h-12 absolute bottom-4 left-4">KIDS</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditorsPick;
