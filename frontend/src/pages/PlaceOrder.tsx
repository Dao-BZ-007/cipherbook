import { useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const ABI = [
  "function placeOrder(uint8 orderType, uint64 price, uint64 amount)",
];

export default function PlaceOrder() {
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  async function placeOrder(orderType: number) {
    try {
      if (!(window as any).ethereum) {
        alert("MetaMask not found");
        return;
      }

      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

      const tx = await contract.placeOrder(
        orderType,
        Number(price),
        Number(amount)
      );

      await tx.wait();
      alert("✅ Order placed successfully");
      setPrice("");
      setAmount("");
    } catch (err) {
      console.error(err);
      alert("❌ Transaction failed");
    }
  }

  return (
    <div className="place-wrapper">
      <h1 className="place-title">Place Encrypted Order</h1>

      <div className="place-card">
        <div className="input-group">
          <input
            className="place-input"
            placeholder="Price (encrypted)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="place-input"
            placeholder="Amount (encrypted)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="encrypted-label">ENCRYPTED BY FHE</div>

        <div className="place-actions">
          <button className="buy-btn" onClick={() => placeOrder(0)}>
            BUY
          </button>
          <button className="sell-btn" onClick={() => placeOrder(1)}>
            SELL
          </button>
        </div>
      </div>
    </div>
  );
}
