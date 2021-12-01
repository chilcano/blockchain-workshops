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
```
You will see this:

```sh
...
+ apt-get update
Get:1 https://deb.nodesource.com/node_16.x focal InRelease [4583 B]
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
     echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn
```

Finally, let's install NodeJS 16.x
```sh
sudo apt -y install nodejs
```
### 4. Check installed NodeJS

```sh
$ node -v
v16.13.0

└ $ npm -v
8.1.0
```

## Install Truffle globally 

We are going to use [Truffle](https://trufflesuite.com/).
```sh
sudo npm install -g truffle
```
You will see this:
```sh
...
added 1088 packages, and audited 1089 packages in 4m

83 packages are looking for funding
  run `npm fund` for details

72 vulnerabilities (7 low, 50 moderate, 13 high, 2 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible, run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
npm notice
npm notice New patch version of npm available! 8.1.0 -> 8.1.4
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.1.4
npm notice Run npm install -g npm@8.1.4 to update!
npm notice
```






### Create a simple SmartContract for React

Use the Truffle documentation for further details and how to create other kind of applications: [https://trufflesuite.com/boxes/react](https://trufflesuite.com/boxes/react)

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

1. Get Accounts.
```sh
truffle(develop)> web3.eth.getBalance(accounts[0])
'100000000000000000000'
```

2. Exit from Development Console.
```sh
truffle(develop)> web3.eth.getBalance(accounts[0])
'100000000000000000000'
```
