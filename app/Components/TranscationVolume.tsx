import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import LineChart from "./Linearchart";
import Image from "next/image";
import { useStore } from "../Store";
import Data from "../assets/data.svg";
import { fetchTotalVolume, fetchTradeTotalVolume } from "../utils/helper";

const TranscationVolume = () => {
  const {
    setLoading,
    tradeData,
    setTradeData,
    isTradeTotalVolume,
    setIsTradeTotalVolume,
    isSelected,
  } = useStore();
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    const getOverallTranscationVolume = async () => {
      setLocalLoading(true);
      try {
        const overallData = await fetchTotalVolume();
        const overallTradeVolume = await fetchTradeTotalVolume();

        switch (isSelected) {
          case "Today":
            setTradeData(overallData?.today?.volume || 0);
            setIsTradeTotalVolume(overallTradeVolume?.today?.volume || 0);
            break;
          case "This Week":
            setTradeData(overallData?.last7Days?.volume || 0);
            setIsTradeTotalVolume(overallTradeVolume?.last7Days?.volume || 0);
            break;
          case "This Month":
            setTradeData(overallData?.last30Days?.volume || 0);
            setIsTradeTotalVolume(overallTradeVolume?.last30Days?.volume || 0);
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

    getOverallTranscationVolume();
  }, [isSelected]);

  const combinedData = (tradeData || 0) + (isTradeTotalVolume || 0);

  return (
    <div className="xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full rounded-2xl border-[0.063rem] border-[#FFFFFF1A] xxl:ml-2 xl:ml-2 sxl:ml-2 bxl:ml-2 lg:ml-2 md:ml-0 sm:ml-0 xd:ml-0 xxl:mt-0 xl:mt-0 bxl:mt-0 lg:mt-0 sxl:mt-0 md:mt-2 sm:mt-2 xd:mt-2 dark:border-[#e3e8ef] bg-[#111213] dark:bg-[#FCFDFE]">
      <div className="h-14 rounded-t-2xl bg-[#17181A] dark:bg-[#FCFDFE] p-4 font-extrabold text-[#A5A5A6] dark:text-[#777879] dark:border-[#e3e8ef] border-[#FFFFFF1A] border-b-[0.063rem]">
        Volume
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
              Number(combinedData).toFixed(3)
            )}
          </span>
        </div>
        <div className="text-[#777879] font-normal text-sm py-3 flex">
          <Image src={Data} alt="Data" />
          <p className="pl-2">Data</p>
        </div>
      </div>
      <LineChart
        tradeData={0}
        tradeTotalVolume={combinedData}
        activeWallets={0}
        period={isSelected}
        showTotalVolumeOnly={true}
      />
    </div>
  );
};

export default TranscationVolume;
