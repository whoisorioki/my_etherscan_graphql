const { RESTDataSource } = require("apollo-datasource-rest"); 

// Vitalik's Ethereum address stored in a constant
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// EtherscanDataSource class extends RESTDataSource for making API calls
class EtherDataSource extends RESTDataSource {

  constructor() {
    super(); 
    // Base URL for Etherscan API 
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    // Get account balance endpoint
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  async totalSupplyOfEther() {
    // Get total ether supply endpoint
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Code for new API endpoints

  async getLatestEthereumPrice() {
    // Get latest ETH price endpoint
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  async getBlockConfirmationTime() {
    // Get block confirmation time endpoint 
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
