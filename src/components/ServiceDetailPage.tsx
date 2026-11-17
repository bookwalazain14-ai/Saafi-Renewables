import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Maximize2, X, Flame } from 'lucide-react';
import {
  COMPANY_INFO,
  OIL_ANALYSIS_PARAMETERS,
  PLANT_SCHEMATICS,
  REACTOR_CONFIGURATIONS,
  SERVICES,
} from '../data/saafiData';

interface ServiceDetailPageProps {
  serviceId: string;
  onSelectService: (serviceId: string) => void;
  onBackHome: () => void;
  onRequestProposal: (serviceTitle: string) => void;
}

export default function ServiceDetailPage({
  serviceId,
  onSelectService,
  onBackHome,
  onRequestProposal,
}: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  const [activeSchematicIdx, setActiveSchematicIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedConfigId, setSelectedConfigId] = useState(REACTOR_CONFIGURATIONS[0].id);

  const activeSchematic = PLANT_SCHEMATICS[activeSchematicIdx];
  const config =
    REACTOR_CONFIGURATIONS.find((item) => item.id === selectedConfigId) ||
    REACTOR_CONFIGURATIONS[0];

  const oilTonnesPerDay = ((config.capacityTpd * config.oilYieldPct) / 100).toFixed(1);
  const oilLitersPerDay = Math.round(Number(oilTonnesPerDay) * 1202).toLocaleString('en-IN');
  const syngasTonnesPerDay = ((config.capacityTpd * config.syngasPct) / 100).toFixed(1);
  const charTonnesPerDay = ((config.capacityTpd * config.charPct) / 100).toFixed(1);

  return (
    <div className="min-h-screen bg-transparent text-[#FAF7F2]">
      {/* Top Breadcrumb & Quick Service Switcher */}
      <div className="border-b border-amber-500/20 bg-[#140603]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-amber-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </button>

          <div className="flex flex-wrap items-center gap-1 rounded-lg bg-[#0E0402]/80 p-1 border border-amber-500/20">
            {SERVICES.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectService(item.id)}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  item.id === service.id
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-[#E7D8D0] hover:text-white'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Hero Banner layered cleanly over 3D molecular background */}
      <section className="relative overflow-hidden border-b border-amber-500/20 bg-transparent py-16 text-[#FAF7F2] lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_28%_48%,rgba(14,5,2,0.72)_0%,rgba(14,5,2,0.28)_55%,transparent_80%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            {service.subtitle && (
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-amber-400">
                {service.subtitle}
              </p>
            )}
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl [text-wrap:balance] drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              {service.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#EFE5DF] sm:text-lg drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
              {service.summary}
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={() => onRequestProposal(service.title)}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 cursor-pointer"
              >
                Request Proposal for {service.title}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Technical Details per Service */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20 space-y-12">
        {service.id === 'waste-segregation' && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6 overflow-hidden rounded-xl border border-amber-500/20 bg-[#160703]/80 backdrop-blur-md shadow-lg">
              <img
                src={COMPANY_INFO.segregationImagePath}
                alt="Automated industrial conveyor sorting plastic polymers and tyre streams"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-xl border border-amber-500/20 bg-[#160703]/80 backdrop-blur-md p-6 sm:p-8 shadow-lg">
                <h2 className="font-display text-2xl font-bold text-white">
                  Feedstock Streams Processed
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#E7D8D0]">
                  Engineered to handle mixed municipal, coastal, and industrial streams before thermal cracking across 5–30 TPD plastic and tyre pyrolysis lines.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-lg bg-[#0F0402]/80 p-4 border border-amber-500/15">
                    <h3 className="font-display text-sm font-semibold text-amber-400">
                      Color-Separated Polyolefin Streams
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#E7D8D0]">
                      Mechanical and optical sorting down to color separation for LDPE, HDPE, PP, and multi-layer packaging films.
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0F0402]/80 p-4 border border-amber-500/15">
                    <h3 className="font-display text-sm font-semibold text-amber-400">
                      End-of-Life Tyre &amp; Elastomer Prep
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#E7D8D0]">
                      Dedicated tyre debeading, shredding, and stream isolation for batch and continuous thermal depolymerization.
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0F0402]/80 p-4 border border-amber-500/15">
                    <h3 className="font-display text-sm font-semibold text-amber-400">
                      Contaminant &amp; Moisture Screening
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#E7D8D0]">
                      Removes halogenated plastics, inert grit, and excess moisture to protect downstream reactor metallurgy and catalyst life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {service.id === 'chemical-recycling' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5 rounded-xl border border-amber-500/20 bg-[#160703]/80 backdrop-blur-md p-6 sm:p-8 space-y-5 shadow-lg">
                <h2 className="font-display text-2xl font-bold text-white">
                  Patented Reactor &amp; Process Designs
                </h2>
                <p className="text-sm leading-relaxed text-[#E7D8D0]">
                  Our chemical recycling models combine patented continuous and batch reactor designs with complete piping, condensation, and emission-scrubbing architecture for 5–30 TPD installations.
                </p>
                <ul className="space-y-3 border-t border-amber-500/20 pt-4 text-sm text-[#FAF7F2]">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div
                    className="flex flex-wrap items-center gap-1 rounded-lg bg-[#160703]/85 backdrop-blur-md p-1 border border-amber-500/20"
                    role="tablist"
                    aria-label="Patented plant photos and schematics"
                  >
                    {PLANT_SCHEMATICS.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={idx === activeSchematicIdx}
                        onClick={() => setActiveSchematicIdx(idx)}
                        className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                          idx === activeSchematicIdx
                            ? 'bg-amber-500 text-slate-950'
                            : 'text-[#E7D8D0] hover:text-white'
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-[#160703]/85 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#240B05] cursor-pointer"
                  >
                    <Maximize2 className="h-3.5 w-3.5 text-amber-400" />
                    Expand Full View
                  </button>
                </div>

                <div className="overflow-hidden rounded-xl border border-amber-500/20 bg-[#160703]/80 backdrop-blur-md shadow-lg">
                  <div className="aspect-[16/9] w-full bg-white">
                    <img
                      src={activeSchematic.imagePath}
                      alt={activeSchematic.caption}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-amber-500/20 px-5 py-3 text-xs text-[#E7D8D0]">
                    <span>{activeSchematic.caption}</span>
                    <span className="font-display font-semibold text-amber-400">5–30 TPD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {service.id === 'fuel-upgradation' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Single-set Oil Characteristics Table */}
              <div className="lg:col-span-6 rounded-xl border border-amber-500/20 bg-[#160703]/80 backdrop-blur-md p-6 sm:p-8 shadow-lg">
                <h2 className="font-display text-2xl font-bold text-white">
                  Waste Plastic Pyrolysis Oil QC Analysis
                </h2>
                <p className="mt-2 text-sm text-[#E7D8D0]">
                  Post-processing, catalytic filtration, and stepwise proprietary additive treatment yield consistent, low-moisture industrial fuel characteristics.
                </p>

                <table className="mt-6 w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-amber-500/20 text-xs font-semibold text-[#D9BFB0]">
                      <th className="py-3 pr-4">Parameter</th>
                      <th className="py-3 px-4">Unit</th>
                      <th className="py-3 pl-4 text-amber-400">Measured Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-500/15 text-[#FAF7F2]">
                    {OIL_ANALYSIS_PARAMETERS.map((row) => (
                      <tr key={row.parameter}>
                        <td className="py-3 pr-4 font-medium">{row.parameter}</td>
                        <td className="py-3 px-4 text-xs text-[#D9BFB0]">{row.unit}</td>
                        <td className="py-3 pl-4 font-display font-semibold text-amber-400 tabular-nums">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Stepwise Upgradation Stages */}
              <div className="lg:col-span-6 rounded-xl border border-amber-500/20 bg-[#160703]/80 backdrop-blur-md p-6 sm:p-8 space-y-5 shadow-lg">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold text-white">
                    Stepwise Upgradation Workflow
                  </h2>
                  <Flame className="h-5 w-5 text-amber-400" aria-hidden="true" />
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-[#0F0402]/80 p-4 border border-amber-500/15">
                    <h3 className="font-display text-sm font-semibold text-amber-400">
                      01. Multi-Stage Condensation &amp; Water Separation
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#E7D8D0]">
                      Separates light and heavy hydrocarbon cuts while stripping free reaction water down to 0.28%.
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0F0402]/80 p-4 border border-amber-500/15">
                    <h3 className="font-display text-sm font-semibold text-amber-400">
                      02. Catalytic Desulfurization &amp; Filtration
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#E7D8D0]">
                      Neutralizes corrosive impurities and polishes the oil stream through multi-stage natural nanofiltration.
                    </p>
                  </div>
                  <div className="rounded-lg bg-[#0F0402]/80 p-4 border border-amber-500/15">
                    <h3 className="font-display text-sm font-semibold text-amber-400">
                      03. Proprietary Additive Stabilization
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#E7D8D0]">
                      Stepwise additive dosing locks in thermal stability, clean viscosity, and 10,824 Cal/gm energy density for industrial burners.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive 5-30 TPD Yield Estimator */}
            <div className="rounded-xl border border-amber-500/20 bg-[#160703]/80 backdrop-blur-md p-6 sm:p-8 text-white shadow-lg">
              <div className="flex flex-col justify-between gap-4 border-b border-amber-500/20 pb-5 lg:flex-row lg:items-center">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    Estimated Daily Fuel Output (5–30 TPD)
                  </h3>
                  <p className="mt-1 text-xs text-[#E7D8D0]/85">
                    Select a batch or continuous plant configuration to preview projected output.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 rounded-lg bg-[#0E0402]/85 p-1 border border-amber-500/20">
                  {REACTOR_CONFIGURATIONS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedConfigId(item.id)}
                      className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer ${
                        item.id === selectedConfigId
                          ? 'bg-amber-500 text-slate-950'
                          : 'text-[#E7D8D0] hover:text-white'
                      }`}
                    >
                      {item.shortLabel}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-amber-500/20 bg-[#0F0402]/80 p-5">
                  <p className="text-xs text-[#D9BFB0]">Upgraded Fuel Oil</p>
                  <p className="mt-1.5 font-display text-2xl font-semibold text-amber-400 tabular-nums">
                    {oilLitersPerDay} L/day
                  </p>
                  <p className="mt-1 text-xs text-[#E7D8D0]/85 tabular-nums">
                    {oilTonnesPerDay} T/day · {config.calorificValue}
                  </p>
                </div>
                <div className="rounded-lg border border-amber-500/20 bg-[#0F0402]/80 p-5">
                  <p className="text-xs text-[#D9BFB0]">Syngas Loop Recovery</p>
                  <p className="mt-1.5 font-display text-2xl font-semibold text-[#84B873] tabular-nums">
                    {syngasTonnesPerDay} T/day
                  </p>
                  <p className="mt-1 text-xs text-[#E7D8D0]/85">Recirculated to reactor burners</p>
                </div>
                <div className="rounded-lg border border-amber-500/20 bg-[#0F0402]/80 p-5">
                  <p className="text-xs text-[#D9BFB0]">Carbon Char / rCB</p>
                  <p className="mt-1.5 font-display text-2xl font-semibold text-white tabular-nums">
                    {charTonnesPerDay} T/day
                  </p>
                  <p className="mt-1 text-xs text-[#E7D8D0]/85">{config.mode} reactor discharge</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Modal for Full-Resolution Schematic */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeSchematic.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl border border-amber-500/30 bg-[#160703] text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-amber-500/20 px-5 py-3.5">
              <div>
                <p className="font-display text-sm font-semibold text-white">
                  {activeSchematic.title}
                </p>
                <p className="text-xs text-[#D9BFB0]">{activeSchematic.caption}</p>
              </div>
              <button
                type="button"
                aria-label="Close schematic"
                onClick={() => setModalOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/30 text-[#E7D8D0] hover:bg-[#260C05] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto bg-white p-3">
              <img
                src={activeSchematic.imagePath}
                alt={activeSchematic.caption}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
