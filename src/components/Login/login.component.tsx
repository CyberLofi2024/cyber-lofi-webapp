import { LoginContext } from '@cyberlofi^_^/app/context/loginContext';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MetaMaskButton } from '@metamask/sdk-react-ui';
import React, { useContext } from 'react';
import GoogleLoginButton from './GoogleLoginButton';

function LoginComponent() {
  const { isOpenLogin, setIsOpenLogin } = useContext(LoginContext);
  return isOpenLogin ? (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-10">
      <div className="relative w-full h-full flex justify-center flex-col gap-3 items-center">
        <div className="flex items-center flex-col pb-1">
          <h1 className="text-xl pb-3 uppercase font-semibold">Cyber Lofi</h1>
          <p className="text-slate-100 text-3xl tracking-widest">
            WELCOME BACK
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <MetaMaskButton
            theme={'light'}
            color="white"
            connectedText="Connected"
          ></MetaMaskButton>
          <GoogleLoginButton />
        </div>
        <div className="absolute top-6 right-6 text-3xl">
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
    </div>
  ) : (
    <></>
  );
}

export default LoginComponent;
