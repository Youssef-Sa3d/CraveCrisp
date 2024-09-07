import React, { useContext } from "react";
import CartItem from "./CartItem";
import UserProgressContext from "../Context/userProgressContext";
import { useSelector  } from "react-redux";

export default function Cart() {
  const userProgressCtx = useContext(UserProgressContext);

  const cartItems = useSelector((state) => state.cart.items);
  const cartPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCancel() {
    userProgressCtx.hide();
  }
  function handleCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <>
      <aside className="fixed top-0 right-0 flex flex-col items-center justify-between h-full w-[15em] md:w-[22em] bg-bgWhite  shadow-lg  px-3 py-5 text-brown ease-out duration-500 ">
        <div className="w-full p-1 border-b-2  border-black flex justify-center">
          <h1 className="font-semibold text-lg md:text-xl ">Your cart</h1>
        </div>
        <ul className="flex flex-col w-full py-5 px-2 gap-6">
          {cartItems.length >= 1 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <p className="w-full p-1 border-black flex justify-center py-0">
              {" "}
              Empty cart{" "}
            </p>
          )}
        </ul>
        <div className="flex flex-col w-full ">
          <div className="w-full p-1 border-y-2   border-black flex justify-center py-3">
            <p className="font-semibold text-md md:text-lg ">
              Total price: {cartPrice} LE
            </p>
          </div>
          <span className="flex flex-row w-full justify-evenly py-4 px-0">
            <button
              onClick={handleCancel}
              className="text-md md:text-lg px-3 font-semibold"
            >
              Cancel
            </button>
            {cartItems.length > 0 && (
              <button
                onClick={handleCheckout}
                className="text-md md:text-lg px-4 py-2 rounded-xl bg-offWhite  w-fit font-bold hover:text-bgWhite hover:bg-babyBlue ease-out duration-500"
              >
                Checkout
              </button>
            )}
          </span>
        </div>
      </aside>
    </>
  );
}
