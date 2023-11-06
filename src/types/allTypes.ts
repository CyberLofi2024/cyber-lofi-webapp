import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider & {
      selectedAddress: string | null;
    };
  }
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface INoteData {
  title: string;
  content: string;
}
