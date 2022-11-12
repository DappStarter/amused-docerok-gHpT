require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rate rural hole include kitten slot giggle'; 
let testAccounts = [
"0xcd352dddc5b16576beea479687d59dc13436b2971c00927eabc2094f2cfe9f57",
"0xe1b8442413bca8a9006a6395d8cfce9e944feb49d1271ecc8df7c333350f046d",
"0x51c34e6d0ac4c8dbea4a34fb904376a6ab88f662a6b530aacd35a372f4a9dd95",
"0x457b63ae9c3a62b29239ccacfed1040ce3e07b3695b4d7f9ea3ae2ebda07ccbd",
"0xa628255b52c4c5bafa8f8ad73759a70cab27aa6ec74f624807c4d4468de0638b",
"0xbe28ddc3bdb675898aef9d8bcf9a3ff9647d8fc13cc1c637eb5c3d8d5097b8a4",
"0xc8af7364c1be48b439780e0dead9b66e722ac34aceae6f62369102c9493a16a1",
"0xb1e9aed1ba377e90464018189b739c2c3a86f6a7ff85fa71f6dd71a13b21a7da",
"0x4df473ade47d870c0a9f5e5233c93c6139cb08cbaa9cbba441b19684d5a3d124",
"0x545f4ac89d88b149db9c0ee6ac2fe3a39ca24f7fe47b4d843cfb9c154b3e8918"
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

