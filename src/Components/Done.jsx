import React , {useContext} from "react";
import UserProgressContext from "../Context/userProgressContext";

export default function Done() {
  const userProgressCtx = useContext(UserProgressContext);

  function handleClose() {
    userProgressCtx.hide();
  }
  return (
    <>
      <aside className="fixed top-0 right-0 flex flex-col items-center justify-between h-full w-[15em] md:w-[22em] bg-bgWhite  shadow-lg  px-3 py-5 text-brown ease-out duration-500 ">
        <div className="w-full p-1 border-b-2  border-black flex justify-center">
          <h1 className="font-semibold text-lg md:text-xl ">Done</h1>
        </div>
        <div className="w-full p-1  flex justify-center">
          <h1 className="font-semibold text-lg md:text-xl ">Have a good day </h1>
        </div>

        <div className="flex flex-col w-full ">
          <div className="w-full p-1 border-y-2   border-black flex justify-center py-3">
            <p className="font-bold text-md md:text-lg  ">Thank you</p>
          </div>
          <span className="flex flex-row w-full justify-evenly py-4 px-0">
            <button onClick={handleClose} className="text-md md:text-lg px-3">
              Close
            </button>
          </span>
        </div>
      </aside>
    </>
  );
}
