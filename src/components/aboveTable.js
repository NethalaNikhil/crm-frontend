// components/AboveTable.js
import Image from "next/image";
import { useState } from "react"; // Required for modal toggle
import Dropdown from "../components/dropdown";
import Modal from "../components/model"; // Make sure Modal is working

export default function AboveTable() {
  const profileDropdownItems = [
    { label: "All Active Campaigns", href: "#" },
    { label: "My Active Campaigns", href: "#" },
    { label: "Recently Viewed Campaigns", href: "#" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  return (
    <>
      <div className="flex justify-between mx-2">
        {/* Left Section */}
        <div className="flex items-center">
          <Image src="/id.png" width={62} height={62} alt="id" className="me-2" />
          <div className="flex items-center">
            <p className="text-[30.9px] me-2">All Active Campaigns</p>
            <Dropdown
              trigger={
                <Image
                  src="/downArrow.png"
                  width={20}
                  height={13}
                  alt="downArrow"
                  className="rounded-full cursor-pointer"
                />
              }
              menuItems={profileDropdownItems}
            />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="flex">
            <Image src="/calender.png" width={48} height={52} alt="calendar" />

            <button className="text-white text-[18.86px] bg-blue-500 p-2 rounded flex items-center me-2">
              <span>Create Campaign</span>
              <span
                className="ms-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering parent button click
                  setIsModalOpen(true); // Open modal
                }}
                role="button"
                tabIndex={0}
                aria-label="Open create campaign modal"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }
                }}
              >
                <Image
                  src="/whitedownArrow.png"
                  width={17.38}
                  height={8.69}
                  alt="dropdown arrow"
                />
              </span>
            </button>

            <button className="text-black text-[18.86px] px-16 py-2 rounded border border-gray-300">
              Action
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create Campaign"
      >
        <p>Put your form or content here.</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </Modal>
    </>
  );
}