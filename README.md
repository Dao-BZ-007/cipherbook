<div align="center">

# 🔐 CipherBook

### **Private On-Chain Orderbook — Powered by ZAMA Fully Homomorphic Encryption**

_CipherBook is a privacy-preserving decentralized orderbook where trades are placed, matched, and executed **without revealing price, amount, or intent**._

_All sensitive order data remains encrypted at all times — even from the blockchain._

**Built using ZAMA FHEVM**

</div>

---

## 🌟 Overview

**CipherBook** is a **confidential on-chain orderbook** that demonstrates how **Fully Homomorphic Encryption (FHE)** can be used to enable real DeFi privacy.

In traditional DEXs:
- Orders are public
- Prices are visible
- MEV bots exploit users
- Front-running is unavoidable

CipherBook fixes this by keeping:
- **Price**
- **Amount**
- **Order type (BUY / SELL)**

🔒 **Encrypted on-chain**, while still allowing **correct matching**.

> Even the smart contract never sees plaintext order data.

---

## ❓ Why CipherBook Matters

Privacy in DeFi is broken.

Most protocols encrypt user data **off-chain**, but once it hits the blockchain:
- Everything becomes public
- Order flow is exposed
- Users are exploited

**CipherBook changes that.**

- Orders are encrypted client-side
- Matching happens on encrypted values
- No trusted matcher
- No private backend
- No off-chain coordinator

This is **true on-chain privacy**, enabled by **ZAMA FHE**.

---

## 🏗️ System Architecture

CipherBook uses a simple but powerful architecture where **encryption is the default**, not an add-on.

### 🔐 High-Level Architecture

```mermaid
flowchart TB
    U[User Wallet<br/>(MetaMask)] -->|Encrypted Order Data| FE[Frontend (React + Vite)]

    FE -->|Encrypted Inputs| SC[FHEVM Smart Contract<br/>(CipherBook.sol)]

    SC -->|Encrypted Order Storage| OB[(On-Chain Orderbook)]

    SC -->|Encrypted Comparison| EM[ZAMA FHE Matching Logic]

    EM -->|Match Result (Encrypted)| SC

    SC -->|Order Status Update| OB

    OB -->|Encrypted Read| FE
🧩 Core Components
1️⃣ Frontend (React + Vite)
Collects order inputs (price, amount, type)

Encrypts values before submission

Displays:

Order history

Match results

Order status

Never decrypts other users’ data

2️⃣ Smart Contract (ZAMA FHEVM)
Stores all orders encrypted

Compares encrypted prices using FHE

Matches BUY ↔ SELL orders without seeing values

Updates order status securely

Even validators and node operators cannot see order data.

3️⃣ On-Chain Encrypted Orderbook
Encrypted BUY orders

Encrypted SELL orders

Encrypted order status (OPEN / FILLED / CANCELLED)

All stored directly on-chain.

🔁 How Encrypted Matching Works
1️⃣ User places BUY or SELL order
2️⃣ Frontend encrypts price & amount
3️⃣ Encrypted order is stored on-chain
4️⃣ Matching logic compares encrypted prices
5️⃣ If conditions match → orders are FILLED
6️⃣ Result is returned without revealing data

🛠️ Features
🔐 Encrypted Order Placement

🔁 Encrypted Order Matching

📜 On-Chain Order History

🚫 No Front-Running

🚫 No MEV

🚫 No Trusted Off-Chain Matcher

🌐 Fully Decentralized

🧪 Demo Scope
CipherBook is a functional demo designed to showcase:

Practical usage of ZAMA FHE

Encrypted logic on-chain

Real UI + real contract interaction

Privacy-first DeFi design

📸 Screenshots
📌 Add the following screenshots here:

Home Page

Place Order Page

Order History Page

Encrypted Matching Page

(Upload images to /assets and link them here.)

🧠 Why We Chose ZAMA FHE
ZAMA enables something no other blockchain tech can:

Compute on encrypted data — directly on-chain.

With ZAMA FHEVM:

Data stays encrypted

Logic still works

Trust assumptions disappear

CipherBook would not be possible without FHE.

This project demonstrates how ZAMA unlocks:

Private DeFi

Confidential trading

MEV-resistant orderbooks

🚀 Getting Started (Local)
1️⃣ Install Dependencies
bash
Copy code
cd frontend
npm install
bash
Copy code
cd contracts
npm install
2️⃣ Compile Contracts
bash
Copy code
cd contracts
npx hardhat compile
3️⃣ Run Frontend
bash
Copy code
cd frontend
npm run dev
🌍 Deployment
Smart Contract: Ethereum Sepolia

Frontend: Vercel

🧭 Future Work
Batch encrypted matching

Encrypted order aggregation

Confidential AMM hybrid model

ZK + FHE combined privacy

Cross-chain private liquidity
