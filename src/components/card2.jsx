

export default function Card2({ title, amount, orderCount }) {

    return <div className="bg-white rounded-md shadow-sm p-5 m-2">
        <div className="flex">
            <div className="text-gray-700 text-sm" >{title} </div>
            <div className="text-gray-700 ml-2" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            </div>

        </div>
        <div className="flex justify-between mt-4">


            <div className="text-black font-medium text-3xl " > {amount}</div>


            <div className="flex text-base text-blue-400 underline underline-offset-3  ">
                <div  >{orderCount} Orders </div>
                <div ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                </div>

            </div>

        </div>


    </div>

}