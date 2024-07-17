import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerhead">
          <p>Questions? Call 000-800-919-1694</p>
        </div>
        <div className="row">
          <div className="col">
            <ul className="foot">
              <li>FAQ</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>

          <div className="col">
            <ul className="foot">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="col">
            <ul className="foot">
              <li>Account</li>
              <li>Ways to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
          <div className="col">
            <ul className="foot">
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="lan">
          <select>
            <option value="english">English</option>
            <option value="hindi">हिंदी</option>
          </select>
        </div>
        <div className="web_name">
          <p>Netflix India</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
