const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const CONTRACT_ADDRESS = "0x41502972f8aa01795bDdB177a83ce2F9353AfFB5";
  const MetaNFT = await hre.ethers.getContractFactory("MetaNFT");
  const metaNft = MetaNFT.attach(CONTRACT_ADDRESS);

  console.log(await metaNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});