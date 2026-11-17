const TICKER_ITEMS = [
  { label: 'Waste Segregation Services', serviceId: 'waste-segregation' },
  { label: 'Chemical Recycling Models', serviceId: 'chemical-recycling' },
  { label: 'Fuel Upgradation', serviceId: 'fuel-upgradation' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Nothing Wasted. Everything Valued', href: '#top' },
];

const REPEATED_SET = [...TICKER_ITEMS, ...TICKER_ITEMS];

interface MovingTickerProps {
  onSelectService: (serviceId: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function MovingTicker({ onSelectService, onNavigateSection }: MovingTickerProps) {
  return (
    <div
      aria-label="Services and Motto Ticker"
      className="md:sticky md:top-[69px] z-30 border-b border-amber-500/25 bg-[#120504] text-[#FAF7F2] marquee-wrapper overflow-hidden"
    >
      <div className="animate-marquee items-center py-2.5">
        {[0, 1].map((dupIdx) => (
          <div
            key={dupIdx}
            className="flex items-center gap-8 pr-8"
            aria-hidden={dupIdx === 1}
          >
            {REPEATED_SET.map((item, idx) => (
              <div key={`${dupIdx}-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
                <button
                  type="button"
                  tabIndex={dupIdx === 1 ? -1 : 0}
                  onClick={() => {
                    if (item.serviceId) {
                      onSelectService(item.serviceId);
                    } else if (item.href) {
                      onNavigateSection(item.href.replace('#', ''));
                    }
                  }}
                  className="font-display text-xs font-medium tracking-wide text-[#F3EAE4] transition-colors hover:text-amber-400 cursor-pointer"
                >
                  {item.label}
                </button>
                <span aria-hidden="true" className="text-amber-500/50">
                  ·
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
