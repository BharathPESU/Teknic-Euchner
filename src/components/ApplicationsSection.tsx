import React from 'react';

export const ApplicationsSection: React.FC = () => {
  const apps = [
    {
      id: 'app-machine',
      title: 'Machine Tools',
      desc: <>Precision sensing and positioning for machine-tool<br className="br-d" /> applications.</>,
      img: '/assets/asset_22.jpg',
      alt: 'Precision CNC milling of a metal machine part',
      style: { ['--ix' as any]: '31.5', ['--iy' as any]: '42.7', ['--iw' as any]: '306.6', ['--ih' as any]: '306.6' }
    },
    {
      id: 'app-automation',
      title: 'Industrial Automation',
      desc: <>Reliable detection and switching for automated<br className="br-d" /> processes.</>,
      img: '/assets/asset_23.jpg',
      alt: 'Yellow robotic arms welding on an automated line',
      style: { ['--ix' as any]: '4.6', ['--iy' as any]: '11.1', ['--iw' as any]: '263.4', ['--ih' as any]: '263.4' }
    },
    {
      id: 'app-equipment',
      title: 'Manufacturing Equipment',
      desc: <>Components designed for demanding production<br className="br-d" /> environments.</>,
      img: '/assets/asset_24.jpg',
      alt: 'Industrial process piping and hoppers in a production hall',
      style: { ['--ix' as any]: '17.1', ['--iy' as any]: '42.7', ['--iw' as any]: '274.1', ['--ih' as any]: '300.6' }
    },
    {
      id: 'app-handling',
      title: 'Material Handling',
      desc: <>Sensing and switching solutions for movement,<br className="br-d" /> positioning and control.</>,
      img: '/assets/asset_25.jpg',
      alt: 'Packaging machine handling a cardboard carton',
      style: { ['--ix' as any]: '108.5', ['--iy' as any]: '42.7', ['--iw' as any]: '461.6', ['--ih' as any]: '308.1' }
    },
    {
      id: 'app-safety',
      title: 'Safety Applications',
      desc: <>Products designed to support machine safety and<br className="br-d" /> reliable control.</>,
      img: '/assets/asset_26.jpg',
      alt: 'Red safety interlock switches in front of orange robots',
      style: { ['--ix' as any]: '9.9', ['--iy' as any]: '8.3', ['--iw' as any]: '259.8', ['--ih' as any]: '235.1' }
    },
    {
      id: 'app-custom',
      title: 'Custom Industrial Applications',
      desc: <>Solutions selected around the specific requirements<br className="br-d" /> of your equipment.</>,
      img: '/assets/asset_27.jpg',
      alt: 'Robots assembling a car body on an automotive line',
      style: { ['--ix' as any]: '47', ['--iy' as any]: '0', ['--iw' as any]: '433.1', ['--ih' as any]: '288.7' }
    }
  ];

  return (
    <section className="section-apps" id="applications" aria-label="Our applications">
      <div className="apps-canvas">
        <span className="apps-kicker">OUR APPLICATIONS</span>

        <h2 className="apps-headline">
          Designed for Machines. Trusted Across<br className="br-d" /> Industries.
        </h2>

        <p className="apps-intro">
          Our products support the machines and systems that keep modern<br className="br-d" /> manufacturing moving.
        </p>

        <div className="apps-grid">
          {apps.map((item) => (
            <article key={item.id} className="app-card" id={item.id}>
              <div className="app-photo">
                <img
                  className="app-photo-img"
                  style={item.style}
                  src={item.img}
                  alt={item.alt}
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="app-title">{item.title}</h3>
              <p className="app-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
