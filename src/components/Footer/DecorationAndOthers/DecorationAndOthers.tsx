import {
  AdjustmentsVerticalIcon,
  CubeTransparentIcon,
  PhotoIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import MoreTools from './MoreTools';

function DecorationAndOthers() {
  const panelArr = [
    {
      name: 'Mixer',
      component: (
        <AdjustmentsVerticalIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Templates',
      component: (
        <RectangleGroupIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Scenes',
      component: (
        <PhotoIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'AI',
      component: (
        <CubeTransparentIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'More Tools',
      component: <MoreTools />,
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

export default DecorationAndOthers;
