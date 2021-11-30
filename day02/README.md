# Day 02

## Create an account and project in Infura.io

https://infura.io/

Select `RINKEBY` as Endpoints.

Copy the HTTPS endpoint

## Add the Infura network

### Create the project

![](/workshop-ethereum/day02/img/eth-infura-01.png)

### Update the network

Copy below into `truffle-config.js` as a new network.

```sh
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(privateKeys, "https://rinkeby.infura.io/v3/bf770d3461ac42a7a4d46079b9fd3b86", 0, 3)
      },
      network_id: 4,
      gas: 4000000,      //make sure this gas allocation isn't over 4M, which is the max
    },
```

## Download a Wallet to manage crypto keys

We are going to use [Metamask](https://metamask.io/) as a Browser extension. In my case, Firefox.
Initialize a wallet and ready, you should have this:

![](/workshop-ethereum/day02/img/eth-metamask-wallet-01.png)

### Add a new Network to Metamask

![](/workshop-ethereum/day02/img/eth-metamask-wallet-03.png)

### Using Etherscan.io to query transactions

![](/workshop-ethereum/day02/img/eth-metamask-wallet-04.png)
![](/workshop-ethereum/day02/img/eth-metamask-wallet-05.png)
![](/workshop-ethereum/day02/img/eth-metamask-wallet-06.png)
![](/workshop-ethereum/day02/img/eth-metamask-wallet-07.png)
![](/workshop-ethereum/day02/img/eth-metamask-wallet-08.png)
![](/workshop-ethereum/day02/img/eth-metamask-wallet-09.png)


### Update truffe-config.js

```ts
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
        return new HDWalletProvider(privateKeys, "https://rinkeby.infura.io/v3/bf770d3461ac42a7a4d46079b9fd3b86", 0, 3)
      },
      network_id: 4,      // 4 = RINKEBY
      gas: 4000000,       // make sure this gas allocation isn't over 4M, which is the max
    }

  }
};
```


### Run the App

npm install @truffle/hdwallet-provider

or this if you have installed it globally

sudo npm install -g @truffle/hdwallet-provider

truffle console --network rinkeby

Deploy without testing

truffle console --network rinkeby
truffle(rinkeby)> deploy

```sh
...

2_deploy_contracts.js
=====================

   Deploying 'SimpleStorage'
   -------------------------
   > transaction hash:    0x05746fb4f36c9bd1c40917d072133e79f25e0750806c00abf6071b2400af00e4
   > Blocks: 0            Seconds: 12
   > contract address:    0xF366d4b2E4c0C8E83014A1f13ec439A4a453D944
   > block number:        9733784
   > block timestamp:     1638290196
   > account:             0x063352a3E4fe59Fee0B60Ec37bc230c71E04A91a
   > balance:             0.094302499750643734
   > gas used:            96189 (0x177bd)
   > gas price:           2.500000201 gwei
   > value sent:          0 ETH
   > total cost:          0.000240472519333989 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000240472519333989 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.000654160050939714 ETH
....
```

### Checking the deployment

Copy the `contract address: 0xF366d4b2E4c0C8E83014A1f13ec439A4a453D944` and check it in the network using [https://etherscan.io](https://etherscan.io).
