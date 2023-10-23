import { LoginContext } from "@cyberlofi^_^/app/context/loginContext";
import { useMetaMaskAcount } from "@cyberlofi^_^/hooks/useMetaMaskAccount";
import {
  ArrowLeftOnRectangleIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

function UserOptions() {
  const { data: session } = useSession();
  const { setIsOpenLogin } = useContext(LoginContext);
  const [isOpenUserOptionss, setIsOpenUserOptions] = useState(false);
  const handleOpenUserOptions = () => {
    setIsOpenUserOptions(!isOpenUserOptionss);
  };
  const { account, balance } = useMetaMaskAcount();

  const handler = (...args: unknown[]) => {
    console.log("args: ", args);
  };

  const panelArr = [
    {
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
      name: account ?? "Account",
      component: (
        <UserCircleIcon className="h-7 w-7 rounded-lg p-[1px] text-lg text-white" />
      ),
      ishowed: account ?? false,
    },
    {
      name: balance ?? "Balance",
      component: (
        <CurrencyDollarIcon className="h-7 w-7 rounded-lg p-[1px] text-lg text-white" />
      ),
      ishowed: balance ?? false,
    },
    {
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
    return panelArr.map((item, index) => {
      return item.ishowed ? (
        <div
          key={String(item.name) + index}
          className="flex min-w-[10rem] cursor-pointer items-center gap-2 rounded-lg p-[1px] transition-colors duration-300 hover:bg-slate-100/20"
          onClick={item?.feature ?? Object}
        >
          {item.component}
          <p className="text-sm">{String(item.name)}</p>
        </div>
      ) : (
        <></>
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
              : account && balance
              ? "-top-[9.5rem]"
              : "-top-[4.5rem]"
          } absolute -right-[4rem] flex flex-col gap-2 rounded-xl bg-black/50 p-3`}
        >
          {onRenderMoreTool()}
        </div>
      ) : (
        <></>
      )}
      <UserCircleIcon
        className="h-7 w-7 cursor-pointer rounded-lg p-[1px] text-lg text-white transition-colors duration-300 hover:bg-slate-100/20"
        onClick={
          session || (account && balance)
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
