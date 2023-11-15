import React, { useState } from 'react';
import Web3 from 'web3';
import './homepage.css';

function HomePage() {
    const [account, setAccount] = useState('');

    const connectWalletHandler = async () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');

            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log(accounts);
                setAccount(accounts[0]);
            } catch (error) {
                console.log('Error connecting to metamask', error);
            }
        } else {
            console.log('Need to install MetaMask');
        }
    };

    return (
        <div className="home">
            <h1>Welcome to Kinge3</h1>
            <p>This is the homepage, well the first draft.</p>
            <button className="centered-button" onClick={connectWalletHandler}>
                {account ? `Connected: ${account}` : 'Connect with MetaMask'}
            </button>
        </div>
    );
}

export default HomePage;
