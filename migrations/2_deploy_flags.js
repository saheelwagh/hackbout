const Approval = artifacts.require("Approval");

module.exports = function(deployer) {
  deployer.deploy(Approval);
};
