import React from "react";
import CartItem from "../Components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {

  const cartItems = useSelector((state) => state.cart.items);
  const cartPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  

  return (
    <main className="flex flex-col items-center justify-between h-dvh text-xl md:text-2xl  w-full  bg-bgWhite  shadow-lg  px-10 py-5 text-brown  ">
      <div className="w-full p-1 border-b-2  border-black flex justify-between">
        <h1 className="font-semibold  ">Your cart</h1>
        <Link
          to={".."}
          relative="path"
          className="text-md md:text-lg px-3 font-normal hover:text-babyBlue ease-out duration-500"
        >
          X
        </Link>
      </div>
      <ul className="flex flex-col w-full py-5 px-2 gap-8">
        {cartItems.length >= 1 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="w-full p-1 border-black flex justify-center py-0">
            Empty cart
          </p>
        )}
      </ul>
      <div className="flex flex-col border-t-2   border-black w-full ">
        <div className="w-full px-3  flex justify-center py-5">
          <p className="font-semibold text-md md:text-lg ">
            Total price: {cartPrice} LE
          </p>
        </div>
        <span className="flex flex-row w-full border-t-2   border-black justify-evenly pt-10 pb-5 px-0">
          {cartItems.length > 0 && (
            <Link
              to={"/Checkout"}
              className="text-md md:text-lg px-4 py-2 rounded-xl bg-offWhite  w-fit font-bold hover:text-bgWhite hover:bg-babyBlue ease-out duration-500"
            >
              Checkout
            </Link>
          )}
        </span>
      </div>
    </main>
  );
}
