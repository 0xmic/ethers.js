const { ethers } = require("ethers");
const rpcURL = "https://cloudflare-eth.com/";
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const address = "0xmic.eth";

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
};

main();
