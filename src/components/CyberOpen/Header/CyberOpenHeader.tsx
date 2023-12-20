"use client";
import React from "react";
import { useHotkeys } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import CyberOpenNavbar from "./CyberOpenNavbar";
import CyberOpenTab from "./CyberOpenTab";

function CyberOpenHeader() {
  const router = useRouter();
  const BackHome = () => {
    useHotkeys([["h", () => router.push(`/`)]]);
    return null;
  };

  return (
    <div className="">
      <div className="fixed left-0 right-0 top-0 z-10 mx-auto px-2 md:px-8">
        <CyberOpenNavbar />
      </div>
      <BackHome />
      <CyberOpenTab />
    </div>
  );
}

export default CyberOpenHeader;
