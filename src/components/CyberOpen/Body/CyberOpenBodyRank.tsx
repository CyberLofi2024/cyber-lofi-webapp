"use client";
import React, { useState } from "react";

function CyberOpenBodyRank() {
  const [selectedTab, setSelectedTab] = useState("Trending");
  const onRenderTab = () => {
    const tabList = [{ name: "Trending" }, { name: "Top" }];
    return tabList.map((item) => {
      return (
        <p
          key={item.name}
          onClick={() => setSelectedTab(item.name)}
          className={`${
            selectedTab === item.name
              ? "bg-white text-black"
              : "text-slate-700 hover:text-black"
          } cursor-pointer rounded-xl px-5 py-2 text-lg font-medium`}
        >
          {item.name}
        </p>
      );
    });
  };
  return (
    <div className="py-5">
      <div className="flex w-fit rounded-xl bg-slate-100 p-1">
        {onRenderTab()}
      </div>
    </div>
  );
}

export default CyberOpenBodyRank;
