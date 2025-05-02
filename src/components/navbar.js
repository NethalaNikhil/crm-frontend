import Image from "next/image";
import { useState } from 'react';

export default function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () =>{
  setDropdownVisible(prev => !prev);
}
  return (
    <div className="shadow-xl">
      <div className="flex items-center justify-between m-6">
        <Image
          src="/skLogo.png"
          width={60.9}
          height={45}
          alt="logo"
          className="mb-1"
        />

        <div className="space-x-6 text-[25px]  font-inter ">
          <a href="" className="hover:underline hover:underline-offset-10 hover:decoration-red-500">Campaigns</a>
          <a href="" className="hover:underline hover:underline-offset-10 hover:decoration-red-500">Leads</a>
          <a href="" className="hover:underline hover:underline-offset-10 hover:decoration-red-500">Opportunities</a>
          <a href="" className="hover:underline hover:underline-offset-10 hover:decoration-red-500">Learners</a>
          <a href="" className="hover:underline hover:underline-offset-10 hover:decoration-red-500">Courses</a>
          <a href="" className="hover:underline hover:underline-offset-10 hover:decoration-red-500">Trainers</a>
          <a href="" className="hover:underline hover:underline-offset-10 hover:decoration-red-500">Tasks</a>
        </div>

        <div className="flex space-x-2">
          <Image 
            src= "/search.png"
            width={36}
            height={36}
            alt="search"
            ></Image>
            
            <Image 
            src= "/map.png"
            width={36}
            height={36}
            alt="map"
            ></Image>
            <Image 
            src= "/ring.gif"
            width={36}
            height={36}
            alt="ring"
            ></Image>
            <Image 
            src= "/notification.png"
            width={36}
            height={36}
            alt="notification"
            ></Image>
            <Image 
            src= "/profile.jpg"
            width={36}
            height={36}
            alt="profile"
            className="rounded-full"
            onClick={toggleDropdown}
            ></Image>

            {dropdownVisible &&(
                <div className="absolute top-10 right-0 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <ul className="p-2 text-[20px]">
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer ">Profile</li>
                    <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer text-red-500">Log Out</li>
                  </ul>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
