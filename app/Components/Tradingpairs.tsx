import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useStore } from '../Store';
import { fetchToptradingPairs } from '../utils/helper';
import ClickAwayListener from 'react-click-away-listener';
import Lottie from 'react-lottie-player';
import kanaloader from '@/app/kanaloader.json';
import Filter from '../assets/filter-lines.svg';
import CoinSwap from '../assets/coins-swap-02.svg';

const Tradingpairs = () => {
	const { isSelected, updateIsSelected, loading, setLoading } = useStore();
	const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
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
					case 'Today':
						setTopTradingPairs(
							overallTradingPairs?.data?.lastDay || []
						);
						break;

					case 'This Week':
						setTopTradingPairs(
							overallTradingPairs?.data?.last7Days || []
						);
						break;

					case 'This Month':
						setTopTradingPairs(
							overallTradingPairs?.data?.last30Days || []
						);
						break;

					default:
						break;
				}
				setLoading(false);
			} catch (e) {
				console.log(e, 'error fetching data');
			}
		};
		getTradingPairs();
	}, [isSelected]);

	return (
		<div className='w-full flex xxl:flex-row xl:flex-row sxl:flex-row lg:flex-row bxl:flex-row md:flex-col sm:flex-col xd:flex-col my-4'>
			<div className=' xxl:w-1/2 sxl:w-1/2 bxl:w-1/2 lg:w-1/2 md:w-full sm:w-full xd:w-full rounded-2xl border-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] bg-[#111213] dark:bg-[#FCFDFE]'>
				<div className='relative h-14 rounded-t-2xl bg-[#17181A] dark:bg-[#FCFDFE] p-3 font-extrabold text-[#A5A5A6] dark:text-[#777879] border-[#FFFFFF1A] dark:border-[#e3e8ef] border-b-[0.063rem] flex justify-between'>
					<div className='p-1'>Top Trading Pair</div>
					<ClickAwayListener
						onClickAway={() => setIsFilterDropdownOpen(false)}
					>
						<div>
							<div
								className='flex p-2 cursor-pointer'
								onClick={() =>
									setIsFilterDropdownOpen(
										!isFilterDropdownOpen
									)
								}
							>
								<Image src={Filter} alt='Filter' className='' />
								<span className='text-[#2ED3B7] font-extrabold text-xs pl-2'>
									{isSelected}
								</span>
							</div>
							{isFilterDropdownOpen && (
								<div className='absolute right-0 top-10 bg-[#17181A] dark:bg-[#FCFDFE] w-40 rounded-lg shadow-md mt-2 border border-[#FFFFFF1A] dark:border-[#e3e8ef]'>
									<div
										className='p-2 cursor-pointer text-[#2ED3B7] hover:bg-[#2ED3B7] hover:text-[#17181A] rounded-t-lg'
										onClick={() => {
											handleButtonClick('Today');
											setIsFilterDropdownOpen(false);
										}}
									>
										<div className='font-extrabold text-xs pl-2'>
											Today
										</div>
									</div>
									<div
										className='p-2 cursor-pointer text-[#2ED3B7] hover:bg-[#2ED3B7] hover:text-[#17181A]'
										onClick={() => {
											handleButtonClick('This Week');
											setIsFilterDropdownOpen(false);
										}}
									>
										<div className='font-extrabold text-xs pl-2'>
											This Week
										</div>
									</div>
									<div
										className='p-2 cursor-pointer text-[#2ED3B7] hover:bg-[#2ED3B7] hover:text-[#17181A] rounded-b-lg'
										onClick={() => {
											handleButtonClick('This Month');
											setIsFilterDropdownOpen(false);
										}}
									>
										<div className='font-extrabold text-xs pl-2'>
											This Month
										</div>
									</div>
								</div>
							)}
						</div>
					</ClickAwayListener>
				</div>
				<div className='dark:bg-[#f2f9f9]'>
					<div className='flex justify-between text-sm font-extrabold text-[#A5A5A6] dark:text-[#4A4B4D] border-b-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] h-12 p-3'>
						<div className='w-[15%]'>#</div>
						<div className='w-[35%]'>Name</div>
						<div className='w-[30%]'>Volume</div>
						<div className='w-[20%]'></div>
					</div>
					<div>
						{loading ? (
							<div className='flex justify-center items-center align-middle'>
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
									className='flex justify-between text-sm font-extrabold text-[#A5A5A6] dark:text-[#4A4B4D] border-b-[0.063rem] border-[#FFFFFF1A] dark:border-[#e3e8ef] h-12 p-3'
								>
									<div className='w-[15%]'>{index + 1}</div>
									<div className='w-[35%] flex justify-start'>
										{/* <Image src={solana} alt="Solana" />
                  <Image src={Aptos} alt="Aptos" className="ml-2" /> */}
										<div className='flex items-center text-[#FFFFFF] dark:text-[#4A4B4D] text-sm font-extrabold font-manrop'>
											<img
												src={`${
													items.tokenName === 'APT'
														? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKX0VVgxldJmuDo_7lTxhnhqsTXlyTZcARQ&s'
														: items.tokenName ===
														  'ARB'
														? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDySPKR3Yj-wBY3VbDmQhI6RrFn49tzr-HA&s'
														: items.tokenName ===
														  'ETH'
														? 'https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png'
														: items.tokenName ===
														  'USDC'
														? 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png'
														: items.tokenName ===
														  'SOL'
														? 'https://cryptologos.cc/logos/solana-sol-logo.png'
														: items.tokenName ===
														  'USDT'
														? 'https://cryptologos.cc/logos/tether-usdt-logo.png'
														: items.tokenName ===
														  'GUI'
														? 'https://s2.coinmarketcap.com/static/img/coins/200x200/28851.png'
														: items.tokenName ===
														  'stAPT'
														? 'https://s2.coinmarketcap.com/static/img/coins/64x64/22290.png'
														: items.tokenName ===
														  'CHEWY'
														? 'https://s2.coinmarketcap.com/static/img/coins/64x64/30840.png'
														: items.tokenName ===
														  'amAPT'
														? ''
														: items.tokenName ===
														  'zWETH'
														? ''
														: items.tokenName ===
														  'zUSDC'
														? ''
														: items.tokenName ===
														  'zUSDT'
														? ''
														: ''
												}`}
												alt={items.tokenName}
												className='w-4 h-4 mr-2 rounded-full'
											/>
											{items.tokenName}
										</div>
									</div>
									<div className=' w-[30%]'>
										{items.totalTargetVolume.toFixed(2)}
									</div>
									<div className='w-[20%] flex justify-center'>
										<Image src={CoinSwap} alt='CoinSwap' />
										<a
											href='https://app.kanalabs.io/'
											target='_blank'
											rel='noreferrer'
										>
											<div className='text-[#2ED3B7] font-extrabold text-sm pl-3'>
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
