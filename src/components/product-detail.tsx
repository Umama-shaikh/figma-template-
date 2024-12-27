import Image from "next/image";

const ProductDescription = () => {
  return (
    <section className="mt-14">
      <div>
        {/* above side */}
          <div className="flex font-semibold text-sm text-mygray lg:gap-14 gap-2  justify-center">
              <h6>Description</h6>
              <h6>Additional Information</h6>
              <h6>Reviews (0)</h6>
          </div>
          <hr className="mt-8 mb-4 hidden md:block" />

          {/* down side */}
          <div className="lg:flex lg:justify-center lg:gap-[30px] mt-10">
            {/* left side */}
            <div className="px-5 lg:px-0">
              <Image src="/images/room.png" alt="room" width={316} height={372}></Image>
            </div>

            {/* middle side */}
            <div className="mt-11 lg:mt-0">
              <h4 className="font-bold text-2xl ml-4 lg:tracking-wider">the quick fox jumps over </h4>
              {/* paragraph div */}
              <div className="lg:w-[332px] lg:[340px] text-sm text-mygray space-y-3 mt-6 tracking-wide px-6">
                <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
              </div>
            </div>

            {/* right side */}
            <div className="space-y-6 px-4 lg:px-0 mt-8 lg:mt-0">
                {/* first list */}
                <div className="space-y-[30px] lg:w-[332px] lg:h-[188ppx]">
                  <h2 className="font-bold text-2xl  lg:tracking-wider">the quick fox jumps over</h2>
                  <ul className="text-mygray space-y-[10px] ">
                    <li>➤ the quick fox jumps over the lazy dog</li>
                    <li>➤ the quick fox jumps over the lazy dog</li>
                    <li>➤ the quick fox jumps over the lazy dog</li>
                    <li>➤ the quick fox jumps over the lazy dog</li>
                  </ul>
                </div>
                 {/* second list */}
                 <div className="space-y-[30px] lg:w-[332px] lg:h-[188ppx]">
                  <h2 className="font-bold text-2xl  lg:tracking-wider">the quick fox jumps over</h2>
                  <ul className="text-mygray space-y-[10px] ">
                    <li>➤ the quick fox jumps over the lazy dog</li>
                    <li>➤ the quick fox jumps over the lazy dog</li>
                    <li>➤ the quick fox jumps over the lazy dog</li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ProductDescription;
