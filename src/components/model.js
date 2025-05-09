// components/Modal.js
import { useEffect, useRef } from "react";
import Image from "next/image";
export default function Modal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 ">
      <div
        ref={modalRef}
        className="bg-white w-1/2  p-6 rounded shadow-lg relative"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="flex items-center  ">
          <Image
            src="/id.png"
            width={40}
            height={13}
            alt="id"
            className="cursor-pointer"
          />
          <h2 className="text-xl font-bold mb-4 mt-4 ms-4">Create Campaign</h2>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}
