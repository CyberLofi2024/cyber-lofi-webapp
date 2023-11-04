import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export interface IUserLogin {
  email: string;
  password: string;
}
