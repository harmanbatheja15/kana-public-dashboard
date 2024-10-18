"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dark from "../assets/Dark.svg";
import Light from "../assets/Light.svg";
import { useTheme } from "next-themes";
import Logo from "../assets/Logo.svg";
import wrongRed from "../assets/x-close.svg";
import Sandwichmenu from "../assets/sandwich-menu.svg";
import MenuLight from "../assets/menu-light.svg";
import Swap from "../assets/coins-swap-02.svg";
import coinsLight from "../assets/coins-swap-01-light.svg";
import Logout from "../assets/Logoff.svg";
import ReferralDark from "../assets/referral_dark.svg";
import Referral from "../assets/referral.svg";
import Trade from "../assets/Trade.svg";
import TradeDark from "../assets/bar-chart-square-dark.svg";
import Switch from "../assets/switch_icon.svg";
import SwitchDark from "../assets/switch_dark.svg";
import Stake from "../assets/stack_icon.svg";
import StakeDark from "../assets/stack_icon_dark.svg";
import LeaderboardDark from "../assets/leader_board_dark.svg";
import Leaderboard from "../assets/leader_board.svg";
import ChevronDown from "../assets/chevron-down.svg";
import ChevronDownDark from "../assets/chevron-down-dark.svg";
import GreenDown from "../assets/greendropdown.svg";
import Back from "../assets/back dark.svg";
import MobileLogo from "../assets/MobileLogo.svg";
import ClickAwayListener from "react-click-away-listener";
import { Store } from "../Store/types";
import { useStore } from "../Store";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isLeaderBoard, setIsLeaderBoard] = useState(false);
  const [isAllTokenDropdwon, setIsAllTokenDropdwon] = useState(false);
  const [isOverallDropdown, setIsOverallDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Tokens");
  const{setOverallOptions,overallOptions}=useStore();

  const handleLeaderBoard = () => {
    if (isLeaderBoard === false) {
      setIsLeaderBoard(true);
    } else {
      setIsLeaderBoard(false);
    }
  };
  const handleClickAway = () => {
    isOverallDropdown && setIsOverallDropdown(false);
    isAllTokenDropdwon && setIsAllTokenDropdwon(false);
  };
  const handleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  const handleTokenDropdowwn = () => {
    setIsAllTokenDropdwon(!isAllTokenDropdwon);
  };
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsAllTokenDropdwon(false);
  };
  const handleOverallDropdowwn = () => {
    setIsOverallDropdown(!isOverallDropdown);
  };
  const handleOverallOption = (tokenoptions: any) => {
    setOverallOptions(tokenoptions);
    setIsOverallDropdown(false);
  };
  const options = ["All Tokens", "Token 1", "Token 2", "Token 3"];
  const tokenoptions = ["Overall", "TradeBook", "Swap", "OnchainSwap"];
  return (
    <div className="  xxl:!w-[95%] bxl:!w-[95%] xl:!w-[90%] sxl:!w-[90%] lg:!w-[96%] md:!w-full sm:!w-full xd:!w-full z-[1] fixed top-0 !font-manrop ">
      <div className=" flex justify-between items-start w-full !font-manrop  ">
        <div className="h-[6.5rem] w-full  xxl:rounded-b-2xl bxl:rounded-b-2xl xl:rounded-b-2xl sxl:rounded-b-2xl lg:rounded-b-2xl md:rounded-b-none sm:rounded-none xd:rounded-none dark:bg-[#FCFDFE] bg-[#111213] p-[0%_2%] flex items-center justify-start gap-4 ">
          <div className="xxl:hidden xl:hidden sxl:hidden bxl:hidden lg:hidden md:flex sm:flex xd:flex w-full justify-between">
            <div className="flex">
              <Image src={MobileLogo} alt="Logo" />
              <div className="gap-2 text-[#FFFFFFCC] dark:text-[#4A4B4D] p-5 font-extrabold text-sm !font-manrop">
                Stats
              </div>
            </div>
            <div className="flex">
              <div onClick={handleMobileMenu} className=" flex">
                {isMobileMenuActive ? (
                  <Image src={wrongRed} alt="wrongRed" className=" ml-4" />
                ) : (
                  <Image
                    src={theme === "light" ? Sandwichmenu : MenuLight}
                    alt="Sandwichmenu"
                  />
                )}
              </div>
            </div>
          </div>
          <div className=" xxl:w-[32%] bxl:w-[32%] xl:w-[32%] sxl:w-[32%] lg:w-[32%]  h-14 rounded-2xl dark:bg-[#EFF7F8] bg-[#1D1E20]  2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden">
            <div className="">
              <a href="https://kanalabs.io/" rel="noreferrer">
                <div className="flex  cursor-pointer p-4">
                  <Image src={Back} alt="Back" />
                  <div className="font-bold text-[#2ED3B7] dark:text-[#777879] pl-2">
                    Back to Home
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="flex flex-row justify-center items-center cursor-pointer xxl:w-[32%] bxl:w-[32%] xl:w-[32%] sxl:w-[32%] lg:w-[32%] h-14 rounded-2xl dark:bg-[#EFF7F8] bg-[#1D1E20] gap-4 2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden"
            onClick={handleTokenDropdowwn}
          >
            <div className="flex flex-row justify-between items-center flex-wrap p-4">
              <div className="font-bold text-[#2ED3B7] dark:text-[#777879] pl-2">
                {selectedOption}
              </div>
              <Image src={GreenDown} alt="GreenDown" />
            </div>
            {isAllTokenDropdwon && (
              <ClickAwayListener onClickAway={handleClickAway}>
                <div className="cursor-pointer w-full mt-3 h-auto max-h-[10rem] overflow-auto rounded-2xl dark:bg-[#EFF7F8] bg-[#1D1E20] gap-4">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      className="font-bold text-[#2ED3B7] dark:text-[#777879] p-4"
                      onClick={() => handleSelectOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </ClickAwayListener>
            )}
          </div>

          <div
            className="flex flex-row justify-center items-center cursor-pointer xxl:w-[32%] bxl:w-[32%] xl:w-[32%] sxl:w-[32%] lg:w-[32%] h-14 rounded-2xl dark:bg-[#EFF7F8] bg-[#1D1E20] gap-4 2xl:inline xl:inline lg:inline md:hidden sm:hidden xd:hidden"
            onClick={handleOverallDropdowwn}
          >
            <div className="flex flex-row justify-between items-center flex-wrap p-4">
              <div className="font-bold text-[#2ED3B7] dark:text-[#777879] pl-2">
                {overallOptions}
              </div>
              <Image src={GreenDown} alt="GreenDown" />
            </div>

            {isOverallDropdown && (
              <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                  <div className="cursor-pointer w-full mt-3 h-auto max-h-[10rem] overflow-auto rounded-2xl dark:bg-[#EFF7F8] bg-[#1D1E20] gap-4">
                    {tokenoptions.map((option, index) => (
                      <div
                        key={index}
                        className="font-bold text-[#2ED3B7] dark:text-[#777879] p-4"
                        onClick={() => handleOverallOption(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              </ClickAwayListener>
            )}
          </div>

          <div
            className="dark:bg-[#e4f2f3] dark:text-[#0C0C0D] bg-[#1D1E20] font-inter !rounded-2xl text-[#777879]  font-extrabold  h-14   py-4 px-6 flex flex-row justify-between gap-4 items-center  cursor-pointer xxl:flex sxl:flex bxl:flex xl:flex lg:flex md:hidden sm:hidden xd:hidden "
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Image
              src={theme === "light" ? Dark : Light}
              alt="/"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {isMobileMenuActive && (
        <ul
          className={`flex-1 flex flex-col w-full justify-between items-start py-3 mt-24 xxl:hidden bxl:hidden xl:hidden sxl:hidden lg:flex md:flex md:pb-0 md:mt-24 sm:mt-24 xd:mt-24 z-[1] h-full fixed ${
            isMobileMenuActive
              ? "!fixed !right-0 !left-0   lg:!bottom-0 md:!bottom-24 sm:!bottom-24 xd:!bottom-24 !top-0	!bg-[#17181A] dark:!bg-[#FCFDFE] "
              : "hidden"
          }`}
        >
          <div className="flex flex-col  items-start justify-start align-middle  h-full  w-full lg:!px-4 md:!px-4 sm:!px-4 xd:!px-4 !bg-transparent">
            <div className="flex flex-col justify-start items-start bg-transparent w-full gap-2">
              <a
                rel="noreferrer"
                href=" https://app.kanalabs.io/"
                target="_blank"
                className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-4"
              >
                <div className=" menu-item my-1 cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-base   flex flex-row justify-start items-center py-4 px-[1.4rem] rounded-2xl hover:bg-[rgba(255,255,255,0.06)] hover:opacity-100 hover:text-[white] hover:font-bold gap-4 font-extrabold opacity-50">
                  <div className=" flex flex-row justify-start items-center gap-4">
                    <Image
                      className="bg-transparent  !h-4"
                      src={theme === "light" ? Swap : coinsLight}
                      alt="Swap"
                    />
                    <div>Swap</div>
                  </div>
                </div>
              </a>
              <a
                rel="noreferrer"
                href="https://tradebook.kanalabs.io/"
                target="_blank"
                className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-4"
              >
                <div className=" menu-item my-1 cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-base   flex flex-row justify-start items-center py-4 px-[1.4rem] rounded-2xl hover:bg-[rgba(255,255,255,0.06)] hover:opacity-100 hover:text-[white] hover:font-bold gap-4 font-extrabold opacity-50">
                  <div className=" flex flex-row justify-start items-center gap-4">
                    <Image
                      className="bg-transparent  !h-4"
                      src={theme === "dark" ? Trade : TradeDark}
                      alt="Swap"
                    />
                    <div>Trade</div>
                  </div>
                </div>
              </a>
              <a
                rel="noreferrer"
                href="https://operps.kanalabs.io/"
                target="_blank"
                className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-4"
              >
                <div className=" menu-item my-1 cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-base   flex flex-row justify-start items-center py-4 px-[1.4rem] rounded-2xl hover:bg-[rgba(255,255,255,0.06)] hover:opacity-100 hover:text-[white] hover:font-bold gap-4 font-extrabold opacity-50">
                  <div className=" flex flex-row justify-start items-center gap-4">
                    <Image
                      className="bg-transparent  !h-4"
                      src={theme === "dark" ? SwitchDark : Switch}
                      alt="Swap"
                    />
                    <div>OPerps</div>
                  </div>
                </div>
              </a>
              <a
                rel="noreferrer"
                href="https://app.kanalabs.io/stake-yield"
                target="_blank"
                className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-4"
              >
                <div className=" menu-item my-1 cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-base   flex flex-row justify-start items-center py-4 px-[1.4rem] rounded-2xl hover:bg-[rgba(255,255,255,0.06)] hover:opacity-100 hover:text-[white] hover:font-bold gap-4 font-extrabold opacity-50">
                  <div className=" flex flex-row justify-start items-center gap-4">
                    <Image
                      className="bg-transparent  !h-4"
                      src={theme === "dark" ? StakeDark : Stake}
                      alt="Swap"
                    />
                    <div>Stake</div>
                  </div>
                </div>
              </a>

              <div className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-4">
                <div className=" menu-item my-1 cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-base   flex flex-row justify-start items-center py-4 px-[1.4rem] rounded-2xl hover:bg-[rgba(255,255,255,0.06)] hover:opacity-100 hover:text-[white] hover:font-bold gap-4 font-extrabold opacity-50">
                  <div
                    className=" flex flex-row justify-between w-full items-center"
                    onClick={handleLeaderBoard}
                  >
                    <div className=" flex flex-row justify-start items-center gap-4">
                      <Image
                        className="bg-transparent  !h-4"
                        src={theme == "dark" ? LeaderboardDark : Leaderboard}
                        alt="Swap"
                      />
                      <div>Leaderboard</div>
                    </div>
                    <Image
                      src={theme == "dark" ? ChevronDownDark : ChevronDown}
                      alt="ChevronDown"
                      className={
                        isLeaderBoard ? " rotate-180 ml-2" : " ml-2 rotate-0"
                      }
                    />
                  </div>
                </div>
              </div>
              {isLeaderBoard ? (
                <div className="submenu w-full gap-2 flex flex-col">
                  <a
                    href="https://app.kanalabs.io/leader-board"
                    rel="noreferrer"
                    className={`   h-[52px] flex flex-row justify-start items-center  w-full  bg-transparent gap-4`}
                  >
                    <div
                      className={` dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)] bg-transparent menu-item text-base my-1  w-full h-auto  text-base font-normal flex flex-row justify-start items-center   rounded-2xl  hover:opacity-100 hover:text-[white] hover:font-bold gap-4 `}
                    >
                      <div className=" flex flex-row justify-start items-center gap-4">
                        <Image
                          className="bg-transparent  !h-4 opacity-0"
                          src={theme === "dark" ? ReferralDark : Referral}
                          alt="Swap"
                        />
                        <div className={` dark:text-[#0C0C0D] text-[white] `}>
                          Swap Leaderboard
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://tradebook.kanalabs.io/leaderboard"
                    rel="noreferrer"
                    className={`   h-[52px] flex flex-row justify-start items-center  w-full  bg-transparent gap-4`}
                  >
                    <div
                      className={`  dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)]  bg-transparent menu-item text-base my-1  w-full h-auto  text-base font-normal flex flex-row justify-start items-center   rounded-2xl  hover:opacity-100 hover:text-[white] hover:font-bold gap-4  `}
                    >
                      <div className=" flex flex-row justify-start items-center gap-4">
                        <Image
                          className="bg-transparent  !h-4 opacity-0"
                          src={theme === "dark" ? ReferralDark : Referral}
                          alt="Swap"
                        />
                        <div className={`dark:text-[#0C0C0D] text-[white] `}>
                          Trade Leaderboard
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ) : (
                <></>
              )}

              <div className="w-full flex  h-[52px] flex-row justify-start items-center    bg-transparent gap-4">
                <div className=" menu-item my-1 cursor-pointer w-full h-auto text-[white] dark:text-[#777879] text-base   flex flex-row justify-start items-center py-4 px-[1.4rem] rounded-2xl hover:bg-[rgba(255,255,255,0.06)] hover:opacity-100 hover:text-[white] hover:font-bold gap-4 font-extrabold opacity-50">
                  <div className=" flex flex-row justify-start items-center gap-4">
                    <Image
                      className="bg-transparent  !h-4"
                      src={theme === "dark" ? ReferralDark : Referral}
                      alt="Swap"
                    />
                    <div>Rewards</div>
                  </div>
                </div>
              </div>
              <div className="dark:bg-[#e4f2f3] dark:text-[#0C0C0D] bg-[#1D1E20] font-inter !rounded-[2rem] text-[#777879] w-full  font-extrabold  h-[3.875rem] py-4 px-6 flex flex-row justify-between gap-4 items-center  cursor-pointer ">
                <div>Theme</div>
                <Image
                  src={theme === "light" ? Dark : Light}
                  alt="/"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="cursor-pointer w-5 h-5 ml-3"
                />
              </div>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
