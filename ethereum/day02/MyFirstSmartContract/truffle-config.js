var HDWalletProvider = require("@truffle/hdwallet-provider");

const path = require("path");
const privateKeys = ["8adb489ad39edc4210653380a7db738b764df51f0732d1f4ec3772a1bd0d2415"];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },

    rinkeby: {
      provider: function () {
        return new HDWalletProvider(privateKeys, "https://rinkeby.infura.io/v3/bf770d3461ac42a7a4d46079b9fd3b86", 0, 1)
      },
      network_id: 4,      // 4 = RINKEBY
      gas: 4000000,       // make sure this gas allocation isn't over 4M, which is the max
    }

  }
};
