import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dropdown from "../components/dropdown";
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
  const profileDropdownItems = [
    { label: "Profile", href: "/#" },
    {
      label: "Log Out",
      href: "/#",
      isLogout: true,
    },
  ];

  return (
    <div className="shadow-xl relative">
      <div className="flex items-center justify-between m-6">
        <Link href="/">
          <Image
            src="/skLogo.png"
            width={60.9}
            height={45}
            alt="logo"
            className="mb-1 cursor-pointer"
          />
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

          <Dropdown
            trigger={
              <Image
                src="/profile.jpg"
                width={36}
                height={36}
                alt="profile"
                className="rounded-full cursor-pointer"
              />
            }
            menuItems={profileDropdownItems}
          />
        </div>
      </div>
    </div>
  );
}
