import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

interface NoteTakingContextProps {
  isOpenNote?: boolean;
  setIsOpenNote?: Dispatch<SetStateAction<boolean>>;
}

export const NoteTakingContext = createContext<NoteTakingContextProps>({});
