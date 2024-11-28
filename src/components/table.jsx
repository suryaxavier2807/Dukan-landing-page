import tableData from "../../data"

export default function Table() {


    return (
        <div className="bg-white rounded-md p-2 ml-2 mt-6 mr-2 mb-14">
            <div className=' flex justify-between'>
                <div className=" rounded-md p-2 flex border ml-2 text-gray-500 w-80">
                    <div className="mt-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg></div>
                    <h4 className="ml-2 text-base text-gray-400">Order ID or Transactions ID</h4>

                </div>

                <div className="flex">
                    <div className="flex border p-2 rounded-md text-gray-600">
                        <h4 className="">Sort</h4>
                        <div className="ml-2 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                        </div>

                    </div>
                    <div className="ml-2 p-2 border rounded-md text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                    </div>

                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full mt-2 ">
                    <thead>
                    <tr className="bg-[#F2F2F2] ">
                        <th className="text-gray-600 font-medium text-left pl-2 pt-2 pb-2 rounded-l-md ">Order ID</th>
                        <th className="text-gray-600 font-medium text-left pl-4 ">Status</th>
                        <th className="text-gray-600 font-medium text-left pl-4 ">Transaction ID</th>
                        <th className="text-gray-600 font-medium text-left pl-4 ">Refund Data</th>
                        <th className="text-gray-600 font-medium pr-2 text-right rounded-r-md">Order Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((val, index) => {
                        return (
                            <tr key={val.OrderID}>
                                <td className="pl-2 py-2 text-left text-blue-700">{val.OrderID}</td>
                                <td className="pl-4 py-2 text-left flex items-center"><span className={`h-2.5 w-2.5 rounded-full mr-2 ${val.Status == "Successful" ? "bg-green-500" : "bg-gray-400"
                                    }`}></span>{val.Status}</td>
                                <td className="pl-4 py-2 text-left text-gray-600">{val.TransactionID}</td>
                                <td className="pl-4 py-2 text-left text-gray-600">{val.RefundDate}</td>
                                <td className="pr-2 py-2 text-right">{val.OrderAmount}</td>

                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

        </div>


    )


}