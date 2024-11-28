import React, { useState } from "react";
import { useRecoilValue,useRecoilState } from "recoil";
import { isOpen } from "../store/atoms";

export default function Sidebar() {

  const [isOpenValue,setisOpenValue] = useRecoilState(isOpen)

  function ToggleSidebar(){
      isOpenValue === true ? setisOpenValue(false) : setisOpenValue(true)

  }

  console.log(isOpenValue,"valueee sidebar");


//opacity-100 visible bg-slate-200 z-1
//className="w-56 h-screen bg-[#1E2640] fixed -left-full"

//${isOpenValue=== true? "visible left-0  " : "-left-full"}


  return (
    <div className="">
      <div className={` md:visible w-56 h-screen  bg-[#1E2640] fixed ${isOpenValue=== true? "visible " : "invisible"}  `}>

<div className="p-4 flex ">
  <div className="ml-1 ">
    <img className="size-11 rounded-md" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmQMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQECAwQGB//EADsQAAEDAwEEBwcCAwkAAAAAAAEAAgMEBREGEiExkRQVQVFScdEHEyIyYYGhQrEWIyQzQ2NygpKywfD/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EAB8RAQEAAgEFAQEAAAAAAAAAAAABAhESAxMhMVEiQf/aAAwDAQACEQMRAD8A9wREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREJA4oCLG6eNvF7ea5TVFfWV96oLDbqqSjp5I3VNwrIjsvZCDgMYexzndvYAVnlj9XVdei870fqhkOnJp2uqaxs9ymhtML5nSy1DdrAG24kkDDiSeAB7lv6L1ZW3iuvVLcW0r+gzsZHNRtcGEEZLfiO/GOO7Oc4CXKT2SW+naqmV5hqi6arqNU0ViobvSwR1Evv3GkgLZYKdruLi5zskgEbhgkdmcKmubld2TWjS9DdKkT3eR3vq1+y17I24yG7IGM5/HHep3Mdrxr05krHuc1r2uc3iA7JHmr15e3TdHbLna7fpmndBVwzMqKy47RLxEM/C936i87tnhjJ3bluadvFwvmsbxdG1krbPQjoVNEH4ikeN8jyOBI4Z7lnu462vC709EVAd+F4lVa8vNRS6ir4Kp3RKycW61RAb9vG97T5Y+7h3LsYK3+AtDQ9Y1b6h1JFs5e7JlkJyGNzvxk4H0Ct6khMLXeqgXj0WvNRyaNoy/3b77d6h8NAImbOIwcGQj6HIB8vqs76Gg9n1Nbq2pvFxNdLP8A1TmOdK6t+E7TdgncAcfFxHmU7knhONetqmR3ryJ9wvRqtM19TX1XWl2uDHso2zubDBR4Jc0xjc47OMl2d/kpTVGs6uka2a0+4fTMrY6Z8tRtOE7y8B7Y8EDDQTlx3Z3AJep8Xi9JDgTgEKqioyxkoJG4HecqRimZKTsnOPoph1Zl7MsLiyIiL1YFrV217oYzx3rZVkrg1hcRnAys5zeK43VRC5L2oXg2bSVXJA5rKqpHR4n8C0O+Y/Zufwuyle1+9sYafouKv9hqr9rm1urICbNb4HTZ3bMkxO5p5A/b6rhx1Mvbryu8fSCleNHaKF1maG1hpm0lsgxgwNdvce/bd8UjvIDsXW6HswsOnIY6jdVS5qKt58bt5HkBgfZQOoqaTUHtMtNtmbmhtdN06QHg5xJAB+7W/lSeu7jVTWm42W0UNfPcain2GOipz7sB24/GcN4Z7VvLdkn1jHUtrW9nzX3etu2q6gb66cwUYO/Zp2HAx5kfhWe0uAm10eo7c5slTZakS5YQcx7QEjfwM+RWfFyt3s/qKSgtVTRz0lvLIA98b5HODcZAYSMneeKiv4jtjNEQWPTrH3K5S0QpxSQxkuY5zcOMu7Dd5JOe1NfrcN/nSe1bqhtv0TJfbYBMyeNvuHbWNkybmux24zw4rkbjLqDS+iaezdBoad9c7okJjqXPnfJJnLsBoAOO3JxuUlVaXr46bRWnTFJUUVPM+auqG72BzBtgH6ElwHkFuyxu1D7UmQgtNLp+ASOGf7+Qbvx/xWsZrwzbv25+js4ptcab07O+B0FlonVsmwwsaZMk7RyTk7Qac7lr6+rZtUmjbRFxpqqqFJbGnhM7P82o/wAo3NB7i49q7rVenrPdLpRtrBN1lVMMDWU0hY+aAHaeH/4Y7fMAbzhRtko2X/2h1dXTMb1dp2LoNMGjDBKfmx5bxyWpLfOmbr1tGaVjpTq2711RI1lt05TsoqVzvlia1pD3efwuP3VNOyT6n9pdZcK+MsitdM3o1M8f2XvB8OR4iC4nu4dinKL2eVsN9rDJVxOsVRV9OfSAHbllxua4+AEbWO3tUTR1VRadTauo6elllvldPtUkDGH+ZG2IkSbRGMZJ7d5ICXC+SZRpNlqNUe0m4MoZSyKhpuhsmjziCMn+Y9vc8/E1vnn9K2aOCHUmvY7fRwAWPTbA1rGj4HTNOAMduCD/ALFM2Kyy6I9m9dcHtPWnRZK2pDt597sZDT9G7hzW77KtOm26RpqiZ7hV3L+snJGCS8fDn/Tj7kq3DLXhOUdL7t54NdyK26CN7S8uaQDu3q9lI1py5znH6lbITp9Hjd1rPq2zQiIuh4io5ocCDwKqiDX6HD4TzVDRRHtcPutlFi9PG/xrll9c5eNKCvroq6hutXbapsfuZJKcMcZY852TtA4weB+pUxBQRQwsjzI/ZaBtPeST9Se9baskkbG3ae4NHeSrwx+JyqwU0Q/QFc2CNucMaM9wVjqqBudqVowcHJ7cZ/ZUfWU8YcZJmNDSQS44wQCf+jyKcZ8N2s2wMLDBRU1PPPPDBHHNUEGZ7GAGQgYBJ7dyudURNJDntBDg0juOM/sq9Ii2C/bGyDgnsznCuojzrUr7zZdT3m4UNmrrhXXClipLXUU8XvIqYb9oPPFgDjtcMHdv4rqtC6dZpfTlNbtoSVG+Wql4mSZ3zHPb3eQUz0mHAcHgg4Ax278furmzxEOIe0hhw7B4FUZVbsjOd2VjfUwsLmuka0t45PD/ANkc1fHI2QuDSDsnB+hQY6ylhraSekqWCSCeN0cjDwc1wwQfsVE6e0/PZjia9V1dExgigin2A2Jg4fKAXHAAyfVTqICIiAiIgIiICIiArJYmTN2ZWhze4jKvRBruoqdweHQxnb+bdx4+pQ0dO4ODoWODjtEEZyd/qea2EQa5o4CSfdtyXbRPee/8lXiniEb49gbD87Tew54rKiDEymhYxrGRtDWgAADhg5H5VBTRBj2CNobISXgD5srMiDAaWFxcTG07WAc9vD0HIK+KFkReWNDdtxc7Hae9ZEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBC9bT+CPkfVOtp/BHyPqiIHW0/gj5H1TrafwR8j6oiB1tP4I+R9U62n8EfI+qIgdbT+CPkfVOtp/BHyPqiIHW0/gj5H1TrafwR8j6oiB1tP4I+R9U62n8EfI+qIgdbT+CPkfVOtp/BHyPqiIHW0/gj5H1TrafwR8j6oiB1tP4I+R9U62n8EfI+qIgdbT+CPkfVOtp/BHyPqiIP//Z" alt="" />
  </div>

  <div className="ml-4">
    <h4 className=" font-medium text-white">Nishyan</h4>
    <h5 className="font-thin text-gray-300 underline">Visit store</h5>
  </div>

</div>

<div>
  <ul className="mt-2 ml-2 mr-2  ">
    <li className=" px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">Home</li>
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md  text-white font-medium">Products</li>
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">Delivery</li>
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">Marketing</li>
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md text-white font-medium">Analytics</li>
    <li className="px-4 py-2 bg-gray-700  hover:bg-gray-700 cursor-pointer rounded-md  text-white font-medium">Payouts</li>
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md  text-white font-medium">Discounts</li>
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md  text-white font-medium">Audience</li>
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md  text-white font-medium">Appearance</li>
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-md  text-white font-medium">Plugins</li>
  </ul>

</div>

<div className="p-2 flex bg-gray-700 rounded-md mt-4 ml-2 mr-2">

  <div className="text-white bg-gray-600 rounded-md p-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>

  </div>
  <div className="ml-4">
    <h5 className="text-white">Available Credits</h5>
    <h5 className="text-white">224.10</h5>

  </div>

</div>



</div>
<div  className={`fixed top-0 left-0 w-full h-screen bg-gray-800 transition-opacity duration-300

   ${isOpenValue ? "opacity-50 visible  md:opacity-0 md:invisible" : "opacity-0 invisible "} `} 
   onClick={ToggleSidebar} >

    <span className="flex justify-end p-2 hover:cursor-pointer ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className=" size-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>

    
  
</div>




</div>
    
  );
}




  




