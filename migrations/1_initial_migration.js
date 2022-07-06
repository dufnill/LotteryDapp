const Migrations = artifacts.require("Migrations");
//const DAPPContract = artifacts.require("DAPPContract");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  //deployer.deploy(DAPPContract)
};
