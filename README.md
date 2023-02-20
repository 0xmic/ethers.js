# Ethers.js by Example
Learn how to use ethers.js from these examples.
## Technology Stack & Tools
* Javascript (Writing scripts)
* [Ethers.js]() (Blockchain Interaction)
* [Node.js]() (To run our scripts and install ethers.js)
* [Infura]() (Node provider)

## Setting Up
### 1. Clone/Download the Repository
### 2. Install Dependencies:
```
$ npm install
```

## Ethers.js scripts
### 1_accounts.js - Reads balance of ether of wallet address
* Connect to the Ethereum blockchain using Cloudflare's public node
```
$node examples/1_accounts.js
```

### 2_read_smart_contract.js - Reads the balance of Dai wallet address from Dai contract
* Input your infura project ID
```
node examples/2_read_smart_contract.js
```

### 3_send_signed_transaction.js - Transfers 0.025 ether from account1 to account2
* Input your infura project ID
* Input your account1 public key
* Input your account2 public key
* Input your account1 private key
```
node examples/2_send_signed_transaction.js
```