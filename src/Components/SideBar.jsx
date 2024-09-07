import React, { useContext } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Done from './Done'
import UserProgressContext from "../Context/userProgressContext";

export default function SideBar() {
  const userProgressCtx = useContext(UserProgressContext);

  return (
    <>
      {userProgressCtx.progress === "cart" && <Cart />}
      {userProgressCtx.progress === "checkout" && <Checkout />}
      {userProgressCtx.progress === "done" && <Done />}
    </>
  );
}
