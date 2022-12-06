import { useState } from "react";
import Image from "next/image";
import Logo from "/public/war_logo.png";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const Menu = () => {
    setTimeout(() => {
      setIsToggle(!isToggle);
    }, 200);
  };
  const navLinks = [
    {
      name: "Home",
      to: "#home",
    },
    {
      name: "About",
      to: "#about",
    },
    {
      name: "Agendas",
      to: "#agendas",
    },
    {
      name: "FAQ",
      to: "#faq",
    },
    {
      name: "Contact",
      to: "#contact",
    },
  ]; 
  return (
    <nav className="w-full  flex flex-col  ">
      <div className="flex justify-between items-center">
        <a href="#home" className="logo-nav">
          <Image src={Logo} width={70} height={10} alt="tech war" />
            TECH WAR
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-12 ">
          {navLinks.map((navLink, idx) => {
            return (
              <li
                key={navLink.name}
                className="text-base lg:text-xl font-bold text-white cursor-pointer"
              >
                <a href={navLink.to}>{navLink.name}</a>
              </li>
            );
          })}
            <button
            type="button"
            className="hidden md:block w-fit bg-tech_button text-base lg:text-xl text-[#040726] px-5 py-1.5 rounded-[80px] cursor-pointer "
          >
            Login
          </button>
        </ul>
        <div className="md:hidden" onClick={Menu}>
          {isToggle ? (
            <div className="flex flex-col  cursor-pointer justify-center align-center md:hidden">
              <div className="w-10 h-1 absolute rounded-full bg-[#CBD6E1] -rotate-45"></div>
              <div className="w-10 h-1 rounded-full bg-[#CBD6E1] rotate-45"></div>
            </div>
          ) : (
            <div className="flex flex-col gap-[8px] cursor-pointer md:hidden">
              <div className="navbar-burger"></div>
              <div className="navbar-burger"></div>
              <div className="navbar-burger"></div>
            </div>
          )}
        </div>
      </div>
      {isToggle && (
        <div className="md:hidden flex flex-col mx-4  items-center gap-5 py-10 rounded">
          {navLinks.map((navLink, idx) => {
            return (
              <div className="flex flex-col mx-4  items-center gap-3 py-0">
                <a
                  key={idx}
                  href={navLink.to}
                  className=" font-bold text-xl text-white "
                >
                  {navLink.name}
                </a>
                <hr class="solid w-[80vw] border-[#3E4B5B]"></hr>
              </div>
            );
          })}
          <button
            type="button"
            className="bg-tech_button w-fit text-xl text-[#040726] px-5 py-1.5 rounded-[80px] cursor-pointer"
          >
            Log in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
