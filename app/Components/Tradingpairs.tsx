import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useStore } from "../Store";
import Filter from "../assets/filter-lines.svg";
import { fetchToptradingPairs } from "../utils/helper";
import Lottie from "react-lottie-player";
import kanaloader from "@/app/kanaloader.json";
import CoinSwap from "../assets/coins-swap-02.svg";

const Tradingpairs = () => {
  const { isSelected, updateIsSelected, loading, setLoading } = useStore();
  const [topTradingPairs, setTopTradingPairs] = useState([]);

  const handleButtonClick = (period: any) => {
    updateIsSelected(period);
  };
  
  useEffect(() => {
    const getTradingPairs = async () => {
      try {
        setLoading(true);
        const overallTradingPairs = await fetchToptradingPairs();
        switch (isSelected) {
          case "Today":
            setTopTradingPairs(overallTradingPairs?.data?.lastDay || []);

            break;
          case "This Week":
            setTopTradingPairs(overallTradingPairs?.data?.last7Days || []);

            break;
          case "This Month":
            setTopTradingPairs(overallTradingPairs?.data?.last30Days || []);

            break;
          default:
            break;
        }
        setLoading(false);
      } catch (e) {
        console.log(e, "error fetching data");
      }
    };
    getTradingPairs();
  }, [isSelected]);
  
  return (
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
                  style={{ width: 50, height: 50 }}
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
  );
};

export default Tradingpairs;
