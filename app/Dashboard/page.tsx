"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";
import GreenDown from "../assets/greendropdown.svg";
import { useStore } from "../Store";
import Count from "../Components/Count";
import TranscationVolume from "../Components/TranscationVolume";
import Activewallets from "../Components/Activewallets";
import Uniquewallets from "../Components/Uniquewallets";
import Tradingpairs from "../Components/Tradingpairs";
import Origin from "../Components/Origin";
import Desitinationchain from "../Components/Desitinationchain";

const page = () => {
  const { isSelected, updateIsSelected } = useStore();
  const handleButtonClick = (period: any) => {
    updateIsSelected(period);
  };

  return (
    <div className="w-full h-full flex flex-row justify-center items-center dark:bg-[#e4f2f3]  bg-[#0C0C0D] font-inter   ">
      <div className="flex flex-col  xxl:!w-full bxl:!w-full xl:!w-[90%] sxl:!w-[95.5%] lg:!w-[96%] md:!w-full sm:!w-full xd:!w-full">
        <Navbar />
        <div className=" font-manrop h-full dark:bg-[#e4f2f3] w-full">
          <div className=" justify-center py-4 h-full w-full flex xxl:flex-row xl:flex-row sxl:flex-row bxl:flex-row lg:flex-row md:flex-col sm:flex-col xd:flex-col  xxl:mt-[6.5rem] xl:mt-[6.5rem] lg:mt-[6.5rem] md:mt-36 sm:mt-[6.5rem] xd:mt-[6.5rem] gap-4 ">
            <div className="h-16 w-full  xxl:rounded-2xl bxl:rounded-2xl xl:rounded-2xl sxl:rounded-2xl lg:rounded-2xl md:rounded-b-none sm:rounded-none xd:rounded-none dark:bg-[#FCFDFE] bg-[#17181A] p-[0%_2%] flex items-center justify-start gap-4 xxl:flex xl:flex sxl:flex bxl:flex lg:flex md:hidden sm:hidden xd:hidden ">
              <div className=" font-extrabold text-[#FFFFFFCC] dark:text-[#4A4B4D] text-2xl flex justify-between w-full">
                <div>Stats</div>
                <div className="text-[#2ED3B7] font-extrabold text-xs flex">
                  <div
                    className={`flex justify-center items-center p-[0.5rem_1rem_0.5rem_1rem] cursor-pointer ${
                      isSelected === "Today"
                        ? "border-2 border-[#2ED3B7] rounded-lg"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("Today")}
                  >
                    Today
                  </div>
                  <div
                    className={`flex justify-center items-center p-[0.5rem_1rem_0.5rem_1rem] cursor-pointer ${
                      isSelected === "This Week"
                        ? "border-2 border-[#2ED3B7] rounded-lg"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("This Week")}
                  >
                    This Week
                  </div>
                  <div
                    className={`flex justify-center items-center p-[0.5rem_1rem_0.5rem_1rem] cursor-pointer ${
                      isSelected === "This Month"
                        ? "border-2 border-[#2ED3B7] rounded-lg"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("This Month")}
                  >
                    This Month
                  </div>
                </div>
              </div>
            </div>
            <div className=" xxl:hidden sxl:hidden bxl:hidden lg:hidden md:flex-col sm:flex-col xd:flex-col justify-center items-center text-[#2ED3B7] font-extrabold">
              <div className="h-16 w-full rounded-2xl dark:bg-[#FCFDFE] bg-[#17181A]  gap-4 flex justify-between p-5">
                <div>Overall</div>
                <Image src={GreenDown} alt="GreenDown" />
              </div>
              <div className="h-16 w-full rounded-2xl dark:bg-[#FCFDFE] bg-[#17181A]  gap-4 my-2 flex justify-between p-5">
                <div>This Week</div>
                <Image src={GreenDown} alt="GreenDown" />
              </div>
            </div>
          </div>
          <div></div>
          <div className=" w-full flex xxl:flex-row xl:flex-row sxl:flex-row lg:flex-row bxl:flex-row md:flex-col sm:flex-col xd:flex-col">
            <Count />
            <TranscationVolume />
          </div>
          <div className=" w-full flex xxl:flex-row xl:flex-row sxl:flex-row lg:flex-row bxl:flex-row md:flex-col sm:flex-col xd:flex-col my-4">
            <Activewallets />
            <Uniquewallets />
          </div>
          <div className=" w-full flex xxl:flex-row xl:flex-row sxl:flex-row lg:flex-row bxl:flex-row md:flex-col sm:flex-col xd:flex-col my-4">
            <Origin />
            <Desitinationchain />
          </div>
          <Tradingpairs />
        </div>
      </div>
    </div>
  );
};

export default page;
