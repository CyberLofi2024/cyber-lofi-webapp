"use client";
import React, { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faKey,
  faUserAstronaut,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import GoogleLoginButton from "./GoogleLoginButton";
import { LoginContext } from "@cyberlofi^_^/app/context/loginContext";
import { IUserLogin } from "@cyberlofi^_^/types/allTypes";

import { useMetaMask } from "@cyberlofi^_^/hooks/useMetaMask";
import MetaMaskButton from "./MetaMaskButton";

function LoginComponent() {
  const { isOpenLogin, setIsOpenLogin } = useContext(LoginContext);
  const router = useRouter();
  const { data: session } = useSession();

  const [isLogined, setIsLogined] = useState(false);
  const {
    wallet: { accounts, balance },
  } = useMetaMask();

  useEffect(() => {
    if (session || (accounts[0] && balance)) {
      setIsLogined(true);
      if (setIsOpenLogin) {
        setIsOpenLogin(false);
      }
    } else {
      setIsLogined(false);
    }
  }, [router, session, accounts, balance]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserLogin>();
  const onSubmit: SubmitHandler<IUserLogin> = (data) => {
    if (data.email === "admin@cyberlofi.com" && data.password === "admin123") {
      toast.success("Welcome to Cyber Lofi Cinema!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });
      }, 1000);
    } else {
      toast.error("Failed to Login! Please check your information", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onRenderPasswordIcon = () => {
    if (watch("password")) {
      return isShowPassword ? (
        <FontAwesomeIcon icon={faEyeSlash} className="h-5 w-5" />
      ) : (
        <FontAwesomeIcon icon={faEye} className="h-5 w-5" />
      );
    }

    return <FontAwesomeIcon icon={faKey} className="h-5 w-5" />;
  };
  return isOpenLogin ? (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center bg-black/50">
      <div className="mx-5 flex w-full flex-col items-center justify-center rounded-lg border border-slate-400 border-transparent p-5 backdrop-blur-sm transition-all duration-500 hover:border-white md:mx-3 md:w-fit md:p-10">
        <div className="flex flex-col items-center pb-1">
          <h1 className="pb-3 text-xl font-semibold uppercase">Cyber Lofi</h1>
          <p className="text-3xl tracking-widest text-slate-100">
            WELCOME BACK
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-auto my-3">
            <label
              className="mb-2 block font-bold text-slate-100"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative flex items-center">
              <input
                className="block w-full rounded-lg border-[0.5px] bg-transparent p-2 pr-10 font-medium text-slate-100 focus-visible:outline-none"
                type="text"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
                placeholder="example@email.com"
              />
              <FontAwesomeIcon
                icon={faUserAstronaut}
                className="absolute right-2 h-5 w-5"
              />
            </div>
            <p className="w-full text-red-500">{errors.email?.message}</p>
          </div>
          <div className="mx-auto my-3">
            <label
              className="mb-2 block font-bold text-slate-100"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                className="block w-full rounded-lg border-[0.5px] bg-transparent p-2 pr-10 font-medium text-slate-100 focus-visible:outline-none"
                type={isShowPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{0,}$/,
                    message: "At least one letter and one number",
                  },
                  min: { value: 4, message: "At least 4 characters" },
                  max: {
                    value: 10,
                    message: "Not more than 10 characters",
                  },
                })}
                placeholder="Your password"
              />
              <div className="absolute right-2" onClick={handleShowPassword}>
                {onRenderPasswordIcon()}
              </div>
            </div>
            <p className="w-72 text-red-500">{errors.password?.message}</p>
          </div>
          <div className="mx-auto w-fit py-3">
            <button
              type="submit"
              disabled={isLogined}
              className="mx-auto w-fit rounded border px-5 py-2 text-lg font-black shadow-xl transition-all hover:bg-white/50 hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base"
            >
              {isLogined ? "Logging..." : "Log in"}
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-3">
          <MetaMaskButton />
          <GoogleLoginButton />
        </div>
      </div>
      <div className="absolute right-6 top-6 text-3xl">
        <FontAwesomeIcon
          onClick={() => {
            if (setIsOpenLogin) {
              setIsOpenLogin(false);
            }
          }}
          icon={faXmark}
          className="cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <></>
  );
}

export default LoginComponent;
