import React, { useContext } from "react";
import UserProgressContext from "../Context/userProgressContext";
import Input from "./Input";
import emailjs from "emailjs-com";  // Import emailjs
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../Store/cart";


export default function Checkout() {
  const userProgressCtx = useContext(UserProgressContext);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCancel() {
    userProgressCtx.hide();
  }

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
          console.log("User email sent!", response.status, response.text);
          alert(
            "Order placed successfully! A confirmation email has been sent to your inbox."
          );
          dispatch(cartAction.resetCart())
          userProgressCtx.showDone();
        },
        (error) => {
          console.log("FAILED to send user email...", error);
          alert(
            "Failed to send confirmation email. Please check your email address."
          );
        }
      );
  }

  function handleSubmit(event) {
    event.preventDefault();
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
          console.log("SUCCESS!", response.status, response.text);
          sendUserEmail(customerData, cartPrice); 
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send order. Please try again.");
        }
      );

  }
  return (
    <>
      <aside className="fixed top-0 right-0 flex flex-col items-center justify-evenly h-full w-[15em] md:w-[22em] bg-bgWhite  shadow-lg  px-3 py-5 text-brown ease-out duration-500 ">
        <div className="w-full p-1 border-b-2  border-black flex justify-center">
          <h1 className="font-semibold text-lg md:text-xl ">Checkout</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full px-3 pt-2 gap-7"
        >
          <div className="flex flex-col w-full gap-4">
            <Input id="full-name" label="Full name" type="text" />
            <Input id="email" label="Email" type="email" />
            <Input id="mobile" label="Mobile" type="tel" />
            <div className="relative p-6 mt-5 gap-3 border border-brown rounded-lg flex flex-col ">
              <legend className="absolute -top-3 bg-bgWhite font-semibold left-3 px-2 text-brown">
                Address
              </legend>
              <Input id="street" label="Street" type="text" />
              <Input id="build" label="Build number" type="text" />
              <Input id="floor" label="Floor" type="text" />
              <Input id="apartment" label="Apartment" type="text" />
            </div>
          </div>

          <div className="flex flex-col w-full ">
            <div className="w-full p-1 border-y-2   border-black flex justify-center py-3">
              <p className="font-semibold text-md md:text-lg  ">
                Total price: {cartPrice} LE
              </p>
            </div>
            <span className="flex flex-row w-full justify-evenly pt-2 px-0">
              <button
                onClick={handleCancel}
                className="text-md md:text-lg px-3 font-semibold"
              >
                Cancel
              </button>

              <button className="text-md md:text-lg px-4 py-2 rounded-xl bg-offWhite  w-fit font-bold hover:text-bgWhite hover:bg-babyBlue ease-out duration-500">
                Submit
              </button>
            </span>
          </div>
        </form>
      </aside>
    </>
  );
}
