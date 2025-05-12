"use client";

import Image from "next/image";
import MyGrid from "../components/MyGrid"; // Adjust path as needed
import KanbanBoard from "../components/KanbanBoard"; // Ensure this path is correct
import { useState } from "react";

export default function Table() {
  const [view, setView] = useState("table"); // Default view

  // Sample data for Kanban Board
  const kanbanData = [
    {
      Name: "John Doe",
      Phone: "+1 234 567 890",
      Stack: "MERN",
      Course: "Full Stack",
      OpportunityStatus: "Upcoming",
    },
    {
      Name: "Jane Smith",
      Phone: "+1 987 654 321",
      Stack: "Python",
      Course: "Data Science",
      OpportunityStatus: "Ongoing",
    },
    {
      Name: "Alice Johnson",
      Phone: "+1 555 555 555",
      Stack: "Java",
      Course: "Backend",
      OpportunityStatus: "On Hold",
    },
    {
      Name: "Bob Brown",
      Phone: "+1 444 444 444",
      Stack: "React",
      Course: "Frontend",
      OpportunityStatus: "Completed",
    },
    {
      Name: "Charlie Davis",
      Phone: "+1 333 333 333",
      Stack: "Node.js",
      Course: "Backend",
      OpportunityStatus: "Upcoming",
    },
    {
      Name: "Dana White",
      Phone: "+1 222 222 222",
      Stack: "Flutter",
      Course: "Mobile Dev",
      OpportunityStatus: "Ongoing",
    },
  ];

  const columnNames = ["Upcoming", "Ongoing", "On Hold", "Completed"];
  const checkStatuses = ["Upcoming", "Ongoing", "On Hold", "Completed"];

  return (
    <>
      {/* Top Bar */}
      <div className="w-[1525px] h-[70px] bg-[#F7F8F9] border border-[#DFE3EB] my-2 ms-2">
        <div className="bg-white border border-[#E7EAEE] rounded-md w-[380px] shadow-xl h-[48px] relative inline-block mt-2 ms-2">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 px-2 w-[425px] h-[51px] rounded-md outline-none "
          />

          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <Image src="/search.png" width={20} height={20} alt="Search icon" />
          </div>
        </div>

        {/* Status Filters */}
        <div className="inline-flex rounded-md shadow-xs ms-5" role="group">
          <button
            type="button"
            className="px-4 py-2 text-[21px] font-Iner bg-white border border-gray-200 rounded-s-lg"
          >
            Upcoming
          </button>
          <button
            type="button"
            className="px-4 py-2 text-[21px] font-Iner text-gray-900 bg-white border-t border-b border-gray-200"
          >
            Ongoing
          </button>
          <button
            type="button"
            className="px-4 py-2 text-[21px] font-Iner text-gray-900 bg-white border-t border-b border-gray-200"
          >
            On Hold
          </button>
          <button
            type="button"
            className="px-4 py-2 text-[21px] font-Iner text-gray-900 bg-white border border-gray-200 rounded-e-lg"
          >
            Completed
          </button>
        </div>

        {/* View Toggle Buttons (Table / Kanban) */}
        <div className="inline-flex border-x border-y-0 px-2 mx-4">
          {/* Table Button */}
          <button
            onClick={() => setView("table")}
            className={`flex items-center p-2 rounded text-[21px] border border-slate-300 ${
              view === "table" ? "bg-blue-500 text-white" : ""
            }`}
            aria-pressed={view === "table"}
          >
            <span className="me-2">Table</span>
            <Image
              src={view === "table" ? "/whiteTable.png" : "/blackTable.png"}
              alt="Table icon"
              width={16}
              height={16}
              className="object-contain"
              unoptimized
            />
          </button>

          {/* Kanban Button */}
          <button
            onClick={() => setView("kanban")}
            className={`flex items-center p-2 rounded text-[21px] border border-slate-300 ms-1 ${
              view === "kanban" ? "bg-blue-500 text-white" : ""
            }`}
            aria-pressed={view === "kanban"}
          >
            <span>Kanban</span>
            <Image
              src={view === "kanban" ? "/whiteKanban.png" : "/kanban.png"}
              alt="Kanban icon"
              width={16}
              height={16}
              className="ms-1 object-contain"
              unoptimized
            />
          </button>
        </div>

        {/* Edit & Export Buttons */}
        <div className="inline-flex ms-4">
          <button className="flex items-center p-2 rounded text-[21px] border border-slate-300 me-2">
            <Image src="/edit.png" alt="Edit icon" width={16} height={16} />
            <span className="ms-2">Edit Columns</span>
          </button>

          <button className="flex items-center p-2 rounded text-[21px] border border-slate-300 ms-2">
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Conditional Rendering with Animation */}
      <div className="relative min-h-[60vh]">
        {/* Table View */}
        <div
          className={`transition-opacity duration-300 absolute inset-0 ${
            view === "table" ? "opacity-100 z-10" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          {view === "table" && <MyGrid />}
        </div>

        {/* Kanban View */}
        <div
          className={`transition-opacity duration-300 absolute inset-0 ${
            view === "kanban" ? "opacity-100 z-10" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          {view === "kanban" && (
            <KanbanBoard data={kanbanData} columnData={columnNames} checkData={checkStatuses} />
          )}
        </div>
      </div>
    </>
  );
}