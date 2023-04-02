# The ultimate ethereum Dapp tutorial

## Step 03 - Adding client side application (Frontend)

The `step 03` use the `dapp-election-03/` directory with the updated code.

### 1 - Frontend: Single HTML page 

Update the existing `dapp-election-03/src/index.html` file with this code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Election Results</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="container" style="width: 650px;">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="text-center">Election Results</h1>
          <hr/>
          <br/>
          <div id="loader">
            <p class="text-center">Loading...</p>
          </div>
          <div id="content" style="display: none;">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Votes</th>
                </tr>
              </thead>
              <tbody id="candidatesResults">
              </tbody>
            </table>
            <hr/>
            <p id="accountAddress" class="text-center"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/web3.min.js"></script>
    <script src="js/truffle-contract.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

### 2 - Frontend: JS application

Let's update the JavaScript logic in existing `dapp-election-03/src/js/app.js` JS file with this content:

```js
App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Election.json", function(election) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Election = TruffleContract(election);
      // Connect provider to interact with contract
      App.contracts.Election.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function() {
    var electionInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidatesCount();
    }).then(function(candidatesCount) {
      var candidatesResults = $("#candidatesResults");
      candidatesResults.empty();

      for (var i = 1; i <= candidatesCount; i++) {
        electionInstance.candidates(i).then(function(candidate) {
          var id = candidate[0];
          var name = candidate[1];
          var voteCount = candidate[2];

          // Render candidate Result
          var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
          candidatesResults.append(candidateTemplate);
        });
      }

      loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
```

__2.1. Remove unused files from petshop example__

* ./dapp-election-03/box-img-lg.png
* ./dapp-election-03/box-img-sm.png
* ./dapp-election-03/src/pets.json
* ./dapp-election-03/src/images/boxer.jpeg
* ./dapp-election-03/src/images/french-bulldog.jpeg
* ./dapp-election-03/src/images/golden-retriever.jpeg
* ./dapp-election-03/src/images/scottish-terrier.jpeg


## 3 - Deploy contracts and run application

__3.1. Deploy contracts again__

```sh
$ cd dapp-election-03/

$ truffle migrate --reset
```

__3.2. Run the client side application__

Once deployed successfully the contract, run the client side (NodeJS) application:

```sh
$ npm run dev
```

You should see this:
```sh
...

> pet-shop@1.0.0 dev
> lite-server

** browser-sync config **
{
  injectChanges: false,
  files: [ './**/*.{html,htm,css,js}' ],
  watchOptions: { ignored: 'node_modules' },
  server: {
    baseDir: [ './src', './build/contracts' ],
    middleware: [ [Function (anonymous)], [Function (anonymous)] ]
  }
}
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.168.1.152:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 --------------------------------------
[Browsersync] Serving files from: ./src
[Browsersync] Serving files from: ./build/contracts
[Browsersync] Watching files...
23.04.01 17:28:01 200 GET /index.html
23.04.01 17:28:01 200 GET /css/bootstrap.min.css
23.04.01 17:28:01 200 GET /js/bootstrap.min.js
23.04.01 17:28:01 200 GET /js/web3.min.js
23.04.01 17:28:01 200 GET /js/app.js
23.04.01 17:28:01 200 GET /js/truffle-contract.js
23.04.01 17:28:01 404 GET /favicon.ico
23.04.01 17:28:01 200 GET /pets.json
```

and in your browser you will see:
![](imgs/chilcano-dapp03-1-run-nodejs-app-browser.png)

__3.3. Connect Metamask Wallet to Local Blockchai(Ganache)__

In order to interact with our dapp, specifically with our client side application, we should connect with a valid Wallet Address through a valid blockchain network. In this case, Ganache provides us both things:

1. A local valid Blockchain network for testing purposes.
2. A set of valid Wallet addresses with crypto money for testing purposes.

This is the reason we should install Metamask in our browser, load a valid wallet address that contains crypto money required to make transactions in our dapp.

In simple words, making transactions thrrough smartcontracts rerquire `gas` that will be paid from our connected Wallet.

