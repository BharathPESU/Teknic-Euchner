import React from 'react';
import { ModalType } from '../types';

interface ProductsSectionProps {
  onOpenModal: (type: ModalType) => void;
  onOpenInfo: (key: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenModal, onOpenInfo }) => {
  const products = [
    {
      id: 'pc-prox',
      type: 'pc--left',
      name: 'Inductive Proximity Switches',
      title: <>INDUCTIVE PROXIMITY<br />SWITCHES</>,
      tag: <>Reliable non-contact detection for <br />automated machines.</>,
      desc: <>Inductive proximity switches enable precise, contactless<br className="br-d" /> object detection for control and positioning.</>,
      img: '/assets/asset_15.jpg',
      imgClass: 'pc-img--prox',
    },
    {
      id: 'pc-single',
      type: 'pc--right',
      name: 'Single Limit Switches',
      title: <>SINGLE LIMIT<br />SWITCHES</>,
      tag: <>Precision switching for dependable <br />machine control.</>,
      desc: <>Robust, corrosion-resistant limit switches built for<br className="br-d" /> demanding industrial environments.</>,
      img: '/assets/asset_16.jpg',
      imgClass: 'pc-img--single',
    },
    {
      id: 'pc-precision',
      type: 'pc--left',
      name: 'Precision Single and Multiple Limit Switches',
      title: <>PRECISION SINGLE &amp;<br />MULTIPLE LIMIT SWITCHES</>,
      tag: <>Engineered for accurate machine <br />positioning.</>,
      desc: <>Reliable control and positioning solutions built for<br className="br-d" /> industrial machinery.</>,
      img: '/assets/asset_17.jpg',
      imgClass: 'pc-img--precision',
    },
    {
      id: 'pc-photo',
      type: 'pc--right',
      name: 'Photoelectric Sensors',
      title: <>PHOTOELECTRIC<br />SENSORS</>,
      tag: <>Detect with precision. Respond <br />with confidence.</>,
      desc: <>Light-based sensors for reliable object detection and<br className="br-d" /> industrial automation.</>,
      img: '/assets/asset_18.jpg',
      imgClass: 'pc-img--photo',
    },
    {
      id: 'pc-nk',
      type: 'pc--left',
      name: 'NK Limit Switches',
      title: <>NK LIMIT<br />SWITCHES</>,
      tag: <>Compact. Robust. Built for <br />dependable switching.</>,
      desc: <>Flexible, robust limit switches designed for demanding<br className="br-d" /> industrial and safety applications.</>,
      img: '/assets/asset_19.jpg',
      imgClass: 'pc-img--nk',
    },
    {
      id: 'pc-cable',
      type: 'pc--right',
      name: 'Cable Connectors',
      title: <>CABLE<br />CONNECTORS</>,
      tag: <>Reliable connections for industrial <br />sensing and control.</>,
      desc: <>Sensor and actuator cables built for demanding<br className="br-d" /> installations and energy-chain applications.</>,
      img: '/assets/asset_20.jpg',
      imgClass: 'pc-img--cable',
    },
  ];

  return (
    <section className="section-products" id="products" aria-label="Our products">
      <div className="products-canvas">
        <div className="products-head">
          <span className="products-kicker">OUR PRODUCTS</span>
          <h2 className="products-title">
            The Right Control Gear<br />for Every Application.
          </h2>
          <div className="products-intro">
            <p>
              Industrial machines depend on components that can sense movement,<br className="br-d" /> detect position, control processes and respond when it matters.
            </p>
            <p>
              Teknic Euchner offers a focused range of industrial products engineered<br className="br-d" /> for reliable operation across demanding applications.
            </p>
            <button
              type="button"
              className="products-intro-btn btn-flip"
              id="btnExploreProducts"
              onClick={() => onOpenModal('products')}
            >
              <span className="btn-flip-viewport">
                <span className="btn-flip-track">
                  <span className="btn-flip-line btn-flip-line--default">EXPLORE OUR PRODUCTS</span>
                  <span className="btn-flip-line btn-flip-line--hover">BROWSE CATALOG</span>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="products-grid">
          {products.map((item) => (
            <article key={item.id} className={`pc ${item.type}`} id={item.id}>
              <img
                className={`pc-img ${item.imgClass}`}
                src={item.img}
                alt={item.name}
                loading="lazy"
                draggable="false"
              />
              <div className="pc-top">
                <h3 className="pc-title">{item.title}</h3>
                <p className="pc-tag">{item.tag}</p>
              </div>
              <div className="pc-bottom">
                <p className="pc-desc">{item.desc}</p>
                <button
                  type="button"
                  className="pc-btn"
                  data-product={item.name}
                  aria-label={`Explore ${item.name}`}
                  onClick={() => onOpenInfo(item.name)}
                >
                  <span className="pc-btn-label">EXPLORE</span>
                  <span className="pc-btn-arrow">
                    <svg
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="1.2" y="1.2" width="13.6" height="13.6" rx="4" />
                      <path d="M4.6 8h6.2M8.4 5.2 11.2 8l-2.8 2.8" />
                    </svg>
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
