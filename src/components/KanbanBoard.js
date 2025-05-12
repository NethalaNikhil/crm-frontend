import React from 'react';

const KanbanBoard = ({ data,columnData,checkData }) => {
    return (
        <div className='mx-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <div className='bg-green-100 p-4 md:p-2 rounded border-4 border-green-100 border-t-green-500'>
                    <p>{columnData[0]}</p>
                    <p>₹ 0.00 . Leads</p>
                </div>
                <div className='bg-[#DBEAFE] p-4 md:p-2 rounded border-4 border-[#DBEAFE] border-t-[#93C5FD]'>
                    <p>{columnData[1]}</p>
                    <p>₹ 0.00 . Leads</p>
                </div>
                <div className='bg-[#FFEDD5] p-4 md:p-2 rounded border-4 border-[#FFEDD5] border-t-[#A8A29E]' >
                    <p>{columnData[2]}</p>
                    <p>₹ 0.00 . Leads</p>
                </div>
                <div className='bg-[#E0E7FF] p-4 md:p-2 rounded border-4 border-[#E0E7FF] border-t-[#94A3B8]'>
                    <p>{columnData[3]}</p>
                    <p>₹ 0.00 . Leads</p>
                </div>
            </div>

            {/* Lead items for each status */}
            <div className='grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                
                <div className='bg-[#E5E7EB] h-[60vh] p-4 md:p-2 px-0.5 max-w-96 flex flex-col rounded'>
                    <div className="overflow-y-auto h-full">
                        {data.filter(item => item.OpportunityStatus === checkData[0]).map((item, index) => (
                            <div key={index} className='bg-white mb-2 p-2 rounded'>
                                <p className="font-bold">{item.Name}</p>
                                <p>{item.Phone}</p>
                                <p>{item.Stack}</p>
                                <p>{item.Course}</p>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className='bg-[#E5E7EB] h-[60vh] p-4 md:p-2 px-0.5 max-w-96 flex flex-col rounded'>
                    <div className="overflow-y-auto h-full">
                        {data.filter(item => item.OpportunityStatus === checkData[1]).map((item, index) => (
                            <div key={index} className='bg-white mb-2 p-2 rounded'>
                                <p className="font-bold">{item.Name}</p>
                                <p>{item.Phone}</p>
                                <p>{item.Stack}</p>
                                <p>{item.Course}</p>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className='bg-[#E5E7EB] h-[60vh] p-4 md:p-2 px-0.5 max-w-96 flex flex-col rounded'>
                    <div className="overflow-y-auto h-full">
                        {data.filter(item => item.OpportunityStatus === checkData[2]).map((item, index) => (
                            <div key={index} className='bg-white mb-2 p-2 rounded'>
                                <p className="font-bold">{item.Name}</p>
                                <p>{item.Phone}</p>
                                <p>{item.Stack}</p>
                                <p>{item.Course}</p>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className='bg-[#E5E7EB] h-[60vh] p-4 md:p-2 px-0.5 max-w-96 flex flex-col rounded'>
                    <div className="overflow-y-auto h-full">
                        {data.filter(item => item.OpportunityStatus === checkData[3]).map((item, index) => (
                            <div key={index} className='bg-white mb-2 p-2 rounded'>
                                <p className="font-bold">{item.Name}</p>
                                <p>{item.Phone}</p>
                                <p>{item.Stack}</p>
                                <p>{item.Course}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KanbanBoard;
