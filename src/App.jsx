import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/card1'
import Card2 from './components/card2'
import Card3 from './components/card3'
import Sidebar from './components/sidebar'
import Topbar from './components/topbar'
import Table from './components/table'
import { RecoilRoot,useRecoilValue } from 'recoil'

import { isOpen } from './store/atoms'

function App() {

  function MainApp() {
    ////className={` bg-neutral-50  ${isOpen===true ? "ml-56": "ml-0" }  `}>

    const isopenVal = useRecoilValue(isOpen)
    console.log(isopenVal,"main val");
    

    return (
      <div className={` ${"md"}`}>

        <Sidebar />
        

        <div className="bg-neutral-50 transition-all duration-300 ml-0 md:ml-56"
         >

          <div >

            <Topbar />

          </div>

          <div className='flex justify-between mt-4 p-4'>
            <h4 className='text-2xl font-medium'>Overview</h4>
            <div className='flex border border-slate-200 bg-white w-40 mr-2 p-2 rounded-sm'>
              <h4>This Month</h4>
              <div className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              </div>

            </div>
          </div>



          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >

            <Card1 title={'Next Payout'} amount={'₹2,312.23'} orderCount={23} />
            <Card2 title={'Amount Pending'} amount={'₹92,312.20'} orderCount={14} />
            <Card3 title={'Amount Processed'} amount={'₹23,92,312.19'} />


          </div>

          <div className='flex ml-2 p-4'>
            <h4 className='font-medium text-2xl'>Transactions</h4>
            <h4 className='font-medium text-2xl ml-2 mr-2' >|</h4>
            <h4 className='font-medium text-2xl'>This Month</h4>


          </div>

          <div className='flex ml-2 p-4'>
            <h4 className='rounded-full bg-[#E6E6E6] text-[#808080] p-1 w-32  text-center text-lg'>Payouts (22)</h4>
            <h4 className='rounded-full bg-[#146EB4] text-white p-1 w-32  text-center ml-2 text-lg'>Refunds (6)</h4>

          </div>

          <div>
            <Table />
          </div>


        </div>

      </div>

    )

  }


  return(
    <>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
    </>
  )

}

export default App
