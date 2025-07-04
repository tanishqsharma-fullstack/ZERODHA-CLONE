import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <img 
                        src='/media/largestBroker.svg' 
                        alt='Largest Broker' 
                        className='img-fluid'
                    />
                </div>

                <div className='col-md-6 mt-3'>
                    <h1 className='mb-3 fs-3'>Largest Stock Broker in India</h1>
                    <p>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes 
                        in India daily by trading and investing in:
                    </p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>    
                        </div>
                        
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks</p></li>
                                <li><p>Direct Mutual Funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>    
                        </div>
                    </div>
                    <img src='/media/pressLogos.png'style={{ marginTop: '40px', width: '500px' }}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;
