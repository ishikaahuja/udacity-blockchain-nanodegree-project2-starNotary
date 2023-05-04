# Project 2 documentation

Token Name: `Star Notary Ishika Ahuja`
Symbol: `STIA`

## Sepolia

### Contract Address

0xBc09757bf6696bA03b23da5686Db6ed3CB23C7dA

### Transaction Hash of contract deployment

0xe5d68f877f4c7ff7355158be451e1b4ea1cf1523dbfc73f73eba8bcbe43625bd


## Dependencies

- @openzeppelin/contracts: 4.0.0

## Truffle Version

```
$ truffle version
Truffle v5.3.0 (core: 5.3.0)
Solidity - 0.8.3 (solc-js)
Node v10.24.0
Web3.js v1.2.9
```

## Command Line Information:


PS C:\Users\isahuja\Desktop\udacity-blockchain-nanodegree-project2-starNotary-main\udacity-blockchain-nanodegree-project2-starNotary-main> truffle migrate --network sepolia
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
This version of µWS is not compatible with your Node.js build:

Error: Cannot find module './uws_win32_ia32_83.node'
Falling back to a NodeJS implementation; performance may be degraded.



Compiling your contracts...
===========================
> Compiling @openzeppelin\contracts\token\ERC721\ERC721.sol
> Compiling @openzeppelin\contracts\token\ERC721\IERC721.sol
> Compiling @openzeppelin\contracts\token\ERC721\IERC721Receiver.sol
> Compiling @openzeppelin\contracts\token\ERC721\extensions\IERC721Enumerable.sol
> Compiling @openzeppelin\contracts\token\ERC721\extensions\IERC721Metadata.sol
> Compiling @openzeppelin\contracts\utils\Address.sol
> Compiling @openzeppelin\contracts\utils\Context.sol
> Compiling @openzeppelin\contracts\utils\Strings.sol
> Compiling @openzeppelin\contracts\utils\introspection\ERC165.sol
> Compiling @openzeppelin\contracts\utils\introspection\IERC165.sol
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\StarNotary.sol
> Compilation warnings encountered:

    Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.
--> project:/contracts/Migrations.sol


> Artifacts written to C:\Users\isahuja\Desktop\udacity-blockchain-nanodegree-project2-starNotary-main\udacity-blockchain-nanodegree-project2-starNotary-main\build\contracts
> Compiled successfully using:
   - solc: 0.8.3+commit.8d00100c.Emscripten.clang


Migrations dry-run (simulation)
===============================
> Network name:    'sepolia-fork'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        3411803
   > block timestamp:     1683128485
   > account:             0x1Cb49a614297c0464ecDC17AEdF8Af618558C9AA
   > balance:             0.89347295
   > gas used:            271700 (0x42554)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.002717 ETH

   -------------------------------------
   > Total cost:            0.002717 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > block number:        3411805
   > block timestamp:     1683128491
   > account:             0x1Cb49a614297c0464ecDC17AEdF8Af618558C9AA
   > balance:             0.86341402
   > gas used:            2959955 (0x2d2a53)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02959955 ETH

   -------------------------------------
   > Total cost:          0.02959955 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.03231655 ETH




Starting migrations...
======================
> Network name:    'sepolia'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x9c7c451918bc702f12095d9174dacc32af1be42922fe1d6346b348dd8fe16450
   > Blocks: 2            Seconds: 17
   > contract address:    0x16b342fb1D410a4Aa303db79e51bCCB6f0e95278
   > block number:        3411811
   > block timestamp:     1683128520
   > account:             0x1Cb49a614297c0464ecDC17AEdF8Af618558C9AA
   > balance:             0.89347231
   > gas used:            271764 (0x42594)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00271764 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00271764 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > transaction hash:    0xe5d68f877f4c7ff7355158be451e1b4ea1cf1523dbfc73f73eba8bcbe43625bd
   > Blocks: 2            Seconds: 17
   > contract address:    0xBc09757bf6696bA03b23da5686Db6ed3CB23C7dA
   > block number:        3411814
   > block timestamp:     1683128556
   > account:             0x1Cb49a614297c0464ecDC17AEdF8Af618558C9AA
   > balance:             0.86340476
   > gas used:            2960817 (0x2d2db1)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02960817 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02960817 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.03232581 ETH 

