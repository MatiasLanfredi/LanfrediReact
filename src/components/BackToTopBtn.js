import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import "../index.css";
function BackToTopBtn() {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        className={`${
          backToTopBtn
            ? "block animate-bounce bg-orange-500 p-2 rounded-full h-10 w-10 m-2 border-2 border-orange-900 fixed bottom-2 right-2 "
            : "hidden"
        }`}
        onClick={scrollUp}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}

export default BackToTopBtn;
//   `bg-orange-500 p-2 rounded-full h-10 w-10 m-2 border-2 border-orange-900 fixed bottom-2 right-2"`        }
