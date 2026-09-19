import React from 'react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
  onOpenInfo: (key: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal, onOpenInfo }) => {
  return (
    <footer className="site-footer" id="siteFooter">
      <div className="footer-canvas">
        <p className="footer-wordmark">
          <span>TEKNIC</span> <span className="footer-wordmark-2">EUCHNER</span>
        </p>

        <div className="footer-body">
          <div className="footer-about">
            <p className="footer-tagline">
              Discover our range of<br className="br-d" /> industrial equipment.
            </p>
            <p className="footer-sub">
              Crafting durable machinery for reliable<br className="br-d" /> performance in tough environments.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Company</h3>
              <ul className="footer-nav-list">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenInfo('about');
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#leadership"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenInfo('leadership');
                    }}
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="#dealers"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenModal('dealers');
                    }}
                  >
                    Dealer Network
                  </a>
                </li>
                <li>
                  <a
                    href="#quote"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenModal('expert');
                    }}
                  >
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Products</h3>
              <ul className="footer-nav-list">
                <li>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenInfo('Inductive Proximity Switches');
                    }}
                  >
                    Proximity Switches
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenInfo('Single Limit Switches');
                    }}
                  >
                    Limit Switches
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenInfo('Photoelectric Sensors');
                    }}
                  >
                    Photoelectric Sensors
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenInfo('STM Pro Safety Switch');
                    }}
                  >
                    Safety Switches
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Info</h3>
              <ul className="footer-nav-list">
                <li>
                  <a
                    href="#quality"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenInfo('quality');
                    }}
                  >
                    Quality Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#applications"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="#our-journey"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('our-journey')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Our Journey
                  </a>
                </li>
                <li>
                  <a
                    href="#news"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenInfo('news');
                    }}
                  >
                    News &amp; Events
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Contact</h3>
              <ul className="footer-nav-list">
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenModal('expert');
                    }}
                  >
                    Expert Consultation
                  </a>
                </li>
                <li>
                  <a
                    href="#catalog"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenModal('products');
                    }}
                  >
                    Full Catalogue
                  </a>
                </li>
                <li>
                  <a href="mailto:marketing@teknic-euchner.co.in">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a
                    href="#dealers"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenModal('dealers');
                    }}
                  >
                    Authorized Dealers
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="footer-contact">
            <address className="footer-address">
              No. 64, 5th Cross, Electronics City,<br className="br-d" />
              Bengaluru 560 100, Karnataka, India
            </address>
            <p className="footer-contact-line">
              <a href="mailto:marketing@teknic-euchner.co.in">marketing@teknic-euchner.co.in</a>
            </p>
            <p className="footer-contact-line">
              <a href="tel:+918028522717">+91 80 28522717</a>
            </p>

            <ul className="footer-social">
              <li>
                <a
                  href="https://in.linkedin.com/company/teknic-euchner-electronics-private-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="ico-in" viewBox="0 0 448 448" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tekniceuchner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg className="ico-ig" viewBox="0 0 114 114" aria-hidden="true" focusable="false">
                    <path
                      fillRule="evenodd"
                      d="M30 0H84A30 30 0 0 1 114 30V84A30 30 0 0 1 84 114H30A30 30 0 0 1 0 84V30A30 30 0 0 1 30 0ZM57 24a33 33 0 1 0 0 66a33 33 0 1 0 0-66ZM57 37a20 20 0 1 0 0 40a20 20 0 1 0 0-40ZM95 13a7 7 0 1 0 0 14a7 7 0 1 0 0-14Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCQGCDSE-EjQlgpULLqqgRHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg className="ico-yt" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-legal">&copy; 2026 TEKNIC EUCHNER. All Rights Reserved</p>
      </div>
    </footer>
  );
};
