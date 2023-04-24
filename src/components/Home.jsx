import React from "react";
import Grid from "./Grid";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Navlinks from "./Navlinks";
import Footer from "./Footer";

function Heropage() {
  const [search, Setsearch] = useState("");

  const [media, SetMedia] = useState(null);

  // a function to fetch all photos on mount
  const fetchPhotos = async () => {
    const response = await fetch(
      `https://api.pexels.com/v1/curated?per_page=30`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: import.meta.env.VITE_KEY,
        },
      }
    );
    const data = await response.json();
    SetMedia(data);
  };

  // a function to fetch searched photos on enter click if no keyword entered then the trending photos will be shown
  const fetchSearch = async (e) => {
    if (e.key === "Enter" && search != "") {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${search}?per_page=30`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: import.meta.env.VITE_KEY,
          },
        }
      );
      const data = await response.json();
      SetMedia(data);
    } else {
      fetchPhotos();
    }
  };

  // urll: a function to store the fetch_url to the next and previous page on the urll variable after the pagination button click
  let urll = "";
  const fetchPage = async (type) => {
    if (media?.next_page && type === "next") {
      urll = media.next_page;
    } else if (media?.prev_page && type === "prev") {
      urll = media.prev_page;
    }

    const response = await fetch(urll, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: import.meta.env.VITE_KEY,
      },
    });
    const data = await response.json();
    SetMedia(data);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="h-[70vh] bg-cover bg-center bg-[url('http://wallpaperstock.net/sahara-desert_wallpapers_24658_1920x1080.jpg')] bg-cover bg-center">
        <div className="pt-28">
          <div className=" text-zinc-900 p-10 rounded-2xl sm:max-w-4xl ml-auto mr-auto ">
            <div className="">
              <h1 className="text-5xl font-semibold font-plus sm:text-7xl">
                Reflections
              </h1>
              <p className="text-lg mt-2 sm:text-xl font-sfpro">
                The best free stock photos, royalty free images and videos
                shared by creators.
              </p>
            </div>

            <div className="flex gap-2 justify-around mt-5 items-center font-sfpro">
              <input
                onKeyDown={fetchSearch}
                onChange={(e) => Setsearch(e.target.value)}
                className="p-4 rounded-lg outline-none w-[100%]"
                type="text"
                value={search}
                placeholder="Search free high-resolution photos..."
                required
              />
            </div>
          </div>
        </div>
      </section>

      <Navlinks />

      <Grid media={media} title="Free Stock Photos" />

      <div className=" flex pb-5 justify-between pl-5 mr-5 ">
        <button
          onClick={() => fetchPage("prev")}
          disabled={media?.page === 1}
          className="font-sfpro transition-all ease-in duration-200 px-10 py-3 bg-neutral-300 text-black rounded-lg hover:bg-opacity-90 "
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => fetchPage("next")}
          className=" font-sfpro transition-all ease-in duration-200 px-10 py-3 bg-neutral-300 text-black rounded-lg hover:bg-opacity-90"
        >
          {" "}
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Heropage;
