<div align="center">

# 🔐 CIPHERBOOK

### **Private On-Chain Orderbook — Enforced With ZAMA Fully Homomorphic Encryption**

_CipherBook enables users to place, match, and execute trades privately on-chain using Fully Homomorphic Encryption (FHE)._

_All sensitive order data (price, amount, order type) remains encrypted at all times — even from the smart contract and blockchain._

**No front-running. No MEV. No data leaks.**

</div>

---

## 🌟 Overview

**CIPHERBOOK** is a **privacy-preserving decentralized orderbook** built on **ZAMA’s FHEVM**, where **orders are matched using encrypted values** without ever revealing them.

In traditional DEXs:
- Orders are public
- Prices are visible
- MEV bots exploit users
- Front-running is unavoidable

CipherBook fixes this.

### What CipherBook enables

- Users place BUY / SELL orders with:
  - encrypted price
  - encrypted amount
- Orders are stored **fully encrypted on-chain**
- Matching logic runs on encrypted values using **FHE**
- Smart contracts never see plaintext data

This means:

> **Even the blockchain cannot see your order details.**

---

### Why CipherBook Matters

Every on-chain orderbook today has a fatal flaw:

> **Transparency enables exploitation.**

Public order flow leads to:
- MEV extraction
- Sandwich attacks
- Unfair execution

CipherBook eliminates this by design.

- Orders are encrypted client-side
- Matching happens on encrypted data
- No trusted matcher
- No off-chain coordinator
- No privileged actor

This is **true on-chain privacy for trading**, made possible by **ZAMA FHE**.

---

## 🧩 Core Components

### 1. Client (React + Vite)

Handles all user interaction:

- Collects order inputs
- Encrypts price & amount
- Submits encrypted data on-chain
- Displays order history and match results

No sensitive data is ever exposed.

---

### 2. Smart Contract (ZAMA FHEVM + Solidity)

Maintains encrypted trading logic:

- Stores encrypted orders
- Compares encrypted prices
- Matches BUY ↔ SELL orders
- Updates order status securely

The contract **never decrypts anything**.

---

### 3. Encrypted On-Chain Orderbook

- Encrypted BUY orders
- Encrypted SELL orders
- Encrypted order status (OPEN / FILLED)

All data lives **directly on-chain**, protected by FHE.

---

## ⚙️ How It Works (High-Level Flow)

1️⃣ **User places order**  
→ Frontend encrypts price & amount  

2️⃣ **Encrypted order submitted on-chain**  
→ Stored in smart contract  

3️⃣ **User requests matching**  
→ Encrypted comparison performed using FHE  

4️⃣ **If match conditions satisfied**  
→ Orders are filled  
→ Status updated on-chain  

All without revealing values.

---

## 🧬 System Architecture

<div align="center">

# 🔐 CIPHERBOOK

### **Private On-Chain Orderbook — Enforced With ZAMA Fully Homomorphic Encryption**

_CipherBook enables users to place, match, and execute trades privately on-chain using Fully Homomorphic Encryption (FHE)._

_All sensitive order data (price, amount, order type) remains encrypted at all times — even from the smart contract and blockchain._

**No front-running. No MEV. No data leaks.**

</div>

---

## 🌟 Overview

**CIPHERBOOK** is a **privacy-preserving decentralized orderbook** built on **ZAMA’s FHEVM**, where **orders are matched using encrypted values** without ever revealing them.

In traditional DEXs:
- Orders are public
- Prices are visible
- MEV bots exploit users
- Front-running is unavoidable

CipherBook fixes this.

### What CipherBook enables

- Users place BUY / SELL orders with:
  - encrypted price
  - encrypted amount
- Orders are stored **fully encrypted on-chain**
- Matching logic runs on encrypted values using **FHE**
- Smart contracts never see plaintext data

This means:

> **Even the blockchain cannot see your order details.**

---

### Why CipherBook Matters

Every on-chain orderbook today has a fatal flaw:

> **Transparency enables exploitation.**

Public order flow leads to:
- MEV extraction
- Sandwich attacks
- Unfair execution

CipherBook eliminates this by design.

- Orders are encrypted client-side
- Matching happens on encrypted data
- No trusted matcher
- No off-chain coordinator
- No privileged actor

