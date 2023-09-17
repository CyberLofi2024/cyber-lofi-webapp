import {
  ChatBubbleBottomCenterTextIcon,
  CurrencyDollarIcon,
  EllipsisVerticalIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

function MoreSetting() {
  const [isOpenMoreSettings, setIsOpenMoreSettings] = useState(false);
  const handleOpenMoreSettings = () => {
    setIsOpenMoreSettings(!isOpenMoreSettings);
  };

  const panelArr = [
    {
      name: 'Pricing',
      component: (
        <CurrencyDollarIcon className="h-7 w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Contact us',
      component: (
        <EnvelopeIcon className="h-7 w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'How it works',
      component: (
        <WrenchIcon className="h-7 w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'FAQ',
      component: (
        <QuestionMarkCircleIcon className="h-7 w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'About us',
      component: (
        <InformationCircleIcon className="h-7 w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Share feedback',
      component: (
        <ChatBubbleBottomCenterTextIcon className="h-7 w-7 text-white text-lg p-[1px] rounded-lg" />
      ),
    },
  ];

  const onRenderMoreTool = () => {
    return panelArr.map((item) => {
      return (
        <div
          key={item.name}
          className="flex items-center min-w-[10rem] gap-2 cursor-pointer hover:bg-slate-100/20 transition-colors duration-300 p-[1px] rounded-lg"
        >
          {item.component}
          <p className="text-sm">{item.name}</p>
        </div>
      );
    });
  };
  return (
    <div className="relative">
      {isOpenMoreSettings ? (
        <div className="rounded-xl absolute -top-[17rem] right-0 flex flex-col gap-2 bg-black/50 p-3">
          {onRenderMoreTool()}
        </div>
      ) : (
        <></>
      )}
      <EllipsisVerticalIcon
        className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] rounded-lg cursor-pointer"
        onClick={handleOpenMoreSettings}
      />
    </div>
  );
}

export default MoreSetting;
