import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

interface LoginContextProps {
  isOpenLogin?: boolean;
  setIsOpenLogin?: Dispatch<SetStateAction<boolean>>;
}

export const LoginContext = createContext<LoginContextProps>({});
