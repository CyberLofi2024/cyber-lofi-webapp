import { LoginContext } from "@cyberlofi^_^/app/context/loginContext";
import { useMetaMask } from "@cyberlofi^_^/hooks/useMetaMask";
import { formatAddress } from "@cyberlofi^_^/utils/formatMetaMask";
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
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

function HeaderSetting() {
  const { data: session } = useSession();
  const [isOpenHeaderSettings, setIsOpenHeaderSettings] = useState(false);
  const handleOpenHeaderSettings = () => {
    setIsOpenHeaderSettings(!isOpenHeaderSettings);
  };
  const { setIsOpenLogin } = useContext(LoginContext);
  const {
    wallet: { accounts, balance },
  } = useMetaMask();

  const panelArr = [
    {
      name: session ? "" : accounts[0] && balance ? "" : "Login",
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
        <Link
          className="flex w-full items-center gap-2"
          href={`https://etherscan.io/address/${accounts[0]}`}
          target="_blank"
          data-tooltip="Open in Block Explorer"
        >
          <UserCircleIcon className="h-7 w-7 rounded-lg p-[1px] text-lg text-white" />
          {formatAddress(accounts[0])}
        </Link>
      ),
      isShow: true,
      feature: () => {
        if (!session && !accounts[0] && !balance && setIsOpenLogin) {
          setIsOpenLogin(true);
        }
      },
    },
    {
      name: balance ?? "",
      component: (
        <CurrencyDollarIcon className="h-6 w-6 rounded-lg p-[1px] text-lg text-white transition-colors duration-300 md:h-7 md:w-7" />
      ),
      isShow: balance ?? false,
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
        setIsOpenHeaderSettings(false);
        signOut({ callbackUrl: "/", redirect: false }).then((res) => {
          toast.info("Log out successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
      },
      isShow: session || (accounts[0] && balance) ? true : false,
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
          <p className="max-w-[8rem] truncate text-sm">{item.name}</p>
        </div>
      );
    });
  };
  return (
    <button
      onBlur={() => {
        setTimeout(() => {
          setIsOpenHeaderSettings(false);
        }, 100);
      }}
      className="relative"
    >
      {isOpenHeaderSettings ? (
        <div
          className={`${
            session
              ? "-bottom-[21rem]"
              : accounts[0] && balance
              ? "-bottom-[23rem]"
              : "-bottom-[19rem]"
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
