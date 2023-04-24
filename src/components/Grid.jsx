import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Grid({ media, title }) {
  const [photos, Setphotos] = useState(null);
  const [open, Setopen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchclicked = async (id) => {
    const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: import.meta.env.VITE_KEY,
      },
    });

    const data = await response.json();
    Setphotos(data);
    openModal();
  };

  const openModal = () => {
    Setopen(true);
  };

  const closeModal = (e) => {
    if (e.target.id === "wrapper") Setopen(false);
  };

  console.log(photos);

  return (
    <div>
      <section className="overflow-auto">
        <h1 className="px-5 text-2xl text-neutral-700 font-sfpro font-medium  ">
          {title}{" "}
        </h1>

        {media?.photos?.length > 0 ? (
          <div
            className={`transition ease-in-out duration-1000 p-5 ${
              media?.photos?.length == 1 ? "sm:columns-1" : "sm:columns-3"
            }`}
          >
            {media.photos.map((photo) => (
              <>
                <div key={media?.photos?.id} className="">
                  <Link to={""}>
                    <img
                      onClick={() => fetchclicked(photo?.id)}
                      key={media?.photos?.id}
                      className=" mb-3 w-[100%] rounded-sm  block hover:opacity-90 transition duration-300 ease-in-out "
                      src={photo?.src?.portrait}
                    />
                  </Link>
                  {/* <li className=" bg-neutral-300 list-none text-center absolute flex -my-20 mx-5 rounded-md p-3 hover:bg-neutral-200 transition-all ease-in duration-200">
                    <a href={photo?.url} target="_blank">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                    </a>
                  </li> */}
                </div>
              </>
            ))}
          </div>
        ) : (
          <h1 className=" p-5 font-plus font-semibold text-3xl">
            We couldn’t find anything for now <br />
            Try to refine your search.
          </h1>
        )}
      </section>

      <div
        id="wrapper"
        onClick={closeModal}
        className={`${
          !open ? "hidden" : "flex"
        } w-[100%] h-[100vh] bg-black bg-opacity-80 fixed top-0 left-0 z-10 justify-center items-center`}
      >
        <div className="max-w-[1000px] bg-slate-50 w-[100%] p-5 rounded-xl mx-5 border-b-2 border-black">
          <div className="flex justify-between items-center">
            <div className="">
              <h1 className="font-semibold font-poppins text-xl">
                <a href={photos?.photographer_url} target="_blank">
                  {photos?.photographer}
                </a>
              </h1>
              <p className={`font-sfpro`} style={{ color: photos?.avg_color }}>
                Verified User
              </p>
            </div>

            <div className="">
              <a href={photos?.url} target="_blank">
                <button
                  className="px-5 py-3 rounded-xl text-slate-50 font-sfpro"
                  style={{ backgroundColor: photos?.avg_color }}
                >
                  Free Download
                </button>
              </a>
            </div>
          </div>

          <div className="pt-5">
            <img
              className="lg:w-[30%] ml-auto mr-auto md:w-[40%] w-[70%]"
              src={photos?.src?.portrait}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
