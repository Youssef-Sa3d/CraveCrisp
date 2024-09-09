import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="flex flex-col py-4 px-8 md:px-16 bg-inWhite w-full items-center ">
      <h2 className="text-brown text-lg font-semibold py-3">Contact</h2>
      <div className="flex flex-col md:flex-row w-full justify-center items-center text-brown border-b-2 border-brown pb-3 gap-2">
        <div className="flex flex-col justify-center items-center text-sm md:text-md  pb-1 w-full gap-2">
          <a href="tel:+201116666067">+20 1116666067</a>
          <a href="https://maps.app.goo.gl/dZxTRmQAZ4NKcXrW7" target="_blank">
            60 Khaleel ElMasry - Kafr Abdu - Alexandria
          </a>
        </div>
        <div className="flex flex-row w-full items-center justify-center gap-3">
          <a
            href="https://m.facebook.com/61550240475370/"
            target="_blank"
            className="text-sky-600 hover:text-sky-700"
          >
            <FacebookIcon
              sx={{ fontSize: { xs: 30, sm: 30, md: 40, lg: 40 } }}
            />
          </a>
          <a
            href="https://www.instagram.com/cravecrisp_confections?igsh=dWE2eTlwbWx4YXBy"
            target="_blank"
            className="text-pink-500 hover:text-pink-600"
          >
            <InstagramIcon
              sx={{ fontSize: { xs: 30, sm: 30, md: 38, lg: 38 } }}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-xs md:text-sm gap-2 md:gap-0 justify-between items-center w-full text-brown pt-3">
        <p>© 2024 Cravecrisp Confection . All rights reserved.</p>
        <p className="flex gap-1">
          Website designed and developed by
          <a
            href="https://www.linkedin.com/in/youssef-saad-24yse"
            className="pt-[1px] text-black hover:text-babyBlue"
            target="_blank"
          >
            Youssef Saad
          </a>
        </p>
      </div>
    </footer>
  );
}
