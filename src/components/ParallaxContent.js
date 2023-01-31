import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import parallax2 from "../img/pexels2.jpg";
//?Import Parallax
import { Parallax } from "react-parallax";
const parallaxStyle = {
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%,-50%)",
};
const ParallaxContent = () => {
  return (
    <Parallax className="sm:hidden md:block" bgImage={parallax2} strength={500}>
      <div className="h-96">
        <div style={parallaxStyle}>
          <p className="text-3xl text-black font-bold tracking-widest mb-4">
            Suscribe to our newsletter
          </p>
          <form className="items-center absolute left-1/4">
            <input
              className=" p-2 rounded focus:outline-none"
              type="email"
              placeholder="Example@youremail.com"
            ></input>
            <FontAwesomeIcon
              className="text-white text-2xl rounded-2xl p-1 cursor-pointer -mb-1"
              icon={faPaperPlane}
            />
          </form>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxContent;
