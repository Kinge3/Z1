import React, { useState } from 'react';
import './homepage.css';
import SideBox from './side-box.js'; 

function HomePage() {
    const [account, setAccount] = useState('');

    const connectWalletHandler = async () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');

            // Define the custom network details
            const customNetwork = {
                chainId: '0x1B59', // The chainId must be in hexadecimal format
                chainName: 'ZetaChain Athens 3 Testnet',
                nativeCurrency: {
                    name: 'AZETA',
                    symbol: 'aZETA', // 2-6 characters
                    decimals: 18,
                },
                rpcUrls: ['https://zetachain-athens-evm.blockpi.network/v1/rpc/public'],
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
            <h1>Welcome to Z1</h1>
            <p>This is the homepage, well the first draft.</p>
            <button className="centered-button" onClick={connectWalletHandler}>
                {account ? `Connected: ${account}` : 'Connect with MetaMask'}
            </button>
            <SideBox /> 
        </div>
    );
}

export default HomePage;
