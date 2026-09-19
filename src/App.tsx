import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { JourneySection } from './components/JourneySection';
import { ProductsSection } from './components/ProductsSection';
import { WhyTeknicSection } from './components/WhyTeknicSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { QualitySection } from './components/QualitySection';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { Toast } from './components/Toast';
import { PRODUCTS, SECTIONS, getProductHTML } from './data/siteData';
import { ModalType, InfoModalState } from './types';

export function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [infoState, setInfoState] = useState<InfoModalState | null>(null);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll progress and header state
  useEffect(() => {
    const progressBar = document.getElementById('scrollProgressBar');
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight || 1;
      const pct = Math.min(100, Math.max(0, (scrollTop / height) * 100));
      if (progressBar) {
        progressBar.style.width = pct + '%';
      }
      setScrolled(scrollTop > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Scroll reveal animation observer
  useEffect(() => {
    const revealTargets = [
      '#sectionIntro',
      '#our-journey',
      '#products',
      '#why-teknic-euchner',
      '#applications',
      '#quality',
      '#connect',
      '#siteFooter',
    ];
    const revealEls = revealTargets
      .map((sel) => document.querySelector(sel))
      .filter(Boolean) as HTMLElement[];

    revealEls.forEach((el) => el.classList.add('reveal-on-scroll'));

    if ('IntersectionObserver' in window && revealEls.length) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
      return () => revealObserver.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);

  // Button liquid fill & click ripple interaction
  useEffect(() => {
    const groups = [
      [
        'has-fx--solid',
        '.btn-talk-expert, .btn-explore, .btn-discover-teknic, .products-intro-btn, .quality-btn, .connect-btn--dealer, .connect-btn--products, .btn-submit',
      ],
      ['has-fx--ghost', '.connect-btn--ghost'],
      ['has-fx--pc', '.pc-btn'],
      ['has-fx--inquire', '.btn-card-inquire'],
    ];
    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    groups.forEach((g) => {
      document.querySelectorAll(g[1]).forEach((btnEl) => {
        const btn = btnEl as HTMLElement;
        if (btn.querySelector('.btn-fx')) return;
        btn.classList.add('has-fx', g[0]);
        const fx = document.createElement('span');
        fx.className = 'btn-fx';
        fx.setAttribute('aria-hidden', 'true');
        fx.innerHTML = '<span class="btn-fx-fill"></span><span class="btn-fx-sheen"></span>';
        btn.insertBefore(fx, btn.firstChild);

        const setOrigin = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          if (!r.width || !r.height) return;
          btn.style.setProperty('--fx-x', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
          btn.style.setProperty('--fx-y', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
        };
        btn.addEventListener('pointerenter', setOrigin as any);
        btn.addEventListener('pointerleave', setOrigin as any);
        btn.addEventListener('focus', () => {
          if (btn.matches(':focus-visible')) {
            btn.style.setProperty('--fx-x', '50%');
            btn.style.setProperty('--fx-y', '50%');
          }
        });
        btn.addEventListener('pointerdown', ((e: PointerEvent) => {
          if (reduce || (e.button != null && e.button !== 0)) return;
          const r = btn.getBoundingClientRect();
          const d = Math.max(r.width, r.height) * 2.4;
          const rip = document.createElement('span');
          rip.className = 'btn-fx-ripple';
          rip.style.width = d + 'px';
          rip.style.height = d + 'px';
          rip.style.left = e.clientX - r.left + 'px';
          rip.style.top = e.clientY - r.top + 'px';
          fx.appendChild(rip);
          rip.addEventListener('animationend', () => {
            rip.remove();
          });
        }) as any);
      });
    });
  }, [activeModal]);

  // 3D tilt & glare on cards and images
  useEffect(() => {
    function attachTilt(el: HTMLElement, isImg: boolean) {
      if (el.querySelector('.pc-glare') || el.nextElementSibling?.classList.contains('pc-glare')) {
        return;
      }
      const glare = document.createElement('div');
      glare.className = 'pc-glare';
      glare.setAttribute('aria-hidden', 'true');
      if (isImg && el.parentNode) {
        glare.classList.add('pc-glare--img');
        el.parentNode.insertBefore(glare, el.nextSibling);
      } else {
        el.appendChild(glare);
      }

      function syncGlareBox() {
        if (!isImg) return;
        glare.style.left = el.offsetLeft + 'px';
        glare.style.top = el.offsetTop + 'px';
        glare.style.width = el.offsetWidth + 'px';
        glare.style.height = el.offsetHeight + 'px';
      }

      function handleMove(e: MouseEvent) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const rotateY = ((x - midX) / midX) * 5;
        const rotateX = -((y - midY) / midY) * 5;
        const t =
          'perspective(1000px) rotateX(' +
          rotateX.toFixed(2) +
          'deg) rotateY(' +
          rotateY.toFixed(2) +
          'deg) translateY(-5px)';
        el.style.transform = t;
        if (isImg) glare.style.transform = t;
        glare.style.setProperty('--gx', (x / rect.width) * 100 + '%');
        glare.style.setProperty('--gy', (y / rect.height) * 100 + '%');
      }

      el.addEventListener('mouseenter', () => {
        syncGlareBox();
        el.classList.add('pc-tilting');
        if (isImg) glare.classList.add('pc-tilting');
      });
      el.addEventListener('mousemove', handleMove);
      el.addEventListener('mouseleave', () => {
        el.classList.remove('pc-tilting');
        el.style.transform = '';
        if (isImg) {
          glare.classList.remove('pc-tilting');
          glare.style.transform = '';
        }
      });
    }

    document.querySelectorAll('.pc').forEach((card) => attachTilt(card as HTMLElement, false));
    ['.cnc-frame', '.intro-frame', '.why-photo', '.app-photo'].forEach((sel) => {
      document.querySelectorAll(sel).forEach((frame) => {
        const f = frame as HTMLElement;
        f.classList.add('tilt-img');
        attachTilt(f, false);
      });
    });
    document.querySelectorAll('.connect-solution-img').forEach((img) => {
      const i = img as HTMLElement;
      i.classList.add('tilt-img');
      attachTilt(i, true);
    });
  }, []);

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleOpenInfo = (key: string) => {
    if (PRODUCTS[key]) {
      const prod = PRODUCTS[key];
      setInfoState({
        title: key,
        htmlContent: getProductHTML(key, prod),
        productKey: key,
      });
      setActiveModal('info');
    } else if (SECTIONS[key]) {
      const sec = SECTIONS[key];
      setInfoState({
        title: sec.title,
        htmlContent: sec.html(),
      });
      setActiveModal('info');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div id="scrollProgressBar" aria-hidden="true"></div>

      {/* Main Navigation Header */}
      <Header
        onOpenModal={handleOpenModal}
        onOpenInfo={handleOpenInfo}
        scrolled={scrolled}
      />

      {/* Hero Section with Architectural Grid, Video & CNC bay */}
      <HeroSection onOpenModal={handleOpenModal} />

      {/* Section 2: Introduction to Teknic Euchner */}
      <IntroSection onOpenInfo={handleOpenInfo} />

      {/* Section 3: Our Journey & Industrial Milestones */}
      <JourneySection />

      {/* Section 4: Engineered Product Range */}
      <ProductsSection
        onOpenModal={handleOpenModal}
        onOpenInfo={handleOpenInfo}
      />

      {/* Section 5: Why Teknic Euchner */}
      <WhyTeknicSection />

      {/* Section 6: Industrial Applications */}
      <ApplicationsSection />

      {/* Section 7: Commitment to Quality & Testing */}
      <QualitySection onOpenInfo={handleOpenInfo} />

      {/* Section 8: Connect, Authorised Dealers & Solutions */}
      <ConnectSection onOpenModal={handleOpenModal} />

      {/* Global Footer */}
      <Footer
        onOpenModal={handleOpenModal}
        onOpenInfo={handleOpenInfo}
      />

      {/* Interactive Modals System */}
      <Modals
        activeModal={activeModal}
        onCloseModal={handleCloseModal}
        onOpenModal={handleOpenModal}
        onOpenInfo={handleOpenInfo}
        infoState={infoState}
        selectedProductForQuote={selectedProductForQuote}
        setSelectedProductForQuote={setSelectedProductForQuote}
        onShowToast={showToast}
      />

      {/* Toast Alert Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </>
  );
}

export default App;
