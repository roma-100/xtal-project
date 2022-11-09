import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <div className="footer-page">
        <div className="footer-wrap">
          <div className="footer-title">
            <span>Products</span>
            <ul>
              <li>
                <a href="#">OCXO models</a>
              </li>
            </ul>
          </div>
          <div className="footer-title">
            <span className="footer-lable">Applications</span>
            <ul>
              <li>
                <a href="#">
                  Low Power Oven Control Crystal Oscillators (LP OCXOs)
                </a>
              </li>
              <li>
                <a href="#">High Precision Low Power Clocks.</a>
              </li>
              <li>
                <a href="#">GPS Disciplined Low Power Frequency Reference.</a>
              </li>
            </ul>
          </div>

          <div className="footer-title">
            <span>About</span>
            <ul>
              <li>
                <a href="#">About us.</a>
              </li>
            </ul>
          </div>
          <div className="footer-title">
            <span>Contact</span>
            <ul>
              <li>
                <a href="#">Contact Us.</a>
              </li>
              <li>
                <NavLink to="./xtest">Test Page</NavLink>
              </li>
              <li>
                <NavLink to="./xtest-mail">Test Mail</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-rights"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
