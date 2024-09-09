import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

export default function Header() {

  const totalCartItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <header className=" w-full flex items-center bg-inWhite justify-between flex-row py-0 pr-8 md:pr-10  cursor-default">
        <div className=" flex items-center flex-row w-[8em] md:w-[10em] h-[4.5em] md:h-[6.5em] ">
          <img src={Logo} alt="Logo" className="  rounded-full" />
          <h1 className=" hidden md:block font-bold text-brown md:text-2xl ">
            CraveCrisp
          </h1>
        </div>
        <nav className=" text-brown">
          <Link to={"Cart"} className="text-lg md:text-xl font-semibold">
            Cart({totalCartItems})
          </Link>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
