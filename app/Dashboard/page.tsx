"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import LineChart from "../Components/Linearchart";
import DonutChart from "../Components/Donutchart";
import Image from "next/image";
import DropDown from "../assets/DroopdownArrow.svg";
import Filter from "../assets/filter-lines.svg";
import CoinSwap from "../assets/coins-swap-02.svg";
import solana from "../assets/solana.svg";
import Aptos from "../assets/aptos.svg";
import Data from "../assets/data.svg";
import GreenDown from "../assets/greendropdown.svg";
import kanaloader from "@/app/kanaloader.json";
import {
  fetchOnchainSwapTotalCount,
  fetchswapTotalCount,
  fetchTotalVolume,
  fetchTradeTotalCount,
  fetchTradeTotalVolume,
  fetchTradeActiveWallet,
  fetchToptradingPairs,
  fetchTokenURL,
  fetchSwapTotalCount,
  fetchReportByDateRange,
} from "../utils/helper";
import { Skeleton } from "antd";
import { useStore } from "../Store";
import Lottie from "react-lottie-player";
const page = () => {
  const {
    isSelected,
    updateIsSelected,
    loading,
    setLoading,
    tradeCount,
    swapTotalCount,
    onchainTotalCount,
    tradeData,
    setTradeCount,
    updateSwapTotalCount,
    updateOnchainTotalCount,
    setTradeData,
    isTradeTotalVolume,
    setIsTradeTotalVolume,
    isTradeActiveWallets,
    setIsTradeActiveWallets,
  } = useStore();
  const handleButtonClick = (period: any) => {
    updateIsSelected(period);
  };
  const [topTradingPairs, setTopTradingPairs] = useState([]);
  const [isError, setIsError] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [rows, setRows] = useState([]);  

  useEffect(() => {
    const getOverallTransactionCount = async () => {
      try {
        setLoading(true);
        const overallData = await fetchTotalVolume();
        console.log("overallData: ", overallData);
        const overallCount = await fetchTradeTotalCount();
        console.log("overallCount: ", overallCount);
        const overallSwapCount = await fetchSwapTotalCount();
        console.log("overallSwapCount: ", overallSwapCount);
        const overallOnchainCount = await fetchOnchainSwapTotalCount();
        console.log("overallOnchainCount: ", overallOnchainCount);
        const overallTradeVolume = await fetchTradeTotalVolume();
        console.log("overallTradeVolume: ", overallTradeVolume);
        const overallTradeActiveWallets = await fetchTradeActiveWallet();
        console.log("overallTradeActiveWallets: ", overallTradeActiveWallets);
        const overallTradingPairs = await fetchToptradingPairs();
        console.log("overallTradingPairs: ", overallTradingPairs);

        switch (isSelected) {
          case "Today":
            setTradeData(overallData?.today?.volume);
            setTradeCount(overallCount?.today?.count);
            updateSwapTotalCount(overallSwapCount?.today?.count);
            updateOnchainTotalCount(overallOnchainCount?.today?.count);
            setIsTradeTotalVolume(overallTradeVolume?.today?.volume);
            setIsTradeActiveWallets(
              overallTradeActiveWallets?.TotalActiveWalletsCount
            );
            setTopTradingPairs(overallTradingPairs?.data?.lastDay || []);

            break;
          case "This Week":
            setTradeData(overallData?.last7Days?.volume);
            setTradeCount(overallCount?.last7Days?.count);
            updateSwapTotalCount(overallSwapCount?.last7Days?.count);
            updateOnchainTotalCount(overallOnchainCount?.last7Days?.count);
            setIsTradeTotalVolume(overallTradeVolume?.last7Days?.volume);
            setIsTradeActiveWallets(
              overallTradeActiveWallets?.TotalActiveWalletsCount
            );
            setTopTradingPairs(overallTradingPairs?.data?.last7Days || []);

            break;
          case "This Month":
            setTradeData(overallData?.last30Days?.volume);
            setTradeCount(overallCount?.last30Days?.count);
            updateSwapTotalCount(overallSwapCount?.last30Days?.count);
            updateOnchainTotalCount(overallOnchainCount?.last30Days?.count);
            setIsTradeTotalVolume(overallTradeVolume?.last30Days?.volume);
            setIsTradeActiveWallets(
              overallTradeActiveWallets?.TotalActiveWalletsCount
            );
            setTopTradingPairs(overallTradingPairs?.data?.last30Days || []);

            break;
          default:
            break;
        }
        // setTopTradingPairs(overallTradingPairs?.data?.last7Days || []);
        setLoading(false);
      } catch (e) {
        console.log(e, "error fetching data");
      }
    };

    getOverallTransactionCount();
  }, [isSelected]);

  return (
    <div className="w-full h-full flex flex-row justify-center items-center dark:bg-[#e4f2f3]  bg-[#0C0C0D] font-inter   ">
      <div className="flex flex-col  xxl:!w-[100%] bxl:!w-[100%] xl:!w-[90%] sxl:!w-[95.5%] lg:!w-[96%] md:!w-[100%] sm:!w-[100%] xd:!w-[100%]    ">
        <Navbar />
        <div className=" font-manrop h-full dark:bg-[#e4f2f3] w-full">
          <div className=" justify-center py-[1rem] h-full w-full flex xxl:flex-row xl:flex-row sxl:flex-row bxl:flex-row lg:flex-row md:flex-col sm:flex-col xd:flex-col  xxl:mt-[6.5rem] xl:mt-[6.5rem] lg:mt-[6.5rem] md:mt-[9rem] sm:mt-[6.5rem] xd:mt-[6.5rem] gap-[1rem] ">
            <div className="h-[4rem] w-full  xxl:rounded-[1rem] bxl:rounded-[1rem] xl:rounded-[1rem] sxl:rounded-[1rem] lg:rounded-[1rem] md:rounded-b-none sm:rounded-none xd:rounded-none dark:bg-[#FCFDFE] bg-[#17181A] p-[0%_2%] flex items-center justify-start gap-[1rem] xxl:flex xl:flex sxl:flex bxl:flex lg:flex md:hidden sm:hidden xd:hidden ">
              <div className=" font-[800] text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[1.5rem] flex justify-between w-full">
                <div>Stats</div>
                <div className="text-[#2ED3B7] font-[800] text-[0.75rem] flex">
                  <div
                    className={`flex justify-center items-center p-[0.5rem_1rem_0.5rem_1rem] cursor-pointer ${
                      isSelected === "Today"
                        ? "border-2 border-[#2ED3B7] rounded-[0.5rem]"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("Today")}
                  >
                    Today
                  </div>
                  <div
                    className={`flex justify-center items-center p-[0.5rem_1rem_0.5rem_1rem] cursor-pointer ${
                      isSelected === "This Week"
                        ? "border-2 border-[#2ED3B7] rounded-[0.5rem]"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("This Week")}
                  >
                    This Week
                  </div>
                  <div
                    className={`flex justify-center items-center p-[0.5rem_1rem_0.5rem_1rem] cursor-pointer ${
                      isSelected === "This Month"
                        ? "border-2 border-[#2ED3B7] rounded-[0.5rem]"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("This Month")}
                  >
                    This Month
                  </div>
                </div>
              </div>
            </div>
            <div className=" xxl:hidden sxl:hidden bxl:hidden lg:hidden md:flex-col sm:flex-col xd:flex-col justify-center items-center text-[#2ED3B7] font-[800]">
              <div className="h-[4rem] w-full rounded-[1rem] dark:bg-[#FCFDFE] bg-[#17181A]  gap-[1rem] flex justify-between p-5">
                <div>Overall</div>
                <Image src={GreenDown} alt="GreenDown" />
              </div>
              <div className="h-[4rem] w-full rounded-[1rem] dark:bg-[#FCFDFE] bg-[#17181A]  gap-[1rem] my-2 flex justify-between p-5">
                <div>This Week</div>
                <Image src={GreenDown} alt="GreenDown" />
              </div>
            </div>
          </div>
          <div></div>
          <div className=" w-full flex xxl:flex-row xl:flex-row sxl:flex-row lg:flex-row bxl:flex-row md:flex-col sm:flex-col xd:flex-col">
            <div className=" xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full rounded-[1rem] border-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] bg-[#111213] dark:bg-[#FCFDFE]">
              <div className="h-[3.5rem] rounded-t-[1rem] bg-[#17181A] dark:bg-[#FCFDFE] p-4 font-[800] text-[#A5A5A6] dark:text-[#777879] dark:border-[#e3e8ef] border-[#FFFFFF1A] border-b-[0.063rem]">
                Transaction Count
              </div>
              <div className=" h-[3rem] border-b-[0.063rem] dark:bg-[#f2f9f9] dark:border-[#e3e8ef] border-[#FFFFFF1A] p-[0rem_1rem_0rem_1rem] flex justify-between ">
                <div className=" flex py-3">
                  <span className="text-[#777879] text-[0.875rem]">
                    Overall
                  </span>
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[800] px-2">
                    {loading ? (
                      <Skeleton
                        active
                        paragraph={false}
                        title={{ width: 100 }}
                        style={{
                          backgroundColor: "#ffffff1a",
                          width: 50,
                          borderRadius: "1rem",
                          marginTop: "0.3rem",
                        }}
                      />
                    ) : (
                      tradeCount + onchainTotalCount + swapTotalCount
                    )}
                  </span>
                </div>
                <div className="text-[#777879] font-[400] text-[0.875rem] py-3 flex">
                  <Image src={Data} alt="Data" />
                  <p className=" pl-2">Data</p>
                </div>
              </div>
              <LineChart />
            </div>
            <div className=" xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full  rounded-[1rem] border-[0.063rem] border-[#FFFFFF1A] xxl:ml-2 xl:ml-2 sxl:ml-2 bxl:ml-2 lg:ml-2 md:ml-0 sm:ml-0 xd:ml-0 xxl:mt-0 xl:mt-0 bxl:mt-0 lg:mt-0 sxl:mt-0 md:mt-2 sm:mt-2 xd:mt-2 dark:border-[#e3e8ef] bg-[#111213] dark:bg-[#FCFDFE]">
              <div className="h-[3.5rem] rounded-t-[1rem] bg-[#17181A] dark:bg-[#FCFDFE] p-4 font-[800] text-[#A5A5A6] dark:text-[#777879] dark:border-[#e3e8ef] border-[#FFFFFF1A] border-b-[0.063rem]">
                Volume
              </div>
              <div className=" h-[3rem] border-b-[0.063rem]  dark:bg-[#f2f9f9] dark:border-[#e3e8ef] border-[#FFFFFF1A] p-[0rem_1rem_0rem_1rem] flex justify-between ">
                <div className=" flex py-3">
                  <span className="text-[#777879] text-[0.875rem]">
                    Overall
                  </span>
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[800] px-2">
                    {loading ? (
                      <Skeleton
                        active
                        paragraph={false}
                        title={{ width: 100 }}
                        style={{
                          backgroundColor: "#ffffff1a",
                          width: 50,
                          borderRadius: "1rem",
                          marginTop: "0.3rem",
                        }}
                      />
                    ) : (
                      tradeData + isTradeTotalVolume
                    )}
                  </span>
                </div>
                <div className="text-[#777879] font-[400] text-[0.875rem] py-3 flex">
                  <Image src={Data} alt="Data" />
                  <p className=" pl-2 ">Data</p>
                </div>
              </div>
              <LineChart />
            </div>
          </div>
          <div className=" w-full flex xxl:flex-row xl:flex-row sxl:flex-row lg:flex-row bxl:flex-row md:flex-col sm:flex-col xd:flex-col my-4">
            <div className=" xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full rounded-[1rem] border-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] bg-[#111213] dark:bg-[#FCFDFE]">
              <div className="h-[3.5rem] rounded-t-[1rem] bg-[#17181A] dark:bg-[#FCFDFE] p-3 font-[800] text-[#A5A5A6] dark:text-[#777879] border-[#FFFFFF1A] dark:border-[#e3e8ef] border-b-[0.063rem]">
                Total Active Wallets
              </div>
              <div className=" h-[3rem] border-b-[0.063rem]  dark:bg-[#f2f9f9] dark:border-[#e3e8ef] border-[#FFFFFF1A] p-[0rem_1rem_0rem_1rem] flex justify-between ">
                <div className=" flex py-3">
                  <span className="text-[#777879] text-[0.875rem]">
                    Overall
                  </span>
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[800] px-2">
                    {loading ? (
                      <Skeleton
                        active
                        paragraph={false}
                        title={{ width: 100 }}
                        style={{
                          backgroundColor: "#ffffff1a",
                          width: 50,
                          borderRadius: "1rem",
                          marginTop: "0.3rem",
                        }}
                      />
                    ) : (
                      isTradeActiveWallets
                    )}
                  </span>
                </div>
                <div className="text-[#777879] font-[400] text-[0.875rem] py-3 flex">
                  <Image src={Data} alt="Data" />
                  <p className=" pl-2 ">Data</p>
                </div>
              </div>
              <LineChart />
            </div>
            <div className=" xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full h-[28rem] rounded-[1rem] border-[0.063rem] border-[#FFFFFF1A] xxl:ml-2 xl:ml-2 sxl:ml-2 bxl:ml-2 lg:ml-2 md:ml-0 sm:ml-0 xd:ml-0 xxl:mt-0 xl:mt-0 bxl:mt-0 lg:mt-0 sxl:mt-0 md:mt-2 sm:mt-2 xd:mt-2 bg-[#111213] dark:bg-[#FCFDFE]">
              <div className="h-[3.5rem] rounded-t-[1rem] bg-[#17181A] dark:bg-[#FCFDFE] p-4 font-[800] text-[#A5A5A6] dark:text-[#777879] border-[#FFFFFF1A] dark:border-[#e3e8ef] border-b-[0.063rem]">
                Total Unique Wallets
              </div>
              <div className=" h-[3rem] border-b-[0.063rem]  dark:bg-[#f2f9f9] dark:border-[#e3e8ef] border-[#FFFFFF1A] p-[0rem_1rem_0rem_1rem] flex justify-between ">
                <div className=" flex py-3">
                  <span className="text-[#777879] text-[0.875rem]">
                    Overall
                  </span>
                  <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-[0.875rem] font-[800] px-2">
                    {loading ? (
                      <Skeleton
                        active
                        paragraph={false}
                        title={{ width: 100 }}
                        style={{
                          backgroundColor: "#ffffff1a",
                          width: 50,
                          borderRadius: "1rem",
                          marginTop: "0.3rem",
                        }}
                      />
                    ) : (
                      isTradeActiveWallets
                    )}
                  </span>
                </div>
                <div className="text-[#777879] font-[400] text-[0.875rem] py-3 flex">
                  <Image src={Data} alt="Data" />
                  <p className=" pl-2 ">Data</p>
                </div>
              </div>
              <LineChart />
            </div>
          </div>
          <div className=" w-full flex xxl:flex-row xl:flex-row sxl:flex-row lg:flex-row bxl:flex-row md:flex-col sm:flex-col xd:flex-col my-4">
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
            </div>
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
          </div>
          <div className=" w-full flex xxl:flex-row xl:flex-row sxl:flex-row lg:flex-row bxl:flex-row md:flex-col sm:flex-col xd:flex-col my-4">
            <div className=" xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full rounded-[1rem] border-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] bg-[#111213] dark:bg-[#FCFDFE]">
              <div className="h-[3.5rem] rounded-t-[1rem] bg-[#17181A] dark:bg-[#FCFDFE] p-3 font-[800] text-[#A5A5A6] dark:text-[#777879] border-[#FFFFFF1A] dark:border-[#e3e8ef] border-b-[0.063rem] flex justify-between">
                <div className=" p-1">Top Trading Pair</div>
                <div
                  className=" flex p-2 cursor-pointer"
                  onClick={() => handleButtonClick("This Week")}
                >
                  <Image src={Filter} alt="Filter" className="" />
                  <span className=" text-[#2ED3B7] font-[800] text-[0.75rem] pl-2">
                    This week
                  </span>
                </div>
              </div>
              <div className=" dark:bg-[#f2f9f9]">
                <div className="flex justify-between text-[0.875rem] font-[800] text-[#A5A5A6] dark:text-[#4A4B4D] border-b-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] h-[3rem] p-3">
                  <div className=" w-[15%]">#</div>
                  <div className="w-[35%]">Name</div>
                  <div className="w-[30%]">Volume</div>
                  <div className=" w-[20%]"></div>
                </div>
                <div>
                  {loading ? (
                    <div className=" flex justify-center items-center align-middle">
                      <Lottie
                        loop
                        animationData={kanaloader}
                        play
                        style={{ width: 100, height: 100 }}
                      />
                    </div>
                  ) : (
                    topTradingPairs?.length > 0 &&
                    topTradingPairs.map((items: any, index: any) => (
                      <div
                        key={index}
                        className="flex justify-between text-[0.875rem] font-[800] text-[#A5A5A6] dark:text-[#4A4B4D] border-b-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] h-[3rem] p-3"
                      >
                        <div className="w-[15%]">{index + 1}</div>
                        <div className="w-[35%] flex justify-start">
                          {/* <Image src={solana} alt="Solana" />
                          <Image src={Aptos} alt="Aptos" className="ml-2" /> */}
                          <div className="text-[#FFFFFF] dark:text-[#4A4B4D] text-[0.875rem] font-[800] font-manrop">
                            {items.tokenName}
                          </div>
                        </div>
                        <div className=" w-[30%]">
                          {items.totalTargetVolume.toFixed(2)}
                        </div>
                        <div className="w-[20%] flex justify-center">
                          <Image src={CoinSwap} alt="CoinSwap" />
                          <a
                            href="https://app.kanalabs.io/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="text-[#2ED3B7] font-[800] text-[0.875rem] pl-3">
                              Swap
                            </div>
                          </a>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
