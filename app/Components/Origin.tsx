import React from 'react'
import Image from 'next/image';
import DropDown from "../assets/DroopdownArrow.svg";
import Data from "../assets/data.svg";
import DonutChart from './Donutchart';

const Origin = () => {
  return (
    <div className=" xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full rounded-[1rem] border-[0.063rem] border-[#FFFFFF1A] bg-[#111213] dark:bg-[#FCFDFE]">
    <div className="h-[3.5rem] rounded-t-[1rem] bg-[#17181A] dark:bg-[#FCFDFE] p-4 font-[800] text-[#A5A5A6] dark:text-[#777879] border-[#FFFFFF1A] dark:border-[#e3e8ef] border-b-[0.063rem] flex justify-between">
      <div>Chain popularity (Origin)</div>
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
    <div className=" h-[2.25rem] border-b-[0.063rem] border-[#FFFFFF1A] bg-[#111213] dark:border-[#e3e8ef] dark:bg-[#f2f9f9]">
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
  </div>  )
}

export default Origin