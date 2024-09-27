import {
  faFan,
  faRightToBracket,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

function CyberOpenNavbar() {
  const { data: session } = useSession();
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const router = useRouter();
  const userMenu = [
    {
      name: "Dashboard",
      link: "",
    },
    { name: "Logout", link: "" },
  ];
  const onRenderUserMenu = () => {
    return userMenu.map((item) => {
      return (
        <button
          key={item.name}
          className="w-full rounded-md px-4 py-2 text-left text-sm text-black hover:bg-black/80 hover:text-white"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-0"
          onClick={() => {
            if (item.name === "Logout") {
              toast.success("Logout Successfully!", {
                position: toast.POSITION.TOP_CENTER,
              });
            } else {
              router.push(item.link);
            }
          }}
        >
          {item.name}
        </button>
      );
    });
  };
  return (
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center sm:items-stretch">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <FontAwesomeIcon icon={faFan} className="text-2xl text-cyan-400" />
          </Link>
          <p className="text-xl font-semibold uppercase text-white">
            Cyber Open
          </p>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-between gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        {/* <DarkLightSwitcher /> */}
        {session ? (
          <div className="relative ml-3">
            <button
              type="button"
              className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
              onBlur={() => {
                setTimeout(() => {
                  setIsOpenUserMenu(false);
                }, 50);
              }}
            >
              <Image
                className="h-10 w-10 rounded-full"
                width={50000}
                height={50000}
                alt={session?.user?.name ?? "User Name"}
                src={session?.user?.image ?? "/user.png"}
              />
            </button>
            {isOpenUserMenu ? (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                {onRenderUserMenu()}
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <button className="flex items-center gap-2 rounded-xl bg-white/20 px-3 py-1 text-white hover:shadow-sm hover:shadow-white/50">
            <FontAwesomeIcon icon={faRightToBracket} />
            <p>Login</p>
          </button>
        )}
        <FontAwesomeIcon icon={faSearch} className="text-xl text-white " />
        <FontAwesomeIcon icon={faBars} className="text-xl text-white " />
      </div>
    </div>
  );
}

export default CyberOpenNavbar;