This is **true on-chain privacy for trading**, made possible by **ZAMA FHE**.

---

## 🧩 Core Components

### 1. Client (React + Vite)

Handles all user interaction:

- Collects order inputs
- Encrypts price & amount
- Submits encrypted data on-chain
- Displays order history and match results

No sensitive data is ever exposed.

---

### 2. Smart Contract (ZAMA FHEVM + Solidity)

Maintains encrypted trading logic:

- Stores encrypted orders
- Compares encrypted prices
- Matches BUY ↔ SELL orders
- Updates order status securely

The contract **never decrypts anything**.

---

### 3. Encrypted On-Chain Orderbook

- Encrypted BUY orders
- Encrypted SELL orders
- Encrypted order status (OPEN / FILLED)

All data lives **directly on-chain**, protected by FHE.

---

## ⚙️ How It Works (High-Level Flow)

1️⃣ **User places order**  
→ Frontend encrypts price & amount  

2️⃣ **Encrypted order submitted on-chain**  
→ Stored in smart contract  

3️⃣ **User requests matching**  
→ Encrypted comparison performed using FHE  

4️⃣ **If match conditions satisfied**  
→ Orders are filled  
→ Status updated on-chain  

All without revealing values.

---

## 🧬 System Architecture

<div align="center">

# 🔐 CIPHERBOOK

### **Private On-Chain Orderbook — Enforced With ZAMA Fully Homomorphic Encryption**

_CipherBook enables users to place, match, and execute trades privately on-chain using Fully Homomorphic Encryption (FHE)._

_All sensitive order data (price, amount, order type) remains encrypted at all times — even from the smart contract and blockchain._

**No front-running. No MEV. No data leaks.**

</div>

---

## 🌟 Overview

**CIPHERBOOK** is a **privacy-preserving decentralized orderbook** built on **ZAMA’s FHEVM**, where **orders are matched using encrypted values** without ever revealing them.

In traditional DEXs:
- Orders are public
- Prices are visible
- MEV bots exploit users
- Front-running is unavoidable

CipherBook fixes this.

### What CipherBook enables

- Users place BUY / SELL orders with:
  - encrypted price
  - encrypted amount
- Orders are stored **fully encrypted on-chain**
- Matching logic runs on encrypted values using **FHE**
- Smart contracts never see plaintext data

This means:

> **Even the blockchain cannot see your order details.**

---

### Why CipherBook Matters

Every on-chain orderbook today has a fatal flaw:

> **Transparency enables exploitation.**

Public order flow leads to:
- MEV extraction
- Sandwich attacks
- Unfair execution

CipherBook eliminates this by design.

- Orders are encrypted client-side
- Matching happens on encrypted data
- No trusted matcher
- No off-chain coordinator
- No privileged actor

This is **true on-chain privacy for trading**, made possible by **ZAMA FHE**.

---

## 🧩 Core Components

### 1. Client (React + Vite)

Handles all user interaction:

- Collects order inputs
- Encrypts price & amount
- Submits encrypted data on-chain
- Displays order history and match results

No sensitive data is ever exposed.

---

### 2. Smart Contract (ZAMA FHEVM + Solidity)

Maintains encrypted trading logic:

- Stores encrypted orders
- Compares encrypted prices
- Matches BUY ↔ SELL orders
- Updates order status securely

The contract **never decrypts anything**.

---

### 3. Encrypted On-Chain Orderbook

- Encrypted BUY orders
- Encrypted SELL orders
- Encrypted order status (OPEN / FILLED)

All data lives **directly on-chain**, protected by FHE.

---

## ⚙️ How It Works (High-Level Flow)

1️⃣ **User places order**  
→ Frontend encrypts price & amount  

2️⃣ **Encrypted order submitted on-chain**  
→ Stored in smart contract  

3️⃣ **User requests matching**  
→ Encrypted comparison performed using FHE  

4️⃣ **If match conditions satisfied**  
→ Orders are filled  
→ Status updated on-chain  

All without revealing values.

---

## 🧬 System Architecture

<div align="center">

# 🔐 CIPHERBOOK

### **Private On-Chain Orderbook — Enforced With ZAMA Fully Homomorphic Encryption**

