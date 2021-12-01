# Day 01

## Resources

### Ethereum Client Libs
- Web3
- Ethers

### Development Framework
- Truffle
- Hardhat

## Install NodeJS

### 1. Check previous installed NodeJS.
```sh
node -v
v10.19.0

npm -v
6.14.4
```

### 2. Remove previous installed NodeJS
```sh
sudo apt -y remove nodejs
```

### 3. Update the APT repositories and install latest NodeJS version
```sh
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh

sudo bash nodesource_setup.sh

sudo apt -y install nodejs
```

## Install Truffle globally 

We are going to use [Truffle](https://trufflesuite.com/).

```sh
npm install -g truffle
```

### Create a simple SmartContract for React

https://trufflesuite.com/boxes/react

```sh
mkdir MyFirstSmartContract

cd MyFirstSmartContract

truffle unbox react
```

#### Run the development console

```sh
truffle develop
```
You will see this:

```sh
Truffle Develop started at http://127.0.0.1:8545/

Accounts:
(0) 0xad7...8
....
(9) 0xc50...3

Private Keys:
(0) 557c......750b7994
....
(9) 0e51......35d6c306

Mnemonic: message kit plastic enroll ocean venue crystal confirm obvious strong ozone inquiry

⚠️  Important ⚠️  : This mnemonic was created for you by Truffle. It is not secure.
Ensure you do not use it on production blockchains, or else you risk losing funds.

truffle(develop)> 
```


#### Playing with the Development Console

1. Get Accounts
```sh
truffle(develop)> web3.eth.getBalance(accounts[0])
'100000000000000000000'
```

2. Exit from Development Console
```sh
truffle(develop)> web3.eth.getBalance(accounts[0])
'100000000000000000000'
```
