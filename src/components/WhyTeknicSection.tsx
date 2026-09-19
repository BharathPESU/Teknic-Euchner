import React from 'react';

export const WhyTeknicSection: React.FC = () => {
  return (
    <section className="section-why" id="why-teknic-euchner" aria-label="Why Teknic Euchner">
      <div className="why-canvas">
        <span className="why-kicker">WHY TEKNIC EUCHNER</span>

        <h2 className="why-headline">
          Built Around What Industry<br className="br-d" /> Needs.
        </h2>

        <p className="why-lead">
          Industrial environments leave little room for uncertainty. That's why our<br className="br-d" />
          approach combines engineering expertise, robust materials and<br className="br-d" />
          manufacturing experience to create products designed for dependable<br className="br-d" />
          performance.
        </p>

        <div className="why-photo">
          <img
            className="why-photo-img"
            src="/assets/asset_21.jpg"
            alt="Yellow industrial robot arms welding on a production line while an engineer checks a tablet"
            referrerPolicy="no-referrer"
          />
        </div>

        <ul className="why-list">
          <li className="why-item">
            <h3 className="why-item-title">
              Engineering<br className="br-d" /> Expertise
            </h3>
            <p className="why-item-desc">
              Built on decades of experience and<br className="br-d" /> strengthened by Euchner Germany's<br className="br-d" /> engineering heritage.
            </p>
          </li>
          <li className="why-item">
            <h3 className="why-item-title">
              Reliable<br className="br-d" /> Performance
            </h3>
            <p className="why-item-desc">
              Products designed to deliver consistent<br className="br-d" /> operation in demanding industrial<br className="br-d" /> environments.
            </p>
          </li>
          <li className="why-item">
            <h3 className="why-item-title">
              Robust<br className="br-d" /> Construction
            </h3>
            <p className="why-item-desc">
              Quality materials, precision manufacturing<br className="br-d" /> and application-focused design for long-<br className="br-d" />term performance.
            </p>
          </li>
          <li className="why-item">
            <h3 className="why-item-title">
              Industry-Focused<br className="br-d" /> Solutions
            </h3>
            <p className="why-item-desc">
              Products developed around the practical<br className="br-d" /> requirements of machines, automation<br className="br-d" /> systems and industrial equipment.
            </p>
          </li>
          <li className="why-item">
            <h3 className="why-item-title">
              Quality as a<br className="br-d" /> Standard
            </h3>
            <p className="why-item-desc">
              Our commitment to quality extends from<br className="br-d" /> product development and manufacturing<br className="br-d" /> to customer service.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
