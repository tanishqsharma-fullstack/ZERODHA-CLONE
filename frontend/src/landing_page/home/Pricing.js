import React from 'react';

function Pricing() {
    return (
      <div className='container'>
            <div className='row align-items-center' style={{ marginTop: '100px' }}>
                
                <div className='col-md-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='custom-link'>
                      See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                </div>


                <div className='col-md-7'>
                    <div className='d-flex justify-content-around text-center flex-wrap'>

                        <div className='p-3'>
                            <h1 style={{ color: '#f59e0b', fontSize: '48px' }}>₹0</h1>
                            <p className='fw-medium'>Free account<br />opening</p>
                        </div>

                        <div className='p-3'>
                            <h1 style={{ color: '#f59e0b', fontSize: '48px' }}>₹0</h1>
                            <p className='fw-medium'>Free equity delivery<br />and direct mutual funds</p>
                        </div>

                        <div className='p-3'>
                            <h1 style={{ color: '#f59e0b', fontSize: '48px' }}>₹20</h1>
                            <p className='fw-medium'>Intraday and<br />F&O</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;