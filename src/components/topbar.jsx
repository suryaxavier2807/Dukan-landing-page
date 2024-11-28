import { useState } from "react"
import Sidebar from "./sidebar"
import { useRecoilState, useRecoilValue } from "recoil"
import { isOpen } from "../store/atoms"

export default function Topbar() {



    const [isOpenValue, setisOpenValue] = useRecoilState(isOpen)

    function ToggleSidebar() {
        isOpenValue === true ? setisOpenValue(false) : setisOpenValue(true)

    }

   










    return (
        <div className=" bg-white border-b border-slate-300  flex justify-between p-4 ">
            
            <div className="flex  ">
            <div className="mt-2 pr-2 md:invisible" onClick={ToggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>

            </div>
                <h2 className="font-medium text-2xl" >Payouts</h2>
                <div className="flex ml-2 mt-3 md:ml-4 md:mt-2 text-gray-800">
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-4 md:size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    </div>
                    <h3 className="text-sm ml-1 hidden md:block">How it works</h3>
                </div>

            </div>
            <div className="bg-neutral-100 rounded-md  flex text-gray-500 ml-2  h-8 md:ml-0 md:h-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 py-1  md:size-8 md:pt-3 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <h4 className=" text-base  text-gray-500">
                    <span className=" hidden md:block ml-2 text-base p-2">Search features, tutorials, etc.</span>
                    <span className=" block md:hidden pr-6 pl-1 text-center text-base">Search</span>
                    </h4>
                

            </div>

            <div className="flex md:p-1">
                <div className=" md:bg-gray-200 rounded-full md:p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-gray-200 size-9 p-1 rounded-full  md:size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                </div>
                <div className="md:bg-gray-200 rounded-full md:p-2 ml-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-gray-200 size-9 p-1 rounded-full md:size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </div>

            </div>






        </div>







    )
}


// const [isOpen, setIsopen] = useState(false)

// function ToggleSidebar(){
//     isOpen === true ? setIsopen(false) : setIsopen(true)

// }
// <Sidebar  isOpen={isOpen} setIsopen={setIsopen} ToggleSidebar={ToggleSidebar}        />
