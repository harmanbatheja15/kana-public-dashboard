import { Skeleton } from "antd";
import React, { useEffect } from "react";
import LineChart from "./Linearchart";
import Image from "next/image";
import { useStore } from "../Store";
import Data from "../assets/data.svg";
import { fetchTradeActiveWallet } from "../utils/helper";

const Activewallets = () => {
  const {
    loading,
    setLoading,
    isTradeActiveWallets,
    setIsTradeActiveWallets,
    isSelected,
  } = useStore();

  useEffect(() => {
    const getActiveWallets = async () => {
      try {
        setLoading(true);
        const overallTradeActiveWallets = await fetchTradeActiveWallet();
        switch (isSelected) {
          case "Today":
            setIsTradeActiveWallets(
              overallTradeActiveWallets?.TotalActiveWalletsCount
            );

            break;
          case "This Week":
            setIsTradeActiveWallets(
              overallTradeActiveWallets?.TotalActiveWalletsCount
            );

            break;
          case "This Month":
            setIsTradeActiveWallets(
              overallTradeActiveWallets?.TotalActiveWalletsCount
            );

            break;
          default:
            break;
        }
        setLoading(false);
      } catch (e) {
        console.log(e, "error fetching data");
      }
    };
    getActiveWallets();
  }, [isSelected]);
  
  return (
    <div className=" xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full rounded-[1rem] border-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] bg-[#111213] dark:bg-[#FCFDFE]">
      <div className="h-[3.5rem] rounded-t-[1rem] bg-[#17181A] dark:bg-[#FCFDFE] p-3 font-[800] text-[#A5A5A6] dark:text-[#777879] border-[#FFFFFF1A] dark:border-[#e3e8ef] border-b-[0.063rem]">
        Total Active Wallets
      </div>
      <div className=" h-[3rem] border-b-[0.063rem]  dark:bg-[#f2f9f9] dark:border-[#e3e8ef] border-[#FFFFFF1A] p-[0rem_1rem_0rem_1rem] flex justify-between ">
        <div className=" flex py-3">
          <span className="text-[#777879] text-[0.875rem]">Overall</span>
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
      <LineChart
        tradeData={0}
        tradeTotalVolume={0}
        activeWallets={isTradeActiveWallets}
        period={isSelected}
        showActiveWalletsOnly={true}
      />
    </div>
  );
};

export default Activewallets;
