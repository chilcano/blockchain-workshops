# The ultimate ethereum Dapp tutorial

## Step 02 - List candidates

The `step 02` use the `dapp-election-02/` directory with the updated code.

### 1 - Update the Election contract

Update `dapp-election-02/contracts/Election.sol` file with this code:

```js
pragma solidity >=0.4.22 <0.8.0;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Read/write candidates
    mapping(uint => Candidate) public candidates;

    // Store Candidates Count
    uint public candidatesCount;

    //function Election() public {
    constructor() public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    //function addCandidate(string _name) private {
    function addCandidate(string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

}
```
This updated code fixes:
- `project:/contracts/Election.sol:17:5: Warning: This declaration shadows an existing declaration.
`
- `CompileError: project:/contracts/Election.sol:23:27: TypeError: Data location must be "storage" or "memory" for parameter in function, but none was given.
`


### 2 - Deploy updated contracts

Make sure you have Ganache running, once running, open a Terminal/Console, go to `dapp-election-02/` and execute the next command:

```sh
$ cd dapp-election-02/

$ truffle migrate --reset
```

You will see this:
```sh
Compiling your contracts...
===========================
> Compiling ./contracts/Election.sol
> Compiling ./contracts/Migrations.sol
> Artifacts written to /home/chilcano/repos/blockchain-workshops/ethereum-dapp-tutorial/dapp-election-02/build/contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang


Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x75d959aed1756379839171d0a6ebf12775c46bc87cb558bb21dc868576a95554
   > Blocks: 0            Seconds: 0
   > contract address:    0x528c4caB957D679AD56102B42e2793555086A3D3
   > block number:        5
   > block timestamp:     1680359916
   > account:             0xD64290a40b287809895709f90050cf733bA9321A
   > balance:             99.98768342
   > gas used:            191943 (0x2edc7)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00383886 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00383886 ETH


2_deploy_contracts.js
=====================

   Replacing 'Election'
   --------------------
   > transaction hash:    0x2a476e957c66b336034f89f893ba919813eb2ede0b1566fb563148c056a75b0e
   > Blocks: 0            Seconds: 0
   > contract address:    0xC879ed6443Fea326Ef0c859257E201f192357E04
   > block number:        7
   > block timestamp:     1680359917
   > account:             0xD64290a40b287809895709f90050cf733bA9321A
   > balance:             99.98118456
   > gas used:            282605 (0x44fed)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0056521 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0056521 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.00949096 ETH
```

### 3 - Testing

__3.1. Create a test for the contract__

Now let's write some tests. Create the `dapp-election-02/test/election.js` test file from VS Code or Terminal/Console like this:

```sh
$ touch test/election.js
```

And add this content:

```js
var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
  var electionInstance;

  it("initializes with two candidates", function() {
    return Election.deployed().then(function(instance) {
      return instance.candidatesCount();
    }).then(function(count) {
      assert.equal(count, 2);
    });
  });

  it("it initializes the candidates with the correct values", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidates(1);
    }).then(function(candidate) {
      assert.equal(candidate[0], 1, "contains the correct id");
      assert.equal(candidate[1], "Candidate 1", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
      return electionInstance.candidates(2);
    }).then(function(candidate) {
      assert.equal(candidate[0], 2, "contains the correct id");
      assert.equal(candidate[1], "Candidate 2", "contains the correct name");
      assert.equal(candidate[2], 0, "contains the correct votes count");
    });
  });
});
```

__3.2. Run the test__

From Terminal/Console and from root of your project, run this:

```sh
$ truffle test
```

You should see this:
```sh
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


  Contract: Election
    ✔ initializes with two candidates
    ✔ it initializes the candidates with the correct values (72ms)


  2 passing (183ms)
```