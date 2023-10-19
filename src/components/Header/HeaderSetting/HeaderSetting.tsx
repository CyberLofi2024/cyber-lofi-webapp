import { LoginContext } from "@cyberlofi^_^/app/context/loginContext";
import {
  ArrowLeftOnRectangleIcon,
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
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useContext, useState } from "react";

function HeaderSetting() {
  const { data: session } = useSession();
  const [isOpenHeaderSettings, setIsOpenHeaderSettings] = useState(false);
  const handleOpenHeaderSettings = () => {
    setIsOpenHeaderSettings(!isOpenHeaderSettings);
  };
  const { setIsOpenLogin } = useContext(LoginContext);

  const panelArr = [
    {
      name: session ? "" : "Login",
      component: session ? (
        <div className="flex items-center gap-1 overflow-hidden">
          <Image
            className="h-10 w-10 rounded-full"
            width={50000}
            height={50000}
            alt={session?.user?.name ?? "User Name"}
            src={session?.user?.image ?? "/user.png"}
          />
          <h2>{session?.user?.name ?? "User Name"}</h2>
        </div>
      ) : (
        <UserCircleIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white transition-colors duration-300 md:h-7 md:w-7" />
      ),
      feature: () => {
        if (setIsOpenLogin) {
          setIsOpenLogin(true);
        }
      },
      isShow: true,
    },
    {
      name: "General Setting",
      component: (
        <Cog8ToothIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white transition-colors duration-300 md:h-7 md:w-7" />
      ),
      isShow: true,
    },
    {
      name: "Pricing",
      component: (
        <CurrencyDollarIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white  md:h-7 md:w-7" />
      ),
      isShow: true,
    },
    {
      name: "Contact us",
      component: (
        <EnvelopeIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white  md:h-7 md:w-7" />
      ),
      isShow: true,
    },
    {
      name: "How it works",
      component: (
        <WrenchIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white  md:h-7 md:w-7" />
      ),
      isShow: true,
    },
    {
      name: "FAQ",
      component: (
        <QuestionMarkCircleIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white  md:h-7 md:w-7" />
      ),
      isShow: true,
    },
    {
      name: "Share",
      component: (
        <ShareIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white  md:h-7 md:w-7" />
      ),
      isShow: true,
    },
    {
      name: "About us",
      component: (
        <InformationCircleIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white  md:h-7 md:w-7" />
      ),
      isShow: true,
    },
    {
      name: "Share feedback",
      component: (
        <ChatBubbleBottomCenterTextIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white  md:h-7 md:w-7" />
      ),
      isShow: true,
    },
    {
      name: "Log out",
      component: (
        <ArrowLeftOnRectangleIcon className="h-7 w-7 rounded-lg p-[1px] text-lg text-white" />
      ),
      feature: () => {
        signOut({ callbackUrl: "/" });
      },
      isShow: session ? true : false,
    },
  ];

  const onRenderMoreTool = () => {
    return panelArr.map((item) => {
      return (
        <div
          onClick={item?.feature ?? Object}
          key={item.name}
          className={`${
            item?.isShow ? "" : "hidden"
          } flex min-w-[10rem] cursor-pointer items-center gap-2 rounded-lg p-[1px] transition-colors duration-300 hover:bg-slate-100/20`}
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
        <div
          className={`${
            !session ? "-bottom-[19rem]" : "-bottom-[21rem]"
          } absolute right-0 flex flex-col gap-1 rounded-xl bg-black/50 p-2`}
        >
          {onRenderMoreTool()}
        </div>
      ) : (
        <></>
      )}
      <QueueListIcon
        className="h-7 w-7 cursor-pointer rounded-lg p-[1px] text-lg text-white transition-colors duration-300 hover:bg-slate-100/20"
        onClick={handleOpenHeaderSettings}
      />
    </button>
  );
}

export default HeaderSetting;
