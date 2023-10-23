import { useEffect, useState } from "react";

export const useMetaMaskAcount = () => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState<unknown>();

  async function getAllAccountInfo() {
    const accounts = await window.ethereum
      ?.request({ method: "eth_requestAccounts" })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });
    const account = (accounts as string[])[0];

    setAccount(account);

    const blockNumber = await window.ethereum?.request({
      method: "eth_blockNumber",
      params: [],
    });

    const balance = await window.ethereum?.request({
      method: "eth_getBalance",
      params: [account, blockNumber],
    });
    setBalance(balance);
  }

  useEffect(() => {
    getAllAccountInfo();
  }, []);

  return { account, balance };
};
