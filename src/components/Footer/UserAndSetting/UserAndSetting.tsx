import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import MoreSetting from "./MoreSetting";
import UserOptions from "./UserOptions";

function UserAndSetting() {
  const panelArr = [
    {
      name: "User",
      component: <UserOptions />,
    },
    {
      name: "Setting",
      component: (
        <Cog8ToothIcon className="h-7 w-7 cursor-pointer rounded-lg p-[1px] text-lg text-white transition-colors duration-300 hover:bg-slate-100/20" />
      ),
    },
    {
      name: "More",
      component: <MoreSetting />,
    },
  ];

  const onRenderPanel = () => {
    return panelArr.map((item) => {
      return (
        <div title={item.name} key={item.name}>
          {item.component}
        </div>
      );
    });
  };

  return <div className="flex gap-3">{onRenderPanel()}</div>;
}

export default UserAndSetting;
