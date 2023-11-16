import React from 'react';
import './side-box.css';

const SideBox = ({ account }) => {
    // Replace these functions with actual smart contract interactions
    const buyTokens = async () => {
        if (!account) {
            alert('Please connect to MetaMask first.');
            return;
        }
        console.log('Buying tokens...');
        // Here you would put your contract interaction logic
    };

    const sellTokens = async () => {
        if (!account) {
            alert('Please connect to MetaMask first.');
            return;
        }
        console.log('Selling tokens...');
        // Here you would put your contract interaction logic
    };

    return (
        <div className="side-box">
            <h2>Zeta Tokens</h2>
            <div className="currency-select">
                <span>aZETA</span>
                <button>MAX</button>
            </div>
            <div className="actions">
                <button className="buy" onClick={buyTokens}>Buy</button>
                <button className="short" onClick={sellTokens}>Short</button>
            </div>
            <p className="prediction">I think...well, idk</p>
            <div className="warning">
                <strong>Cannot open new V2 Positions</strong>
                <p>Please close any V2 positions as we prepare to launch V3</p>
            </div>
            <div className="preview">
                <button>Preview</button>
            </div>
            <div className="details">
                <div className="detail">
                    <span>Entry Funding Rate</span>
                    <span>--</span>
                </div>
                <div className="detail">
                    <span>Exchange Rate</span>
                    <span>1.044</span>
                </div>
                <div className="detail">
                    <span>Estimated Fee Total</span>
                    <span>--</span>
                </div>
            </div>
        </div>
    );
}

export default SideBox;
