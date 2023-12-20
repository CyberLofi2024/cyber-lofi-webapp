import React from "react";
import { Tab } from "@headlessui/react";
import CyberOpenSwiper from "./CyberOpenSwiper";

function CyberOpenTab() {
  const onRenderTabList = () => {
    const tabList = [
      { name: "All" },
      { name: "Art" },
      { name: "Gaming" },
      { name: "Memberships" },
      { name: "PFPs" },
      { name: "Photography" },
      { name: "Music" },
    ];
    return tabList.map((item) => {
      return (
        <div
          key={item.name}
          className={`${
            item?.name === "All" ? "bg-white/20" : ""
          } cursor-pointer rounded-lg px-3 py-1 text-lg text-white transition-colors duration-300 hover:bg-white/20`}
        >
          {item.name}
        </div>
      );
    });
  };
  return (
    <div className="mx-auto pt-16">
      <div className="flex gap-2 overflow-scroll">{onRenderTabList()}</div>
      <CyberOpenSwiper />
    </div>
  );
}

export default CyberOpenTab;
