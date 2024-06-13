"use client";
import React, { useState } from "react";
import Image from "next/image";
import KanaLogo from "../assets/Kana-Logo.svg";
import SwapDark from "../assets/swap_dark.svg";
import Swap from "../assets/swap.svg"
import StakeDark from "../assets/stack_icon_dark.svg";
import Stake from "../assets/stack_icon.svg";
import SwitchDark from "../assets/switch_dark.svg";
import Switch from "../assets/switch_icon.svg";
import ChevronDown from "../assets/chevron-down.svg";
import ChevronDownDark from "../assets/chevron-down-dark.svg";
import LeaderboardDark from "../assets/leader_board_dark.svg";
import Leaderboard from "../assets/leader_board.svg";
import ReferralDark from "../assets/referral_dark.svg";
import Referral from "../assets/referral.svg";
import LogoLight from "../assets/Logo-light.svg";
import Trade from "../assets/Trade.svg";
import TradeDark from "../assets/bar-chart-square-dark.svg";
import Varriant from "../assets/Variant.svg";
import Logo from "../assets/Small-logo.svg";
import HelpLight from "../assets/Help-light.svg";
import { useTheme } from "next-themes";
import Stats from "../assets/statsnew.svg";
import StatsLight from "../assets/statslight.svg";

const Sidebar = () => {
  const [activeItemSidebar, setActiveItemSidebar] = useState(1);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [isChevronCorrect, setIsChevronCorrect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const [isLeaderBoard, setIsLeaderBoard] = useState(false);

  const handleLeaderBoard = () => {
    if (isLeaderBoard === false) {
      setIsLeaderBoard(true);
    } else {
      setIsLeaderBoard(false);
    }
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
    setIsLeaderBoard(false);
  };
  const handleClick = (id: any) => {
    if (id === 1) {
      if (id === activeItemSidebar) {
        return;
      } else {
        setActiveItemSidebar(id);
      }
    }
    if (id === 2) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(false);
    }
    if (id === 3) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(false);
    }
    if (id === 4) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(false);
    }
    if (id === 5) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(true);
    }
    if (id === 6) {
      setIsChevronCorrect(false);
      setActiveItemSidebar(id);
      setIsSubMenu(true);
    }
    if (id === 7){
      setIsChevronCorrect(false)
      setActiveItemSidebar(id);
      setIsSubMenu(true);

    }
  };

  const handleSubMenu = () => {
    if (isSubMenu === false) {
      setIsChevronCorrect(!isChevronCorrect);
      setIsSubMenu(true);
    } else {
      setIsChevronCorrect(!isChevronCorrect);
      setIsSubMenu(false);
    }
  };

  return (
    <>
      <div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={` !z-[2] !fixed   h-full bg-[#17181A] dark:bg-[#FCFDFE] flex flex-col gap-4 items-center justify-between font-inter  py-5  xxl:flex xl:flex lg:flex md:hidden sm:hidden xd:hidden w-auto ease-in-out duration-50 ${
            isOpen ? "!w-[20rem] " : "!w-[5.938rem]"
          }`}
        >
          <div className="w-auto hover:w-full bg-transparent flex flex-col text-left items-center h-full justify-between p-[1rem]   ">
            <div className="flex flex-col text-left items-center h-full justify-start w-full">
              <div className="p-[1rem]   w-full top-0 !sticky  mb-[2.25rem] !z-[2]">
                {isOpen ? (
                  <Image
                    className="bg-transparent !h-[2rem] !w-auto"
                    src={theme === "dark" ? LogoLight : KanaLogo}
                    alt="KanaLogo"
                  />
                ) : (
                  <Image
                    className="bg-transparent !h-[2rem] !w-auto"
                    src={Logo}
                    alt="Kana"
                  />
                )}
              </div>
              <div className="flex flex-col justify-start items-start bg-transparent w-full gap-[0.5rem]">
                <a
                  rel="noreferrer"
                  href="https://app.kanalabs.io/"
                  className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
                >
                  <div
                    className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                      activeItemSidebar === 2
                        ? ` font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                        : "opacity-[0.5]"
                    }`}
                    onClick={() => handleClick(2)}
                  >
                    {isOpen ? (
                      <div className=" flex flex-row justify-start items-center gap-[16px]">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme === "dark" ? SwapDark : Swap}
                          alt="Swap"
                        />
                        <div>Swap</div>
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-center items-center w-full">
                        <Image
                          className="bg-transparent "
                          src={theme === "dark" ? SwapDark : Swap}
                          alt="TradeIcon"
                        />
                      </div>
                    )}
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  href="https://tradebook.kanalabs.io/"
                  className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
                >
                  <div
                    className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                      activeItemSidebar === 3
                        ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                        : "opacity-[0.5]"
                    }`}
                    onClick={() => handleClick(3)}
                  >
                    {isOpen ? (
                      <div className=" flex flex-row justify-start items-center gap-[16px]">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme === "dark" ? Trade : TradeDark}
                          alt="Swap"
                        />
                        <div>Trade</div>
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-center items-center w-full">
                        <Image
                          className="bg-transparent "
                          src={theme === "dark" ? Trade : TradeDark}
                          alt="TradeIcon"
                        />
                      </div>
                    )}
                  </div>
                </a>

                <a
                  rel="noreferrer"
                  href="https://operps.kanalabs.io/"
                  className="w-full  h-[52px] flex flex-row justify-start items-center    bg-transparent gap-[16px]"
                >
                  <div
                    className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                      activeItemSidebar === 4
                        ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                        : "opacity-[0.5]"
                    }`}
                    onClick={() => handleClick(4)}
                  >
                    {isOpen ? (
                      <div className=" flex flex-row justify-start items-center gap-[16px]">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme === "dark" ? SwitchDark : Switch}
                          alt="Swap"
                        />
                        <div>OPerps</div>
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-center items-center w-full">
                        <Image
                          className="bg-transparent "
                          src={theme === "dark" ? SwitchDark : Switch}
                          alt="TradeIcon"
                        />
                      </div>
                    )}
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  href="https://app.kanalabs.io/stake-yield"
                  className="w-full flex  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]"
                >
                  <div
                    className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                      activeItemSidebar === 5
                        ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                        : "opacity-[0.5]"
                    }`}
                    onClick={() => handleClick(5)}
                  >
                    {isOpen ? (
                      <div className=" flex flex-row justify-start items-center gap-[1rem]">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme === "dark" ? StakeDark : Stake}
                          alt="Swap"
                        />
                        <div>Stake</div>
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-center items-center w-full">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme === "dark" ? StakeDark : Stake}
                          alt="Swap"
                        />
                      </div>
                    )}
                  </div>
                </a>
                <div className="w-full flex cursor-pointer  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]">
                  <div
                    className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                      activeItemSidebar === 6
                        ? `  font-[700] opacity-[1] bg-[rgba(255,255,255,0.06)]  dark:bg-[#EFF7F8]  `
                        : "opacity-[0.5]"
                    }`}
                    // onClick={() => handleClick(6)}
                  >
                    {isOpen ? (
                      <div
                        className=" flex flex-row justify-between w-full items-center"
                        onClick={handleLeaderBoard}
                      >
                        <div className=" flex flex-row justify-start items-center gap-[1rem]">
                          <Image
                            className="bg-transparent  !h-[1rem]"
                            src={
                              theme == "dark" ? LeaderboardDark : Leaderboard
                            }
                            alt="Swap"
                          />
                          <div>Leaderboard</div>
                        </div>
                        <Image
                          src={theme == "dark" ? ChevronDownDark : ChevronDown}
                          alt="ChevronDown"
                          className={
                            isLeaderBoard
                              ? " rotate-180 ml-2"
                              : " ml-2 rotate-0"
                          }
                        />
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-center items-center w-full">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme == "dark" ? LeaderboardDark : Leaderboard}
                          alt="Swap"
                        />
                      </div>
                    )}
                  </div>
                </div>
                {isLeaderBoard ? (
                  <div className="submenu w-full gap-2 flex flex-col">
                    <a
                      href="https://app.kanalabs.io/leader-board"
                      rel="noreferrer"
                      className={`   h-[52px] flex flex-row justify-start items-center  w-full  bg-transparent gap-[16px]`}
                    >
                      <div
                        className={` dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)] bg-transparent menu-item text-[16px] my-[4px]  w-full h-auto  text-[16px] font-[400] flex flex-row justify-start items-center ${
                          isOpen
                            ? "py-[1rem] px-[1.4rem]"
                            : "py-[1.2rem] px-[1.4rem]"
                        }  rounded-[16px]  hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                          activeItemSidebar === 7
                            ? `!font-[700] !opacity-[1] dark:!bg-[#EFF7F8] !bg-[rgba(255,255,255,0.06)] `
                            : "opacity-[0.5]"
                        }`}
                        onClick={() => handleClick(7)}
                      >
                        {isOpen ? (
                          <div className=" flex flex-row justify-start items-center gap-[16px]">
                            <Image
                              className="bg-transparent  !h-[1rem] opacity-0"
                              src={theme === "dark" ? ReferralDark : Referral}
                              alt="Swap"
                            />
                            <div
                              className={` dark:text-[#0C0C0D] text-[white] `}
                            >
                              Swap Leaderboard
                            </div>
                          </div>
                        ) : (
                          <div className=" flex flex-row justify-center items-center w-full"></div>
                        )}
                      </div>
                    </a>
                    <a
                      href="https://tradebook.kanalabs.io/leaderboard"
                      rel="noreferrer"
                      className={`   h-[52px] flex flex-row justify-start items-center  w-full  bg-transparent gap-[16px]`}
                    >
                      <div
                        className={`  dark:hover:bg-[#EFF7F8] hover:bg-[rgba(255,255,255,0.06)]  bg-transparent menu-item text-[16px] my-[4px]  w-full h-auto  text-[16px] font-[400] flex flex-row justify-start items-center ${
                          isOpen
                            ? "py-[1rem] px-[1.4rem]"
                            : "py-[1.2rem] px-[1.4rem]"
                        }  rounded-[16px]  hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                          activeItemSidebar === 8
                            ? `!font-[700] !opacity-[1]  dark:!bg-[#EFF7F8]  !bg-[rgba(255,255,255,0.06)] `
                            : "opacity-[0.5]"
                        }`}
                        onClick={() => handleClick(8)}
                      >
                        {isOpen ? (
                          <div className=" flex flex-row justify-start items-center gap-[16px]">
                            <Image
                              className="bg-transparent  !h-[1rem] opacity-0"
                              src={theme === "dark" ? ReferralDark : Referral}
                              alt="Swap"
                            />
                            <div
                              className={`dark:text-[#0C0C0D] text-[white] `}
                            >
                              Trade Leaderboard
                            </div>
                          </div>
                        ) : (
                          <div className=" flex flex-row justify-center items-center w-full"></div>
                        )}
                      </div>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                <a
                  rel="noreferrer"
                  href="https://app.kanalabs.io/referrals"
                  className="w-full flex  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]"
                >
                  <div
                    className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                      activeItemSidebar === 4
                        ? `  font-[700] opacity-[1] !bg-[rgba(255,255,255,0.06)]  dark:!bg-[#EFF7F8]  `
                        : "opacity-[0.5]"
                    }`}
                    onClick={() => handleClick(4)}
                  >
                    {isOpen ? (
                      <div className=" flex flex-row justify-start items-center gap-[1rem]">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme === "dark" ? ReferralDark : Referral}
                          alt="Swap"
                        />
                        <div>Rewards</div>
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-center items-center w-full">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme === "dark" ? ReferralDark : Referral}
                          alt="Swap"
                        />
                      </div>
                    )}
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  href="https://app.kanalabs.io/referrals"
                  className="w-full flex  h-[3.25rem] flex-row justify-start items-center    bg-transparent gap-[1rem]"
                >
                  <div
                    className={` bg-transparent menu-item text-[1rem] my-[4px]  w-full h-auto text-[white] dark:text-[#0C0C0D] font-[600] flex flex-row justify-start items-center py-[1rem] px-[1.4rem] rounded-[16px] hover:bg-[rgba(255,255,255,0.06)] hover:dark:bg-[#EFF7F8] hover:opacity-[1] hover:text-[white] hover:font-[700] gap-[16px] ${
                      activeItemSidebar === 1
                        ? `  font-[700] opacity-[1] !bg-[rgba(255,255,255,0.06)]  dark:!bg-[#EFF7F8]  `
                        : "opacity-[0.5]"
                    }`}
                    onClick={() => handleClick(1)}
                  >
                    {isOpen ? (
                      <div className=" flex flex-row justify-start items-center gap-[1rem]">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme === "dark" ? StatsLight : Stats}
                          alt="Swap"
                        />
                        <div>Stats</div>
                      </div>
                    ) : (
                      <div className=" flex flex-row justify-center items-center w-full">
                        <Image
                          className="bg-transparent  !h-[1rem]"
                          src={theme === "dark" ? StatsLight : Stats}
                          alt="Swap"
                        />
                      </div>
                    )}
                  </div>
                </a>
              </div>
            </div>
            <a
              rel="noreferrer"
              href=" https://kanalabs.io/contact-us-dev"
              className="w-full"
            >
              {isOpen ? (
                <div className="bg-[#0C0C0D] dark:bg-[#EFF7F8] py-[1rem] px-[1.4rem] rounded-[1rem]  w-full text-[white] dark:text-[#0C0C0D] text-[16px] font-[400] gap-[1rem] flex flex-row justify-start items-center">
                  <Image
                    className="bg-transparent !w-[1.5rem]  !h-[1.1rem]"
                    src={theme === "dark" ? HelpLight : Varriant}
                    alt="Swap"
                  />
                  <div>Help</div>
                </div>
              ) : (
                <div className="bg-[#0C0C0D] dark:bg-[#EFF7F8] py-[1rem] px-[1.4rem] rounded-[1rem] w-full text-[white] dark:text-[#0C0C0D] text-[16px] font-[400] gap-[1rem] flex flex-row justify-center items-center">
                  <Image
                    className="bg-transparent  !w-[1.5rem] !h-[1.5rem]"
                    src={theme === "dark" ? HelpLight : Varriant}
                    alt="Swap"
                  />
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
