"use client";

import { Reveal } from "./reveal";
import { 
  PaperPlaneTilt, 
  GithubLogo, 
  EnvelopeSimple, 
  Terminal, 
  ArrowUpRight, 
  CheckCircle,
  ShieldCheck,
  Radioactive
} from "@phosphor-icons/react";

export function ContactSection() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070903] py-24 text-white md:py-32 border-t border-[#1a220d]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ccff00]/10 blur-[120px]" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        <Reveal>
          {/* Main Cockpit Super-Card */}
          <div className="overflow-hidden rounded-[36px] border border-[#243013] bg-[#0c1006]/95 p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] md:p-14 backdrop-blur-md">
            
            {/* Top Status Monospace Bar */}
            <div 
              dir="ltr"
              className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1c240f] pb-5 font-mono text-[11px] text-[#717e5d]"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ccff00] opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ccff00]" />
                </span>
                <span className="text-[#ccff00] font-bold">TRANSMISSION_READY</span>
                <span>{'// ENCRYPTION: TLS 1.3'}</span>
              </div>

              <div className="flex items-center gap-3">
                <span>VPS: YTA87400905</span>
                <span className="text-[#263314]">{'//'}</span>
                <span>PRODUCTION ACTIVE</span>
              </div>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
              
              {/* Left Column: Heading & Value Proposition (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between" dir="rtl">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#ccff00]">
                    [ ACT 05 // SECURE UPLINK ]
                  </span>
                  
                  <h2 className="mt-3 font-display text-5xl tracking-normal text-white md:text-7xl lg:text-8xl">
                    خط مستقیم ارتباط و شروع کار
                  </h2>

                  <p className="mt-4 font-persian text-base leading-relaxed text-[#c3c8ba] md:text-lg">
                    بدون فرم‌های سازمانی طولانی و خسته‌کننده. اگر مسئله پیچیده‌ای داری که نیاز به حل در لایه صفر دارد، یا محصولی که می‌خواهی به دور از شعار و کلیشه به واقعیت تبدیل شود، پیام بگذار.
                  </p>
                </div>

                {/* Direct Action Channels */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2" dir="ltr">
                  
                  {/* Telegram Card */}
                  <a
                    href="https://t.me/rootrager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-[#232f12] bg-[#111709] p-4 transition-all duration-200 hover:border-[#ccff00] hover:bg-[#16200c]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#1c290e] p-2.5 text-[#ccff00] group-hover:scale-110 transition-transform">
                        <PaperPlaneTilt className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-white">TELEGRAM DIRECT</div>
                        <div className="font-mono text-[11px] text-[#7d8b69]">@rootrager // FAST</div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#7d8b69] group-hover:text-[#ccff00] transition-colors" />
                  </a>

                  {/* GitHub Card */}
                  <a
                    href="https://github.com/rootrager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-[#232f12] bg-[#111709] p-4 transition-all duration-200 hover:border-[#ccff00] hover:bg-[#16200c]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-[#1c290e] p-2.5 text-[#ccff00] group-hover:scale-110 transition-transform">
                        <GithubLogo className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-white">GITHUB PROFILE</div>
                        <div className="font-mono text-[11px] text-[#7d8b69]">rootrager // REPOS</div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#7d8b69] group-hover:text-[#ccff00] transition-colors" />
                  </a>

                </div>
              </div>

              {/* Right Column: Terminal Live Response Box (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div 
                  dir="ltr"
                  className="rounded-2xl border border-[#243013] bg-[#070a03] p-5 font-mono text-xs shadow-2xl text-[#a0ad8c]"
                >
                  <div className="flex items-center justify-between border-b border-[#18200d] pb-3 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#f43f5e]/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#facc15]/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/80" />
                    </div>
                    <span className="text-[10px] text-[#556142]">bash - interactive session</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="text-[#ccff00]">
                      $ curl -s https://mhdi.dev/api/status | jq .
                    </div>
                    <div className="text-white">
                      &#123;
                    </div>
                    <div className="ps-4">
                      &quot;status&quot;: <span className="text-[#ccff00]">&quot;OPEN_FOR_CONTRACTS&quot;</span>,
                    </div>
                    <div className="ps-4">
                      &quot;location&quot;: &quot;Tehran // Remote Friendly&quot;,
                    </div>
                    <div className="ps-4">
                      &quot;core_stack&quot;: [
                    </div>
                    <div className="ps-8 text-[#d4ff00]">
                      &quot;Python 3.12&quot;, &quot;Next.js 16&quot;, &quot;Reverse Engineering&quot;, &quot;Multi-Agent RAG&quot;
                    </div>
                    <div className="ps-4">
                      ],
                    </div>
                    <div className="ps-4">
                      &quot;direct_dispatch&quot;: <span className="text-[#38bdf8]">&quot;hello@mhdi.dev&quot;</span>
                    </div>
                    <div className="text-white">
                      &#125;
                    </div>
                  </div>

                  <a
                    href="mailto:hello@mhdi.dev"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ccff00] py-3 text-center font-mono text-xs font-bold text-[#090b04] transition-all hover:bg-[#d6ff33] active:scale-[0.98]"
                  >
                    <EnvelopeSimple className="h-4 w-4" />
                    <span>DISPATCH EMAIL DIRECTLY</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </Reveal>

        {/* Minimal Footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#18200d] pt-6 font-mono text-[11px] text-[#6d795b] sm:flex-row">
          <div>
            © {year} MHDI. ALL RIGHTS RESERVED // BUILT TO OUTLAST
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-[#ccff00] transition-colors">PROJECTS</a>
            <a href="#services" className="hover:text-[#ccff00] transition-colors">STORY</a>
            <a href="https://github.com/rootrager" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">GITHUB</a>
            <a href="https://t.me/rootrager" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccff00] transition-colors">TELEGRAM</a>
          </div>
        </div>

      </div>
    </section>
  );
}
