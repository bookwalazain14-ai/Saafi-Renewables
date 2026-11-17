import { FormEvent, useEffect, useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/saafiData';

interface ContactSectionProps {
  preselectedService: string;
}

interface FormState {
  fullName: string;
  organization: string;
  contactInfo: string;
  service: string;
  feedstockNotes: string;
}

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    organization: '',
    contactInfo: '',
    service: preselectedService || SERVICES[0].title,
    feedstockNotes: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validateContact = (value: string) => {
    const trimmed = value.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    const digitsOnly = trimmed.replace(/\D/g, '');
    const isPhone = digitsOnly.length >= 10 && digitsOnly.length <= 15;
    return isEmail || isPhone;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!form.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!validateContact(form.contactInfo)) {
      setErrorMsg('Please provide a valid phone number (10+ digits) or business email address.');
      return;
    }
    if (!form.feedstockNotes.trim()) {
      setErrorMsg('Please share brief details on your plant capacity or feedstock requirements.');
      return;
    }

    setSubmitted(true);
  };

  const buildPrefilledWhatsAppUrl = () => {
    const text = `Hello Saafi Renewables Pvt Ltd,\nName: ${form.fullName || 'Stakeholder'}\nOrganization: ${form.organization || 'Not specified'}\nContact: ${form.contactInfo || 'Not specified'}\nService Interest: ${form.service}\nProject Details: ${form.feedstockNotes || 'Requesting technical consultation.'}`;
    return `https://wa.me/919920472576?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="bg-transparent py-20 text-[#FAF7F2] lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Office & Stakeholder Details */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
              Stakeholder Desk
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl [text-wrap:balance] drop-shadow-[0_2px_16px_rgba(0,0,0,0.65)]">
              Connect with Our Engineering Team
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#E7D8D0] sm:text-base">
              Discuss pyrolysis plant upgrades, feedstock segregation lines, fuel off-take specifications, or tailored chemical recycling feasibility studies.
            </p>

            <div className="mt-8 space-y-6 rounded-xl border border-amber-500/20 bg-[#160703]/75 backdrop-blur-md p-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-white">Office Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#E7D8D0]">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-white">Phone &amp; Email</h3>
                  <div className="mt-1 flex flex-col gap-1">
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="inline-block font-display text-sm font-medium text-[#FAF7F2] hover:text-amber-400 tabular-nums transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <a
                      href={COMPANY_INFO.emailHref}
                      className="inline-block font-display text-sm font-medium text-[#FAF7F2] hover:text-amber-400 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#84B873]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-semibold text-white">WhatsApp Direct</h3>
                  <a
                    href={COMPANY_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-[#84B873] hover:underline tabular-nums"
                  >
                    {COMPANY_INFO.phoneDisplay} · Start Chat
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#D9BFB0]" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-white">Working Hours</h3>
                  <p className="mt-1 text-sm text-[#E7D8D0]">{COMPANY_INFO.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Stakeholder Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-amber-500/25 bg-[#160703]/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-xl">
              {submitted ? (
                <div className="py-6">
                  <div className="flex items-center gap-3 text-[#84B873]">
                    <CheckCircle2 className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-xl font-semibold text-white">
                      Inquiry Prepared for Saafi Renewables
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#E7D8D0]">
                    Thank you, <span className="font-medium text-white">{form.fullName}</span>. Your technical inquiry regarding{' '}
                    <span className="font-medium text-white">{form.service}</span> is ready. For immediate engineering response, forward this inquiry directly to our WhatsApp desk or call{' '}
                    <span className="font-display font-semibold text-amber-400 tabular-nums">
                      {COMPANY_INFO.phoneDisplay}
                    </span>
                    .
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={buildPrefilledWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-lg bg-[#3A6B2F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#49833C] transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send Inquiry via WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          fullName: '',
                          organization: '',
                          contactInfo: '',
                          service: SERVICES[0].title,
                          feedstockNotes: '',
                        });
                      }}
                      className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-lg border border-amber-500/30 bg-[#0E0402]/80 px-4 py-2.5 text-sm font-medium text-[#FAF7F2] hover:bg-[#230B06] cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      Request Technical Proposal
                    </h3>
                    <p className="mt-1 text-sm text-[#D9BFB0]">
                      Provide your project scope and preferred contact details below.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-lg border border-red-400/40 bg-red-950/70 px-4 py-3 text-sm text-red-100"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" aria-hidden="true" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium text-[#E7D8D0]">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="e.g., Rajesh Kulkarni"
                        className="mt-1.5 w-full rounded-lg border border-amber-500/25 bg-[#0E0402]/85 px-3.5 py-2.5 text-sm text-white placeholder:text-[#A68B7C] focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs font-medium text-[#E7D8D0]">
                        Company / Plant Name
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={form.organization}
                        onChange={(e) => setForm({ ...form, organization: e.target.value })}
                        placeholder="e.g., Western Polymer Industries"
                        className="mt-1.5 w-full rounded-lg border border-amber-500/25 bg-[#0E0402]/85 px-3.5 py-2.5 text-sm text-white placeholder:text-[#A68B7C] focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contactInfo" className="block text-xs font-medium text-[#E7D8D0]">
                        Phone Number or Business Email *
                      </label>
                      <input
                        id="contactInfo"
                        type="text"
                        required
                        value={form.contactInfo}
                        onChange={(e) => setForm({ ...form, contactInfo: e.target.value })}
                        placeholder="+91 98XXXXXXXX or name@company.com"
                        className="mt-1.5 w-full rounded-lg border border-amber-500/25 bg-[#0E0402]/85 px-3.5 py-2.5 text-sm text-white placeholder:text-[#A68B7C] focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-medium text-[#E7D8D0]">
                        Solution Area
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-amber-500/25 bg-[#0E0402]/95 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25"
                      >
                        {SERVICES.map((svc) => (
                          <option key={svc.id} value={svc.title} className="bg-[#160703] text-white">
                            {svc.title}
                          </option>
                        ))}
                        <option value="Turnkey Pyrolysis Plant Inquiry" className="bg-[#160703] text-white">
                          Turnkey Pyrolysis Plant Inquiry
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="feedstockNotes" className="block text-xs font-medium text-[#E7D8D0]">
                      Feedstock &amp; Capacity Scope *
                    </label>
                    <textarea
                      id="feedstockNotes"
                      rows={4}
                      required
                      value={form.feedstockNotes}
                      onChange={(e) => setForm({ ...form, feedstockNotes: e.target.value })}
                      placeholder="Specify target daily tonnage (TPD), feedstock stream (polyolefins, MLP, tires), or fuel requirements..."
                      className="mt-1.5 w-full rounded-lg border border-amber-500/25 bg-[#0E0402]/85 px-3.5 py-2.5 text-sm text-white placeholder:text-[#A68B7C] focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                    >
                      Submit Technical Inquiry
                    </button>

                    <a
                      href={buildPrefilledWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#84B873] hover:underline"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Or send directly on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
