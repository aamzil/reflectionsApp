import React from "react";
import { useState } from "react";

function VideoGrid({ videos, title }) {
  const [open, Setopen] = useState(false);
  const [selectedVideo, SetselectedVideo] = useState(true);

  const openModal = () => {
    Setopen(true);
  };

  const closeModal = (e) => {
    if (e.target.id === "wrapper") Setopen(false);
  };

  const fetchclicked = async (id) => {
    const response = await fetch(`https://api.pexels.com/videos/videos/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: import.meta.env.VITE_KEY,
      },
    });
    const data = await response.json();
    SetselectedVideo(data);
    openModal();
  };

  return (
    <div>
      <section className="overflow-auto">
        <h1 className="px-5  text-2xl text-neutral-700  font-sfpro font-medium  ">
          {title}{" "}
        </h1>

        {videos?.videos ? (
          <div
            className={`transition ease-in-out duration-1000 p-5 ${
              videos?.length == 1 ? "sm:columns-1" : "sm:columns-3"
            }`}
          >
            {videos.videos.map((video) => (
              <>
                <div key={video?.id} className="">
                  <img
                    onClick={() => fetchclicked(video?.id)}
                    className={`mb-3 w-[100%] rounded-sm cursor-pointer block hover:opacity-80 transition duration-500 ease-in-out`}
                    src={video?.image}
                  />
                </div>
              </>
            ))}
          </div>
        ) : (
          <div className="">
            <h1 className=" p-5 font-plus font-semibold text-3xl">
              We couldn’t find anything for now <br />
              Try to refine your search.
            </h1>
          </div>
        )}
      </section>

      <div
        id="wrapper"
        onClick={closeModal}
        className={`${
          !open ? "hidden" : "flex"
        } w-[100%] h-[100vh] bg-black bg-opacity-80 fixed top-0 left-0 z-10 justify-center items-center`}
      >
        <div className="max-w-[1000px] bg-slate-50 w-[100%] p-5 rounded-xl mx-5">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="font-semibold font-poppins text-xl text-amber-700">
                <a href={selectedVideo?.user?.url} target="_blank">
                  {selectedVideo?.user?.name}
                </a>
              </h1>
              <p className={`font-sfpro`}>Verified User</p>
            </div>

            <div className="">
              <a href={selectedVideo?.url} target="_blank">
                <button className="px-5 py-3 rounded-xl text-slate-50 font-sfpro bg-amber-700">
                  Free Download
                </button>
              </a>
            </div>
          </div>

          <div className="pt-5">
            <video src="" width={"1280px"} height={"720px"} autoPlay controls>
              <source src="" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoGrid;
