import { ViewfinderCircleIcon, WindowIcon } from '@heroicons/react/24/outline';
import React from 'react';

function ScreenTools() {
  const panelArr = [
    {
      name: 'Picture in Picture',
      component: (
        <WindowIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Full Screen',
      component: (
        <ViewfinderCircleIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
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

export default ScreenTools;
