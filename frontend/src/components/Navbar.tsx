import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Navbar() {
  const [account, setAccount] = useState<string>("");

  async function connect() {
    if (!window.ethereum) return alert("MetaMask not found");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    setAccount(await signer.getAddress());
  }

  useEffect(() => {
    connect().catch(() => {});
  }, []);

  return (
    <nav
      style={{
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(15,23,42,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f2937",
      }}
    >
      <h2 style={{ color: "#14f1c9" }}>CipherBook</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/order">Place Order</Link>
        <Link to="/history">History</Link>
        <Link to="/match">Match</Link>

        <button
          onClick={connect}
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(135deg,#14f1c9,#6b7cff)",
            color: "#000",
            fontWeight: 600,
            transition: "transform .2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {account ? `${account.slice(0, 6)}...` : "Connect"}
        </button>
      </div>
    </nav>
  );
}
