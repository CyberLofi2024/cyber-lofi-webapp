import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns an array of DOMString items containing the platforms on which the event was dispatched.
   * This is provided for user agents that want to present a choice of versions to the user such as,
   * for example, "web" or "play" which would allow the user to chose between a web version or
   * an Android version.
   */
  readonly platforms: Array<string>;

  /**
   * Returns a Promise that resolves to a DOMString containing either "accepted" or "dismissed".
   */
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;

  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}

let deferredPrompt: BeforeInstallPromptEvent | undefined;

function PwaUpdate() {
  const [installable, setInstallable] = useState(false);
  const handleOnClosePWAUpdate = () => {
    setInstallable(false);
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      const beforeInstallEvent = e as BeforeInstallPromptEvent;
      // Prevent the mini-infobar from appearing on mobile
      beforeInstallEvent.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = beforeInstallEvent;
      // Update UI to notify the user they can install the PWA
      setInstallable(true);
    });
    window.addEventListener("appinstalled", () => {
      // Log install to analytics
      toast.success("PWA Installed!", {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  }, []);

  const handleInstallClick = (e: React.MouseEvent) => {
    // Show the install prompt
    deferredPrompt?.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt?.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        toast.success("PWA Installed!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setInstallable(true);
      } else {
        setInstallable(false);
      }
    });
  };

  return (
    <div
      className={`${
        installable ? "animate-showContent" : "hidden"
      } fixed z-20 w-full transition-all duration-1000 lg:hidden`}
    >
      <div className="container m-auto flex items-center justify-between border-b bg-black/80 px-2 py-3 text-xs dark:border-gray-700 md:justify-center md:text-base xl:hidden">
        <div className="w-3/5">
          <p>Find what you need faster with Cyber Lofi Web App</p>
        </div>
        <div className="flex w-2/5 justify-end text-sm">
          <button
            onClick={handleInstallClick}
            className="rounded-lg border px-2 py-1 font-semibold"
          >
            Install
          </button>
          <button
            onClick={handleOnClosePWAUpdate}
            className="btn ml-3 whitespace-nowrap"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PwaUpdate;
