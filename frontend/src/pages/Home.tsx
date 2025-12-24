export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Background Video */}
      <video className="home-video" autoPlay loop muted playsInline>
        <source src="/videos/home-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="home-overlay" />

      {/* Content */}
      <div className="home-content">
        <h1 className="home-title">Private On-Chain Orderbook</h1>

        <p className="home-subtitle">
          CipherBook is a private on-chain orderbook built using ZAMA’s Fully
          Homomorphic Encryption (FHE). Prices and amounts remain encrypted, yet
          orders can be matched , demonstrating how privacy-preserving
          computation enables fair and trustless markets.
        </p>
      </div>
    </div>
  );
}
