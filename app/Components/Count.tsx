import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import LineChart from "./Linearchart";
import Image from "next/image";
import { useStore } from "../Store";
import Data from "../assets/data.svg";
import {
  fetchOnchainSwapTotalCount,
  fetchTradeTotalCount,
  fetchSwapTotalCount,
} from "../utils/helper";

const Count: React.FC = () => {
  const {
    setLoading,
    isSelected,
    tradeCount,
    onchainTotalCount,
    setTradeCount,
    updateOnchainTotalCount,
    swapTotalCount,
    updateSwapTotalCount,
  } = useStore();

  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    const fetchTranscationCount = async () => {
      try {
        setLocalLoading(true);
        const overallTranscationCount = await fetchTradeTotalCount();
        const overallOnchainCount = await fetchOnchainSwapTotalCount();
        const overallSwapCount = await fetchSwapTotalCount();

        switch (isSelected) {
          case "Today":
            setTradeCount(overallTranscationCount?.today?.count || 0);
            updateOnchainTotalCount(overallOnchainCount?.today?.count || 0);
            updateSwapTotalCount(overallSwapCount?.today?.count || 0);
            break;
          case "This Week":
            setTradeCount(overallTranscationCount?.last7Days?.count || 0);
            updateOnchainTotalCount(overallOnchainCount?.last7Days?.count || 0);
            updateSwapTotalCount(overallSwapCount?.last7Days?.count || 0);
            break;
          case "This Month":
            setTradeCount(overallTranscationCount?.last30Days?.count || 0);
            updateOnchainTotalCount(overallOnchainCount?.last30Days?.count || 0);
            updateSwapTotalCount(overallSwapCount?.last30Days?.count || 0);
            break;
          default:
            break;
        }
      } catch (e) {
        console.log(e, "error fetching data");
      } finally {
        setLocalLoading(false);
      }
    };

    fetchTranscationCount();
  }, [isSelected]);

  const totalCount = tradeCount + onchainTotalCount + swapTotalCount;

  return (
    <div className="xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full rounded-2xl border-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] bg-[#111213] dark:bg-[#FCFDFE]">
      <div className="h-14 rounded-t-2xl bg-[#17181A] dark:bg-[#FCFDFE] p-4 font-extrabold text-[#A5A5A6] dark:text-[#777879] dark:border-[#e3e8ef] border-[#FFFFFF1A] border-b-[0.063rem]">
        Transaction Count
      </div>
      <div className="h-12 border-b-[0.063rem] dark:bg-[#f2f9f9] dark:border-[#e3e8ef] border-[#FFFFFF1A] p-[0rem_1rem_0rem_1rem] flex justify-between">
        <div className="flex py-3">
          <span className="text-[#777879] text-sm">Overall</span>
          <span className="text-[#FFFFFFCC] dark:text-[#4A4B4D] text-sm font-extrabold px-2">
            {localLoading ? (
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
              totalCount
            )}
          </span>
        </div>
        <div className="text-[#777879] font-normal text-sm py-3 flex">
          <Image src={Data} alt="Data" />
          <p className="pl-2">Data</p>
        </div>
      </div>
      <LineChart
        tradeData={totalCount}
        tradeTotalVolume={0}
        activeWallets={0}
        period={isSelected}
        showTradeDataOnly={true}
      />
    </div>
  );
};

export default Count;
