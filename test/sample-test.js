const { expect } = require("chai");

describe("Greeter", function() {
  it("Should return the new greeting once it's changed", async function() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    
    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should explode", async () => {
      const Greeter = await ethers.getContractFactory("Greeter");
      const greeter = await Greeter.deploy("Kaboom!");

      await greeter.deployed();

      var veryBigValue = ethers.constants.MaxUint256;

      await expect(greeter.explodePerhaps(veryBigValue)).to.be.revertedWith();
  });
});
