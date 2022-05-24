import React from "react";
import { Link } from "react-router-dom";
import CtaImage1 from "../../../images/banner1.png";
import CtaImage2 from "../../../images/banner2.png";

const CallToAction = () => {
  return (
    <div className="lg:px-8">
      <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 w-11/12 mx-auto text-center my-16">
        <h2 className="md:text-4xl text-2xl font-semibold mb-2 text-black mb-5">
          ALL KINDS OF PARTS THAT YOU NEED CAN FIND HERE
        </h2>
        <Link
          to="/"
          class="btn bg-yellow-600 border-0 hover:bg-stone-200 rounded-full px-8 uppercase duration-300 text-black"
        >
          Shop Now
        </Link>
      </div>
      <div className="bg-[url('https://i.ibb.co/PMV7MK3/bg-car.webp')] bg-cover md:h-[60vh] h-[60vh]"></div>
      <div className="flex my-16">
        <img className="w-8/12" src={CtaImage1} alt="" />
        <img className="w-8/12" src={CtaImage2} alt="" />
      </div>
    </div>
  );
};

export default CallToAction;
