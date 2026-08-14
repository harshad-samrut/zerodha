import zerodhaImg from "../assets/logo.png";
import platStore from "../assets/google-play-badge-light.png";
import appStore from "../assets/appstore-badge-light.png";
import "./Footer.css";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <div className="container-fluid border-top mt-5 background copyright">
      {/* Main Footer */}
      <div className="row my-5 offset-1">
        {/* Logo + Social */}
        <div className="col d-flex flex-column gap-4 ms-5 me-5">
          <img
            src={zerodhaImg}
            alt="logo"
            className="img-fluid"
            style={{ width: "60%" }}
          />

          <p className="fw-light" style={{ fontSize: "14px" }}>
            © 2010 - 2026, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>

          <div className="d-flex gap-3 fs-5">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>

          <hr />

          <div className="d-flex gap-3 fs-5">
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>

          <div className="d-flex gap-4 mt-3">
            <img src={platStore} alt="Google Play" />
            <img src={appStore} alt="App Store" />
          </div>
        </div>

        {/* Account */}
        <div className="col d-flex flex-column gap-3 links">
          <p>Account</p>
          <Link href="#">Open demat account</Link>
          <Link href="#">Minor demat account</Link>
          <Link href="#">NRI demat account</Link>
          <Link href="#">HUF demat account</Link>
          <Link href="#">Commodity</Link>
          <Link href="#">Dematerialisation</Link>
          <Link href="#">Fund transfer</Link>
          <Link href="#">MTF</Link>
        </div>

        {/* Support */}
        <div className="col d-flex flex-column gap-3 links">
          <p>Support</p>
          <Link href="#">Contact us</Link>
          <Link href="#">Support portal</Link>
          <Link href="#">How to file a complaint?</Link>
          <Link href="#">Status of your complaints</Link>
          <Link href="#">Bulletin</Link>
          <Link href="#">Circular</Link>
          <Link href="#">Z-Connect blog</Link>
          <Link href="#">Downloads</Link>
        </div>

        {/* Company */}
        <div className="col d-flex flex-column gap-3 links">
          <p>Company</p>
          <a href="#">About</a>
          <a href="#">Philosophy</a>
          <a href="#">Press & Media</a>
          <a href="#">Careers</a>
          <a href="#">Zerodha Cares (CSR)</a>
          <a href="#">Zerodha.tech</a>
          <a href="#">Open source</a>
          <a href="#">Referral program</a>
        </div>

        {/* Quick Links */}
        <div className="col d-flex flex-column gap-3 links">
          <p>Quick links</p>
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
      <div className="row">
        <div className="col-10 offset-1 ">
          <p className="terms ms-5">
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p className="terms ms-5">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="terms ms-5">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p className="terms ms-5">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="terms ms-5">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p className="terms ms-5">
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p className="terms ms-5">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary."
          </p>

          <p className="terms ms-5">
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p className="terms ms-5">
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products.
          </p>
        </div>
      </div>
      {/* Bottom Links */}
      <div className="row p-3">
        <div className="col-10 offset-1 mb-3">
          <div className="bottom-links ms-5 d-flex flex-wrap gap-4">
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
  );
}

export default Footer;
