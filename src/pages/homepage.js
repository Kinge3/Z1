// HomePage.js
import React, { useState } from 'react';
import SideBox from './side-box';
import CurrencyGraph from './currencyGraph';
import './homepage.css';

const HomePage = () => {
    const [account, setAccount] = useState('');
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('1D'); // Add this line for state

    const generateRandomData = (numPoints) => {
        return Array.from({ length: numPoints }, () => Math.random() * 2 + 1);
    };

    const currencyData = {
        name: 'aZETA',
        value: Math.random() * 10 + 1,
        chartData: {
            labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
            datasets: [{
                label: 'Currency Value',
                data: generateRandomData(7),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            }],
        },
    };

    const buyTokens = async () => {
        console.log('Buying tokens...');
        // Implement your buyTokens logic
    };

    const sellTokens = async () => {
        console.log('Selling tokens...');
        // Implement your sellTokens logic
    };

    const handleTimeFrameChange = (timeFrame) => {
        console.log(`Selected time frame: ${timeFrame}`);
        setSelectedTimeFrame(timeFrame);
        // Implement your handleTimeFrameChange logic
    };

    const connectWalletHandler = async () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');

            const customNetwork = {
                chainId: '0x1B59', // The chainId must be in hexadecimal format
                chainName: 'ZetaChain Athens 3 Testnet',
                nativeCurrency: {
                    name: 'AZETA',
                    symbol: 'aZETA', // 2-6 characters long
                    decimals: 18,
                },
                rpcUrls: ['https://rpc.ankr.com/zetachain_evm_athens_testnet'],
                blockExplorerUrls: ['https://explorer.zetachain.com/'],
            };

            try {
                // Request to add or switch to the custom network
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [customNetwork],
                });

                // Continue with connecting the account
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log(accounts);
                setAccount(accounts[0]);
            } catch (error) {
                console.log('Error connecting to custom network or MetaMask', error);
            }
        } else {
            console.log('Need to install MetaMask');
        }
    };

    return (
        <div className="home">
            <div className="header">
                <h1>ZETACHAIN</h1>
            </div>
            <button className="connect-button" onClick={connectWalletHandler}>
                {account ? `Connected: ${account}` : 'Connect with MetaMask'}
            </button>
            <SideBox
                account={account}
                currencyData={currencyData}
                buyTokens={buyTokens}
                sellTokens={sellTokens}
                handleTimeFrameChange={handleTimeFrameChange}
            />
        </div>
    );
};

export default HomePage;
