import React from 'react';

interface QualitySectionProps {
  onOpenInfo: (key: string) => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({ onOpenInfo }) => {
  return (
    <section className="section-quality" id="quality" aria-label="Our commitment to quality">
      <div className="quality-canvas">
        <div className="quality-bg" aria-hidden="true">
          <img
            className="quality-bg-img"
            src="/assets/asset_28.jpg"
            alt=""
            width="678"
            height="452"
            decoding="async"
          />
        </div>

        <h2 className="quality-headline">
          Quality Isn't an Inspection.<br className="br-d" /> It's a Commitment.
        </h2>

        <p className="quality-intro">
          For industrial components, quality is about more than<br className="br-d" /> meeting a specification.
        </p>

        <p className="quality-points">
          It's about consistent performance.<br />
          It's about dependable operation.<br />
          It's about building components that customers<br />
          can specify with confidence.
        </p>

        <p className="quality-note">
          At Teknic Euchner, quality is built into our approach to<br className="br-d" /> product development, manufacturing and customer service.
        </p>

        <button
          type="button"
          className="quality-btn btn-flip"
          id="btnQualityPolicy"
          onClick={() => onOpenInfo('quality')}
        >
          <span className="btn-flip-viewport">
            <span className="btn-flip-track">
              <span className="btn-flip-line btn-flip-line--default">View our quality policy</span>
              <span className="btn-flip-line btn-flip-line--hover">See Full Details</span>
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};
