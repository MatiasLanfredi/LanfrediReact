import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState(false);

  const uploadMessage = async (e) => {
    e.preventDefault();

    const newMessage = {
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      message: message,
    };
    const queryRef = collection(db, "userMessages");
    await addDoc(queryRef, newMessage);
  };

  return (
    <div
      id="contact"
      className="container max-w-5xl mx-auto m-10 flex flex-row relative overflow-hidden "
    >
      {/* contact header */}
      <div className="imagen h-96 p-1 bg-fourth w-1/4 overflow-hidden relative z-10 flex flex-col justify-around">
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
      <div className="forms h-96 bg-gradient-to-l from-third  to-fourth w-3/4 p-12 flex flex-col">
        <form onSubmit={uploadMessage} className=" flex flex-col gap-7">
          <div className=" flex justify-around ">
            <div className=" flex flex-col">
              <label>First Name</label>
              <input
                className="w-max rounded-full p-1"
                type="text"
                placeholder="First name"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className=" flex flex-col">
              <label>Last Name</label>
              <input
                className="w-max rounded-full p-1"
                type="text"
                placeholder="Last name"
                onChange={(e) => setLastname(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className=" flex flex-col">
              <label>Phone</label>
              <input
                className="w-max rounded-full p-1"
                type="text"
                placeholder="Your phone"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <label>Leave your comment!</label>
            <textarea
              className="w-96 m-auto h-14 p-2 resize-none"
              rows={2}
              placeholder="your comment..."
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex m-auto mb-12 ">
            <motion.button
              whileTap={{ scale: 1.2 }}
              className="rounded-lg border-solid border-2 border-slate-50 p-1"
              type="submit"
            >
              Send message
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
