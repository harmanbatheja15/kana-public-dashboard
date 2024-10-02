import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DropDown from '../assets/DroopdownArrow.svg';
import OriginDonutChart from './OriginDonutChart';
import { useStore } from '../Store';
import { fetchChainPopularity } from '../utils/helper';
import Lottie from "react-lottie-player";
import kanaloader from "@/app/kanaloader.json";

interface ChainData {
  originChain: string;
  destinationChain?: string;
  totalVolume: number;
  source: string;
}

interface AggregatedChainData {
  [chain: string]: number;
}

const Origin = () => {
  const { chainPopularityOrigin, setChainPopularityOrigin, isSelected } = useStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
	const getChainPopularityOrigin = async () => {
	  try {
		setLoading(true);
		const chainOrigin = await fetchChainPopularity();
		
		if (chainOrigin) {
		  let selectedData;
		  switch (isSelected) {
			case 'Today':
			  selectedData = chainOrigin.today;
			  break;
			case 'This Week':
			  selectedData = chainOrigin.last7Days;
			  break;
			case 'This Month':
			  selectedData = chainOrigin.last30Days;
			  break;
			default:
			  selectedData = chainOrigin.last7Days;
			  break;
		  }
		  setChainPopularityOrigin(selectedData);
		//   console.log('chainPopularityOrigin: ', selectedData);
		} else {
		  console.log('No data received from fetchChainPopularity');
		}
		
		setLoading(false);
	  } catch (e) {
		console.error('Error fetching data:', e);
		setLoading(false);
	  }
	};
  
	getChainPopularityOrigin();
  }, [isSelected]);

  const processChainData = (data: ChainData[] | null): { labels: string[], volumes: number[], colors: string[] } => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      return { labels: [], volumes: [], colors: [] };
    }
	
	const colorPalette = [
      '#00B3FF', '#FF007A', '#FFC700', '#FF8400', '#00FF85', '#8E00FF',
      '#FF4D6A', '#45FFBC', '#B28DFF', '#FF6B6B', '#4ECDC4', '#FFA07A'
    ];

    // Aggregate data by unique chains
    const aggregatedData: AggregatedChainData = data.reduce((acc, item) => {
      const chain = item.originChain.toLowerCase(); // Normalize chain names
      acc[chain] = (acc[chain] || 0) + item.totalVolume;
      return acc;
    }, {} as AggregatedChainData);

    // Sort chains by volume
    const sortedChains = Object.entries(aggregatedData)
      .sort(([, a], [, b]) => b - a);

    const labels = sortedChains.map(([chain]) => chain);
    const volumes = sortedChains.map(([, volume]) => volume);
	const colors = labels.map((_, index) => colorPalette[index % colorPalette.length]);

    return { labels, volumes, colors };
  };

  const { labels, volumes, colors } = processChainData(chainPopularityOrigin);

  return (
    <div className=" xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full rounded-[1rem] border-[0.063rem] border-[#FFFFFF1A] bg-[#111213] dark:bg-[#FCFDFE]">
      <div className="h-[3.5rem] rounded-t-[1rem] bg-[#17181A] dark:bg-[#FCFDFE] p-4 font-[800] text-[#A5A5A6] dark:text-[#777879] border-[#FFFFFF1A] dark:border-[#e3e8ef] border-b-[0.063rem] flex justify-between">
        <div>Chain popularity (Origin)</div>
        <div className=" flex p-1 cursor-pointer">
          <span className=" text-[#2ED3B7] font-[800] text-[0.75rem]">
            Volume
          </span>
          <Image src={DropDown} alt="DropDown" className=" ml-1 mt-0.5" />
        </div>
      </div>
      <div className=" h-[2.25rem] border-b-[0.063rem] border-[#FFFFFF1A] bg-[#111213] dark:border-[#e3e8ef] dark:bg-[#f2f9f9]">
        <div className="flex justify-between p-[0.5%_17%]">
		  {labels.map((label, index) => (
			<div key={index} className="flex items-center text-[#A5A5A6] dark:text-[#777879] font-[800] text-[0.75rem]">
				<span className="inline-block w-3 h-3 rounded-full mr-1" style={{ backgroundColor: colors[index] }}></span>
				{label}
			</div>
		  ))}
        </div>
      </div>
	  {loading ? (
		<div className="flex justify-center items-center align-middle h-[310.93px]">
		  <Lottie
			loop
			animationData={kanaloader}
			play
			style={{ width: 50, height: 50 }}
		  />
		</div>
	  ) : <OriginDonutChart labels={labels} volumes={volumes} colors={colors} />}
    </div>
  );
};

export default Origin;
