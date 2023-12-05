 // We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const { verify } = require("./verifyContract");
const testAddr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

const gaming = "0x9E5dbCBF65205d9DF6260bd28b1FF3E7A3206162"
const Ecosystem_partners = "0xD41417268e70ad624b9D6d31d56c67eca2C27A09"
const Ico = "0x3EB71EE0414e0D29092f2cc2FBE2456932A2Be5f"
const Team_advisor = "0x41d3539Bc087c2ede18A4D487c9D6418ee4e8077"
const Marketing_community_build = "0x12326b3d29D7BcA5A89ed5fD05C6758EcAAA5e63"
const Liquidity = "0x7e9027d95F3FbA779F9FCefa29bf03b583C0Bb80"
const Strategy_reserves = "0xc0B53202C0b2402eA72DD7B79D8FaFe8aC0B64f8"
const Staking_rewards = "0xbBC1025a8Ec89A81EA3f6CD4262Ae668f8cAdc5c"
const Public_sale = "0x96c86482af304e66e48a81349004819cd5Ab1EdB"

async function main() {
 
  // try {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  ////////////////////////////////////////////Fennec Token/////////////////////////////////////////////
      const Fennec = await ethers.getContractFactory("Fennec")
      const fennec = await Fennec.deploy(gaming,Ecosystem_partners,Ico,Team_advisor,Marketing_community_build,Liquidity,Strategy_reserves,Staking_rewards,Public_sale)
      await fennec.deployed()
      console.log("Fennec Address", fennec.address)
      await fennec.initialize();
      console.log("Total Supply",(await fennec.totalSupply()).toString())

      console.log("Verifying Fennec Token")
      const args = [gaming,Ecosystem_partners,Ico,Team_advisor,Marketing_community_build,Liquidity,Strategy_reserves,Staking_rewards,Public_sale];
      await verify(fennec.address, args);
      



}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// npx hardhat run scripts/maindeploy.js --network hardhat
