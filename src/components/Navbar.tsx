import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/saafiData';

interface NavbarProps {
  onNavigateHome: (sectionId?: string) => void;
  onRequestProposal: () => void;
}

const NAV_LINKS = [
  { label: 'Services', sectionId: 'services' },
  { label: 'Process', sectionId: 'process' },
  { label: 'Leadership', sectionId: 'leadership' },
  { label: 'Contact', sectionId: 'contact' },
];

export default function Navbar({ onNavigateHome, onRequestProposal }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    setMobileOpen(false);
    onNavigateHome(sectionId);
  };

  const handleProposalClick = () => {
    setMobileOpen(false);
    onRequestProposal();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#190806]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-3 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onNavigateHome('top');
          }}
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md"
        >
          {!logoError ? (
            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white p-1 flex items-center justify-center">
              <img
                src={COMPANY_INFO.logoPath}
                alt="Saafi Renewables Pvt Ltd logo"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div className="h-10 w-10 shrink-0 rounded-lg bg-[#2B0E0A] border border-amber-500/30 flex items-center justify-center font-display text-sm font-bold text-amber-400">
              SR
            </div>
          )}
          <span className="font-display text-lg font-semibold tracking-tight text-[#FAF7F2]">
            {COMPANY_INFO.name}
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#EBDCD5]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.sectionId);
              }}
              className="whitespace-nowrap shrink-0 py-1 text-[#EBDCD5] transition-colors duration-150 hover:text-white hover:underline hover:underline-offset-8 hover:decoration-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleProposalClick}
            className="hidden md:inline-flex items-center justify-center whitespace-nowrap shrink-0 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#190806] cursor-pointer"
          >
            Request Proposal
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-lg border border-amber-200/20 text-[#FAF7F2] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-amber-500/20 bg-[#140605] px-6 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.sectionId}
                href={`#${link.sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.sectionId);
                }}
                className="flex min-h-[44px] items-center rounded-md px-2 text-base font-medium text-[#EBDCD5] hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleProposalClick}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-400 cursor-pointer"
            >
              Request Proposal
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
