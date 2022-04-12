# Nervos Swap
Uniswap-AMM for godwoken/nervos ecosystem.

=====
DEMO
=====
http://nervoswap.freeddns.org:8080/

=====
BUILD
=====

## Backend

cd backend

Install dependencies
npm install

Compile contracts
npx hardhat compile

Deploy contract
npx hardhat run .\scripts\deploy-script.js

## Sdk

Install dependencies
npm install

npm run build

## Interface

Install dependencies
npm install

Start developpment server
npm run start

Production build
npm run build

======================
Contract addresses
======================

Factory deployed to : 0x5A69d3552050A1B57ea914cbBB6Da3fb8Cee2ab1
Router V02 deployed to :  0x304FBcaF6d3A3F0372cC1252345a10d575A3695D
Multicall deployed to : 0x759d12AfAE97eC609Ec962a883E58C4005981C65
CKB ERC20 deployed to : 0x4B6DFa286F196F61134b03e783d73708687B93D0
