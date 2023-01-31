import React from "react";
//?Import Img for card
import imageCard from "../img/cardaboutus.jpg";
import wantCard from "../img/wantcard.jpg";
const Aboutus = () => {
  return (
    <div id="aboutus">
      {/*ABOUT SECTION*/}
      <div className="p-0 mb-5 bg-red-300 container mx-auto flex flex-col justify-between items-center md:flex-row lg:flex-row-reverse">
        <img
          className="h-auto object-cover object-center sm:w-full md:h-100 md:w-1/2 lg:w-3/5"
          src={imageCard}
          alt="ecommerce"
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
          <h1 className="text-gray-900 text-3xl title-font font-bold mb-1 sm:m-2 text-center">
            Who we are?
          </h1>
          <p className="marginStyle font-normal text-white items-center sm:m-2 text-center sm:pb-5">
            We are a new clothing brand that seeks to revolutionize fashionLorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p>
        </div>
      </div>
      {/* WEWANT */}
      <div className="p-0 mb-5 bg-red-300  container mx-auto flex flex-col justify-between items-center md:flex-row-reverse lg:flex-row">
        <img
          className="h-auto object-cover object-center sm:w-full md:h-100 md:w-1/2 lg:w-3/5"
          src={wantCard}
          alt="ecommerce"
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
          <h1 className="text-gray-900 text-3xl title-font font-bold mb-1 sm:m-2 text-center">
            Who we want?
          </h1>
          <p className="marginStyle font-normal text-white items-center sm:m-2 text-center sm:pb-5">
            We are a new clothing brand that seeks to revolutionize fashionLorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
