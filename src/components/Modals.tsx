import React, { useState, useEffect } from 'react';
import { ModalType, InfoModalState, DealerInfo, ExpertFormData } from '../types';
import { DEALERS } from '../data/siteData';

interface ModalsProps {
  activeModal: ModalType;
  onCloseModal: () => void;
  onOpenModal: (type: ModalType) => void;
  onOpenInfo: (key: string) => void;
  infoState: InfoModalState | null;
  selectedProductForQuote: string;
  setSelectedProductForQuote: (prod: string) => void;
  onShowToast: (msg: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  activeModal,
  onCloseModal,
  onOpenModal,
  onOpenInfo,
  infoState,
  selectedProductForQuote,
  setSelectedProductForQuote,
  onShowToast,
}) => {
  // Dealer search state
  const [dealerQuery, setDealerQuery] = useState('');
  const [dealersList, setDealersList] = useState<DealerInfo[]>(DEALERS);

  // Expert form state
  const [formData, setFormData] = useState<ExpertFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: 'Inductive Proximity Switches',
    message: '',
  });

  useEffect(() => {
    if (selectedProductForQuote) {
      setFormData((prev) => ({ ...prev, product: selectedProductForQuote }));
    }
  }, [selectedProductForQuote]);

  useEffect(() => {
    const q = dealerQuery.toLowerCase().trim();
    if (!q) {
      setDealersList(DEALERS);
    } else {
      setDealersList(
        DEALERS.filter(
          (d) =>
            d.region.toLowerCase().includes(q) ||
            d.name.toLowerCase().includes(q) ||
            d.address.toLowerCase().includes(q)
        )
      );
    }
  }, [dealerQuery]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModal) {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, onCloseModal]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast(
      `Thank you, ${formData.name}! Your request for ${formData.product} has been submitted to the Teknic Euchner engineering team.`
    );
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      product: 'Inductive Proximity Switches',
      message: '',
    });
    onCloseModal();
  };

  const handleInfoBodyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('[data-act]');
    if (!target) return;
    const act = target.getAttribute('data-act');
    if (act === 'quote') {
      const prod = target.getAttribute('data-product') || '';
      setSelectedProductForQuote(prod);
      onOpenModal('expert');
    } else if (act === 'dealer') {
      onOpenModal('dealers');
    } else if (act === 'products') {
      onOpenModal('products');
    } else if (act === 'open') {
      const targetSec = target.getAttribute('data-target') || '';
      if (targetSec) {
        onOpenInfo(targetSec);
      }
    }
  };

  return (
    <>
      {/* ====================================================================
          MODAL 1: CONSULT AN EXPERT / RFQ
          ==================================================================== */}
      <div
        className={`modal-backdrop ${activeModal === 'expert' ? 'open' : ''}`}
        id="modalExpert"
        role="dialog"
        aria-labelledby="expertTitle"
        aria-modal="true"
        onClick={handleBackdropClick}
      >
        <div className="modal-container">
          <div className="modal-header">
            <h2 className="modal-title" id="expertTitle">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d90429"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Consult a Machine Safety &amp; Sensing Expert
            </h2>
            <button className="modal-close-btn" aria-label="Close modal" onClick={onCloseModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
              Our application engineering team in Bengaluru &amp; Navi Mumbai provides custom technical recommendations,
              CAD models, and rapid quotation for OEM machine builders and automation integrators.
            </p>

            <form id="expertForm" onSubmit={handleFormSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="reqName">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="reqName"
                    className="form-input"
                    placeholder="e.g. Rahul Sharma"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reqCompany">
                    Company / Plant Name *
                  </label>
                  <input
                    type="text"
                    id="reqCompany"
                    className="form-input"
                    placeholder="e.g. Precision CNC Works Ltd."
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="reqEmail">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="reqEmail"
                    className="form-input"
                    placeholder="name@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="reqPhone">
                    Mobile / Direct Phone *
                  </label>
                  <input
                    type="tel"
                    id="reqPhone"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reqProduct">
                  Product Category of Interest
                </label>
                <select
                  id="reqProduct"
                  className="form-select"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                >
                  <option value="Inductive Proximity Switches">Inductive Proximity Switches</option>
                  <option value="Single Limit Switches">Single Limit Switches</option>
                  <option value="Precision Single and Multiple Limit Switches">
                    Precision Single and Multiple Limit Switches
                  </option>
                  <option value="Photoelectric Sensors">Photoelectric Sensors</option>
                  <option value="NK Limit Switches">NK Limit Switches</option>
                  <option value="Cable Connectors">Cable Connectors</option>
                  <option value="STM Pro Safety Switch">STM Pro Safety Switch</option>
                  <option value="Not sure yet: help me choose">Not sure yet: help me choose</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="reqMsg">
                  Application Requirements / Operating Environment
                </label>
                <textarea
                  id="reqMsg"
                  className="form-textarea"
                  rows={3}
                  placeholder="Describe machine type, cycle rate, temperature, IP rating (IP67/IP69K), or special safety SIL requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit btn-flip">
                <span className="btn-flip-viewport">
                  <span className="btn-flip-track">
                    <span className="btn-flip-line btn-flip-line--default">SUBMIT TECHNICAL INQUIRY</span>
                    <span className="btn-flip-line btn-flip-line--hover">SEND MY REQUEST</span>
                  </span>
                </span>
              </button>
            </form>

            <div
              style={{
                marginTop: '1.8rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid var(--color-border-grid)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                fontSize: '0.8125rem',
                color: '#94a3b8',
              }}
            >
              <div>
                <strong style={{ color: '#cbd5e1' }}>Head Office &amp; Factory:</strong> Electronic City Phase 1, Hosur
                Road, Bengaluru 560100
              </div>
              <div>
                <strong style={{ color: '#cbd5e1' }}>Direct Helpline:</strong> +91 80 2783 2341 / +91 80 4125 7800
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          MODAL 2: EXPLORE PRODUCTS CATALOG
          ==================================================================== */}
      <div
        className={`modal-backdrop ${activeModal === 'products' ? 'open' : ''}`}
        id="modalProducts"
        role="dialog"
        aria-labelledby="prodTitle"
        aria-modal="true"
        onClick={handleBackdropClick}
      >
        <div className="modal-container" style={{ maxWidth: '1040px' }}>
          <div className="modal-header">
            <h2 className="modal-title" id="prodTitle">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d90429"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Teknic Euchner Engineered Product Range
            </h2>
            <button className="modal-close-btn" aria-label="Close modal" onClick={onCloseModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <div className="product-grid">
              {[
                {
                  badge: 'Sensing',
                  name: 'Inductive Proximity Switches',
                  desc: 'Solid-state, non-contact switching for control and positioning signals.',
                  specs: [
                    ['Actuation', 'No physical contact'],
                    ['Technology', 'Solid-state'],
                  ],
                },
                {
                  badge: 'Position switching',
                  name: 'Single Limit Switches',
                  desc: 'Versatile, robust limit switches built to European Standard EN 50041.',
                  specs: [
                    ['Standard', 'EN 50041'],
                    ['Protection', 'IP67'],
                  ],
                },
                {
                  badge: 'Precision switching',
                  name: 'Precision Single and Multiple Limit Switches',
                  desc: 'Developed with the machine tool industry by Euchner Germany.',
                  specs: [
                    ['Heritage', '40+ years'],
                    ['Versions', 'Single & multiple'],
                  ],
                },
                {
                  badge: 'Optical sensing',
                  name: 'Photoelectric Sensors',
                  desc: 'Fast, non-contact object detection using infrared or red light.',
                  specs: [
                    ['Light', 'Infrared or red'],
                    ['Versions', 'Reflection / reflector / through-beam'],
                  ],
                },
                {
                  badge: 'Position switching',
                  name: 'NK Limit Switches',
                  desc: 'Configurable limit switches with positive-opening NC contacts.',
                  specs: [
                    ['Dimensions', 'EN 50047'],
                    ['Electrical', 'IEC 60947-5-1'],
                  ],
                },
                {
                  badge: 'Connectivity',
                  name: 'Cable Connectors',
                  desc: 'Sensor and actuator cables designed for energy-chain use.',
                  specs: [
                    ['Cross-section', '0.25 to 0.34 mm²'],
                    ['Jacket', 'TPU or PVC'],
                  ],
                },
                {
                  badge: 'Safety',
                  name: 'STM Pro Safety Switch',
                  desc: 'Compact guard-locking safety switch with LED solenoid status.',
                  specs: [
                    ['Function', 'Guard locking'],
                    ['Contacts', '4'],
                  ],
                },
              ].map((prod) => (
                <div key={prod.name} className="product-card">
                  <span className="product-badge">{prod.badge}</span>
                  <h3>{prod.name}</h3>
                  <p className="product-desc">{prod.desc}</p>
                  <ul className="product-specs">
                    {prod.specs.map(([label, val]) => (
                      <li key={label}>
                        <span>{label}:</span> <strong>{val}</strong>
                      </li>
                    ))}
                  </ul>
                  <div className="product-card-actions">
                    <button
                      type="button"
                      className="btn-card-details"
                      onClick={() => onOpenInfo(prod.name)}
                    >
                      View details
                    </button>
                    <button
                      type="button"
                      className="btn-card-inquire"
                      onClick={() => {
                        setSelectedProductForQuote(prod.name);
                        onOpenModal('expert');
                      }}
                    >
                      Request quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          MODAL 3: DEALERS NETWORK
          ==================================================================== */}
      <div
        className={`modal-backdrop ${activeModal === 'dealers' ? 'open' : ''}`}
        id="modalDealers"
        role="dialog"
        aria-labelledby="dealersTitle"
        aria-modal="true"
        onClick={handleBackdropClick}
      >
        <div className="modal-container" style={{ maxWidth: '980px' }}>
          <div className="modal-header">
            <h2 className="modal-title" id="dealersTitle">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d90429"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Find a Teknic Euchner Dealer
            </h2>
            <button className="modal-close-btn" aria-label="Close modal" onClick={onCloseModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            <p className="dealer-count-note">
              Teknic Euchner products are available through {DEALERS.length} authorized dealers across India. Search by city, dealer name or state.
            </p>
            <div className="dealer-search-bar">
              <input
                type="text"
                id="dealerSearch"
                className="dealer-search-input"
                placeholder="Search city, dealer or state (e.g. Pune, Bengaluru, Gujarat, Delhi)..."
                autoComplete="off"
                value={dealerQuery}
                onChange={(e) => setDealerQuery(e.target.value)}
              />
              <span className="dealer-count-pill" id="dealerCountPill">
                Showing {dealersList.length} of {DEALERS.length}
              </span>
            </div>

            <ul className="dealer-list" id="dealerList">
              {dealersList.map((dealer, idx) => (
                <li key={idx} className={dealer.className}>
                  <div className="dealer-region">{dealer.region}</div>
                  <div className="dealer-name">{dealer.name}</div>
                  <div className="dealer-address">{dealer.address}</div>
                  {dealer.phones.map((phoneHtml, pIdx) => (
                    <div
                      key={pIdx}
                      className="dealer-phone"
                      dangerouslySetInnerHTML={{ __html: phoneHtml }}
                    />
                  ))}
                </li>
              ))}
              {dealersList.length === 0 && (
                <li style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
                  No authorized dealers found matching &ldquo;{dealerQuery}&rdquo;. Contact our head office at +91 80 28522717 for direct supply.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* ====================================================================
          MODAL 4: DYNAMIC INFO MODAL (ABOUT, LEADERSHIP, QUALITY, NEWS, SPECS)
          ==================================================================== */}
      <div
        className={`modal-backdrop ${activeModal === 'info' ? 'open' : ''}`}
        id="modalInfo"
        role="dialog"
        aria-modal="true"
        onClick={handleBackdropClick}
      >
        <div className="modal-container">
          <div className="modal-header" id="infoTitle">
            <h2 className="modal-title" id="infoTitleText">
              {infoState?.title}
            </h2>
            <button className="modal-close-btn" aria-label="Close modal" onClick={onCloseModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div
            className="modal-body"
            id="infoBody"
            onClick={handleInfoBodyClick}
            dangerouslySetInnerHTML={{ __html: infoState?.htmlContent || '' }}
          />
        </div>
      </div>
    </>
  );
};
