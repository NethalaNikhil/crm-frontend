import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Campaigns", href: "/campaigns" },
  { label: "Leads", href: "/leads" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Learners", href: "/learners" },
  { label: "Courses", href: "/courses" },
  { label: "Trainers", href: "/trainers" },
  { label: "Tasks", href: "/tasks" },
];

const icons = [
  { src: "/search.png", alt: "search" },
  { src: "/map.png", alt: "map" },
  { src: "/ring.gif", alt: "ring" },
  { src: "/notification.png", alt: "notification" },
];

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  return (
    <div className="shadow-xl relative">
      <div className="flex items-center justify-between m-6">
        <Link href="/">
          <Image src="/skLogo.png" width={60.9} height={45} alt="logo" className="mb-1 cursor-pointer" />
        </Link>

        <div className="space-x-6 text-[25px] font-inter">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:underline hover:underline-offset-10 hover:decoration-red-500"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex space-x-2 relative">
          {icons.map(({ src, alt }) => (
            <Image key={alt} src={src} width={36} height={36} alt={alt} />
          ))}

          <Image
            src="/profile.jpg"
            width={36}
            height={36}
            alt="profile"
            className="rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />

          {dropdownVisible && (
            <div className="absolute top-12 right-0 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
              <ul className="p-2 text-[20px]">
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                  <Link href="/profile">Profile</Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 text-red-500 cursor-pointer">
                  <Link href="/logout">Log Out</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
