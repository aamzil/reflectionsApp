import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, handleShow] = useState(false);

  // a function to handle the navbar on scroll (show the background)
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // calling the function on mount and listening to the scroll event + removing the eventListener for better app performance
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div
      className={`transition-all ease-in flex justify-between p-5 z-10 items-center fixed w-[100%] ${
        show && "bg-slate-50 shadow-md"
      }`}
    >
      <div className="text-2xl font-medium list-none">
        <Link to="/">
          <a className="  font-plus text-amber-900 font-semibold">
            Reflect<span className=" font-light text-black">/ions</span>{" "}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
