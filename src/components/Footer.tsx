import { useState } from 'react';
import { COMPANY_INFO } from '../data/saafiData';

interface FooterProps {
  onNavigateHome: (sectionId?: string) => void;
}

export default function Footer({ onNavigateHome }: FooterProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="border-t border-amber-500/20 bg-[#100402]/85 backdrop-blur-md text-[#E7D8D0]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column with crisp white container for transparent PNG logo legibility */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              {!logoError ? (
                <div className="flex h-16 sm:h-20 shrink-0 items-center justify-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm">
                  <img
                    src={COMPANY_INFO.logoPath}
                    alt="Saafi Renewables Pvt Ltd"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ) : null}
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  {COMPANY_INFO.name}
                </p>
                <p className="text-xs font-semibold text-amber-400">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#D9BFB0]">
              {COMPANY_INFO.address}
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-white">Navigation</p>
            <ul className="mt-3 space-y-2 text-xs text-[#E7D8D0]">
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateHome('services');
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Core Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateHome('process');
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Process &amp; Oil Verification
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateHome('leadership');
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Our Leadership
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateHome('contact');
                  }}
                  className="hover:text-amber-400 transition-colors"
                >
                  Request Proposal
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-white">Direct Contact</p>
            <ul className="mt-3 space-y-2 text-xs text-[#E7D8D0]">
              <li>
                Email:{' '}
                <a
                  href={COMPANY_INFO.emailHref}
                  className="font-display font-medium text-white hover:text-amber-400 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                Phone:{' '}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-display font-medium text-white hover:text-amber-400 tabular-nums transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-[#84B873] hover:underline tabular-nums"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="pt-1 text-[#D9BFB0]/85">{COMPANY_INFO.workingHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-amber-500/20 pt-6 text-xs text-[#D9BFB0]/80 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <p>Ulwe, Navi Mumbai, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
