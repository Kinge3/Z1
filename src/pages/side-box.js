import React from 'react';
import './side-box.css'; // Assume you have a corresponding CSS file for styling

const SideBox = () => {
    return (
        <div className="side-box">
            <h2>Trade Île-de-France</h2>
            <div className="currency-select">
                <span>USDC</span>
                <button>MAX</button>
            </div>
            <div className="actions">
                <button className="buy">Buy</button>
                <button className="short">Short</button>
            </div>
            <p className="prediction">I think the price of Île-de-France will increase.</p>
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
