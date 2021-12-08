const Router = artifacts.require("UniswapV2Router02.sol");
// const WETH = artifacts.require("WETH9.sol");

module.exports = async function (deployer, _network, addresses) {
  let weth;
  const FACTORY_ADDRESS = '0x8EE034Ffa4919e7E9F0E2821Fc45a90DF58DdDa5';
  //await deployer.deploy(WETH);
  //weth = await WETH.deployed();

  await deployer.deploy(Router, FACTORY_ADDRESS, '0x0eD330d7b57fc6Ad0B0C5bE6b40242533db2eDD1');
  console.log('successfully deployed');
};

