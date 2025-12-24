import { useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x4C85a629EE8eF798E8d88bb5DF4610A68D0aD45D";

const ABI = [
  "function nextOrderId() view returns (uint256)",
  "function orders(uint256) view returns (address owner, uint8 orderType, uint64 price, uint64 amount, uint8 status)",
  "function confirmMatch(uint256,uint256)",
];

type Match = {
  id: number;
  price: number;
};

export default function MatchOrders() {
  const [baseId, setBaseId] = useState("");
  const [matches, setMatches] = useState<Match[]>([]);
  const [mode, setMode] = useState<"BUY" | "SELL">("BUY");

  async function findMatches() {
    setMatches([]);

    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

    const base = await contract.orders(Number(baseId));
    const baseType = Number(base[1]);
    const basePrice = Number(base[2]);

    if (
      (mode === "BUY" && baseType !== 0) ||
      (mode === "SELL" && baseType !== 1)
    ) {
      alert("Invalid order type for selected mode");
      return;
    }

    const total = Number(await contract.nextOrderId());
    const found: Match[] = [];

    for (let i = 0; i < total; i++) {
      if (i === Number(baseId)) continue;

      const o = await contract.orders(i);
      if (Number(o[4]) !== 0) continue;

      const oType = Number(o[1]);
      const oPrice = Number(o[2]);

      if (
        (mode === "BUY" && oType === 1 && basePrice >= oPrice) ||
        (mode === "SELL" && oType === 0 && oPrice >= basePrice)
      ) {
        found.push({ id: i, price: oPrice });
      }
    }

    setMatches(found);
  }

  async function confirm(matchId: number) {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const buyId = mode === "BUY" ? Number(baseId) : matchId;
    const sellId = mode === "BUY" ? matchId : Number(baseId);

    const tx = await contract.confirmMatch(buyId, sellId);
    await tx.wait();

    alert("✅ Orders matched & filled");
    setMatches([]);
  }

  return (
    <div className="match-wrapper">
      <h1 className="match-title">Automated Encrypted Matching</h1>

      {/* INPUT TABLE */}
      <div className="match-card">
        <div className="match-controls">
          <select
            className="match-select"
            value={mode}
            onChange={(e) => setMode(e.target.value as any)}
          >
            <option value="BUY">Ask for BUY</option>
            <option value="SELL">Ask for SELL</option>
          </select>

          <input
            className="match-input"
            placeholder={`${mode} Order ID`}
            value={baseId}
            onChange={(e) => setBaseId(e.target.value)}
          />

          <button className="match-btn" onClick={findMatches}>
            Find Matches
          </button>
        </div>
      </div>

      {/* MATCH RESULTS TABLE */}
      {matches.length > 0 && (
        <div
          className="history-table  match-results"
          style={{ marginTop: "2.5rem" }}
        >
          <div className="history-row history-header">
            <span>Order ID</span>
            <span>Price</span>
            <span>Action</span>
          </div>

          {matches.map((m) => (
            <div key={m.id} className="history-row">
              <span>#{m.id}</span>
              <span>{m.price}</span>
              <button className="confirm-btn" onClick={() => confirm(m.id)}>
                Confirm
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
