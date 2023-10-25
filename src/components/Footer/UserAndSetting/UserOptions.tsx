import { LoginContext } from "@cyberlofi^_^/app/context/loginContext";
import MetaMaskError from "@cyberlofi^_^/components/MetaMask/MetaMaskError/MetaMaskError";
import { useMetaMask } from "@cyberlofi^_^/hooks/useMetaMask";
import {
  ArrowLeftOnRectangleIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { Fragment, useContext, useState } from "react";
import { toast } from "react-toastify";

function UserOptions() {
  const { data: session } = useSession();
  const { setIsOpenLogin } = useContext(LoginContext);
  const [isOpenUserOptionss, setIsOpenUserOptions] = useState(false);
  const handleOpenUserOptions = () => {
    setIsOpenUserOptions(!isOpenUserOptionss);
  };

  const {
    wallet: { accounts, balance },
  } = useMetaMask();

  const handler = (...args: unknown[]) => {
    console.log("args: ", args);
  };

  const panelArr = [
    {
      id: 11,
      name: "",
      component: (
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
      ),
      ishowed: session ?? false,
    },
    {
      id: 12,
      name: accounts[0] ?? "Account",
      component: (
        <UserCircleIcon className="h-7 w-7 rounded-lg p-[1px] text-lg text-white" />
      ),
      ishowed: accounts[0] ?? false,
    },
    {
      id: 13,
      name: balance ?? "Balance",
      component: (
        <CurrencyDollarIcon className="h-7 w-7 rounded-lg p-[1px] text-lg text-white" />
      ),
      ishowed: balance ?? false,
    },
    {
      id: 14,
      name: "Log out",
      component: (
        <ArrowLeftOnRectangleIcon className="h-7 w-7 rounded-lg p-[1px] text-lg text-white" />
      ),
      feature: () => {
        window.ethereum?.on("disconnect", handler);
        setIsOpenUserOptions(false);
        signOut({ callbackUrl: "/", redirect: false }).then((res) => {
          toast.info("Log out successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
      },
      ishowed: true,
    },
  ];

  const onRenderMoreTool = () => {
    return panelArr.map((item) => {
      return item.ishowed ? (
        <div
          key={item.id}
          className="flex min-w-[10rem] cursor-pointer items-center gap-2 rounded-lg p-[1px] transition-colors duration-300 hover:bg-slate-100/20"
          onClick={item?.feature ?? Object}
        >
          {item.component}
          <p className="text-sm">{String(item.name)}</p>
        </div>
      ) : (
        <Fragment key={String(item.name)}></Fragment>
      );
    });
  };

  return (
    <button
      onBlur={() => {
        setIsOpenUserOptions(false);
      }}
      className="relative"
    >
      {isOpenUserOptionss ? (
        <div
          className={`${
            session
              ? "-top-[7.5rem]"
              : accounts[0] && balance
              ? "-top-[9.5rem]"
              : "-top-[4.5rem]"
          } absolute -right-[4rem] flex flex-col gap-2 rounded-xl bg-black/50 p-3`}
        >
          {onRenderMoreTool()}
        </div>
      ) : (
        <></>
      )}

      <MetaMaskError />

      <UserCircleIcon
        className="h-7 w-7 cursor-pointer rounded-lg p-[1px] text-lg text-white transition-colors duration-300 hover:bg-slate-100/20"
        onClick={
          session || (accounts[0] && balance)
            ? handleOpenUserOptions
            : () => {
                if (setIsOpenLogin) {
                  setIsOpenLogin(true);
                }
              }
        }
      />
    </button>
  );
}

export default UserOptions;
