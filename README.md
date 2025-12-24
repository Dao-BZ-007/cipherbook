<div align="center">

# 🔐 CIPHERBOOK

### **Private, Encrypted On-Chain Orderbook — Enforced With FHE**

_CipherBook allows users to place, match, and execute trades privately using fully homomorphic encryption._
_All order data (price, amount, order type) remains encrypted on-chain and during execution._

**Only the trader can ever see their order details.**

**[🎥 Watch Full Demo Video](https://youtu.be/REPLACE_WITH_YOUR_DEMO_LINK)**

</div>

---

## 🌟 Overview

**CIPHERBOOK** is a **privacy-preserving decentralized orderbook** built on Zama’s **FHEVM**, where **orders are created, matched, and filled using encrypted values** — even the smart contract never sees plaintext data.

Traditional DEX orderbooks expose:
- order prices
- order sizes
- trade intent

This leads to **MEV, front-running, and unfair execution**.

CipherBook fixes that.

### What CipherBook enables

- Place BUY / SELL orders with:
  - encrypted price
  - encrypted amount
- Store encrypted orders **directly on-chain**
- Perform order matching using **FHE encrypted comparisons**
- Execute trades without revealing sensitive information

This means:

> **Even the blockchain cannot see your orders, prices, or trade intent.**

---

### Why CipherBook Matters

Every on-chain orderbook today has a fatal flaw:

> **Transparency enables exploitation.**

Public order flow allows:
- MEV bots
- sandwich attacks
- unfair execution

This breaks trust.

**CipherBook removes the exploit surface entirely.**

- Orders are encrypted under FHE
- Matching logic runs on ciphertext
- Smart contracts validate trades without decryption
- No sequencer, matcher, or node can read order data

This is the **first true privacy-preserving on-chain orderbook primitive**.

---

## 🧩 Core Components

### 1. Client (React + Vite)

Handles encrypted order creation:

- Encrypt order price and amount
- Submit encrypted orders on-chain
- Display order history and matches
- Interact with wallet (MetaMask)

### 2. Smart Contract (FHEVM + Solidity)

Maintains encrypted trading state:

- Stores encrypted orders
- Compares encrypted prices
- Matches BUY ↔ SELL orders
- Updates order status securely
- Never touches plaintext

### 3. On-Chain Orderbook

- Encrypted BUY orders
- Encrypted SELL orders
- Encrypted order status
- Fully decentralized and trustless

### 4. Matching Engine (On-Chain via FHE)

- Encrypted comparisons
- Fair matching logic
- No front-running
- No off-chain coordinator

---

## 🛠️ Features

- ### **Encrypted Order Placement**

All order parameters are encrypted client-side.

- ### **Encrypted Order Matching**

Matching happens directly on encrypted values using FHE.

- ### **MEV Resistance**

No public order data → no front-running.

- ### **Trustless Execution**

No matcher, sequencer, or relayer is trusted.

- ### **On-Chain Privacy**

Everything runs fully on-chain with encryption.

---

## ⚙️ How it Works (High-Level Flow)

1️⃣ **User places order**  
→ Client encrypts price & amount  
→ Encrypted order sent to smart contract  

2️⃣ **Order stored on-chain**  
→ Stored fully encrypted  

3️⃣ **User initiates matching**  
→ Contract compares encrypted prices  

4️⃣ **Match confirmed**  
→ Orders are filled  
→ Status updated on-chain  

All without revealing values.

---




## 🧬 System Architecture

        ┌────────────────────────┐
        │      Client (React)    │
        │ - Encrypt order data   │
        │ - Submit tansactions   │
        │ - Diaplay UI           │
        │                        │
        └──────────┬─────────────┘
                   │
                   ▼
       ┌─────────────────────────────┐
       │   FHEVM Smart Contract      │
       │ - Store encrypted orders    │
       │ - Match encrypted value     │
       │ - Update order status       │
       │ - Never sees plaintext      │
       └───────────┬────────────────┘
                   │
                   ▼
     ┌───────────────────────────────┐
     │   Encrypted on-chain state    │
     │ - Orders                      │
     │ - Matches                     │
     │ - Status                      │
     └───────────────────────────────┘

---

 ## 📊 Deployed Contract

| Contract Name | Address                                    | Explorer Link                                                                                        |
| ------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Sepolia Testnet| 0x4C85a629EE8eF798E8d88bb5DF4610A68D0aD45D | [View on Etherscan](https://sepolia.etherscan.io/address/0x4C85a629EE8eF798E8d88bb5DF4610A68D0aD45D) |

---

## 🚀 Getting Started

Follow these steps to run, test, and develop **CipherBook** locally using **Vite, Hardhat and FHEVM**.

---

### ✅ 1. Install Dependencies

```bash
cd contracts
npm install
```

---

### ✅ 2. Compile Contracts

```bash
cd contracts
npx hardhat compile
npx hardhat ignition deploy ignition/modules/CipherBook.ts --network localhost
```

### ✅ 3. Run Frontend

```bash
cd forntend
npm run dev
```
open http://localhost:5173 with your browser to see the result.
### 🧰 Tech Stack

Frontend: React + Vite

Smart Contracts: Solidity + Zama FHEVM

Encryption: Fully Homomorphic Encryption (FHE)

Wallet: MetaMask

Deployment: Vercel + Ethereum Sepolia

### 🎯 Future Work

Batch encrypted matching

Private liquidity pools

Encrypted AMM hybrid

Cross-chain private trading

### 📄 License

MIT License — see LICENSE file.
