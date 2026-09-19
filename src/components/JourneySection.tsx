import React from 'react';

export const JourneySection: React.FC = () => {
  return (
    <section className="section-journey" id="our-journey">
      <div className="journey-canvas">
        {/* Journey Header */}
        <div className="journey-header">
          <span className="journey-kicker">OUR JOURNEY</span>
          <h2 className="journey-headline">
            Decades of Engineering.<br />Built for Industry.
          </h2>
        </div>

        {/* Glass Stats Card */}
        <div className="journey-stats-card">
          <div className="journey-stat-col" id="journeyStatCol1">
            <div className="journey-icon-wrap" aria-hidden="true">
              <img
                id="journeyIcon1"
                className="journey-stat-icon-img"
                src="/assets/asset_11.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
            <h3 className="journey-stat-value">35+ Years</h3>
            <p className="journey-stat-desc">Of industrial manufacturing experience</p>
          </div>

          <div className="journey-stat-col" id="journeyStatCol2">
            <div className="journey-icon-wrap" aria-hidden="true">
              <img
                id="journeyIcon2"
                className="journey-stat-icon-img"
                src="/assets/asset_12.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
            <h3 className="journey-stat-value">1989</h3>
            <p className="journey-stat-desc">Year Teknic Euchner was established</p>
          </div>

          <div className="journey-stat-col" id="journeyStatCol3">
            <div className="journey-icon-wrap" aria-hidden="true">
              <img
                id="journeyIcon3"
                className="journey-stat-icon-img"
                src="/assets/asset_13.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
            <h3 className="journey-stat-value">Multiple Product Categories</h3>
            <p className="journey-stat-desc">Solutions across sensing, switching and machine control</p>
          </div>

          <div className="journey-stat-col" id="journeyStatCol4">
            <div className="journey-icon-wrap" aria-hidden="true">
              <img
                id="journeyIcon4"
                className="journey-stat-icon-img"
                src="/assets/asset_14.png"
                alt=""
                width="50"
                height="50"
              />
            </div>
            <h3 className="journey-stat-value">Pan–India Dealer Network</h3>
            <p className="journey-stat-desc">Product access and support across India</p>
          </div>
        </div>
      </div>
    </section>
  );
};
