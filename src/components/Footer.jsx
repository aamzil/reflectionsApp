import React from "react";

function Footer() {
  return (
    <div className="grid md:flex flex-1 justify-between p-14 bg-neutral-200 gap-16 ">
      <div className="md:flex-[0.5] flex-1">
        <h1 className="font-poppins text-2xl text-amber-900 font-semibold ">
          Reflections
        </h1>
        <p className="font-sfpro pt-4 text-lg">
          Reflections is a responsive web application of stock photography and
          footage. It maintains a library with over 3.2 million free stock
          photos and videos using the pexels API. With a built-in search engine,
          you can view and download your desired photo or video from the
          official Pexels website.
        </p>
      </div>

      <div className="list-none font-plus flex-1 md:flex-[0.2]  ">
        <h1 className="font-poppins text-2xl text-amber-900 font-semibold  ">
          Technologies
        </h1>
        <div className="text-lg font-sfpro">
          <p className="pt-4">React JS</p>
          <p>Tailwind CSS</p>
          <p>React Router</p>
          <p>Pexels API</p>
        </div>
      </div>

      <div className="list-none font-plus flex-1 md:flex-[0.3]">
        <h1 className="text-amber-900 font-poppins text-2xl font-semibold ">
          About
        </h1>
        <p className="text-lg pt-4 font-sfpro">
          Ayoub Amzil a Junior Web Developer based in Rabat, Morocco. Seeking an
          opportunity to extend my web development skills and knowledge.{" "}
        </p>
        <button className="font-sfpro  mt-4 p-3 px-10 rounded-3xl bg-amber-900 text-white hover:bg-opacity-95">
          {" "}
          <a
            href="https://mega.nz/file/QuJjCR7J#n69gKkVEWxU8JEL1iErKpbFwDkCOxhY2v8QVltFkXb0"
            target="_blank"
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default Footer;
