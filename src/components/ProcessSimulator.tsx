import { useState } from 'react';
import {
  PROCESS_STAGES,
  REACTOR_CONFIGURATIONS,
  OIL_ANALYSIS_PARAMETERS,
} from '../data/saafiData';

export default function ProcessSimulator() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [selectedConfigId, setSelectedConfigId] = useState(REACTOR_CONFIGURATIONS[0].id);

  const activeStage = PROCESS_STAGES[activeStageIdx];
  const config =
    REACTOR_CONFIGURATIONS.find((item) => item.id === selectedConfigId) ||
    REACTOR_CONFIGURATIONS[0];

  const oilTonnesPerDay = ((config.capacityTpd * config.oilYieldPct) / 100).toFixed(1);
  const oilLitersPerDay = Math.round(Number(oilTonnesPerDay) * 1202).toLocaleString('en-IN');
  const syngasTonnesPerDay = ((config.capacityTpd * config.syngasPct) / 100).toFixed(1);
  const charTonnesPerDay = ((config.capacityTpd * config.charPct) / 100).toFixed(1);

  return (
    <section
      id="process"
      className="border-y border-amber-500/15 bg-transparent py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-amber-400">Engineering Architecture</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl [text-wrap:balance] drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)]">
            Continuous &amp; Batch Pyrolysis Architecture (5–30 TPD)
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#E7D8D0]/90 sm:text-base">
            Inspect the four-stage thermal conversion workflow, evaluate Saafi Renewables&apos; 5–30 TPD batch and continuous plant configurations, and review verified waste-plastic oil characteristics.
          </p>
        </div>

        {/* Interactive 4-Stage Process Pipeline */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div
            className="lg:col-span-5 flex flex-col gap-2"
            role="tablist"
            aria-label="Pyrolysis Process Stages"
          >
            {PROCESS_STAGES.map((stage, idx) => {
              const isSelected = idx === activeStageIdx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`flex items-center justify-between gap-4 rounded-lg border px-5 py-4 text-left backdrop-blur-md transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isSelected
                      ? 'border-amber-400/75 bg-[#290C05]/85 text-white'
                      : 'border-amber-500/20 bg-[#160703]/75 text-[#E7D8D0] hover:border-amber-400/45 hover:text-white'
                  }`}
                >
                  <div>
                    <span className="font-display text-xs font-semibold text-amber-400 tabular-nums">
                      Stage {stage.step}
                    </span>
                    <p className="mt-0.5 font-display text-base font-semibold text-white">
                      {stage.title}
                    </p>
                  </div>
                  <span className="font-display text-xs font-medium text-[#D9BFB0] whitespace-nowrap shrink-0 tabular-nums">
                    {stage.temperatureRange}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-amber-500/20 bg-[#160703]/78 backdrop-blur-md p-6 sm:p-8"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-4">
                <span className="font-display text-xs font-semibold text-amber-400 tabular-nums">
                  Stage {activeStage.step} Operating Specification
                </span>
                <span className="font-display text-xs font-medium text-[#D9BFB0] tabular-nums">
                  {activeStage.temperatureRange}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                {activeStage.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#EFE5DF] sm:text-base">
                {activeStage.description}
              </p>

              <div className="mt-6">
                <p className="text-xs font-medium text-[#D9BFB0]">
                  Primary Engineering Controls
                </p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {activeStage.keyControls.map((control) => (
                    <div
                      key={control}
                      className="rounded-lg border border-amber-500/20 bg-[#260B05]/80 px-3.5 py-3 text-xs leading-snug text-[#FAF7F2]"
                    >
                      {control}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-amber-500/20 pt-4 text-xs text-[#D9BFB0]">
              All continuous units include PLC computer-controlled parameter monitoring with manual override and emergency power-off interlocks.
            </div>
          </div>
        </div>

        {/* Plant Capacity Configuration Output Estimator (5-30 TPD) */}
        <div className="mt-12 rounded-xl border border-amber-500/20 bg-[#160703]/78 backdrop-blur-md p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-6 border-b border-amber-500/20 pb-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                Reactor Configuration &amp; Output Profile (5–30 TPD)
              </h3>
              <p className="mt-1 text-xs text-[#D9BFB0]">
                Select from our batch and continuous plastic &amp; tyre pyrolysis plant capacities.
              </p>
            </div>

            <div
              className="flex flex-wrap items-center gap-1 rounded-lg bg-[#100402]/90 p-1 border border-amber-500/20"
              role="group"
              aria-label="Reactor capacity selection"
            >
              {REACTOR_CONFIGURATIONS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedConfigId(item.id)}
                  className={`whitespace-nowrap shrink-0 rounded-md px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
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

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-amber-500/20 bg-[#260B05]/80 p-5">
              <p className="text-xs text-[#D9BFB0]">
                Pyrolysis Fuel Oil (~{config.oilYieldPct}%)
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-amber-400 tabular-nums">
                {oilLitersPerDay} L/day
              </p>
              <p className="mt-1 font-display text-xs text-[#E7D8D0] tabular-nums">
                {oilTonnesPerDay} tonnes/day · {config.calorificValue}
              </p>
            </div>

            <div className="rounded-lg border border-amber-500/20 bg-[#260B05]/80 p-5">
              <p className="text-xs text-[#D9BFB0]">Syngas Recovery (~{config.syngasPct}%)</p>
              <p className="mt-2 font-display text-2xl font-semibold text-[#84B873] tabular-nums">
                {syngasTonnesPerDay} T/day
              </p>
              <p className="mt-1 text-xs text-[#E7D8D0]">
                Routed to closed-loop reactor burners
              </p>
            </div>

            <div className="rounded-lg border border-amber-500/20 bg-[#260B05]/80 p-5">
              <p className="text-xs text-[#D9BFB0]">Carbon Char / rCB (~{config.charPct}%)</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white tabular-nums">
                {charTonnesPerDay} T/day
              </p>
              <p className="mt-1 text-xs text-[#E7D8D0]">
                {config.mode} slag screw / batch discharge
              </p>
            </div>

            <div className="rounded-lg border border-amber-500/20 bg-[#260B05]/80 p-5">
              <p className="text-xs text-[#D9BFB0]">Feedstock &amp; Operating Window</p>
              <p className="mt-2 font-display text-2xl font-semibold text-white tabular-nums">
                {config.reactorTemp}
              </p>
              <p className="mt-1 text-xs text-[#E7D8D0]">{config.feedstock}</p>
            </div>
          </div>
        </div>

        {/* Single-Set Waste Plastic Pyrolysis Oil QC Analysis Table */}
        <div className="mt-10 rounded-xl border border-amber-500/20 bg-[#160703]/78 backdrop-blur-md p-6 sm:p-8">
          <div className="border-b border-amber-500/20 pb-6">
            <p className="text-xs font-semibold text-amber-400">Fuel Verification</p>
            <h3 className="mt-1.5 font-display text-xl font-semibold text-white sm:text-2xl">
              Waste Plastic Pyrolysis Oil QC Analysis
            </h3>
            <p className="mt-1 text-xs text-[#D9BFB0]">
              Measured characteristics of upgraded oil extracted from waste plastic.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-amber-500/20 text-xs font-semibold text-[#D9BFB0]">
                  <th className="py-3 pr-4">Parameter</th>
                  <th className="py-3 px-4">Unit</th>
                  <th className="py-3 pl-4 font-display text-amber-400">Measured Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-500/15 text-[#FAF7F2]">
                {OIL_ANALYSIS_PARAMETERS.map((row) => (
                  <tr key={row.parameter}>
                    <td className="py-3.5 pr-4 font-medium">{row.parameter}</td>
                    <td className="py-3.5 px-4 text-xs text-[#D9BFB0]">{row.unit}</td>
                    <td
                      className={`py-3.5 pl-4 font-display font-semibold tabular-nums ${
                        row.highlight === 'amber'
                          ? 'text-amber-400'
                          : row.highlight === 'emerald'
                            ? 'text-[#84B873]'
                            : 'text-white'
                      }`}
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
