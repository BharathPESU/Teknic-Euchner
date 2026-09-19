import React from 'react';

interface IntroSectionProps {
  onOpenInfo: (key: string) => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenInfo }) => {
  return (
    <section className="section-intro" id="sectionIntro" aria-label="Introduction to Teknic Euchner">
      <div className="intro-canvas">
        <span className="intro-kicker">INTRODUCTION</span>

        <h2 className="intro-headline">
          Engineering You Can Rely On.{' '}
          <span className="intro-headline-red">
            Experience You<br className="br-d" /> Can Trust.
          </span>
        </h2>

        {/* Column 1: Inductive Proximity Sensors Image */}
        <div className="intro-frame intro-frame--sensor">
          <img
            src="/assets/asset_9.jpg"
            alt="Teknic Euchner Inductive Proximity Sensors"
            className="intro-img-sensor"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Column 2: Industrial Machinery Robotic Cell Image */}
        <div className="intro-frame intro-frame--machinery">
          <img
            src="/assets/asset_10.jpg"
            alt="Demanding Industrial Automation and Robotic Machinery"
            className="intro-img-machinery"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Column 3: Narrative Copy & Brand Call To Action */}
        <div className="intro-text-content">
          <p className="intro-paragraph">
            Since 1989, Teknic Euchner has been building its expertise <br className="br-d" />around one simple principle:{' '}
            <span className="intro-highlight-red">
              industrial components should <br className="br-d" />perform reliably, every time they are called upon.
            </span>
          </p>

          <p className="intro-paragraph">
            With the engineering know-how of Euchner Germany and <br className="br-d" />decades of manufacturing experience in India, we develop <br className="br-d" />control gear and sensing solutions for demanding industrial <br className="br-d" />applications.
          </p>

          <p className="intro-paragraph">
            From machine positioning and object detection to switching <br className="br-d" />and safety-related applications, our products are built to <br className="br-d" />deliver consistent performance where it matters most.
          </p>

          <div className="intro-cta-wrapper">
            <button
              type="button"
              className="btn-discover-teknic btn-flip"
              id="btnDiscoverTeknic"
              onClick={() => onOpenInfo('about')}
            >
              <span className="btn-flip-viewport">
                <span className="btn-flip-track">
                  <span className="btn-flip-line btn-flip-line--default">DISCOVER TEKNIC EUCHNER</span>
                  <span className="btn-flip-line btn-flip-line--hover">SEE OUR STORY</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
