"use client";

import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

export default function MyGrid() {
  // Mock Data
  const data = useMemo(
    () => [
      {
        id: 1,
        campaignName: "HRMS LAUNCH",
        type: "Webinar",
        status: "Planned",
        startDate: "18-08-2024",
        endDate: "18-08-2024",
      },
      {
        id: 2,
        campaignName: "HRMS LAUNCH",
        type: "Webinar",
        status: "Planned",
        startDate: "18-08-2024",
        endDate: "18-08-2024",
      },
      {
        id: 3,
        campaignName: "HRMS LAUNCH",
        type: "Email",
        status: "Planned",
        startDate: "18-08-2024",
        endDate: "18-08-2024",
      },
      {
        id: 4,
        campaignName: "HRMS LAUNCH",
        type: "Webinar",
        status: "Planned",
        startDate: "18-08-2024",
        endDate: "18-08-2024",
      },
      {
        id: 5,
        campaignName: "HRMS LAUNCH",
        type: "Email",
        status: "Planned",
        startDate: "18-08-2024",
        endDate: "18-08-2024",
      },
      {
        id: 6,
        campaignName: "HRMS LAUNCH",
        type: "Webinar",
        status: "Planned",
        startDate: "18-08-2024",
        endDate: "18-08-2024",
      },
    ],
    []
  );

  // Define Columns
  const columns = useMemo(
    () => [
      {
        id: "campaignName", // Custom column with checkbox + name
        header: "Campaign Name",
        cell: ({ row }) => (
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600"
              onClick={() => table.toggleRowSelected(row)}
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
            />
            <span className="font-medium">{row.original.campaignName}</span>
          </div>
        ),
      },
      {
        accessorKey: "type",
        header: "Type",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
      },
      {
        accessorKey: "endDate",
        header: "End Date",
      },
    ],
    []
  );

  // Initialize Table
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    enableRowSelection: true, // Enable row selection
    manualPagination: true, // Use manual pagination
    manualSorting: true, // Use manual sorting
  });

  return (
    <div className="w-full p-6 bg-white border border-gray-300 rounded-lg shadow-md ">
      {/* Table */}
      <table className="min-w-full divide-y divide-gray-200 border-collapse">
        {/* Header */}
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const sortDirection = header.column.getIsSorted();
                return (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider cursor-pointer border border-gray-300"
                  >
                    <div className="flex items-center">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {sortDirection ? (
                        sortDirection === "desc" ? (
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        ) : (
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        )
                      ) : null}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        {/* Body */}
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap font-medium border border-gray-300"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center mt-4">
        {/* Rows per Page Dropdown */}
        <div className="flex items-center space-x-2 me-4">
          <span>Rows per page:</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border border-gray-300 px-2 py-1 rounded"
          >
            {[5, 10, 20, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

        {/* Pagination Navigation */}
        <div className="flex items-center space-x-2">
          <span>
            {table.getState().pagination.pageIndex + 1}-
            {Math.min(
              (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )}{" "}
            of {table.getFilteredRowModel().rows.length}
          </span>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-200"
          >
            {"<"}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-200"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}