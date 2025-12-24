# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

# CipherBook 🧾🔐

Privacy-Preserving Order Book for DEXs using ZAMA FHE

---

## 🧠 Problem

Most decentralized exchanges expose their entire order book on-chain:

- Prices are public
- Order sizes are public
- Trading intent is public

This enables:

- Front-running
- MEV attacks
- Strategy leakage

---

## 💡 Solution

CipherBook is a **privacy-preserving order book** where:

- Prices are encrypted
- Order sizes are encrypted
- Matching conditions are computed **without revealing values**

The protocol uses **Fully Homomorphic Encryption (FHE)** to allow
order matching on encrypted data.

---

## 🏗️ Architecture Overview

User
│
│ (price, amount)
▼
Frontend (React + ethers)
│
│ [DEMO] Plain values
│ [FHE] Encrypted values
▼
CipherBook Smart Contract
│
│ Stores encrypted orders
│ Computes encrypted comparisons
▼
Encrypted Match Result

---

## 🔐 Encryption Model

### Demo Version (This Submission)

- Price and amount are sent as plaintext integers
- Order storage and flow mimic the encrypted version
- Architecture is FHE-ready

### FHE Version (Planned Upgrade)

- Frontend encrypts values using ZAMA FHE SDK
- Contract stores `euint64` values
- Matching uses `FHE.ge`, `FHE.le`, etc.
- No decryption on-chain

---

## 🧪 Demo Flow

1. User connects MetaMask
2. User submits Buy / Sell order
3. Order is stored on-chain
4. Order history updates in UI
5. Transactions execute on local Hardhat chain

---

## 🔁 Migration to Full FHE

The following changes enable full privacy:

| Component | Change                            |
| --------- | --------------------------------- |
| Frontend  | Encrypt price & amount            |
| Contract  | Use `euint64` instead of `uint64` |
| Matching  | Encrypted comparisons             |
| UI        | Optional decryption for owner     |

The **core architecture remains unchanged**.

---

## 🧑‍⚖️ Why This Fits ZAMA

- Demonstrates correct FHE mental model
- Avoids forbidden operations (branching on encrypted data)
- Separates demo and encrypted logic cleanly
- Shows real DEX use-case

---

## 🚀 Future Work

- Encrypted order matching
- Partial fills
- Batch matching
- On-chain settlement
- ZAMA relayer integration

---

## 📜 License

MIT
