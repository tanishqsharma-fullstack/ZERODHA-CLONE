import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Zerodha Branding */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="fw-bold">Zerodha</h5>
            <p className="small text-muted">
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Account */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled small">
              <li><a href="#">Open demat account</a></li>
              <li><a href="#">Minor demat account</a></li>
              <li><a href="#">NRI demat account</a></li>
              <li><a href="#">Fund transfer</a></li>
              <li><a href="#">MTF</a></li>
              <li><a href="#">Referral program</a></li>
              <li><a href="#">Dematerialisation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled small">
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Support portal</a></li>
              <li><a href="#">How to file a complaint?</a></li>
              <li><a href="#">Status of your complaints</a></li>
              <li><a href="#">Bulletin</a></li>
              <li><a href="#">Circular</a></li>
              <li><a href="#">Z‑Connect blog</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </div>

          {/* Company + Quick Links (with Markets at end) */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled small mb-4">
              <li><a href="#">About</a></li>
              <li><a href="#">Philosophy</a></li>
              <li><a href="#">Press & media</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Zerodha Cares (CSR)</a></li>
              <li><a href="#">Zerodha.tech</a></li>
              <li><a href="#">Open source</a></li>
            </ul>

            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="#">Upcoming IPOs</a></li>
              <li><a href="#">Brokerage charges</a></li>
              <li><a href="#">Market holidays</a></li>
              <li><a href="#">Economic calendar</a></li>
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Sectors</a></li>
              <li><a href="#">NSE</a></li>
              <li><a href="#">BSE</a></li>
              <li><a href="#">MCX</a></li>
            </ul>
          </div>

        </div>

        <hr />

        {/* Legal section */}
        <div className="small text-muted">
          <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Reg. no.: INZ000031633. Depository: CDSL/NSDL – IN-DP-431-2019. Commodity Trading via Zerodha Commodities Pvt. Ltd. – INZ000038238</p>
          <p>Registered Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.</p>
          <p>Email: <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a> | <a href="mailto:dp@zerodha.com">dp@zerodha.com</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <a href='Smart Online Dispute Resolution | Grievances Redressal Mechanism'>Smart Online Dispute Resolution | Grievances Redressal Mechanism

          </a>
          <p className='mt-3'>Investments in securities market are subject to market risks; read all related documents carefully before investing.</p>
          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p className="mt-4">
          <a href="#">NSE</a> |
          <a href="#">BSE</a> |
          <a href="#">MCX</a> |
          <a href="#">Terms & conditions</a> |
          <a href="#">Policies & procedures</a> |
          <a href="#">Privacy policy</a> |
          <a href="#">Disclosure</a> |
          <a href="#">For investor's attention</a> |
          <a href="#">Investor charter</a>
        </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
