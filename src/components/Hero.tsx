import { ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, STAKEHOLDER_METRICS } from '../data/saafiData';

interface HeroProps {
  onExploreServices: () => void;
}

export default function Hero({ onExploreServices }: HeroProps) {
  return (
    <section id="top" className="relative bg-transparent text-[#FAF7F2]">
      {/* Main Hero Stage layered cleanly over the z-index:1 3D molecular background */}
      <div className="relative overflow-hidden border-b border-amber-500/20 min-h-[560px] flex items-center">
        {/* Soft localized readability glow on the left only so 3D molecules shine clearly across the viewport */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_24%_48%,rgba(14,5,2,0.72)_0%,rgba(14,5,2,0.28)_50%,transparent_78%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-xl lg:max-w-2xl">
            <h1
              className="font-display font-bold tracking-tight text-white [text-wrap:balance] drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]"
              style={{ fontSize: 'clamp(2.75rem, 5.2vw, 4.5rem)', lineHeight: 1.02 }}
            >
              <span className="block">Nothing</span>
              <span className="block">Wasted.</span>
              <span className="block">Everything</span>
              <span className="block text-[#84B873]">Valued.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#F5EDE7] sm:text-lg drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {COMPANY_INFO.description}
            </p>

            {/* Original Hero Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-150 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120603] cursor-pointer"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={COMPANY_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 rounded-lg border border-amber-300/35 bg-[#1B0904]/75 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors duration-150 hover:border-amber-400 hover:bg-[#290E07]/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <MessageCircle className="h-4 w-4 text-[#84B873]" aria-hidden="true" />
                WhatsApp Engineering Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Operational Benchmark Strip */}
      <div className="border-b border-amber-500/20 bg-[#140703]/75 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-amber-500/15 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {STAKEHOLDER_METRICS.map((metric) => (
            <div key={metric.label} className="px-6 py-6 lg:px-8">
              <p className="text-xs font-medium text-[#D9BFB0]">{metric.label}</p>
              <p className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-amber-400 tabular-nums">
                {metric.value}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#E7D8D0]/85">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
