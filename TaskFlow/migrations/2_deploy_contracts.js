const taskflow = artifacts.require("./taskflow.sol");

module.exports = function(deployer) {
  deployer.deploy(taskflow)
};