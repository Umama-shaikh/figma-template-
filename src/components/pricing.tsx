
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 mt-14">
      <div className=" text-center">
        <h2 className="text-[40px] font-bold text-gray-800 tracking-wider">Pricing</h2>
        <p className="mt-4 text-gray-600 lg:w-[463px] mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mt-8">
          <span className=" mr-4 font-bold">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white rounded-full border border-myblue peer peer-checked:bg-blue-500"></div>
            <span className="absolute left-1 top-1 bg-gray-300 w-4 h-4 rounded-full  peer-checked:translate-x-5 transition-transform"></span>
          </label>
          <span className=" ml-4 font-bold">Yearly</span>
          <span className="text-sm text-myblue bg-skyblue font-bold rounded-full px-2 py-2 lg:px-4 lg:py-3 lg:ml-5 ml-3">Save 25%</span>
        </div>

        {/* Pricing Cards */}
        <div className="lg:mt-28 mt-8 lg:flex lg:justify-center gap-2">
          {/* Free Plan */}
          <div className="bg-white border space-y-[35px] border-myblue lg:rounded-lg px-10 py-[50px] shadow-md lg:w-[327px] lg:h-[664px]">
            <h3 className="text-2xl font-bold text-gray-800 tracking-wider">FREE</h3>
            <p className=" font-bold tracking-wider text-mygray px-6">
              Organize across all apps by hand
            </p>
            <h4 className=" text-[40px] font-bold text-myblue">$0 <sub className="font-bold text-sm">Per Month</sub></h4>
            <ul className=" space-y-4 text-left">
              {[
                "Unlimited product updates",
                "Unlimited product updates",
                "Unlimited product updates",
                "1GB Cloud storage",
                "Email and community support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-mygray font-bold text-sm">
                  <FaCheck className="text-green mr-2" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-darkblue text-white font-bold text-sm py-[15px] px-10 rounded-sm hover:bg-blue-600">
              Try for free
            </button>
          </div>

          {/* Standard Plan */}
          <div className="lg:-mt-14 mt-9 bg-darkblue space-y-[35px] lg:w-[327px] lg:h-[704px] text-white lg:rounded-lg px-10 py-[70px] shadow-md lg:transform lg:scale-105 ">
            <h3 className="text-2xl font-bold text-white tracking-wider">STANDARD</h3>
            <p className="font-bold tracking-wider text-white px-6">Organize across all apps by hand</p>
            <h4 className="text-[40px] font-bold text-myblue">$9.99<sub className="font-bold text-sm">Per Month</sub></h4>
            <ul className="mt-6 space-y-4 text-left">
              {[
                "Unlimited product updates",
                "Unlimited product updates",
                "Unlimited product updates",
                "1GB Cloud storage",
                "Email and community support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-white font-bold text-sm">
                  <FaCheck className="text-green mr-2" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-myblue text-white font-bold text-sm py-[15px] px-10 rounded-sm hover:bg-blue-600">
              Try for free
            </button>
          </div>

          {/* Premium Plan */}
          <div className="mt-9 lg:mt-0 bg-white border space-y-[35px] border-myblue lg:rounded-lg p-6 shadow-md px-10 py-[50px] lg:w-[327px] lg:h-[664px]">
            <h3 className="text-2xl font-bold text-gray-800 tracking-wider">PREMIUM</h3>
            <p className="font-bold tracking-wider text-mygray px-6">
              Organize across all apps by hand
            </p>
            <h4 className=" text-[40px] font-bold text-myblue">$19.99 <sub className="font-bold text-sm">Per Month</sub></h4>
            <ul className=" space-y-4 text-left">
              {[
                "Unlimited product updates",
                "Unlimited product updates",
                "Unlimited product updates",
                "1GB Cloud storage",
                "Email and community support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-mygray font-bold text-sm">
                  <FaCheck className="text-green mr-2" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-darkblue text-white font-bold text-sm py-[15px] px-10 rounded-sm hover:bg-blue-600">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
