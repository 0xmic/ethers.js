const { ethers } = require("ethers");
const rpcURL = 'https://cloudflare-eth.com/'
// alternatively, const INFURA_ID = 'https://mainnet.infura.io/v3/${INFURA_ID}'
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const address = '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'; // ETH Foundation Address

const main = async () => {
	const balance = await provider.getBalance(address);
	console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`);
}

main();