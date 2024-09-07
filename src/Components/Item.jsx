import React, { useContext } from "react";
import UserProgressContext from "../Context/userProgressContext";
import { urlFor } from "../../lib/client.js";
import { useDispatch } from 'react-redux'
import { cartAction } from '../Store/cart.js'



export default function Item({ donut }) {
  const dispatch = useDispatch();
  const userProgressCtx = useContext(UserProgressContext);

  function handleAddToCart() {
    dispatch(cartAction.addItem(donut))
    userProgressCtx.hide()
  }
  return (
    <>
      <li className=" flex flex-col justify-between items-center w-[15em] md:w-[22em]  bg-offWhite text-brown pb-5 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center w-full gap-2 md:gap-3 p-3">
          <img
            src={urlFor(donut.image.asset).url()}
            alt={donut.name}
            className="w-full rounded-xl"
          />
          <span className="flex flex-row justify-between px-3 md:px-6 w-full  ">
            <p className="text-lg font-bold md:text-xl cursor-default">
              {donut.name}
            </p>
            <p className="text-md md:text-lg cursor-default font-semibold">
              {donut.price} LE
            </p>
          </span>
        </div>
        <button
          className="text-md md:text-lg px-4 py-2 text-xs rounded-xl bg-bgWhite  w-fit font-bold hover:text-bgWhite hover:bg-babyBlue ease-out duration-500"
          onClick={handleAddToCart}
        >
          Add to cart +
        </button>
      </li>
    </>
  );
}
