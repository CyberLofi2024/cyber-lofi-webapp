"use client";
import React, { useState } from "react";

interface IBodyItem {
  id: number;
  rank: number;
  image: string;
  name: string;
  florrPrice: number;
  volume: number;
}

function CyberOpenBodyRank() {
  const [selectedTab, setSelectedTab] = useState("Trending");
  const onRenderTab = () => {
    const tabList = [{ name: "Trending" }, { name: "Top" }];
    return tabList.map((item) => {
      return (
        <button
          key={item.name}
          onClick={() => setSelectedTab(item.name)}
          className={`${
            selectedTab === item.name
              ? "bg-white text-black"
              : "text-slate-700 hover:text-black"
          } cursor-pointer rounded-xl px-5 py-2 text-lg font-medium`}
        >
          {item.name}
        </button>
      );
    });
  };

  const onRenderThead = () => {
    const theadList = [
      { name: "Rank" },
      { name: "Collection" },
      { name: "Floor Price" },
      { name: "Volume" },
    ];
    return (
      <tr>
        {theadList.map((item) => {
          return (
            <th
              key={item.name}
              className={`${
                item.name === "Rank" || item.name === "Collection"
                  ? "text-left"
                  : "text-right"
              } pb-5 text-sm font-normal`}
            >
              {item.name}
            </th>
          );
        })}
      </tr>
    );
  };

  const tbodyList = [
    {
      id: 1,
      rank: 1,
      image: "/user.png",
      name: "Collection 1",
      florrPrice: 0.15,
      volume: 72,
    },
    {
      id: 2,
      rank: 2,
      image: "/user.png",
      name: "Collection 2",
      florrPrice: 0.25,
      volume: 72,
    },
    {
      id: 3,
      rank: 3,
      image: "/user.png",
      name: "Collection 3",
      florrPrice: 0.35,
      volume: 72,
    },
    {
      id: 4,
      rank: 4,
      image: "/user.png",
      name: "Collection 4",
      florrPrice: 0.45,
      volume: 72,
    },
    {
      id: 5,
      rank: 5,
      image: "/user.png",
      name: "Collection 5",
      florrPrice: 0.55,
      volume: 72,
    },
    {
      id: 6,
      rank: 6,
      image: "/user.png",
      name: "Collection 6",
      florrPrice: 0.65,
      volume: 72,
    },
    {
      id: 7,
      rank: 7,
      image: "/user.png",
      name: "Collection 7",
      florrPrice: 0.75,
      volume: 72,
    },
    {
      id: 8,
      rank: 8,
      image: "/user.png",
      name: "Collection 8",
      florrPrice: 0.85,
      volume: 72,
    },
    {
      id: 9,
      rank: 9,
      image: "/user.png",
      name: "Collection 9",
      florrPrice: 0.95,
      volume: 72,
    },
    {
      id: 10,
      rank: 10,
      image: "/user.png",
      name: "Collection 10",
      florrPrice: 0.105,
      volume: 72,
    },
  ];
  const onRenderTbody = (rankList: IBodyItem[]) => {
    return rankList?.map((item) => {
      return (
        <tr key={item.id} className="p-10 hover:bg-gray-100">
          <td className="font-semibold">{item.rank}</td>
          <td>
            <div className="my-2 flex items-center gap-5 font-semibold">
              <img
                src={item.image}
                alt=""
                className="w-16 rounded-xl border p-2"
              />
              {item.name}
            </div>
          </td>
          <td className="text-right font-semibold">{item.florrPrice} ETH</td>
          <td className="text-right font-semibold">{item.volume} ETH</td>
        </tr>
      );
    });
  };

  return (
    <div className="py-5">
      <div className="mb-5 flex w-fit rounded-xl bg-slate-100 p-1">
        {onRenderTab()}
      </div>
      <div className="flex justify-between gap-32">
        <table className="flex-1 table-fixed">
          <thead className="border-b">{onRenderThead()}</thead>
          <tbody>{onRenderTbody(tbodyList?.slice(0, 4))}</tbody>
        </table>
        <table className="flex-1 table-fixed">
          <thead>{onRenderThead()}</thead>
          <tbody>{onRenderTbody(tbodyList?.slice(5, 9))}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CyberOpenBodyRank;
