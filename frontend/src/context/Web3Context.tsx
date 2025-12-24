import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const ABI = [
  "function placeOrder(uint8 orderType, uint64 price, uint64 amount)",
  "function nextOrderId() view returns (uint256)",
  "function orders(uint256) view returns (address,uint8,uint64,uint64,uint8)",
];

type Web3ContextType = {
  signer: ethers.Signer | null;
  contract: ethers.Contract | null;
  connectWallet: () => Promise<void>;
};

const Web3Context = createContext<Web3ContextType>({
  signer: null,
  contract: null,
  connectWallet: async () => {},
});

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  async function connectWallet() {
    if (!(window as any).ethereum) {
      alert("MetaMask not found");
      return;
    }

    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    setSigner(signer);

    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    setContract(contract);
  }

  return (
    <Web3Context.Provider value={{ signer, contract, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
