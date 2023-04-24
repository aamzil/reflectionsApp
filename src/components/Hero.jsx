import React from "react";
import { useState } from "react";
import Grid from "./Grid";
import Navbar from "./Navbar";

function Hero() {
  const [search, Setsearch] = useState(null);

  const [photos, Setphotos] = useState(null);

  const fetchSearch = async () => {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${search}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: import.meta.env.VITE_KEY,
        },
      }
    );

    const data = await response.json();
    Setphotos(data.photos);
  };

  return (
    <div>
      <div className="w-screen h-[100vh] bg-green-200">
        <Navbar />
        <div className="p-4">
          <div className=" text-zinc-900 p-10 rounded-2xl shadow-2xl bg-zinc-200 bg-opacity-90 sm:max-w-5xl ml-auto mr-auto ">
            <div className="">
              <h1 className="text-5xl font-medium sm:text-7xl">Reflections</h1>
              <p className="text-lg font-normal mt-2 sm:text-xl">
                The best free stock photos, royalty free images shared by
                creators.
              </p>
            </div>

            <div className="flex gap-2 justify-around mt-5 items-center">
              <input
                onChange={(e) => Setsearch(e.target.value)}
                className="p-4 rounded-lg outline-none w-[100%]"
                type="text"
                name=""
                id=""
                placeholder="Search free high-resolution photos..."
              />
              <button className="bg-zinc-100 p-4 px-8 rounded-xl hover:bg-zinc-300 ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <Grid />
    </div>
  );
}

export default Hero;
