import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export default function Header() {
  return (
    <div className="h-dvh">
      <header className=" w-full flex items-center bg-inWhite justify-between flex-row py-0 pr-8 md:pr-10  cursor-default">
        <div className=" flex items-center flex-row w-[8em] md:w-[10em] h-[4.5em] md:h-[6.5em] ">
          <img src={Logo} alt="Logo" className="  rounded-full" />
          <h1 className=" hidden md:block font-bold text-brown md:text-2xl ">
            CraveCrisp
          </h1>
        </div>
        <nav className=" text-brown">
          <Link to={""} relative="route" className="text-lg md:text-xl font-semibold">
            Home
          </Link>
        </nav>
      </header>
      <main className="flex flex-col w-dvw h-full py-20 items-center gap-5 justify-center text-brown text-center">
        <h1 className="text-xl md:text-2xl font-bold">There is an error!</h1>
        <p className="text-xl md:text-2xl font-medium">
          Could't find this page.
        </p>
      </main>
      <Footer />
    </div>
  );
}
