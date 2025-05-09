import Image from "next/image";
export default function Table() {
    return (
        <>
            <div className="w-[1525px] h-[70px] bg-[#F7F8F9] border border-[#DFE3EB] my-2 ms-2">
                <div className="bg-white border border-[#E7EAEE] rounded-md w-[380px] shadow-xl h-[48px] relative inline-block mt-2 ms-2">
                    {/* Input field */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 px-2 w-[425px] h-[51px] rounded-md outline-none "
                    />

                    {/* Search Icon inside input */}
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none ">
                        <Image
                            src="/search.png"
                            width={20}
                            height={20}
                            alt="Search icon"
                        />
                    </div>
                </div>

                <div class="inline-flex rounded-md shadow-xs ms-5" role="group">
                    <button type="button" class="px-4 py-2 text-[21px] font-Iner  bg-white border border-gray-200 rounded-s-lg ">
                        Upcoming
                    </button>
                    <button type="button" class="px-4 py-2 text-[21px] font-Iner text-gray-900 bg-white border-t border-b border-gray-200 ">
                        Ongoing
                    </button>
                    <button type="button" class="px-4 py-2 text-[21px] font-Iner text-gray-900 bg-white border-t border-b border-gray-200 ">
                        On Hold
                    </button>
                    <button type="button" class="px-4 py-2 text-[21px] font-Iner text-gray-900 bg-white border border-gray-200 rounded-e-lg ">
                        Completed
                    </button>
                </div>
                <div className="inline-flex border-x border-y-0 px-2 mx-4 ">
                    {/* Table View Button */}
                    <button className="flex items-center p-2 rounded text-[21px] border border-slate-300 bg-blue-500">
                        <span className="me-2">Table</span>
                        <Image src="/whiteTable.png" alt="table icon" width={16} height={16} />
                    </button>

                    {/* Kanban View Button */}
                    <button className="flex items-center p-2 rounded text-[21px] border border-slate-300">
                        <span>Kanban</span>
                        <Image src="/kanban.png" alt="kanban icon" width={16} height={16} className="ms-1" />
                    </button>
                </div>

                <div className="inline-flex ms-4">

                    <button className="flex items-center p-2 rounded text-[21px] border border-slate-300 me-2">
                        <Image src="/edit.png" alt="table icon" width={16} height={16} />
                        <span className="ms-2">Edit Columns</span>

                    </button>

                    <button className="flex items-center p-2 rounded text-[21px] border border-slate-300 ms-2">
                        <span>Export</span>
                    </button>
                </div>
            </div>




        </>
    )
}