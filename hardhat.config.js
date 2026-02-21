require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: ["0xYOUR_PRIVATE_KEY"]
    }
  }
};
