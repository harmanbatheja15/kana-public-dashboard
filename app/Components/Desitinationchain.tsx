import React from 'react'
import Image from 'next/image'
import DropDown from "../assets/DroopdownArrow.svg";
import Data from "../assets/data.svg";
import DonutChart from './Donutchart';
const Desitinationchain = () => {
  return (
    <div className=" xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full h-[28rem] rounded-[1rem] border-[0.063rem] border-[#FFFFFF1A] xxl:ml-2 xl:ml-2 sxl:ml-2 bxl:ml-2 lg:ml-2 md:ml-0 sm:ml-0 xd:ml-0 xxl:mt-0 xl:mt-0 bxl:mt-0 lg:mt-0 sxl:mt-0 md:mt-2 sm:mt-2 xd:mt-2 bg-[#111213] dark:bg-[#FCFDFE]">
              <div className="h-[3.5rem] rounded-t-[1rem] bg-[#17181A] dark:bg-[#FCFDFE] p-4 font-[800] text-[#A5A5A6] dark:text-[#777879] border-[#FFFFFF1A] dark:border-[#e3e8ef] border-b-[0.063rem] flex justify-between">
                <div>Chain popularity (Desitination)</div>
                <div className=" flex p-1 cursor-pointer">
                  <span className=" text-[#2ED3B7] font-[800] text-[0.75rem]">
                    Volume
                  </span>
                  <Image
                    src={DropDown}
                    alt="DropDown"
                    className=" ml-1 mt-0.5"
                  />
                </div>
              </div>
              <div className=" h-[2.25rem] border-b-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] bg-[#111213] dark:bg-[#f2f9f9]">
                <div className="flex justify-between p-[0.5%_17%]">
                  <div className="text-[#777879] font-[400] text-[0.875rem] flex">
                    <Image src={Data} alt="Data" />
                    <p className=" pl-2 py-0.5">Data</p>
                  </div>
                  <div className="text-[#777879] font-[400] text-[0.875rem] flex">
                    <Image src={Data} alt="Data" />
                    <p className=" pl-2 py-0.5">Data</p>
                  </div>
                  <div className="text-[#777879] font-[400] text-[0.875rem]  flex">
                    <Image src={Data} alt="Data" />
                    <p className=" pl-2 py-0.5">Data</p>
                  </div>
                  <div className="text-[#777879] font-[400] text-[0.875rem] flex">
                    <Image src={Data} alt="Data" />
                    <p className=" pl-2 py-0.5">Data</p>
                  </div>
                  <div className="text-[#777879] font-[400] text-[0.875rem] flex">
                    <Image src={Data} alt="Data" />
                    <p className=" pl-2 py-0.5">Data</p>
                  </div>
                </div>
              </div>
              <DonutChart />
            </div>
  )
}

export default Desitinationchain