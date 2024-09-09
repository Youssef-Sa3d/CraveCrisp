import React, { useState } from "react";
import Input from "../Components/Input";
import Done from "../Components/Done";
import Loading from '../Components/Loading'
import emailjs from "emailjs-com";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../Store/cart";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function formatCartItems() {
    return cartItems
      .map(
        (item) =>
          `Product: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}LE, Total item price: ${item.totalPrice}`
      )
      .join("\n");
  }

  function sendUserEmail(customerData, cartPrice) {
    const userTemplateParams = {
      user_name: customerData["full-name"],
      user_email: customerData["email"],
      user_total_price: cartPrice,
      cart_items: formatCartItems(),
    };

    emailjs
      .send(
        "ccc_admin",
        "template_9chvgel",
        userTemplateParams,
        "TyDl0srkkXMOpVCEu"
      )
      .then(
        (response) => {
          dispatch(cartAction.resetCart());
          setIsLoading(false);
          setIsSuccess(true);
        },
        (error) => {
          alert(
            "Failed to send confirmation email. Please check your email address."
          );
          setIsLoading(false);
        }
      );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    const templateParams = {
      full_name: customerData["full-name"],
      mobile: customerData["mobile"],
      email: customerData["email"],
      street: customerData["street"],
      build_number: customerData["build"],
      floor: customerData["floor"],
      apartment: customerData["apartment"],
      total_price: cartPrice,
      cart_items: formatCartItems(),
    };

    emailjs
      .send(
        "ccc_admin",
        "template_b89joaf",
        templateParams,
        "TyDl0srkkXMOpVCEu"
      )
      .then(
        (response) => {
          sendUserEmail(customerData, cartPrice);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send order. Please try again.");
          setIsLoading(false);
        }
      );
  }

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  if (isSuccess) {
    return <Done />;
  }

  return (
    <main className="flex flex-col items-center justify-start   w-full  bg-bgWhite  shadow-lg  px-10 py-5 text-brown  ">
      <div className="w-full p-1 border-b-2 text-lg md:text-xl  border-black flex justify-between">
        <Link
          to={"/cart"}
          className=" px-3 font-medium  hover:text-babyBlue ease-out duration-500"
        >
          Back
        </Link>
        <h1 className="font-bold cursor-default ">Checkout</h1>
        <Link
          to={".."}
          className=" px-3 font-medium  hover:text-babyBlue ease-out duration-500"
        >
          X
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full px-3 py-7 gap-10"
      >
        <div className="flex flex-col md:flex-col w-full gap-6">
          <Input id="full-name" label="Full name" type="text" />
          <Input id="email" label="Email" type="email" />
          <Input id="mobile" label="Mobile" type="tel" />
          <div className="relative p-6 mt-5 gap-4 border w-full border-brown rounded-lg flex flex-col md:flex-row items-center justify-evenly">
            <legend className="absolute -top-4 bg-bgWhite font-medium left-3 px-2 text-brown">
              Address
            </legend>
            <Input id="street" label="Street" type="text" />
            <Input id="build" label="Build number" type="text" />
            <Input id="floor" label="Floor" type="text" />
            <Input id="apartment" label="Apartment" type="text" />
          </div>
        </div>

        <div className="flex flex-col w-full ">
          <div className="w-full px-3 border-y-2   border-black flex justify-center py-5">
            <p className="font-semibold text-md md:text-lg  ">
              Total price: {cartPrice} LE
            </p>
          </div>
          <span className="flex flex-row w-full justify-evenly pt-8 pb-3 px-0">
            <button className="text-lg md:text-xl px-4 py-2 mt-3 rounded-xl bg-offWhite  w-fit font-bold hover:text-bgWhite hover:bg-babyBlue ease-out duration-500">
              Submit
            </button>
          </span>
        </div>
      </form>
    </main>
  );
}
