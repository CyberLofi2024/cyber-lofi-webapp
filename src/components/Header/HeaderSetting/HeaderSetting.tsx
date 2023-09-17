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
        <UserCircleIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'General Setting',
      component: (
        <Cog8ToothIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Pricing',
      component: (
        <CurrencyDollarIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Contact us',
      component: (
        <EnvelopeIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'How it works',
      component: (
        <WrenchIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'FAQ',
      component: (
        <QuestionMarkCircleIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Share',
      component: (
        <ShareIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'About us',
      component: (
        <InformationCircleIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'Share feedback',
      component: (
        <ChatBubbleBottomCenterTextIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 cursor-pointer rounded-lg" />
      ),
    },
  ];

  const onRenderMoreTool = () => {
    return panelArr.map((item) => {
      return (
        <div key={item.name} className="flex items-center min-w-[10rem] gap-2">
          {item.component}
          <p className="text-sm">{item.name}</p>
        </div>
      );
    });
  };
  return (
    <div className="relative">
      {isOpenHeaderSettings ? (
        <div className="rounded-xl absolute -bottom-[19.8rem] right-0 flex flex-col gap-1 bg-black/50 p-2">
          {onRenderMoreTool()}
        </div>
      ) : (
        <></>
      )}
      <QueueListIcon
        className="h-8 w-8 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-1 rounded-lg cursor-pointer"
        onClick={handleOpenHeaderSettings}
      />
    </div>
  );
}

export default HeaderSetting;
