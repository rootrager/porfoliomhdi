# یادداشت کاری — Portfolio Mhdi

این فایل خلاصه‌ی همه‌ی کارهایی است که روی این پروژه انجام شده: چه چیزی ساخته شد،
**چرا** این‌طور ساخته شد، و قدم بعدی چیست.

Stack: Next.js 16.4.1 (App Router) · React 19.3 · Tailwind v4 · Motion 14 · Phosphor Icons
پالت: obsidian `#090b04` · olive `#708200` · lime `#ccff00` · coral `#ff3838`
فونت‌ها: Vazirmatn (متن) · Jomhuria (تیتر) · Neopixel (لاتین نمایشی) · Geist Mono

---

## ۱) رفع باگ‌ها (کامیت `ce33520`)

- **BiDi/RTL در Hero**: تیتر انگلیسی داخل `dir="rtl"` کاما و `!` را جابهجا می‌کرد →
  `dir="ltr" lang="en"` روی `h1` و برچسب `PERSONAL PORTFOLIO`.
- **ارتفاع Hero**: `min-h-[100dvh]` + هدر چسبان = ۶۴px اسکرول اضافه →
  `min-h-[calc(100dvh-4rem)]`.
- **وزن ویدیو**: دسکتاپ ۸.۵MB → **۳.۴MB**، موبایل ۱۲MB → **۲.۵MB**
  (h264، بدون ترک صوتی، `+faststart`، CRF 28) + پوستر WebP (۷۰KB / ۴۸KB).
- **id تکراری SVG**: هر گرادیان آواتار `idPrefix` یکتا گرفت (۰ id تکراری در DOM).
- **آواتارهای تزئینی** `aria-hidden` شدند.
- **منوی موبایل**: لیبل داینامیک، `aria-controls`، بستن با Escape، قفل اسکرول body.
- **reduced-motion**: انیمیشن‌های `bounce`/`pulse` هم آگاه شدند.
- **`color-scheme: dark`** و debounce روی `MutationObserver` نوار موجی.
- **صفحه درباره من**: ناحیه‌ی اسکرول‌پذیر با کیبورد قابل دسترس شد.

## ۲) کارت‌های بخش ۲ به سبک Morphin (کامیت `326dbb9`)

مرجع: `morphin.dev/components/animated-team-cards-gradient-hover` (کدش پشت لاگین بود،
پس از روی رندر بازسازی شد).
- `src/components/service-card.tsx` (client، `motion/react`): کارت تیره، **لکه‌ی گرادیانی**
  در نیمه‌ی پایین، عکس مربعی ۶۴px روی لکه، لیفت + بزرگ‌شدن لکه در هاور.
- کارت‌ها روی `lg` روی هم می‌افتند (`lg:-ms-6`)، فلش دست‌کشیده کنار تیتر.
- رنگ لکه‌ها به آواتارهای انیمیشنی گره خورد: مرجانی / صورتی / آبی.

## ۳) اعداد لاتین (کامیت `1c222f1`)

هیچ رقم فارسی (`۰-۹`) در کل `src/` نمانده. اعداد آمار: `+100` / `+200` / `+4` با
`dir="ltr"` (وگرنه علامت `+` در RTL می‌پرید). متن «حدود 14 سال پیش».

## ۴) پس‌زمینه‌ی Topo در صفحه ۳ (کامیت `fb36d39`)

مرجع: `kokonutui.com/docs/backgrounds/topo-background` (MIT، `@dorianbaffier`).
- `src/components/topo-background.tsx`: نقشه‌ی کانتور زنده (marching squares + نویز Perlin)
  با اعداد ارتفاع، درخشش لبه‌ها، تپه‌ی زیر کرسر و ریپل با کلیک.
- انطباق‌ها: تم تیره‌ی ثابت، خطوط لایم، پارامترهای `terrainScale` / `overlay` /
  `dpr` / `cell` / `frameInterval`.
- **پرفورمنس**: dpr کمتر، گرید درشت‌تر، ~۱۰fps روی صفحه‌های کوچک، توقف کامل
  خارج از دید. هزینه‌ی نقشه ~۲–۸٪ CPU.
- `src/components/hero-video.tsx`: ویدیوی Hero وقتی از دید خارج شود **pause** می‌شود.

## ۵) جایگزینی آواتارها با کارهای گرافیکی خودم (کامیت `ae73375`)

چهار عکس از `~/Downloads/pinterest` → WebP در `public/images/`:
`art-dreamscape` · `art-run` · `art-stereogram` · `art-design`.
اسلات‌ها: بالا (Dreamscape) · وسط-چپ (Run) · کارت تیره روی ستاره (Stereogram) ·
پایین (نوار برش‌خورده‌ی پوستر Design).

## ۶) تست «Box of Light» (خارج از ریپو)

`~/Projects/box-of-light-test/` — صحنه‌ی سه‌بعدی بلادرنگ از روی ویدیوی
`IMG_3192.MP4` (CodePen اصلی: prisoner849/pen/RNBRNR0).
Three.js r186 **WebGPU** + **TSL** (نه GLSL): جعبه‌ی شیشه‌ای با لبه‌های درخشان
(ماسک UV در `emissiveNode`)، ۶ `Spotlight` روی نرمال‌های وجه، و **بلوم انتخابی**
با MRT (`mrt({output, emissive})` → بلوم فقط روی emissive).
`?webgl` بک‌اپ WebGL 2 · fallback خودکار اگر WebGPU نبود یا GPU ریست شود.

اجرا:
```bash
cd ~/Projects/box-of-light-test
python3 -m http.server 4321 --bind 0.0.0.0   # یا اسکریپت threaded
# → http://localhost:4321
```

---

## دستورهای کار با پروژه

```bash
cd ~/Projects/porfoliomhdi
npm run dev            # سرور توسعه
npm run build          # بیلد تولید
npm run lint           # eslint
npx tsc --noEmit       # تایپ‌چک
```

**دیدن روی گوشی** (گوشی روی همان وای‌فای):
`http://10.186.251.164:3000` — اگر باز نشد:
```bash
sudo firewall-cmd --zone=public --add-port=3000/tcp --permanent
sudo firewall-cmd --reload
```

## چیزهایی که عمداً به تعویق افتاد (فاز بعد)

- متادیتای OG/Twitter/canonical + `sitemap.ts` + `robots.ts` + فاوآیکون اختصاصی
- کنتراست زیتونی/سفید (۴.۳ و ۳.۳ — زیر حد WCAG) و فونت‌مونو روی متن فارسی
- تصاویر کارت‌ها پرتره‌اند ولی در قاب افقی برش می‌خورند · `about-bg.jpg` فقط ۱۰۲۴px
- تله‌ی اسکرول بصری صفحه «درباره من» در موبایل
- کدهای مرده: `about-section.tsx` · `project-card.tsx` · `api/setup-bg` ·
  `gsap` · `@tailwindcss/turbopack` · SVGهای اضافی در `public/`
- پالت/متن‌ها hardcode شده‌اند (۷۹ بار) — بهتر است در `src/content/site.ts` بیایند
- ۳ فونت بیاستفاده: Orbitron · Geist Sans · Corgan
- README هنوز پیشفرض create-next-app است · `DESIGN.md` قدیمی است
