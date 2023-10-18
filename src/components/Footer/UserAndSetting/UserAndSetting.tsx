import { Cog8ToothIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import React, { useContext } from 'react';
import MoreSetting from './MoreSetting';
import { LoginContext } from '@cyberlofi^_^/app/context/loginContext';

function UserAndSetting() {
  const { setIsOpenLogin } = useContext(LoginContext);
  const panelArr = [
    {
      name: 'User',
      component: (
        <UserCircleIcon
          onClick={() => {
            if (setIsOpenLogin) {
              setIsOpenLogin(true);
            }
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
