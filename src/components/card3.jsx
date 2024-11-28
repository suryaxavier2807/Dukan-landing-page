

export default function Card3({ title, amount, orderCount }) {

    return <div className="bg-white rounded-md shadow-sm p-5 m-2 ">
        <div className="flex">
            <div className="text-gray-700 text-sm" >{title} </div>
            <div className="text-gray-700 ml-2" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            </div>

        </div>


        <div className="text-black font-medium text-3xl mt-2 " > {amount}</div>



    </div>




}