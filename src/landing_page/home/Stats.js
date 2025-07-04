import React from 'react';

function Stats() {
    return (  
        <div className='container'>
            <div className='row'>

                <div className='col-12 col-md-6'style={{ marginTop: '100px' }}>
                    <h1 className='fs-2'>Trust with confidence</h1>
                    <h3 className='mt-5 h4 fw-medium'>Customer-first always</h3>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h3 className='mt-5 h4 fw-medium'>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h3 className='mt-5 h4 fw-medium'>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='mt-5 h4 fw-medium'>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-12 col-md-6 text-center'>
                    <img src='/media/ecosystem.png' className='img-fluid' style={{ marginTop: '100px', maxWidth: '100%', height: 'auto', maxHeight: '500px' }}/>
                    <div className='text-center'>
                        <a href='' className='mx-5'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href=''>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Stats;