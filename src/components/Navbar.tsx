import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import GooeyNav from "./ui/GooeyNav";

const items = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#project" },
  { label: "Experience", href: "#experience" },
  // { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsNav] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setIsNav(!isOpen);
    setNav(!nav);
  };
  // Effect untuk menambahkan atau menghapus kelas `overflow-hidden` pada body
  useEffect(() => {
    if (nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [nav]);
  return (
    <>
      <nav className="h-14 bg-[#222222] shadow-lg shadow-primary/20 flex justify-between items-center px-4 md:px-10 lg:px-32">
        <h1 className="text-2xl font-bold">Daka.</h1>
        {/* hamburger menu */}
        <div className="md:hidden">
          {isOpen ? (
            <button
              onClick={handleNav}
              className="text-white hover:text-primary flex items-center"
            >
              <AiOutlineClose size={24} />
            </button>
          ) : (
            <button
              onClick={handleNav}
              className="text-white hover:text-primary flex items-center cursor-pointer"
            >
              <HiOutlineMenuAlt3 size={24} />
            </button>
          )}
        </div>
        {/* menu dekstop */}
        <div className="hidden md:flex">
          {/* nav items */}
          <ul className="flex gap-10">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {nav && (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#222222] z-50 flex flex-col items-center justify-center translate-x-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={handleNav}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {/* nav items */}
            <ul className="flex flex-col gap-10">
              {items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white hover:text-primary text-2xl"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
