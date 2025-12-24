import { useEffect, useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x4C85a629EE8eF798E8d88bb5DF4610A68D0aD45D";

const ABI = [
  "function nextOrderId() view returns (uint256)",
  "function orders(uint256) view returns (address owner, uint8 orderType, uint64 price, uint64 amount, uint8 status)",
  "function cancelOrder(uint256)",
];

type Order = {
  id: number;
  owner: string;
  orderType: number;
  price: number;
  amount: number;
  status: number;
};

export default function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);

  async function loadOrders() {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

    const total = Number(await contract.nextOrderId());
    const fetched: Order[] = [];

    for (let i = 0; i < total; i++) {
      const o = await contract.orders(i);
      fetched.push({
        id: i,
        owner: o[0],
        orderType: Number(o[1]),
        price: Number(o[2]),
        amount: Number(o[3]),
        status: Number(o[4]),
      });
    }

    setOrders(fetched);
  }

  async function cancel(id: number) {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    const tx = await contract.cancelOrder(id);
    await tx.wait();
    loadOrders();
  }

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="history-wrapper">
      <h1 className="history-title">Order History</h1>

      <div className="history-table">
        <div className="history-row history-header">
          <span>#ID</span>
          <span>Type</span>
          <span>Price (Encrypted)</span>
          <span>Amount (Encrypted)</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {orders.map((o) => (
          <div key={o.id} className="history-row">
            <span>#{o.id}</span>
            <span className={o.orderType === 0 ? "buy-text" : "sell-text"}>
              {o.orderType === 0 ? "BUY" : "SELL"}
            </span>
            <span>{o.price}</span>
            <span>{o.amount}</span>
            <span
              className={
                o.status === 0
                  ? "status-open"
                  : o.status === 1
                  ? "status-filled"
                  : "status-cancelled"
              }
            >
              {o.status === 0
                ? "OPEN"
                : o.status === 1
                ? "FILLED"
                : "CANCELLED"}
            </span>

            {o.status === 0 ? (
              <button className="cancel-btn" onClick={() => cancel(o.id)}>
                Cancel
              </button>
            ) : (
              <span>-</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
