import { Cog8ToothIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import MoreSetting from './MoreSetting';

function UserAndSetting() {
  const panelArr = [
    {
      name: 'User',
      component: (
        <UserCircleIcon
          onFocus={() => {
            console.log('focus');
          }}
          className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg"
        />
      ),
    },
    {
      name: 'Setting',
      component: (
        <Cog8ToothIcon className="h-7 w-7 text-white text-lg hover:bg-slate-100/20 transition-colors duration-300 p-[1px] cursor-pointer rounded-lg" />
      ),
    },
    {
      name: 'More',
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
