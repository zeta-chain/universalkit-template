"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Profile } from "@fadeev/swap/dist";
import { useAccount, useChainId } from "wagmi";

function Page() {
  const account = useAccount();
  const chainId = useChainId();

  return (
    <div>
      <ConnectButton />
      <div className="w-[400px]">
        <Profile address={account.address} />
      </div>
    </div>
  );
}

export default Page;
