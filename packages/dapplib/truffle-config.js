require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain quality harvest cloth forward tone'; 
let testAccounts = [
"0x11c6718eea23f4c338f22f3a0a8fe72f9befe226614c45dfd91d71904c313c12",
"0x6f9ba737f0b4abadc0fc9ccf8b56b97b592e922fb444527eb6639a160bc0c099",
"0xcf652ccefde41c33bfd42a66f79cff224f4e08713a2b854013dea68f95c3e748",
"0xc3ea7163d186198f61f5710c2b699d74e7ba50814a193890712dab401c7b3139",
"0x2feb1b3409b093a561effa7d0b4b44ab4af929310531ce2688b16e0ce83af2f6",
"0xefeace3017793f27290d354eb7e4d87e4d6db9392170e1975001b54b2ab2c431",
"0xf84814e2bec788d2ca0e83e09910ea7ef18e15e3458ce4401eda343c31843123",
"0x33d027fb0d55ecef2510021cb0f2b4e0888c2cbe43fdacfc5335128bede91d45",
"0x9c4e4c25b3ab2f3bf992be1613642274dd251ca80046145febdb7c763286d4f7",
"0x4dc7166db03914d2ee2fb9088b8e797dd50e7b899467fe2cd67618400ffbe5b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

