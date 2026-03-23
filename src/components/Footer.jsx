import React from 'react';
import palmPayLogo from '../assets/images/image.png';
import cbnImg from '../assets/images/cb72964df6-4054-47.png';
import pciImg from '../assets/images/PCI.61c854da.png';
import ndicImg from '../assets/images/ndic9117b2cc-810a-44.png';
import ndpcImg from '../assets/images/NDPC.5e0c1fc1.png';
import fccpcImg from '../assets/images/fccpc.f0d93ef3.png';

const footerLinks = {
  Personal: [
    { label: 'PalmPay App', href: '#' },
    { label: 'Send and Receive Money', href: '#', highlight: true },
    { label: 'Bill Payment', href: '#' },
    { label: 'Buy and Shop', href: '#' },
  ],
  Business: [
    { label: 'PayIn', href: '#' },
    { label: 'Payout', href: '#' },
    { label: 'POS', href: '#' },
    { label: 'Pay with Transfer', href: '#', highlight: true },
    { label: 'Business Account Management', href: '#' },
    { label: 'Agent Network', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press and Media', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#', highlight: true },
    { label: 'Complaints', href: '#' },
    { label: 'Loan Privacy Policy', href: '#' },
  ],
};

const trustBadges = [
  { img: cbnImg, alt: 'Central Bank of Nigeria' },
  { img: pciImg, alt: 'PCI DSS' },
  { img: ndicImg, alt: 'NDIC' },
  { img: ndpcImg, alt: 'NDPC' },
  { img: fccpcImg, alt: 'FCCPC' },
];

const Footer = () => {
  return (
    <footer className="palmpay-footer">
      <div className="container">
        <div className="footer-top row gy-4">
          {/* Logo + Badges column */}
          <div className="col-lg-3 col-md-4">
            <img src={palmPayLogo} alt="PalmPay" className="footer-logo" />
            <div className="footer-badges">
              {trustBadges.map((b, i) => (
                <div className="footer-badge-box" key={i}>
                  <img src={b.img} alt={b.alt} className="footer-badge-img" />
                </div>
              ))}
            </div>
          </div>

          {/* Nav link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div className="col-lg-2 col-md-3 col-6" key={category}>
              <h6 className="footer-col-heading">{category}</h6>
              <ul className="footer-link-list">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className={`footer-link${link.highlight ? ' highlight' : ''}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="footer-social-row">
          <a href="#" className="footer-social-icon" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" className="footer-social-icon" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" className="footer-social-icon" aria-label="X / Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="footer-social-icon" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © 2026 <span className="footer-palmpay-name">PalmPay</span>. All rights reserved.
        </div>

        {/* Legal Disclaimer */}
        <div className="footer-disclaimer">
          PalmPay is a financial service provided by PalmPay Limited, licensed and regulated by the Central Bank of Nigeria (CBN). Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC). Loan services on PalmPay are provided by Flexi Microfinance Bank Limited, licensed by the Central Bank of Nigeria (CBN). We empower individuals and businesses with payments solutions, high-yield investment opportunities, and easy-to-use tools for financial management. We are a global company with a presence in Nigeria, Ghana, Tanzania, and the United Kingdom.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
