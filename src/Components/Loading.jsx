import React from "react";
import { Link } from "react-router-dom";



export default function Done() {
  return(
    <>
      <main className="flex flex-col items-center justify-between h-dvh text-xl md:text-2xl  w-full  bg-bgWhite  shadow-lg  px-10 py-5 text-brown  ">
        <div className="w-full p-1 border-b-2  border-black flex justify-center">
          <Link
            to={".."}
            relative="path"
            className="text-md md:text-lg px-3 font-normal hover:text-babyBlue ease-out duration-500"
          >
            Go to Home
          </Link>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-babyBlue rounded-full text-brown"
            role="status"
          ></div>
          <span className="ml-3 text-brown text-lg">Loading...</span>
        </div>
        <div className="flex flex-col border-t-2   border-black w-full ">
          <div className="w-full p-1 border-y-2   border-black flex justify-center py-3">
            <p className="font-bold text-md md:text-lg  ">Thank you</p>
          </div>
        </div>
      </main>
    </>
  );
}
