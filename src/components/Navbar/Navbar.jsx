import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Products",
      link: "#",
    },
    {
      id: 3,
      title: "About Us",
      link: "#",
    },
    {
      id: 4,
      title: "Shop",
      link: "#",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "#",
    },
  ];
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4 md:pt-4">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase pl-4">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* Menu Section */}

          <div className="hidden md:block ">
            <ul className="flex items-center gap-6 text-gray-600">
              {navbarMenu.map((menu) => (
                <li key={menu.id} className="text-md">
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              {/* <button className="text-2xl hover:text-primary">
                    <MdOutlineShoppingCart />
                </button> */}

              <button className="text-2xl hover:bg-primary rounded-full hover:text-white p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          <div
            className="md:hidden pr-4"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MdMenu className="text-3xl" />
          </div>
        </div>
      </nav>
      {/* Responsive Menu */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