// .sidebar{
//   width: 280px;
//   min-height: 100vh;
//   box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
//   background-color: #fff;
//   position: fixed;
//   top: 0;
//   left: -100%;
//   z-index: 1;
//   transition: 0.5s;
// }




// import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
// import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

// const ToggleSidebar = () => {
//     const [isOpen, setIsopen] = useState(false);

//     const ToggleSidebar = () => {
//         isOpen === true ? setIsopen(false) : setIsopen(true);
//     }
//     return (
//         <>
//             <div className="container-fluid mt-3">
                
//                     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
//                         <div className="container-fluid p-2">
//                             <a className="navbar-brand text-primary mr-0">Company Logo</a>
//                             <div className="form-inline ml-auto">
//                                 <div className="btn btn-primary" onClick={ToggleSidebar} >
//                                     <i className="fa fa-bars"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </nav>
//                     <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
//                         <div className="sd-header">
//                             <h4 className="mb-0">Sidebar Header</h4>
//                             <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
//                         </div>
//                         <div className="sd-body">
//                             <ul>
//                                 <li><a className="sd-link">Menu Item 1</a></li>
//                                 <li><a className="sd-link">Menu Item 2</a></li>
//                                 <li><a className="sd-link">Menu Item 3</a></li>
//                                 <li><a className="sd-link">Menu Item 4</a></li>
//                                 <li><a className="sd-link">Menu Item 5</a></li>
//                                 <li><a className="sd-link">Menu Item 6</a></li>
//                                 <li><a className="sd-link">Menu Item 7</a></li>
//                                 <li><a className="sd-link">Menu Item 8</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
//            </div>
           
//         </>
//     )
// }


// ReactDOM.render(<ToggleSidebar />, document.getElementById("root"));
