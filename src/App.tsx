import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovingTicker from './components/MovingTicker';
import ServicesSection from './components/ServicesSection';
import ProcessSimulator from './components/ProcessSimulator';
import ImpactAndProfile from './components/ImpactAndProfile';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServiceDetailPage from './components/ServiceDetailPage';
import { SERVICES } from './data/saafiData';

function getServiceIdFromHash(): string | null {
  const hash = window.location.hash;
  if (hash.startsWith('#/service/')) {
    const id = hash.replace('#/service/', '');
    if (SERVICES.some((s) => s.id === id)) {
      return id;
    }
  }
  return null;
}

export default function App() {
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(() =>
    getServiceIdFromHash(),
  );
  const bgIframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveServiceId(getServiceIdFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Forward pointer movement to same-origin 3D background iframe so parallax remains interactive
  useEffect(() => {
    const forwardPointer = (clientX: number, clientY: number) => {
      try {
        const win = bgIframeRef.current?.contentWindow;
        if (win) {
          win.dispatchEvent(new MouseEvent('mousemove', { clientX, clientY }));
        }
      } catch {
        // Ignore cross-origin or unloading frame access
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      forwardPointer(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateHome = (sectionId?: string) => {
    if (activeServiceId !== null) {
      window.location.hash = sectionId ? `#${sectionId}` : '#top';
      setActiveServiceId(null);
      setTimeout(() => {
        if (sectionId && sectionId !== 'top') {
          scrollToSection(sectionId);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 40);
      return;
    }

    if (sectionId && sectionId !== 'top') {
      scrollToSection(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openServicePage = (serviceId: string) => {
    window.location.hash = `#/service/${serviceId}`;
    setActiveServiceId(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestProposalForService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    navigateHome('contact');
  };

  return (
    <div className="relative min-h-screen bg-transparent text-[#FAF7F2] antialiased">
      {/* Full-screen fixed 3D Molecular Gas Atmosphere background (z-index: 1) */}
      <iframe
        ref={bgIframeRef}
        src="/assets/aistudio/3d_molecular_gas_atmosphere_34a24eed.html"
        title="3D Molecular Gas Atmosphere Background"
        aria-hidden="true"
        className="fixed inset-0 h-screen w-screen border-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Website Content / UI layered cleanly on top (z-index: 10) */}
      <div className="relative min-h-screen bg-transparent" style={{ zIndex: 10 }}>
        <Navbar
          onNavigateHome={navigateHome}
          onRequestProposal={() => navigateHome('contact')}
        />

        {activeServiceId ? (
          <main>
            <ServiceDetailPage
              serviceId={activeServiceId}
              onSelectService={openServicePage}
              onBackHome={() => navigateHome('services')}
              onRequestProposal={handleRequestProposalForService}
            />
          </main>
        ) : (
          <main>
            <Hero onExploreServices={() => scrollToSection('services')} />
            <MovingTicker
              onSelectService={openServicePage}
              onNavigateSection={(id) => navigateHome(id)}
            />
            <ServicesSection onOpenService={openServicePage} />
            <ProcessSimulator />
            <ImpactAndProfile />
            <ContactSection preselectedService={selectedService} />
          </main>
        )}

        <Footer onNavigateHome={navigateHome} />
      </div>
    </div>
  );
}
