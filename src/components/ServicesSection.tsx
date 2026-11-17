import { useState } from 'react';
import { ArrowRight, Recycle, FlaskConical, Flame } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/saafiData';

interface ServicesSectionProps {
  onOpenService: (serviceId: string) => void;
}

const SERVICE_CARD_MEDIA: Record<
  string,
  { imagePath: string; imageAlt: string }
> = {
  'waste-segregation': {
    imagePath: COMPANY_INFO.segregationImagePath,
    imageAlt: 'Automated industrial conveyor sorting plastic polymers and tyre streams',
  },
  'chemical-recycling': {
    imagePath: COMPANY_INFO.plantRenderPath,
    imageAlt: 'Patented continuous and batch pyrolysis plant 3D engineering layout',
  },
  'fuel-upgradation': {
    imagePath: COMPANY_INFO.fuelUpgradationImagePath,
    imageAlt: 'Upgraded golden pyrolysis oil droplet showing catalytic molecular purification',
  },
};

export default function ServicesSection({ onOpenService }: ServicesSectionProps) {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const renderIcon = (serviceId: string) => {
    if (serviceId === 'waste-segregation') {
      return <Recycle className="h-3.5 w-3.5 text-white" aria-hidden="true" />;
    }
    if (serviceId === 'chemical-recycling') {
      return <FlaskConical className="h-3.5 w-3.5 text-white" aria-hidden="true" />;
    }
    return <Flame className="h-3.5 w-3.5 text-white" aria-hidden="true" />;
  };

  return (
    <section id="services" className="bg-transparent py-20 text-[#FAF7F2] lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
              What We Do
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl [text-wrap:balance] drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)]">
              Turning waste into energy and value.
            </h2>
            <p className="mt-3 text-sm font-medium text-[#E7D8D0] sm:text-base">
              Plastic and tyre pyrolysis lines (5 TPD-30 TPD)
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenService(SERVICES[0].id)}
            className="inline-flex items-center gap-1.5 self-start whitespace-nowrap text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300 lg:self-auto cursor-pointer"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* 2-Column Editorial Glass Card Grid allowing 3D molecular background to remain visible */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
          {SERVICES.map((service, idx) => {
            const media = SERVICE_CARD_MEDIA[service.id];
            const imgFailed = failedImages[service.id];

            return (
              <article
                key={service.id}
                onClick={() => onOpenService(service.id)}
                className={`group cursor-pointer overflow-hidden rounded-xl border border-amber-500/20 bg-[#160703]/78 backdrop-blur-md shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:border-amber-400/50 ${
                  idx === 1 ? 'md:mt-10' : ''
                }`}
              >
                {/* Card Image Top */}
                <div className="relative h-60 w-full overflow-hidden bg-[#1D0806]">
                  {!imgFailed && media?.imagePath ? (
                    <img
                      src={media.imagePath}
                      alt={media.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [service.id]: true }))
                      }
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2C0E0A] to-[#160605]">
                      <Flame className="h-12 w-12 text-amber-500/40" />
                    </div>
                  )}

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  />

                  <div className="absolute bottom-4 left-5 flex items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600/90 shadow-md backdrop-blur-sm">
                      {renderIcon(service.id)}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="mt-1 text-xs font-semibold text-amber-400">{service.subtitle}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-[#E7D8D0]">{service.summary}</p>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 transition-colors group-hover:text-amber-300">
                      Learn More
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
