import React from "react";

export default function Input({ id, label, ...props }) {
  return (
    <p className="flex flex-col ">
      <label htmlFor={id} className="uppercase text-sm md:text-md text-brown pl-1 font-semibold ">
        {label}
      </label>

      <input
        className="w-full p-2 border-b-2 h-9 md:h-10 rounded-sm text-brown bg-inWhite shadow-lg focus:outline-none border-brown"
        {...props}
        id={id}
        name={id}
        required
      />
    </p>
  );
}
