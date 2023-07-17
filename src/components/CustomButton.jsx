import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";

export default function CustomButton() {
  const [loading, setLoading] = useState(false);
  const { isConnected } = useAccount();

  const { data: walletClient } = useWalletClient();

  async function onClick() {
    if (isConnected) {

    const sendRequest = await walletClient.request({
          method: "eth_helloworld",
          params: [],
      });
    }
    console.log(sendRequest);
    setLoading(false);
  }

  return (
    <button onClick={onClick} disabled={!isConnected}>
      EIP-1193 Custom Request
    </button>
  );
}
