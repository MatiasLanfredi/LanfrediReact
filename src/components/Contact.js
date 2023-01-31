import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div
      id="contact"
      className="container max-w-5xl mx-auto m-10 flex flex-row relative overflow-hidden "
    >
      {/* contact header */}
      <div className="imagen h-96 p-1 bg-amber-500 w-1/4 overflow-hidden relative z-10 flex flex-col justify-around">
        <div className=" bg-orange-300 rounded-full w-24 h-24 absolute -z-10 bottom-12 left-52 overflow-hidden opacity-95 "></div>
        <div className=" bg-yellow-300 rounded-full w-52 h-48 absolute -z-10 -bottom-16 lg:left-64 md:left-52 sm:left-48 overflow-hidden opacity-40 "></div>
        <div className=" bg-yellow-200 rounded-full w-12 h-12 absolute -z-10 -bottom-4 -left-5 overflow-hidden "></div>

        <h5 className="text-center font-bold text-xl uppercase">Contact us</h5>
        <div className="flex flex-col ">
          <p className="font-semibold text-center">
            Do you have a trouble with a purchase?
          </p>
          <a
            className=" text-center text-blue-600 font-bold underline underline-offset-2"
            href="https://www.google.com/"
          >
            Contact Support
          </a>
        </div>
        <div className="text-center font-medium gap-2 flex flex-col">
          <p className="text-sm">Argentina sales</p>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <span className="text-m">+54 9 1122334455</span>
          </div>

          <p className="font-light">For other countries fill the form</p>
          <div className="flex self-center gap-4">
            <FontAwesomeIcon
              className=" cursor-pointer  hover:text-white duration-300 "
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className=" cursor-pointer  hover:text-white transition-all "
              icon={faFacebookF}
            />
          </div>
        </div>
      </div>
      {/* contact form */}
      <div className="forms h-96 bg-orange-500 w-3/4 p-12 flex flex-col">
        <form className="mt-8 flex flex-col gap-7">
          <div className=" flex justify-around ">
            <div className=" flex flex-col">
              <label>First Name</label>
              <input
                className="w-max rounded-full p-1"
                type="text"
                placeholder="First name"
              ></input>
            </div>
            <div className=" flex flex-col">
              <label>Last Name</label>
              <input
                className="w-max rounded-full p-1"
                type="text"
                placeholder="Last name"
              ></input>
            </div>
          </div>
          <div className=" flex justify-around ">
            <div className=" flex flex-col">
              <label>Email</label>
              <input
                className="w-max rounded-full p-1"
                type="email"
                placeholder="you@youremail.com"
              ></input>
            </div>
            <div className=" flex flex-col">
              <label>Phone</label>
              <input
                className="w-max rounded-full p-1"
                type="text"
                placeholder="Your phone"
              ></input>
            </div>
          </div>
          <div className=" flex justify-around ">
            <div className=" flex flex-col -ml-2 w-48">
              <label>Trouble</label>
              <select>
                <option value={"Cambio"}>Cambio</option>
                <option value={"asdassd"}>asdassd</option>
                <option value={"adasd"}>adasd</option>
                <option value={"cvbcvb"}>cvbcvb</option>
                <option value={"Other"}>Other</option>
              </select>
            </div>
            <div className=" flex flex-col -ml-2  w-48">
              <label>Country</label>
              <select>
                <option value={"Argentina"}>Argentina</option>
                <option value={"Chile"}>Chile</option>
                <option value={"Uruguay"}>Uruguay</option>
                <option value={"Peru"}>Peru</option>
                <option value={"Other"}>Other</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
