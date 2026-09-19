import React, { useRef, useEffect } from 'react';
import { ModalType } from '../types';

interface ConnectSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ onOpenModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const play = () => {
      video.play().catch(() => {});
    };
    play();

    const kick = () => {
      if (video.paused) play();
    };

    ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach((ev) => {
      window.addEventListener(ev, kick, { passive: true, once: true });
    });

    if ('IntersectionObserver' in window && video.parentElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              play();
            } else {
              video.pause();
            }
          });
        },
        { rootMargin: '200px 0px' }
      );
      observer.observe(video.parentElement);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="section-connect" id="connect" aria-label="Find a dealer or talk to our team">
      <div className="connect-canvas">
        <div className="connect-dealer">
          <h2 className="connect-headline">
            Looking for Teknic<br className="br-d" /> Euchner Products?
          </h2>

          <p className="connect-text">
            Find an authorised dealer near you and get connected with the right product<br className="br-d" /> for your application.
          </p>

          <button
            type="button"
            className="connect-btn connect-btn--dealer btn-flip"
            id="btnFindDealer"
            onClick={() => onOpenModal('dealers')}
          >
            <span className="btn-flip-viewport">
              <span className="btn-flip-track">
                <span className="btn-flip-line btn-flip-line--default">Find a dealer</span>
                <span className="btn-flip-line btn-flip-line--hover">Get Started</span>
              </span>
            </span>
          </button>

          <div className="connect-globe" aria-hidden="true">
            <video
              ref={videoRef}
              className="connect-globe-video"
              id="connectGlobeVideo"
              poster="/assets/asset_29.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              tabIndex={-1}
            >
              <source src="/assets/globe.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="connect-solution">
          <h2 className="connect-solution-title">
            Let's Find the Right Solution<br className="br-d" /> for Your Application.
          </h2>

          <p className="connect-text">
            Whether you're designing a new machine, upgrading an existing system or<br className="br-d" /> looking for a reliable replacement, our team can help you identify the right<br className="br-d" /> control gear for your requirements.
          </p>

          <div className="connect-solution-actions">
            <button
              type="button"
              className="connect-btn connect-btn--ghost btn-flip"
              id="btnTalkTeam"
              onClick={() => onOpenModal('expert')}
            >
              <span className="btn-flip-viewport">
                <span className="btn-flip-track">
                  <span className="btn-flip-line btn-flip-line--default">Talk to our team</span>
                  <span className="btn-flip-line btn-flip-line--hover">Let's Talk</span>
                </span>
              </span>
            </button>
            <button
              type="button"
              className="connect-btn connect-btn--products btn-flip"
              id="btnExploreSolutions"
              onClick={() => onOpenModal('products')}
            >
              <span className="btn-flip-viewport">
                <span className="btn-flip-track">
                  <span className="btn-flip-line btn-flip-line--default">Explore our products</span>
                  <span className="btn-flip-line btn-flip-line--hover">See Our Range</span>
                </span>
              </span>
            </button>
          </div>

          <img
            className="connect-solution-img"
            src="/assets/asset_30.png"
            alt="Teknic NK1WO-920-M limit switch"
            width={500}
            height={500}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};
