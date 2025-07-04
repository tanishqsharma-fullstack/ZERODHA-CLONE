import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row' mt-5>
                <div className='col-6'>
                    <img src='/media/education.svg'style={{width:"75%"}}/>
                </div>
                
                <div className='col-6 mb-5'>
                    <h1 className='mt-5 fs-2'>Free and open market education</h1>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className='custom-link'>
                      Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className='custom-link'>
                     TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Education;