_CipherBook enables users to place, match, and execute trades privately on-chain using Fully Homomorphic Encryption (FHE)._

_All sensitive order data (price, amount, order type) remains encrypted at all times — even from the smart contract and blockchain._

**No front-running. No MEV. No data leaks.**

</div>

---

## 🌟 Overview

**CIPHERBOOK** is a **privacy-preserving decentralized orderbook** built on **ZAMA’s FHEVM**, where **orders are matched using encrypted values** without ever revealing them.

In traditional DEXs:
- Orders are public
- Prices are visible
- MEV bots exploit users
- Front-running is unavoidable

CipherBook fixes this.

### What CipherBook enables

- Users place BUY / SELL orders with:
  - encrypted price
  - encrypted amount
- Orders are stored **fully encrypted on-chain**
- Matching logic runs on encrypted values using **FHE**
- Smart contracts never see plaintext data

This means:

> **Even the blockchain cannot see your order details.**

---

### Why CipherBook Matters

Every on-chain orderbook today has a fatal flaw:

> **Transparency enables exploitation.**

Public order flow leads to:
- MEV extraction
- Sandwich attacks
- Unfair execution

CipherBook eliminates this by design.

- Orders are encrypted client-side
- Matching happens on encrypted data
- No trusted matcher
- No off-chain coordinator
- No privileged actor

This is **true on-chain privacy for trading**, made possible by **ZAMA FHE**.

---

## 🧩 Core Components

### 1. Client (React + Vite)

Handles all user interaction:

- Collects order inputs
- Encrypts price & amount
- Submits encrypted data on-chain
- Displays order history and match results

No sensitive data is ever exposed.

---

### 2. Smart Contract (ZAMA FHEVM + Solidity)

Maintains encrypted trading logic:

- Stores encrypted orders
- Compares encrypted prices
- Matches BUY ↔ SELL orders
- Updates order status securely

The contract **never decrypts anything**.

---

### 3. Encrypted On-Chain Orderbook

- Encrypted BUY orders
- Encrypted SELL orders
- Encrypted order status (OPEN / FILLED)

All data lives **directly on-chain**, protected by FHE.

---

## ⚙️ How It Works (High-Level Flow)

1️⃣ **User places order**  
→ Frontend encrypts price & amount  

2️⃣ **Encrypted order submitted on-chain**  
→ Stored in smart contract  

3️⃣ **User requests matching**  
→ Encrypted comparison performed using FHE  

4️⃣ **If match conditions satisfied**  
→ Orders are filled  
→ Status updated on-chain  

All without revealing values.

---

## 🧬 System Architecture

┌──────────────────────────┐
│ User Wallet │
│ (MetaMask) │
└──────────┬───────────────┘
│
▼
┌──────────────────────────┐
│ Frontend (React + Vite)│
│ - Encrypt order data │
│ - Submit transactions │
│ - Display results │
└──────────┬───────────────┘
│
▼
┌──────────────────────────┐
│ FHEVM Smart Contract │
│ - Store encrypted orders │
│ - Compare encrypted vals │
│ - Match orders │
│ - Never sees plaintext │
└──────────┬───────────────┘
│
▼
┌──────────────────────────┐
│ Encrypted On-Chain State │
│ - Orders │
│ - Status │
└──────────────────────────┘

---

## 🛠️ Features

- **Encrypted Order Placement**
- **Encrypted Order Matching**
- **On-Chain Order History**
- **MEV Resistance**
- **No Trusted Intermediary**
- **Fully Decentralized**

---

## 📸 Screenshots

_Add screenshots here:_

- Home Page
- Place Order Page
- Order History Page
- Encrypted Matching Page

---

## 🔐 Why We Chose ZAMA FHE

ZAMA’s Fully Homomorphic Encryption allows:

> **Computation on encrypted data — directly on-chain.**

With ZAMA FHEVM:
- Data stays encrypted
- Logic still executes correctly
- Trust assumptions disappear

CipherBook would **not be possible** without FHE.

This project demonstrates how ZAMA unlocks:
- Private DeFi
- Confidential trading
- Fair execution

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
cd contracts
npm install
2. Compile Contracts
cd contracts
npx hardhat compile

