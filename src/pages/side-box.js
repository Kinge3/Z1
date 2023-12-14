import React from 'react';
import CurrencyGraph from './currencyGraph';
import './side-box.css';

const SideBox = ({ account, currencyData, buyTokens, sellTokens, handleTimeFrameChange }) => {
    return (
        <div className="side-bar">
            <h2>Zeta Tokens</h2>
            <div className="currency-select">
                <span>{currencyData.name}</span>
                <button>MAX</button>
            </div>
            <CurrencyGraph chartData={currencyData} />
            <div className="time-frame-buttons">
                <button onClick={() => handleTimeFrameChange('1D')}>1 Day</button>
                <button onClick={() => handleTimeFrameChange('1W')}>1 Week</button>
                <button onClick={() => handleTimeFrameChange('1M')}>1 Month</button>
                <button onClick={() => handleTimeFrameChange('3M')}>3 Months</button>
            </div>
            <div className="currency-info">
                <p>Value: ${currencyData.value.toFixed(2)}</p>
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
};

export default SideBox;
