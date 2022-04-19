# Nervos Swap
Uniswap fork for Nervos L2 Godwoken.

Demo site : http://nervoswap.freeddns.org:8080

Video : https://youtu.be/O501_cvzmm4

All swaps involving CKB currency are made with [CKB ERC20 (pCKB)](https://v1.aggron.gwscan.com/account/0x86efaff75201Ed513c2c9061f2913eec850af56C).

## Test

Use [this Faucet](http://nervoswap.freeddns.org:8081) to generate test tokens : TOKENA and TOKENB.

Pools available for testing : TOKENA/TOKENB, CKB/TOKENA, CKB/TOKENB

## Build

### Backend

Install dependencies :
```
npm install
```
Compile contracts :
```
npx hardhat compile
```

Deploy contracts :
```
npx hardhat run .\scripts\deploy-script.js
```

### Sdk

Install dependencies and build :
```
npm install
```
```
npm run build
```

### Interface

Install dependencies :
```
npm install
```

Start development server :
```
npm start
```

Production build :
```
npm run build
```

## Contracts addresses

* Router : [0x3Ea455fad8d7bdcEDC53aa1B76E019712D0e6134](https://v1.aggron.gwscan.com/account/0x3Ea455fad8d7bdcEDC53aa1B76E019712D0e6134)
* Multicall : [0xeB182C35983B1ABbaDBb73E25c3e85787A323013](https://v1.aggron.gwscan.com/account/0xeB182C35983B1ABbaDBb73E25c3e85787A323013)
* Factory : [0xfE336Bb4985F7f5294d01161a83A01C460a7d481](https://v1.aggron.gwscan.com/account/0xfE336Bb4985F7f5294d01161a83A01C460a7d481)
* pCKB : [0x86efaff75201Ed513c2c9061f2913eec850af56C](https://v1.aggron.gwscan.com/account/0x86efaff75201Ed513c2c9061f2913eec850af56C)
* Test TokenA : [0xD29cb1824544C30AEa1F22443e9DCF688ecA0bE4](https://v1.aggron.gwscan.com/account/0xD29cb1824544C30AEa1F22443e9DCF688ecA0bE4)
* Test TokenB : [0xD2Da53D65C362E81C0580C5441baaDD16d4c7D48](https://v1.aggron.gwscan.com/account/0xD2Da53D65C362E81C0580C5441baaDD16d4c7D48)
