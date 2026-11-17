import { useState } from 'react';
import { Check } from 'lucide-react';
import { COMPANY_INFO, LEADERSHIP } from '../data/saafiData';

const STAKEHOLDER_ADVANTAGES = [
  {
    title: '5–30 TPD Batch & Continuous Plants',
    detail:
      'Proven engineering across modular 5–30 TPD continuous and batch plastic pyrolysis lines as well as tyre pyrolysis installations with automated feeding and slag discharge.',
  },
  {
    title: 'Patented Reactor & Process Designs',
    detail:
      'Proprietary reactor geometry, micro-negative pressure thermal zones, and fractionating tower blueprints engineered for consistent hydrocarbon yields.',
  },
  {
    title: 'Stepwise Fuel Upgradation',
    detail:
      'Catalytic filtration, dealcoholization, and proprietary additive dosing that polish raw pyrolysis condensate into low-moisture, high-GCV industrial fuels.',
  },
  {
    title: 'Grassroots Waste Recovery & Circularity',
    detail:
      'Connecting coastal and municipal plastic collection drives directly with optical color-sorting and chemical recycling models to keep polymers out of oceans and landfills.',
  },
];

export default function ImpactAndProfile() {
  const [logoFailed, setLogoFailed] = useState(false);
  const [failedLeaderIds, setFailedLeaderIds] = useState<Record<string, boolean>>({});

  return (
    <section
      id="leadership"
      className="bg-transparent py-20 text-[#FAF7F2] lg:py-28 border-b border-amber-500/20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
        {/* Our Leadership Section */}
        <div>
          <div className="flex flex-col justify-between gap-4 border-b border-amber-500/20 pb-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
                Executive Team
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)]">
                Our Leadership
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#E7D8D0]">
              Combining technical research, sustainability governance, and commercial execution to scale pyrolysis and chemical recycling across India.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
            {LEADERSHIP.map((leader) => {
              const showPhoto = Boolean(leader.imagePath) && !failedLeaderIds[leader.id];
              if (showPhoto) {
                return (
                  <article
                    key={leader.id}
                    className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 overflow-hidden rounded-xl border border-amber-500/20 bg-[#160703]/78 backdrop-blur-md shadow-lg items-stretch"
                  >
                    <div className="sm:col-span-5 relative min-h-[280px] sm:min-h-[320px] bg-[#163F7A] border-b sm:border-b-0 sm:border-r border-amber-500/20">
                      <img
                        src={leader.imagePath}
                        alt={`${leader.name}, ${leader.role}`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedLeaderIds((prev) => ({ ...prev, [leader.id]: true }))
                        }
                        className="h-full w-full object-cover object-top"
                      />
                    </div>

                    <div className="sm:col-span-7 flex flex-col justify-center p-6 sm:p-8">
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                        {leader.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-amber-400">{leader.role}</p>
                      <p className="mt-4 text-sm leading-relaxed text-[#E7D8D0]">{leader.bio}</p>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={leader.id}
                  className="lg:col-span-5 flex flex-col justify-center rounded-xl border border-amber-500/20 bg-[#160703]/78 backdrop-blur-md p-6 sm:p-8 shadow-lg"
                >
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-amber-400">{leader.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#E7D8D0]">{leader.bio}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Corporate Identity & Stakeholder Impact Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Corporate Identity & Transparent PNG Brand Showcase */}
          <div className="lg:col-span-5 rounded-xl border border-amber-500/20 bg-[#160703]/78 backdrop-blur-md overflow-hidden shadow-lg">
            <div className="bg-white px-8 py-10 flex items-center justify-center border-b border-amber-500/20">
              {!logoFailed ? (
                <img
                  src={COMPANY_INFO.logoPath}
                  alt="Saafi Renewables Pvt Ltd official logo"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoFailed(true)}
                  className="max-h-60 w-auto object-contain"
                />
              ) : (
                <div className="py-12 text-center">
                  <p className="font-display text-3xl font-bold text-amber-600">Saafi</p>
                  <p className="mt-1 font-display text-lg font-medium text-emerald-700">
                    Renewables
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold text-amber-400">{COMPANY_INFO.tagline}</p>
              <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-white">
                {COMPANY_INFO.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#E7D8D0]">
                {COMPANY_INFO.description}
              </p>

              <dl className="mt-6 space-y-3 border-t border-amber-500/20 pt-5 text-sm">
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs font-medium text-[#D9BFB0]">Registered Office</dt>
                  <dd className="text-[#FAF7F2]">{COMPANY_INFO.address}</dd>
                </div>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs font-medium text-[#D9BFB0]">Official Email</dt>
                  <dd>
                    <a
                      href={COMPANY_INFO.emailHref}
                      className="font-display font-medium text-white hover:text-amber-400 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-xs font-medium text-[#D9BFB0]">Direct Engineering Desk</dt>
                  <dd className="font-display font-medium text-white tabular-nums">
                    {COMPANY_INFO.phoneDisplay}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Stakeholder Value */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#84B873]">
              Stakeholder Value
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl [text-wrap:balance] drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)]">
              Engineered for Industrial Reliability and Circular Accountability
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#E7D8D0] sm:text-base">
              From color-sorted polymer recovery to 5–30 TPD batch and continuous thermal cracking plants, every installation is structured around measurable fuel quality and environmental stewardship.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {STAKEHOLDER_ADVANTAGES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-amber-500/20 bg-[#160703]/78 backdrop-blur-md p-6 shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1C2E18]/90 text-[#84B873] border border-[#84B873]/40">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-display text-base font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[#E7D8D0]">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
