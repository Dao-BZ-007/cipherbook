<div align="center">

# 📘 CIPHERBOOK

### **Private On-Chain Orderbook — Enforced With Zama FHE**

_CipherBook enables fully private order placement and matching on-chain using Fully Homomorphic Encryption._

_Order prices, amounts, and matching logic remain encrypted at all times — even from the blockchain itself._

**Only correctness is revealed. Never the data.**

</div>

---

## 🌟 Overview

**CipherBook** is a **privacy-preserving on-chain orderbook** built using **Zama’s Fully Homomorphic Encryption (FHE)**.

In traditional DEXs and orderbooks:
- Prices are public  
- Amounts are public  
- Order strategies are visible  
- MEV and front-running are inevitable  

CipherBook changes this.

Using **Zama FHE**, CipherBook allows **order placement, comparison, and matching to happen directly on encrypted values**, without ever revealing sensitive trade data.

> **Even the blockchain cannot see your order prices or amounts.**

---

## 🧠 Why CipherBook Matters

Public orderbooks leak information.

This leads to:
- Front-running
- Strategy copying
- MEV extraction
- Unfair markets

Most “private” systems today:
- Encrypt data off-chain
- Decrypt it for execution
- Rely on trusted relayers or sequencers

That breaks trust.

**CipherBook enforces privacy directly on-chain.**

- Orders are encrypted
- Matching logic runs on ciphertext
- Smart contracts never see plaintext
- Execution correctness is verifiable

This is **true on-chain privacy**, not an illusion.

---

## 🔐 Why We Chose Zama FHE

Zama’s Fully Homomorphic Encryption allows:

- 🔒 Computation on encrypted data  
- 🧮 Encrypted price comparison  
- 🛡️ Protection from MEV & front-running  
- 🌐 Privacy on a public blockchain  

CipherBook demonstrates how **FHE can unlock a new class of DeFi primitives** that were previously impossible on transparent ledgers.

This project is built to **showcase Zama FHE in a real DeFi context**, not a toy example.

---

## ✨ What CipherBook Enables

- Place BUY / SELL orders with encrypted price & amount
- Store orders fully on-chain
- Compare encrypted prices for matching
- Find valid matches without revealing values
- Confirm matches and mark orders as filled
- Cancel open orders
- Maintain a private yet verifiable order lifecycle

---

## 🧩 Core Components

### 1. Client (React + Vite)

Handles:
- Wallet connection
- User input
- Encrypted order submission
- Encrypted match discovery
- Match confirmation

No sensitive data is ever revealed in the UI.

---

### 2. Smart Contract (Solidity + Zama FHE)

Responsible for:
- Storing encrypted orders
- Tracking order status (OPEN / FILLED / CANCELLED)
- Performing encrypted comparisons
- Enforcing valid matches

The contract **never decrypts** any order data.

---

### 3. Blockchain (Ethereum Sepolia)

- Public settlement layer
- Private computation layer via FHE
- Verifiable correctness
- No trust assumptions

---

## 🛠️ Features

- 🔑 **Encrypted Order Placement**
- 📊 **Private On-Chain Orderbook**
- 🤝 **Encrypted Order Matching**
- ❌ **Order Cancellation**
- ✅ **Filled Order Tracking**
- 🦊 **MetaMask Integration**
- ⚡ **Modern UI with React + Vite**
- 🌐 **Live on Ethereum Sepolia**
- 🚀 **Deployed on Vercel**

---

## ⚙️ How It Works (High-Level Flow)

1️⃣ **User places an order**  
→ Price & amount are encrypted  
→ Order stored on-chain  

2️⃣ **User searches for matches**  
→ Contract compares encrypted values  
→ Valid matches are returned  

3️⃣ **User confirms a match**  
→ Orders are marked as filled  
→ No price or amount is revealed  

4️⃣ **Order lifecycle remains private**  
→ Only status is public  
→ Data stays encrypted forever  

---

## 🧬 System Architecture
┌────────────────────────┐
│ Frontend (UI) │
│ - Wallet connection │
│ - Encrypted input │
│ - Match discovery │
└──────────┬─────────────┘
│
▼
┌────────────────────────┐
│ Smart Contract (FHE) │
│ - Store encrypted data│
│ - Compare ciphertext │
│ - Enforce matching │
│ - No plaintext access │
└──────────┬─────────────┘
│
▼
┌────────────────────────┐
│ Ethereum Blockchain │
│ - Verifiable execution│
│ - Public settlement │
│ - Private computation │
└────────────────────────┘

---

## 📊 Deployed Contract

| Network | Address | Explorer |
|-------|--------|----------|
| Sepolia | _Your deployed address_ | Etherscan link |

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
cd frontend
npm install
cd contracts
npm install
2️⃣ Compile Contracts
bash
Copy code
cd contracts
npx hardhat compile
3️⃣ Run Frontend Locally
bash
Copy code
cd frontend
npm run dev
🧰 Tech Stack
Zama FHE

Solidity

Hardhat

Ethers v6

React + TypeScript

Vite

Ethereum Sepolia

Vercel

🎯 Zama Developer Program Submission
CipherBook is built to demonstrate:

Practical FHE usage

Real DeFi-style logic

Encrypted on-chain computation

Clean UX for advanced cryptography

This project shows how Zama FHE can redefine fairness and privacy in DeFi.

👤 Author
Somnath Ashtekar
GitHub: https://github.com/Dao-BZ-007
