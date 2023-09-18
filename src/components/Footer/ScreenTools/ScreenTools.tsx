import { ViewfinderCircleIcon, WindowIcon } from '@heroicons/react/24/outline';
import React from 'react';

function ScreenTools() {
  function openFullscreen() {
    const elem: any = document.body;
    if (
      (window as any).fullScreen ||
      (window.innerWidth == screen.width && window.innerHeight == screen.height)
    ) {
      document.exitFullscreen();
    } else {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    }
  }
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
        <ViewfinderCircleIcon
          onClick={openFullscreen}
          className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg"
        />
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
