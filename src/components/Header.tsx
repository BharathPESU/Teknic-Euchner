import React, { useState, useEffect } from 'react';
import { ModalType } from '../types';

interface HeaderProps {
  onOpenModal: (type: ModalType) => void;
  onOpenInfo: (key: string) => void;
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal, onOpenInfo, scrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.site-header')) {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleNavClick = (action: () => void) => {
    action();
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 860) {
      e.preventDefault();
      setOpenDropdown(openDropdown === name ? null : name);
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="header-inner">
        {/* Logo (TEKNIC EUCHNER matching reference screenshot) */}
        <a href="#" className="brand-logo" id="brandLogo" aria-label="Teknic Euchner Home">
          <div className="brand-name">
            <span className="brand-teknic">TEKNIC</span>
            <span className="brand-euchner">EUCHNER</span>
          </div>
        </a>

        {/* Mobile Navigation Hamburger */}
        <button
          className="mobile-toggle"
          id="mobileToggle"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav>
          <ul className={`nav-menu ${mobileOpen ? 'mobile-open' : ''}`} id="navMenu">
            {/* ABOUT US */}
            <li className={`nav-item ${openDropdown === 'about' ? 'open' : ''}`}>
              <button
                className="nav-link"
                id="navAbout"
                onClick={(e) => {
                  if (window.innerWidth <= 860) {
                    toggleDropdown('about', e);
                  } else {
                    handleNavClick(() => onOpenInfo('about'));
                  }
                }}
              >
                ABOUT US
                <svg className="nav-chevron" viewBox="0 0 12 8">
                  <polyline points="1 1.5 6 6.5 11 1.5"></polyline>
                </svg>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="#about"
                    className="open-about-modal"
                    data-info="about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(() => onOpenInfo('about'));
                    }}
                  >
                    Company Profile
                    <span className="desc">Indo-German joint venture since 1989</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#leadership"
                    className="open-about-modal"
                    data-info="leadership"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(() => onOpenInfo('leadership'));
                    }}
                  >
                    Leadership &amp; Vision
                    <span className="desc">Founders, mission and vision</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#quality"
                    className="open-about-modal"
                    data-info="quality"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(() => onOpenInfo('quality'));
                    }}
                  >
                    Quality Policy
                    <span className="desc">Policy, objectives &amp; commitment</span>
                  </a>
                </li>
              </ul>
            </li>

            {/* PRODUCTS */}
            <li className={`nav-item ${openDropdown === 'products' ? 'open' : ''}`}>
              <button
                className="nav-link"
                id="navProducts"
                onClick={(e) => {
                  if (window.innerWidth <= 860) {
                    toggleDropdown('products', e);
                  } else {
                    handleNavClick(() => onOpenModal('products'));
                  }
                }}
              >
                PRODUCTS
                <svg className="nav-chevron" viewBox="0 0 12 8">
                  <polyline points="1 1.5 6 6.5 11 1.5"></polyline>
                </svg>
              </button>
              <ul className="dropdown-menu">
                {[
                  { name: 'Inductive Proximity Switches', desc: 'Non-contact, solid-state sensing' },
                  { name: 'Single Limit Switches', desc: 'EN 50041 · IP67 protection' },
                  { name: 'Precision Single and Multiple Limit Switches', desc: 'Euchner Germany heritage' },
                  { name: 'Photoelectric Sensors', desc: 'Reflective & through-beam versions' },
                  { name: 'NK Limit Switches', desc: 'EN 50047 · IEC 60947-5-1' },
                  { name: 'Cable Connectors', desc: 'Sensor & actuator cables' },
                  { name: 'STM Pro Safety Switch', desc: 'Compact guard-locking safety' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href="#products"
                      className="open-prod-cat"
                      data-info={item.name}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(() => onOpenInfo(item.name));
                      }}
                    >
                      {item.name}
                      <span className="desc">{item.desc}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* DEALERS */}
            <li className="nav-item">
              <a
                href="#dealers"
                className="nav-link"
                id="navDealers"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(() => onOpenModal('dealers'));
                }}
              >
                DEALERS
              </a>
            </li>

            {/* NEWS & EVENTS */}
            <li className="nav-item">
              <a
                href="#news"
                className="nav-link"
                id="navNews"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(() => onOpenInfo('news'));
                }}
              >
                NEWS & EVENTS
              </a>
            </li>

            {/* CONTACT US */}
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                id="navContact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(() => onOpenModal('expert'));
                }}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Action Button */}
        <div className="header-cta">
          <button
            className="btn-talk-expert btn-flip"
            id="btnTalkExpert"
            onClick={() => onOpenModal('expert')}
          >
            <span className="btn-flip-viewport">
              <span className="btn-flip-track">
                <span className="btn-flip-line btn-flip-line--default">TALK TO AN EXPERT</span>
                <span className="btn-flip-line btn-flip-line--hover">GET IN TOUCH</span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
