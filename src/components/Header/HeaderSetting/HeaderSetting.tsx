import {
  ChatBubbleBottomCenterTextIcon,
  Cog8ToothIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  ShareIcon,
  UserCircleIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

function HeaderSetting() {
  const [isOpenHeaderSettings, setIsOpenHeaderSettings] = useState(false);
  const handleOpenHeaderSettings = () => {
    setIsOpenHeaderSettings(!isOpenHeaderSettings);
  };

  const panelArr = [
    {
      name: 'Login/Signup',
      component: (
        <UserCircleIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg transition-colors duration-300 p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'General Setting',
      component: (
        <Cog8ToothIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg transition-colors duration-300 p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Pricing',
      component: (
        <CurrencyDollarIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg  p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Contact us',
      component: (
        <EnvelopeIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg  p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'How it works',
      component: (
        <WrenchIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg  p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'FAQ',
      component: (
        <QuestionMarkCircleIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg  p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Share',
      component: (
        <ShareIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg  p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'About us',
      component: (
        <InformationCircleIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg  p-[1px] rounded-lg" />
      ),
    },
    {
      name: 'Share feedback',
      component: (
        <ChatBubbleBottomCenterTextIcon className="h-6 w-6 md:h-7 md:w-7 text-white text-lg  p-[1px] rounded-lg" />
      ),
    },
  ];

  const onRenderMoreTool = () => {
    return panelArr.map((item) => {
      return (
        <div
          key={item.name}
          className="flex items-center min-w-[10rem] gap-2 hover:bg-slate-100/20 p-[1px] transition-colors cursor-pointer duration-300 rounded-lg"
        >
          {item.component}
          <p className="text-sm">{item.name}</p>
        </div>
      );
    });
  };
  return (
    <button
      onBlur={() => {
        setIsOpenHeaderSettings(false);
      }}
      className="relative"
    >
      {isOpenHeaderSettings ? (
        <div className="rounded-xl absolute -bottom-[19rem] right-0 flex flex-col gap-1 bg-black/50 p-2">
          {onRenderMoreTool()}
        </div>
      ) : (
        <></>
      )}
      <QueueListIcon
        className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] rounded-lg cursor-pointer"
        onClick={handleOpenHeaderSettings}
      />
    </button>
  );
}

export default HeaderSetting;
