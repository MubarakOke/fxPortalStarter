const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const ACCOUNT_ADDRESS = "0xF8489730751cE4a62ad99ab88F15211B9F027C9e";
  const CONTRACT_ADDRESS = "0x41502972f8aa01795bDdB177a83ce2F9353AfFB5";

  const MetaNFT = await hre.ethers.getContractFactory("MetaNFT");
  const metaNft = await MetaNFT.attach(CONTRACT_ADDRESS);

  const balance = await metaNft.balanceOf(ACCOUNT_ADDRESS) 
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});