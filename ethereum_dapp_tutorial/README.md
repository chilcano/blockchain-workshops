# The ultimate ethereum Dapp tutorial

## Resources

* https://www.dappuniversity.com/articles/the-ultimate-ethereum-dapp-tutorial
* [NodeJS on Ubuntu 22.x guide](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)

## Step 1 - Setup the Ethereum Dapp development environment

1. __Install NodeJS and its package manager__ 


```sh
$ curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -

$ sudo apt-get install -y nodejs

$ node -v
v16.18.1
```

Now, install the package manager and extra libraries that nodejs requires.
The standard NodeJS package manager `npm` has been installed when NodeJS was installed.
```sh
$ npm -v
8.19.2
```

Now, update `npm`.
```sh
// Latest version
$ sudo npm install npm@latest -g

// Sugested version
$ sudo npm install -g npm@9.1.2
```

To install another NodeJS package manager such as `Yarn`, follow the next steps: 
```sh
$ curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
$ echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install yarn

// Check yarn
$ yarn -v
1.22.19
```

Finally, install the extra libraries:
```sh
$ sudo apt-get install gcc g++ make
```

2. __Install Truffle__ 

> It allows us to write smart contacts with the Solidity programming language. It also enables us to test our smart contracts and deploy them to the blockchain. It also gives us a place to develop our client-side application.

```sh
$ sudo npm install -g npm@9.2.0

$ sudo npm install -g truffle
```

3. __Install Ganache__ 

> It is a local in-memory blockchain. You can install Ganache by downloading it from the Truffle Framework website. It will give us 10 external accounts with addresses on our local Ethereum blockchain. Each account is preloaded with 100 fake ether.

3. __Install Metamask__ 

> In order to use the blockchain, we must connect to it using a Wallet. The Wallet provides us an ID that allows us to conect to Ethereum Network, perform transactions and interact with our smart contracts. Were goinf to use the Metamask Chrome or Firefox extension.  
> Once installed, we should create an account which will generate an ID to begin operating on the blockchain network.

4. __Install a IDE__

> We recommend to install [VSCode](https://code.visualstudio.com/download) and an VSCode's extension wich will allow code NodeJS, TypeScript and Solidity programs.


## Step 2 - Run a Smoke Test

We are going to check if our Dapp development environment is going to work. In order to do that, we will test it using a simple Dapp. 

```sh
$ code-here ......
```
