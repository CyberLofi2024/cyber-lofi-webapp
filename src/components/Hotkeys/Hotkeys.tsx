"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "@mantine/hooks";

export const Hotkeys = () => {
  const router = useRouter();
  useHotkeys([
    ["n", () => router.push(`?note=true`)],
    ["Escape", () => router.push(`/`)],
  ]);

  return null;
};
