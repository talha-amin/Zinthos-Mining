 // We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const { verify } = require("./verifyContract");
const testAddr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

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
      const fennec = await Fennec.deploy(testAddr,testAddr,testAddr,testAddr,testAddr,testAddr,testAddr,testAddr,testAddr)
      await fennec.deployed()
      console.log("Fennec Address", fennec.address)
      await fennec.initialize();
      console.log("Total Supply",(await fennec.totalSupply()).toString())

      console.log("Verifying Fennec Token")
      const args = [testAddr,testAddr,testAddr,testAddr,testAddr,testAddr,testAddr,testAddr,testAddr];
      await verify(fennec.address, args);
      



}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// npx hardhat run scripts/maindeploy.js --network hardhat
