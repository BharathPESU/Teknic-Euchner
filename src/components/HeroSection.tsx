import React, { useRef, useEffect } from 'react';
import { ModalType } from '../types';

interface HeroSectionProps {
  onOpenModal: (type: ModalType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const viewportRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay video with browser policy resilience
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      const attemptPlay = () => {
        if (!video) return;
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay policy prevented playback, listen for user engagement to unlock
            const unlockPlay = () => {
              if (video) {
                video.muted = true;
                video.play().catch(() => {});
              }
              window.removeEventListener('click', unlockPlay);
              window.removeEventListener('touchstart', unlockPlay);
              window.removeEventListener('scroll', unlockPlay);
              window.removeEventListener('keydown', unlockPlay);
            };
            window.addEventListener('click', unlockPlay, { once: true, passive: true });
            window.addEventListener('touchstart', unlockPlay, { once: true, passive: true });
            window.addEventListener('scroll', unlockPlay, { once: true, passive: true });
            window.addEventListener('keydown', unlockPlay, { once: true, passive: true });
          });
        }
      };

      if (video.readyState >= 2) {
        attemptPlay();
      } else {
        video.addEventListener('loadeddata', attemptPlay, { once: true });
        video.addEventListener('canplay', attemptPlay, { once: true });
      }

      attemptPlay();
    }

    // Mouse spotlight tracking
    const viewport = viewportRef.current;
    const spotlight = spotlightRef.current;
    if (!viewport || !spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = viewport.getBoundingClientRect();
      const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(2);
      const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(2);
      spotlight.style.setProperty('--spot-x', `${x}%`);
      spotlight.style.setProperty('--spot-y', `${y}%`);
    };

    viewport.addEventListener('mousemove', handleMouseMove);
    return () => viewport.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="hero-viewport" id="heroViewport" ref={viewportRef}>
      {/* Background Video Container */}
      <div className="hero-video-container" id="heroVideoContainer">
        <video
          ref={videoRef}
          className="hero-video-el"
          id="heroVideoEl"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/asset_5.jpg"
          tabIndex={-1}
          aria-hidden="true"
        >
          <source src="/assets/videoplayback.mp4" type="video/mp4" />
          <source src="/assets/teknic_factory_1080p.mp4" type="video/mp4" />
          <source src="/assets/asset_6.webm" type="video/webm" />
          <source src="/assets/asset_7.mp4" type="video/mp4" />
        </video>
        {/* Atmospheric Factory Overlay */}
        <div className="hero-video-overlay"></div>
        <div id="heroSpotlight" ref={spotlightRef} aria-hidden="true"></div>
      </div>

      {/* 9 GRIDS / BOXES ARCHITECTURAL SYSTEM (3 Rows x 3 Columns) */}
      <div className="hero-grid-9" id="heroGrid9">
        {/* Box 1 (Row 1, Column 1): Top-left architectural bay */}
        <div className="grid-box box-1" id="gridBox1"></div>

        {/* Box 2 (Row 1, Column 2): Top-center architectural bay */}
        <div className="grid-box box-2" id="gridBox2"></div>

        {/* Box 3 (Row 1, Column 3): Top-right architectural bay */}
        <div className="grid-box box-3" id="gridBox3"></div>

        {/* Box 4 (Row 2, Column 1): Hero Main Text & CTA Action */}
        <div className="grid-box box-4" id="gridBox4">
          <div className="hero-left-pane">
            <h1 className="hero-title">
              Precision That Keeps<br />
              Industry Moving.
            </h1>

            <p className="hero-subtitle">
              Engineered sensing, switching and control solutions for machines that demand reliability.
            </p>

            <button
              className="btn-explore btn-flip"
              id="btnExplore"
              onClick={() => onOpenModal('products')}
            >
              <span className="btn-flip-viewport">
                <span className="btn-flip-track">
                  <span className="btn-flip-line btn-flip-line--default">EXPLORE OUR PRODUCTS</span>
                  <span className="btn-flip-line btn-flip-line--hover">VIEW CATALOG</span>
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Box 5 (Row 2, Column 2): Open Center Bay Viewing Background Manufacturing Video */}
        <div className="grid-box box-5" id="gridBox5" aria-hidden="true"></div>

        {/* Box 6 (Row 2, Column 3): 6TH BOX CONTAINING CNC MACHINE SPECIALIST IMAGE */}
        <div className="grid-box box-6" id="gridBox6">
          <div className="cnc-frame" id="cncFrame">
            <img
              src="/assets/asset_8.jpg"
              alt="Precision CNC Machining - Teknic Euchner"
              className="cnc-img"
              id="cncImg"
              loading="eager"
            />
          </div>
        </div>

        {/* Box 7 (Row 3, Column 1): Bottom-left architectural bay */}
        <div className="grid-box box-7" id="gridBox7"></div>

        {/* Box 8 (Row 3, Column 2): Bottom-center bay */}
        <div className="grid-box box-8" id="gridBox8"></div>

        {/* Box 9 (Row 3, Column 3): Bottom-right architectural bay */}
        <div className="grid-box box-9" id="gridBox9"></div>
      </div>
    </main>
  );
};
