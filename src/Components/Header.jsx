import React, { useContext } from "react";
import Logo from "../Assets/logo.png";
import UserProgressContext from "../Context/userProgressContext";
import { useSelector } from "react-redux";

export default function Header() {
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = useSelector((state) => state.cart.totalQuantity);
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header className=" w-full flex items-center justify-between flex-row py-0 pr-8 md:pr-10  cursor-default">
      <div className=" flex items-center flex-row w-[8em] md:w-[10em] h-[5.5em] md:h-[6.5em] ">
        <img src={Logo} alt="Logo" className="  rounded-full" />
        <h1 className=" hidden md:block font-bold text-brown md:text-2xl ">
          CraveCrisp
        </h1>
      </div>
      <nav className=" text-brown">
        <button
          className="text-md md:text-lg font-semibold"
          onClick={handleShowCart}
        >
          Cart({totalCartItems})
        </button>
      </nav>
    </header>
  );
}
