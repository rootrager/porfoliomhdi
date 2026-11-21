"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Brain,
  CheckCircle,
  Cpu,
  Database,
  Eye,
  PaperPlaneTilt,
  Pause,
  Play,
  ShieldCheck,
  TerminalWindow,
} from "@phosphor-icons/react";
import {
  AGENT_SCENARIOS,
  AGENT_SKILLS,
  type AgentSkillId,
} from "@/content/site";
import { Reveal } from "./reveal";
import TopoBackground from "./topo-background";

const SKILL_ICONS: Record<AgentSkillId, typeof Cpu> = {
  "usb-lockdownd": Cpu,
  "vision-ocr": Eye,
  "vector-rag": Database,
  "local-llm": Brain,
  "pydantic-guard": ShieldCheck,
  "telegram-ops": PaperPlaneTilt,
};

export function AgentSkillMap() {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [selectedSkillId, setSelectedSkillId] = useState<AgentSkillId | null>(null);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenario = AGENT_SCENARIOS[scenarioIdx];
  const activeStep = scenario.steps[activeStepIdx];
  const highlightedSkill = AGENT_SKILLS.find((s) => s.id === selectedSkillId) ?? null;

  useEffect(() => {
    if (!isPlaying) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveStepIdx((prev) => {
        if (prev >= scenario.steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1800);

    return () => window.clearInterval(timer);
  }, [isPlaying, scenario.steps.length]);

  const handleSelectScenario = (idx: number) => {
    setScenarioIdx(idx);
    setSelectedSkillId(null);
    setActiveStepIdx(0);
    setIsPlaying(false);
  };

  const handleSelectSkill = (skillId: AgentSkillId) => {
    setSelectedSkillId((prev) => (prev === skillId ? null : skillId));
    const skill = AGENT_SKILLS.find((s) => s.id === skillId);
    if (skill && !skill.scenarioIds.includes(scenario.id)) {
      const targetIdx = AGENT_SCENARIOS.findIndex((sc) => sc.id === skill.scenarioIds[0]);
      if (targetIdx !== -1) {
        setScenarioIdx(targetIdx);
        setActiveStepIdx(0);
        setIsPlaying(false);
      }
    }
  };

  const handleTogglePlay = () => {
    if (!isPlaying && activeStepIdx >= scenario.steps.length - 1) {
      setActiveStepIdx(0);
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <section id="agent" className="relative overflow-hidden border-t border-line bg-bg text-fg">
      <TopoBackground
        className="min-h-0 py-24 md:py-32"
        interval={0.24}
        terrainScale={1450}
        speed={0.5}
        interactive
        labels
        overlay={<div className="absolute inset-0 bg-bg/70 backdrop-blur-[1px]" />}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Header */}
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-medium text-accent">ایجنت هوش مصنوعی شخصی من</p>
                <h2 className="mt-2 font-display text-5xl tracking-normal text-fg md:text-7xl">
                  نقشه اسکیل‌ها و جریان کار
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-fg-secondary md:text-base">
                ایده‌ای که دارم دنبال می‌کنم یه دستیار هوشمند شخصیه که به ابزارهای واقعی وصل بشه؛
                اینجا می‌تونی اسکیل‌هاش رو ببینی و یکی از سناریوها رو مرحله‌به‌مرحله تست کنی.
              </p>
            </div>
          </Reveal>

          {/* Scenario Selector Tabs */}
          <div className="mt-8">
            <div
              role="tablist"
              aria-label="سناریوهای واقعی ایجنت"
              className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4"
            >
              {AGENT_SCENARIOS.map((item, idx) => {
                const isSelected = idx === scenarioIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectScenario(idx)}
                    className={`flex min-h-[56px] cursor-pointer flex-col items-start justify-center rounded-xl border px-4 py-3 text-right transition-colors duration-150 ${
                      isSelected
                        ? "border-accent bg-accent text-accent-fg"
                        : "border-line bg-surface/90 text-fg hover:border-line-strong"
                    }`}
                  >
                    <span className="text-sm font-bold">{item.label}</span>
                    <span
                      dir="ltr"
                      className={`mt-0.5 font-mono text-[11px] ${
                        isSelected ? "text-accent-fg/75" : "text-muted"
                      }`}
                    >
                      {item.projectRef}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Interactive Split: Skill Map (5 cols) + Live Workflow Runner (7 cols) */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* Skill Nodes Graph Column */}
            <div className="rounded-2xl border border-line bg-surface/90 p-6 backdrop-blur-md lg:col-span-5">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <h3 className="text-base font-bold text-fg">هسته و اسکیل‌های متصل</h3>
                  <p className="mt-0.5 text-xs text-muted">
                    روی هر اسکیل کلیک کن تا نقشش و سناریوی مرتبطش رو ببینی
                  </p>
                </div>
                <span dir="ltr" className="font-mono text-xs tabular-nums text-accent">
                  {scenario.activeSkills.length} / {AGENT_SKILLS.length}
                </span>
              </div>

              {/* Core Hub */}
              <div className="mt-5 flex items-center justify-between rounded-xl border border-accent/40 bg-bg/90 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Brain size={20} weight="fill" className="text-accent" aria-hidden="true" />
                  <div>
                    <div className="text-sm font-bold text-fg">هسته ایجنت شخصی</div>
                    <div dir="ltr" className="font-mono text-[11px] text-muted">
                      ReAct Loop · Tool Router · HITL
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-accent">فعال</span>
              </div>

              {/* Skill Node Grid */}
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {AGENT_SKILLS.map((skill) => {
                  const Icon = SKILL_ICONS[skill.id];
                  const isUsedInScenario = scenario.activeSkills.includes(skill.id);
                  const isFocused = selectedSkillId === skill.id;
                  return (
                    <button
                      key={skill.id}
                      type="button"
                      aria-pressed={isFocused}
                      onClick={() => handleSelectSkill(skill.id)}
                      className={`group flex w-full cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-right transition-colors duration-150 ${
                        isFocused
                          ? "border-accent bg-surface-elevated"
                          : isUsedInScenario
                            ? "border-accent/45 bg-bg/85 hover:border-accent"
                            : "border-line bg-bg/40 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <span
                        className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          isUsedInScenario || isFocused
                            ? "bg-accent text-accent-fg"
                            : "bg-surface text-muted"
                        }`}
                      >
                        <Icon size={16} weight={isUsedInScenario ? "bold" : "regular"} aria-hidden="true" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-fg">{skill.name}</span>
                          {isUsedInScenario ? (
                            <span className="shrink-0 text-[11px] font-medium text-accent">
                              درگیر در این سناریو
                            </span>
                          ) : null}
                        </span>
                        <span dir="ltr" className="mt-0.5 block font-mono text-[11px] text-muted">
                          {skill.enName}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Skill Inspector */}
              {highlightedSkill ? (
                <div className="mt-4 border-t border-line pt-4 text-sm">
                  <p className="font-semibold text-accent">{highlightedSkill.role}</p>
                  <p className="mt-1.5 leading-relaxed text-fg-secondary">
                    {highlightedSkill.detail}
                  </p>
                </div>
              ) : null}
            </div>

            {/* Live Workflow Pipeline Column */}
            <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface/90 p-6 backdrop-blur-md md:p-8 lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
                  <div>
                    <p className="text-xs font-medium text-accent">
                      جریان کار زنده · {scenario.projectRef}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-fg">{scenario.label}</h3>
                  </div>

                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-full border border-line-strong bg-bg px-4 py-2 text-xs font-semibold text-fg transition-colors duration-150 hover:border-accent hover:text-accent"
                  >
                    {isPlaying ? (
                      <>
                        <Pause size={15} weight="fill" aria-hidden="true" />
                        <span>توقف اجرا</span>
                      </>
                    ) : (
                      <>
                        <Play size={15} weight="fill" aria-hidden="true" />
                        <span>اجرای مرحله‌به‌مرحله</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{scenario.summary}</p>

                {/* 4-Step Interactive Pipeline */}
                <ol className="mt-6 divide-y divide-line border-y border-line">
                  {scenario.steps.map((step, idx) => {
                    const isCurrent = idx === activeStepIdx;
                    const isDone = idx < activeStepIdx;
                    return (
                      <li key={step.phase}>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveStepIdx(idx);
                            setIsPlaying(false);
                          }}
                          className={`flex w-full cursor-pointer items-start justify-between gap-4 py-4 text-right transition-colors duration-150 ${
                            isCurrent ? "text-fg" : "text-fg-secondary hover:text-fg"
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 text-xs">
                              <span
                                className={`font-mono font-semibold tabular-nums ${
                                  isCurrent || isDone ? "text-accent" : "text-muted"
                                }`}
                              >
                                {step.phase}
                              </span>
                              {isDone ? (
                                <CheckCircle
                                  size={14}
                                  weight="fill"
                                  className="text-accent"
                                  aria-hidden="true"
                                />
                              ) : null}
                            </div>
                            <div className="mt-1 text-sm font-bold sm:text-base">{step.title}</div>
                            {isCurrent ? (
                              <p className="mt-1.5 text-sm leading-relaxed text-fg-secondary">
                                {step.summary}
                              </p>
                            ) : null}
                          </div>

                          <span
                            className={`mt-1 shrink-0 text-xs font-medium ${
                              isCurrent ? "text-accent" : "text-muted"
                            }`}
                          >
                            {isCurrent ? "مرحله فعلی" : isDone ? "انجام شد" : "مشاهده"}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Active Step Technical Trace Footer */}
              <div className="mt-6 pt-2">
                <div className="flex items-center justify-between gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5 font-medium text-fg">
                    <TerminalWindow size={15} className="text-accent" aria-hidden="true" />
                    <span>داده ردوبدل‌شده در این گام</span>
                  </span>
                  <span dir="ltr" className="font-mono tabular-nums">
                    STEP {activeStepIdx + 1} / {scenario.steps.length}
                  </span>
                </div>

                <div
                  dir="ltr"
                  className="mt-2.5 overflow-x-auto rounded-xl border border-line bg-bg px-4 py-3 font-mono text-xs text-accent"
                >
                  {activeStep.payload}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={activeStepIdx === 0}
                    onClick={() => {
                      setActiveStepIdx((i) => Math.max(0, i - 1));
                      setIsPlaying(false);
                    }}
                    className="min-h-[40px] cursor-pointer text-xs font-semibold text-fg-secondary transition-colors hover:text-fg disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    مرحله قبلی
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveStepIdx((i) => (i + 1) % scenario.steps.length);
                      setIsPlaying(false);
                    }}
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 text-xs font-bold text-accent transition-opacity hover:opacity-85"
                  >
                    <span>
                      {activeStepIdx === scenario.steps.length - 1 ? "شروع دوباره" : "مرحله بعدی"}
                    </span>
                    <ArrowLeft size={14} weight="bold" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TopoBackground>
    </section>
  );
}
