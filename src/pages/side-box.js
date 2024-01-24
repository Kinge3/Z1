import React, { useState, useEffect } from 'react';
import CurrencyGraph from './currencyGraph';
import './side-box.css';
import { ethers } from 'ethers';

const SideBox = ({ account, currencyData, handleTimeFrameChange }) => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        // Initialize Web3 and the contract when the component mounts
        async function initializeWeb3() {
            if (window.ethereum) {
                try {
                    // Request account access if needed
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const provider = new ethers.BrowserProvider(window.ethereum)
                    setWeb3(provider);

                    // Replace 'YourContractAddress' and 'YourContractAbi' with your actual contract details
                    const contractAddress = '0xCBfA8207A3c4467670e940800e3297B8aDA57D7F';
                    const contractAbi = [{
                        "_format": "hh-sol-artifact-1",
                        "contractName": "MyContract",
                        "sourceName": "contracts/MyContract.sol",
                        "abi": [
                          {
                            "inputs": [
                              {
                                "internalType": "address",
                                "name": "systemContractAddress",
                                "type": "address"
                              }
                            ],
                            "stateMutability": "nonpayable",
                            "type": "constructor"
                          },
                          {
                            "inputs": [
                              {
                                "components": [
                                  {
                                    "internalType": "bytes",
                                    "name": "origin",
                                    "type": "bytes"
                                  },
                                  {
                                    "internalType": "address",
                                    "name": "sender",
                                    "type": "address"
                                  },
                                  {
                                    "internalType": "uint256",
                                    "name": "chainID",
                                    "type": "uint256"
                                  }
                                ],
                                "internalType": "struct zContext",
                                "name": "context",
                                "type": "tuple"
                              },
                              {
                                "internalType": "address",
                                "name": "zrc20",
                                "type": "address"
                              },
                              {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                              },
                              {
                                "internalType": "bytes",
                                "name": "message",
                                "type": "bytes"
                              }
                            ],
                            "name": "onCrossChainCall",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                          },
                          {
                            "inputs": [],
                            "name": "systemContract",
                            "outputs": [
                              {
                                "internalType": "contract SystemContract",
                                "name": "",
                                "type": "address"
                              }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                          }
                        ],
                        "bytecode": "0x60a060405234801561001057600080fd5b5060405161055438038061055483398181016040528101906100329190610084565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050506100ff565b60008151905061007e816100e8565b92915050565b60006020828403121561009a576100996100e3565b5b60006100a88482850161006f565b91505092915050565b60006100bc826100c3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6100f1816100b1565b81146100fc57600080fd5b50565b60805160601c6104326101226000396000818160770152609b01526104326000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063bb88b7691461003b578063de43156e14610059575b600080fd5b610043610075565b60405161005091906102a3565b60405180910390f35b610073600480360381019061006e91906101cd565b610099565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011e906102be565b60405180910390fd5b5050505050565b60008135905061013d816103ce565b92915050565b60008083601f84011261015957610158610366565b5b8235905067ffffffffffffffff81111561017657610175610361565b5b60208301915083600182028301111561019257610191610370565b5b9250929050565b6000606082840312156101af576101ae61036b565b5b81905092915050565b6000813590506101c7816103e5565b92915050565b6000806000806000608086880312156101e9576101e861037a565b5b600086013567ffffffffffffffff81111561020757610206610375565b5b61021388828901610199565b95505060206102248882890161012e565b9450506040610235888289016101b8565b935050606086013567ffffffffffffffff81111561025657610255610375565b5b61026288828901610143565b92509250509295509295909350565b61027a8161032b565b82525050565b600061028d602b836102de565b91506102988261037f565b604082019050919050565b60006020820190506102b86000830184610271565b92915050565b600060208201905081810360008301526102d781610280565b9050919050565b600082825260208201905092915050565b60006102fa82610301565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103368261033d565b9050919050565b60006103488261034f565b9050919050565b600061035a82610301565b9050919050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b7f4f6e6c792073797374656d20636f6e74726163742063616e2063616c6c20746860008201527f69732066756e6374696f6e000000000000000000000000000000000000000000602082015250565b6103d7816102ef565b81146103e257600080fd5b50565b6103ee81610321565b81146103f957600080fd5b5056fea26469706673582212207c5661deb728b27c388160ced44d9b97032ca454aa0a7bbe52a8dc7f7012e3c264736f6c63430008070033",
                        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c8063bb88b7691461003b578063de43156e14610059575b600080fd5b610043610075565b60405161005091906102a3565b60405180910390f35b610073600480360381019061006e91906101cd565b610099565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011e906102be565b60405180910390fd5b5050505050565b60008135905061013d816103ce565b92915050565b60008083601f84011261015957610158610366565b5b8235905067ffffffffffffffff81111561017657610175610361565b5b60208301915083600182028301111561019257610191610370565b5b9250929050565b6000606082840312156101af576101ae61036b565b5b81905092915050565b6000813590506101c7816103e5565b92915050565b6000806000806000608086880312156101e9576101e861037a565b5b600086013567ffffffffffffffff81111561020757610206610375565b5b61021388828901610199565b95505060206102248882890161012e565b9450506040610235888289016101b8565b935050606086013567ffffffffffffffff81111561025657610255610375565b5b61026288828901610143565b92509250509295509295909350565b61027a8161032b565b82525050565b600061028d602b836102de565b91506102988261037f565b604082019050919050565b60006020820190506102b86000830184610271565b92915050565b600060208201905081810360008301526102d781610280565b9050919050565b600082825260208201905092915050565b60006102fa82610301565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103368261033d565b9050919050565b60006103488261034f565b9050919050565b600061035a82610301565b9050919050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b7f4f6e6c792073797374656d20636f6e74726163742063616e2063616c6c20746860008201527f69732066756e6374696f6e000000000000000000000000000000000000000000602082015250565b6103d7816102ef565b81146103e257600080fd5b50565b6103ee81610321565b81146103f957600080fd5b5056fea26469706673582212207c5661deb728b27c388160ced44d9b97032ca454aa0a7bbe52a8dc7f7012e3c264736f6c63430008070033",
                        "linkReferences": {},
                        "deployedLinkReferences": {}
                      }
                      ];
                    const contractInstance = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());
                    setContract(contractInstance);
                } catch (error) {
                    console.error('Error connecting to Web3:', error);
                }
            } else {
                console.error('Web3 not found. Please install MetaMask or another Ethereum wallet.');
            }
        }

        initializeWeb3();
    }, []);

    const buyTokens = async () => {
        try {
            // Replace 'buy' with your actual buy function in the contract
            const tx = await contract.buy();
            await tx.wait();
            console.log('Tokens bought successfully!');
        } catch (error) {
            console.error('Error buying tokens:', error);
        }
    };

    const sellTokens = async () => {
        try {
            // Replace 'sell' with your actual sell function in the contract
            
            const tx = await contract.sell();
            await tx.wait();
            console.log('Tokens sold successfully!');
        } catch (error) {
            console.error('Error selling tokens:', error);
        }
    };

    return (
      <div className="side-box">
          <div className="currencyGraph">
              <CurrencyGraph chartData={currencyData} />
              <div className="time-frame-buttons">
                  <button onClick={() => handleTimeFrameChange('1D')}>One Day</button>
                  <button onClick={() => handleTimeFrameChange('1W')}>One Week</button>
                  <button onClick={() => handleTimeFrameChange('1M')}>One Month</button>
                  <button onClick={() => handleTimeFrameChange('3M')}>Three Months</button>
              </div>
          </div>
          <div className="content">
              <h2>ZETA</h2>
              <div className="currency-select">
                  <span>{currencyData.name}</span>
                  <button>MAX</button>
              </div>
              <div className="currency-info">
                  <p>Current Value: ${currencyData.value.toFixed(2)}</p>
              </div>
              <div className="actions">
                  <button className="buy" onClick={buyTokens}>Purchase</button>
                  <button className="short" onClick={sellTokens}>Short Sell</button>
              </div>
              <div className="warning">
                  <strong>Funding Rate (1D): +0.0068%</strong>
                  <p>The funding rate determines whether you lose or gain funding on an open position.</p>
              </div>
              <div className="preview">
                  <button>Preview</button>
              </div>
              <div className="details">
                  <div className="detail">
                      <span>Total Shareholders</span>
                      <span>587,695</span>
                  </div>
                  <div className="detail">
                      <span>Conversion Rate</span>
                      <span>1.044</span>
                  </div>
                  <div className="detail">
                      <span>Estimated Gas</span>
                      <span>0.054 aZETA</span>
                  </div>
              </div>
          </div>
      </div>
  );
  };
  
  export default SideBox;
  