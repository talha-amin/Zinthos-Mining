"use client";
import { ResponsiveLine } from "@nivo/line";
import Button from "../components/ui/Button";
import { useState } from "react";
import Container from "../components/ui/Container";
import VestingSchedule from "../components/vesting/VestingSchedule";

const tabs = [
  {
    id: 1,
    label: "Strategic Investments",
  },
  {
    id: 2,
    label: "Private Investments",
  },
  {
    id: 3,
    label: "Team Allocations",
  },
];
export default function Vesting() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <section className="relative text-white min-h-screen py-32">
      <div className="absolute left-0 top-0 -translate-x-1/2 -z-10 -translate-y-1/2 pointer-events-none">
        <div className="primary-shadow blur-[150px] opacity-[30%] aspect-square w-[600px]"></div>
      </div>
      <Container>
        <div className="flex gap-16 bg-neutral-950 px-8 mb-8 rounded-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
            <div className="shadow-effect blur-[300px] aspect-square w-[500px]"></div>
          </div>
          {tabs.map((tab, i) => {
            return (
              <button
                key={i}
                onClick={() => setSelectedTab(tab.id)}
                className={`font-medium bg-transparent py-6 border-b border-b-[4px] border-transparent duration-200 ${
                  selectedTab == tab.id
                    ? "text-neutral-100 border-white"
                    : "text-neutral-400"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="h-full flex flex-col">
            <h2 className="text-lg font-semibold mb-4 ps-8">Vesting Summary</h2>

            <div className="bg-neutral-950 p-8 relative overflow-hidden rounded-lg flex-1">
              <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                <div className="shadow-effect blur-[150px] aspect-square w-[200px]"></div>
              </div>
              <div className="flex gap-16 items-center">
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-400">Locked</p>
                    <p>1,000,000.000 DCB</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-400">Claimed</p>
                    <p>118,200 DCB | 0.24%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-400">Unlocked</p>
                    <p>0.217 DCB</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-center">
                  <p className="text-xs font-medium text-neutral-400">
                    Available now
                  </p>
                  <p className="text-xl font-bold mb-1">0.217 DCB</p>
                  <Button>Claim all tokens</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col">
            <h2 className="text-lg font-semibold mb-4 ps-8">Vesting period</h2>
            <div className="bg-neutral-950 relative overflow-hidden p-8 rounded-lg flex-1">
              <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                <div className="shadow-effect blur-[150px] aspect-square w-[200px]"></div>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-400">Start date</p>
                  <p>25/06/2021 | 14:38:20</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-400">Cliff</p>
                  <p>25/06/2021 | 15:38:20</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-neutral-400">End date</p>
                  <p>10/07/2024 | 13:38:20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-4 ps-8">Vesting schedule</h2>
        <div className="bg-neutral-950 rounded-lg">
          <div className="absolute w-full h-full overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute left-[50%] top-0 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none">
                <div className="shadow-effect blur-[200px] aspect-square w-[300px]"></div>
              </div>
            </div>
          </div>
          <div className="p-8">
            <VestingSchedule />
          </div>
        </div>
      </Container>
    </section>
  );
}
