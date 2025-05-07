import { useState, useEffect } from "react";
import Link from "next/link";

export default function Dropdown({ trigger, menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container relative inline-block text-left">
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <ul
            className="py-1 text-xl text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href || "#"}
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    item.isLogout ? "text-red-500 hover:text-red-700" : ""
                  }`}
                  onClick={() => {
                    if (item.onClick) item.onClick();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
