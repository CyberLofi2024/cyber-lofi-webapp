import {
  BookOpenIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentTextIcon,
  LinkIcon,
  PlayIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

function MoreTools() {
  const [isOpenMoreTools, setIsOpenMoreTools] = useState(false);
  const handleOpenMoreTools = () => {
    setIsOpenMoreTools(!isOpenMoreTools);
  };

  const panelArr = [
    {
      name: 'Calendar',
      component: (
        <CalendarDaysIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Links',
      component: (
        <LinkIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Youtube',
      component: (
        <PlayIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Timer',
      component: (
        <ClockIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Notes',
      component: (
        <BookOpenIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'PDF Reader',
      component: (
        <DocumentTextIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Insights',
      component: (
        <ChartBarIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
  ];

  const onRenderMoreTool = () => {
    return panelArr.map((item) => {
      return (
        <div
          key={item.name}
          className="flex items-center min-w-[8rem] gap-2 p-[1px] rounded-lg cursor-pointer hover:bg-slate-100/20 transition-colors duration-300"
        >
          {item.component}
          <p className="text-sm">{item.name}</p>
        </div>
      );
    });
  };
  return (
    <div className="relative">
      {isOpenMoreTools ? (
        <div className="rounded-xl absolute -top-[17rem] md:-top-[19.5rem] left-1/2 flex flex-col gap-2 -translate-x-1/2 bg-black/50 p-2 md:p-3">
          {onRenderMoreTool()}
        </div>
      ) : (
        <></>
      )}
      <Squares2X2Icon
        className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg"
        onClick={handleOpenMoreTools}
      />
    </div>
  );
}

export default MoreTools;
