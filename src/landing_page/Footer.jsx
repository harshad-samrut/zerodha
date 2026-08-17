import React from "react";
import zerodhaImg from "../assets/logo.png";
import platStore from "../assets/google-play-badge-light.png";
import appStore from "../assets/appstore-badge-light.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-wrapper border-top mt-5 background copyright">
      <div className="container py-5">
        {/* Main Footer Links & Info */}
        <div className="row gy-4 gx-lg-5">
          {/* Column 1: Logo + Social */}
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column gap-3">
            <img
              src={zerodhaImg}
              alt="Zerodha logo"
              className="footer-logo mb-2"
            />

            <p className="footer-cr-text mb-1">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="d-flex gap-3 fs-5 social-icons">
              <a href="#" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <hr className="my-2" />

            <div className="d-flex gap-3 fs-5 social-icons">
              <a href="#" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" aria-label="Telegram">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>

            <div className="d-flex flex-wrap gap-2 mt-2 store-badges">
              <img src={platStore} alt="Google Play" className="app-badge" />
              <img src={appStore} alt="App Store" className="app-badge" />
            </div>
          </div>

          {/* Column 2: Account */}
          <div className="col-6 col-md-6 col-lg-2 offset-lg-1 d-flex flex-column gap-2 links">
            <p className="footer-col-title">Account</p>
            <Link to="#">Open demat account</Link>
            <Link to="#">Minor demat account</Link>
            <Link to="#">NRI demat account</Link>
            <Link to="#">HUF demat account</Link>
            <Link to="#">Commodity</Link>
            <Link to="#">Dematerialisation</Link>
            <Link to="#">Fund transfer</Link>
            <Link to="#">MTF</Link>
          </div>

          {/* Column 3: Support */}
          <div className="col-6 col-md-6 col-lg-2 d-flex flex-column gap-2 links">
            <p className="footer-col-title">Support</p>
            <Link to="#">Contact us</Link>
            <Link to="#">Support portal</Link>
            <Link to="#">How to file a complaint?</Link>
            <Link to="#">Status of your complaints</Link>
            <Link to="#">Bulletin</Link>
            <Link to="#">Circular</Link>
            <Link to="#">Z-Connect blog</Link>
            <Link to="#">Downloads</Link>
          </div>

          {/* Column 4: Company */}
          <div className="col-6 col-md-6 col-lg-2 d-flex flex-column gap-2 links">
            <p className="footer-col-title">Company</p>
            <a href="#">About</a>
            <a href="#">Philosophy</a>
            <a href="#">Press & Media</a>
            <a href="#">Careers</a>
            <a href="#">Zerodha Cares (CSR)</a>
            <a href="#">Zerodha.tech</a>
            <a href="#">Open source</a>
            <a href="#">Referral program</a>
          </div>

          {/* Column 5: Quick Links */}
          <div className="col-6 col-md-6 col-lg-2 d-flex flex-column gap-2 links">
            <p className="footer-col-title">Quick links</p>
            <a href="#">Upcoming IPOs</a>
            <a href="#">Brokerage charges</a>
            <a href="#">Market holidays</a>
            <a href="#">Economic calendar</a>
            <a href="#">Calculators</a>
            <a href="#">Markets</a>
            <a href="#">Sectors</a>
            <a href="#">Gift Nifty</a>
          </div>
        </div>

        {/* Legal / Terms Section */}
        <div className="row mt-5">
          <div className="col-12">
            <p className="terms">
              Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
              4th Phase, Bengaluru - 560078, Karnataka, India. For any
              complaints pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p className="terms">
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p className="terms">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p className="terms">
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p className="terms">
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p className="terms">
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>

            <p className="terms">
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers/depository
              participants. Receive information of your transactions directly
              from Exchange/Depositories on your mobile/email at the end of the
              day. Issued in the interest of investors. KYC is one time exercise
              while dealing in securities markets - once KYC is done through a
              SEBI registered intermediary (broker, DP, Mutual Fund etc.), you
              need not undergo the same process again when you approach another
              intermediary."
            </p>

            <p className="terms">
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>

            <p className="terms">
              Fixed deposit products offered on this platform are third-party
              products (TPP) and are not Exchange traded products.
            </p>
          </div>
        </div>

        {/* Bottom Legal Links */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="bottom-links d-flex flex-wrap gap-3 gap-md-4 justify-content-center justify-content-lg-start">
              <a href="#">NSE</a>
              <a href="#">BSE</a>
              <a href="#">MCX</a>
              <a href="#">MSEI</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Policies & Procedures</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Disclosure</a>
              <a href="#">For Investor's Attention</a>
              <a href="#">Investor Charter</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
