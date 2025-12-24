import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CipherBookModule = buildModule("CipherBookModule", (m) => {
  const cipherBook = m.contract("CipherBook");
  return { cipherBook };
});

export default CipherBookModule;
