import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../Store/cart";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(cartAction.removeItem(item.id));
  }
  function handleAdd() {
    dispatch(cartAction.addItem(item));
  }
  return (
    <li className="flex flex-row w-full justify-between text-md md:text-xl">
      <p className="font-semibold  pt-1">{item.name}</p>
      <span className="flex flex-row gap-1 h-7 md:gap-6 text-xl md:text-2xl">
        <button
          onClick={handleRemove}
          className=" px-3 text-2xl font-semibold rounded-full  hover:text-babyBlue ease-out duration-500"
        >
          -
        </button>
        <p className="font-semibold text-center">{item.quantity}</p>
        <button
          onClick={handleAdd}
          className=" px-3 pt-[2px] font-semibold rounded-full  hover:text-babyBlue ease-out duration-500"
        >
          +
        </button>
      </span>
    </li>
  );
}
