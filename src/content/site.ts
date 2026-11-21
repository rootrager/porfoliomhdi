export const SITE_LINKS = {
  email: "hello@mhdi.dev",
  telegram: "https://t.me/rootrager",
  telegramHandle: "@rootrager",
  github: "https://github.com/rootrager",
  githubHandle: "github.com/rootrager",
} as const;

export type ProjectCategoryId = "all" | "hardware" | "agents" | "offline";

export interface ProjectItem {
  index: string;
  title: string;
  faTitle: string;
  category: string;
  categoryId: Exclude<ProjectCategoryId, "all">;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
  github?: string;
}

export const PROJECT_CATEGORIES: { id: ProjectCategoryId; label: string }[] = [
  { id: "all", label: "همه کارها" },
  { id: "hardware", label: "سخت‌افزار و iOS" },
  { id: "agents", label: "ایجنت و هوش مصنوعی" },
  { id: "offline", label: "ابزارهای آفلاین" },
];

export const PROJECTS: ProjectItem[] = [
  {
    index: "01",
    title: "AURA Core-X Diagnostics",
    faTitle: "تشخیص تقلب و کارشناسی سخت‌افزار آیفون",
    category: "سخت‌افزار و iOS",
    categoryId: "hardware",
    problem:
      "توی بازار آیفون دست‌دوم، گوشی‌های پروگرام‌شده سلامت باتری رو ۱۰۰٪ نشون می‌دن و خروجی ابزارهایی مثل 3uTools هم برای آدم عادی گنگه و هم وابسته به کلوده.",
    solution:
      "یه سیستم آفلاین ساختم که مستقیم با USB به Lockdownd وصل می‌شه، دیتای خام BMS باتری رو می‌خونه و سریال قطعات داخلی رو با کارخونه تطبیق می‌ده.",
    outcome: "کارشناسی ۱۰۰٪ آفلاین و مستقل",
    stack: ["iOS Protocols", "Hardware Security", "FastAPI", "Gemma 3 Local"],
    github: "https://github.com/rootrager/aura-corex-diagnostics",
  },
  {
    index: "02",
    title: "DaniFone Commerce Engine",
    faTitle: "موتور قیمت‌گذاری، حسابداری و انبار زنده",
    category: "ایجنت هوشمند و فین‌تک",
    categoryId: "agents",
    problem:
      "قیمت آیفون ثانیه‌ای با دلار بالا پایین می‌شه؛ چک کردن دستی صدها فیش واریزی و پیگیری انتقال مالکیت همتا هم پر از خطای انسانی و دردسر بود.",
    solution:
      "بینایی ماشین برای بررسی ظاهر گوشی، یه بات تلگرام OCR برای خوندن فیش‌های بانکی و یه داشبورد حسابداری سریع با شورتکات‌های کیبورد رو گذاشتم کنار هم.",
    outcome: "بیش از ۸۳ دستگاه توی چرخه زنده",
    stack: ["ReAct Agents", "Vision OCR", "SQLite WAL", "Next.js 16"],
    github: "https://github.com/rootrager/danifon-pricing-engine",
  },
  {
    index: "03",
    title: "Shamloo AI Coach Copilot",
    faTitle: "دستیار مربیگری ورزشی با دیتابیس برداری",
    category: "RAG و تایید انسانی",
    categoryId: "agents",
    problem:
      "برنامه تمرینی دادن به هوش مصنوعیِ خالی خطرناکه؛ اگه مدل توهم بزنه ممکنه به ورزشکار آسیب‌دیده ضرر بزنه. از اون طرف شاگردها هم مدام برنامه‌هاشون رو گم می‌کردن.",
    solution:
      "صدها برنامه واقعی مربی رو ریختم توی ChromaDB؛ بات توی تلگرام وضعیت شاگرد رو می‌گیره، با Pydantic سخت‌گیرانه چکش می‌کنه و بعد از تایید خود مربی، یه PDF مرتب تحویل می‌ده.",
    outcome: "تایید نهایی با مربی، بدون توهم",
    stack: ["ChromaDB RAG", "Telegram Bot API", "Pydantic V2", "WeasyPrint"],
  },
  {
    index: "04",
    title: "SubFarsiPro & WebSubFarsi",
    faTitle: "ساخت و ترجمه زیرنویس فارسی به‌صورت آفلاین",
    category: "هوش مصنوعی آفلاین",
    categoryId: "offline",
    problem:
      "ابزارهای زیرنویس یا اشتراک دلاری و اینترنت خوب می‌خوان، یا یه ترجمه خشک و کتابی و بی‌روح تحویل می‌دن که اصلاً شبیه حرف‌زدن ما نیست.",
    solution:
      "Whisper رو با مدل‌های زبانی محلی ترکیب کردم تا همه‌چیز ۱۰۰٪ آفلاین روی سیستم خود کاربر اجرا بشه و زیرنویس با لحن محاوره‌ای و طبیعی فارسی در بیاد.",
    outcome: "اجرای کامل روی سیستم خودت",
    stack: ["Whisper AI", "Local LLM", "Python / PyQt", "Motion"],
    github: "https://github.com/rootrager/finalsubfarsi",
  },
];

export type AgentSkillId =
  | "usb-lockdownd"
  | "vision-ocr"
  | "vector-rag"
  | "local-llm"
  | "pydantic-guard"
  | "telegram-ops";

export interface AgentSkill {
  id: AgentSkillId;
  name: string;
  enName: string;
  role: string;
  detail: string;
  scenarioIds: string[];
}

export const AGENT_SKILLS: AgentSkill[] = [
  {
    id: "usb-lockdownd",
    name: "خواندن سخت‌افزار و USB",
    enName: "Lockdownd / BMS",
    role: "اتصال مستقیم به دستگاه و استخراج تله‌متری خام",
    detail:
      "بدون واسطه و کلود به پروتکل Lockdownd وصل می‌شه، سایکل واقعی باتری، سریال قطعات و ناسازگاری‌های سخت‌افزاری رو بیرون می‌کشه.",
    scenarioIds: ["iphone-forensics"],
  },
  {
    id: "vision-ocr",
    name: "بینایی ماشین و OCR",
    enName: "Vision OCR",
    role: "تحلیل تصویر بدنه گوشی و خواندن فیش بانکی",
    detail:
      "از عکس فیش‌های پایا و کارت‌به‌کارت، مبلغ و کد پیگیری رو درمیاره و وضعیت ظاهری گوشی رو برای قیمت‌گذاری دقیق‌تر بررسی می‌کنه.",
    scenarioIds: ["danifone-ops"],
  },
  {
    id: "vector-rag",
    name: "حافظه برداری و جستجوی معنایی",
    enName: "ChromaDB RAG",
    role: "بازیابی تجربه واقعی به جای حدس زدن",
    detail:
      "صدها نمونه واقعی قبلی رو ایندکس می‌کنه تا ایجنت موقع تصمیم‌گیری، به جای جواب‌های کلیشه‌ای، به داده واقعی و تست‌شده تکیه کنه.",
    scenarioIds: ["coach-copilot"],
  },
  {
    id: "local-llm",
    name: "اجرای مدل محلی و Whisper",
    enName: "Local LLM + Whisper",
    role: "پردازش متن و صوت کاملاً روی سیستم خود کاربر",
    detail:
      "با Gemma محلی و Whisper، هم تحلیل گزارش‌های فنی و هم تبدیل صوت و ترجمه محاوره‌ای فارسی رو بدون اینترنت و هزینه دلاری انجام می‌ده.",
    scenarioIds: ["iphone-forensics", "offline-subtitles"],
  },
  {
    id: "pydantic-guard",
    name: "کنترل خروجی و تایید انسانی",
    enName: "Pydantic + HITL",
    role: "جلوگیری از توهم و خطای محاسباتی",
    detail:
      "قبل از اینکه هیچ خروجی‌ای نهایی بشه، ساختار داده رو با اسکیما چک می‌کنه و جاهای حساس مثل برنامه تمرینی یا مالی رو برای تایید انسان نگه می‌داره.",
    scenarioIds: ["danifone-ops", "coach-copilot"],
  },
  {
    id: "telegram-ops",
    name: "اتصال به تلگرام و خروجی عملی",
    enName: "Telegram Bot + PDF",
    role: "تحویل کار در جایی که کاربر واقعاً حضور داره",
    detail:
      "کاربر لازم نیست سراغ پنل‌های پیچیده بره؛ پیام یا عکس رو توی تلگرام می‌فرسته و گزارش نهایی، ثبت حسابداری یا PDF مرتب رو همون‌جا تحویل می‌گیره.",
    scenarioIds: ["danifone-ops", "coach-copilot"],
  },
];

export interface WorkflowStep {
  phase: string;
  title: string;
  summary: string;
  payload: string;
}

export interface AgentScenario {
  id: string;
  label: string;
  projectRef: string;
  summary: string;
  activeSkills: AgentSkillId[];
  steps: WorkflowStep[];
}

export const AGENT_SCENARIOS: AgentScenario[] = [
  {
    id: "iphone-forensics",
    label: "کارشناسی سخت‌افزار آیفون",
    projectRef: "AURA Core-X",
    summary:
      "تشخیص باتری پروگرام‌شده و قطعات تعویضی فقط با وصل کردن کابل USB، بدون هیچ سرویس آنلاین.",
    activeSkills: ["usb-lockdownd", "local-llm"],
    steps: [
      {
        phase: "01. ورودی واقعی",
        title: "اتصال فیزیکی آیفون با USB",
        summary: "کاربر گوشی دست‌دوم رو وصل می‌کنه؛ روی نمایشگر سلامت باتری ۱۰۰٪ نشون داده می‌شه.",
        payload: "USB_DEVICE_ATTACHED -> lockdownd handshake OK",
      },
      {
        phase: "02. فراخوانی اسکیل",
        title: "استخراج دیتای خام BMS و سریال قطعات",
        summary: "اسکیل سخت‌افزاری، چرخه واقعی شارژ، ظرفیت طراحی و سریال کارخونه رو مستقیم می‌خونه.",
        payload: "bms.cycle_count=642 | raw_health=81% | display_serial=MISMATCH",
      },
      {
        phase: "03. تحلیل محلی",
        title: "جمع‌بندی گزارش با مدل محلی Gemma",
        summary: "مدل آفلاین اختلاف دیتای نمایشی و دیتای خام رو به زبان ساده برای خریدار توضیح می‌ده.",
        payload: "local_llm.summarize(heuristics, offline=true)",
      },
      {
        phase: "04. خروجی عملی",
        title: "گزارش شفاف اصالت قطعات",
        summary: "هشدار دقیق درباره پروگرام شدن باتری و تعویض نمایشگر بدون نیاز به اینترنت.",
        payload: "VERDICT: Battery reprogrammed (81% actual) · Screen replaced",
      },
    ],
  },
  {
    id: "danifone-ops",
    label: "فیش بانکی و قیمت‌گذاری زنده",
    projectRef: "DaniFone Engine",
    summary:
      "خواندن عکس فیش واریزی در تلگرام، بررسی خطای مبلغ و همگام‌سازی فوری با انبار و حسابداری.",
    activeSkills: ["vision-ocr", "pydantic-guard", "telegram-ops"],
    steps: [
      {
        phase: "01. ورودی واقعی",
        title: "ارسال عکس فیش واریزی توی تلگرام",
        summary: "فروشنده یا مشتری عکس فیش پایا/کارت‌به‌کارت رو مستقیم توی چت می‌فرسته.",
        payload: "telegram.photo_received -> receipt_4821.jpg",
      },
      {
        phase: "02. فراخوانی اسکیل",
        title: "استخراج خودکار مبلغ، زمان و کد پیگیری",
        summary: "اسکیل Vision OCR جزئیات فیش رو می‌خونه و با نرخ لحظه‌ای گوشی تطبیق می‌ده.",
        payload: "ocr.extract -> amount=78,500,000 IRR | ref=94821044",
      },
      {
        phase: "03. کنترل و اعتبارسنجی",
        title: "چک کردن تکراری نبودن فیش و اسکیما",
        summary: "Pydantic ساختار فیش رو تایید می‌کنه و از ثبت دوگانه یا مغایرت ریالی جلوگیری می‌شه.",
        payload: "pydantic.validate(ReceiptSchema) -> UNIQUE_REF_OK",
      },
      {
        phase: "04. خروجی عملی",
        title: "به‌روزرسانی انبار زنده و وضعیت همتا",
        summary: "تراکنش در SQLite WAL ثبت می‌شه و وضعیت انتقال مالکیت دستگاه در داشبورد آپدیت می‌شه.",
        payload: "sqlite.commit -> inventory_synced (83+ active devices)",
      },
    ],
  },
  {
    id: "coach-copilot",
    label: "برنامه تمرینی بدون توهم",
    projectRef: "Shamloo Copilot",
    summary:
      "ترکیب حافظه برداری برنامه‌های واقعی مربی با کنترل سخت‌گیرانه و تایید نهایی خود مربی.",
    activeSkills: ["vector-rag", "pydantic-guard", "telegram-ops"],
    steps: [
      {
        phase: "01. ورودی واقعی",
        title: "ثبت فرم وضعیت بدنی و آسیب‌دیدگی شاگرد",
        summary: "شاگرد سابقه تمرین، هدف و محدودیت‌های بدنی‌اش (مثلاً درد زانو) رو در تلگرام می‌فرسته.",
        payload: "athlete.profile -> goal=hypertrophy | injury=left_knee_mild",
      },
      {
        phase: "02. فراخوانی اسکیل",
        title: "جستجو در صدها برنامه واقعی مربی",
        summary: "ChromaDB نزدیک‌ترین الگوهای تمرینی امن و مشابه از آرشیو خود مربی رو بازیابی می‌کنه.",
        payload: "chromadb.query(k=5, filter={safe_knee: true})",
      },
      {
        phase: "03. کنترل و تایید انسانی",
        title: "اعتبارسنجی Pydantic + صف تایید مربی",
        summary: "ساختار ست‌ها و حرکات چک می‌شه و پیش‌نویس قبل از ارسال، برای تایید نهایی مربی می‌ره.",
        payload: "hitl.await_coach_approval -> APPROVED_BY_COACH",
      },
      {
        phase: "04. خروجی عملی",
        title: "تولید و ارسال PDF شکیل در تلگرام",
        summary: "برنامه نهایی بدون توهم با WeasyPrint تبدیل به PDF می‌شه و همیشگی توی چت شاگرد می‌مونه.",
        payload: "weasyprint.render -> program_week_04.pdf sent",
      },
    ],
  },
  {
    id: "offline-subtitles",
    label: "زیرنویس محاوره‌ای آفلاین",
    projectRef: "SubFarsiPro",
    summary:
      "تبدیل صوت فیلم به متن و ترجمه طبیعی فارسی به‌صورت کاملاً محلی و بدون اشتراک دلاری.",
    activeSkills: ["local-llm"],
    steps: [
      {
        phase: "01. ورودی واقعی",
        title: "انتخاب فایل ویدیو روی سیستم کاربر",
        summary: "فایل ویدیو یا صوت بدون هیچ آپلودی در کلود، مستقیم وارد صف پردازش محلی می‌شه.",
        payload: "local_fs.load -> episode_03.mkv (no network)",
      },
      {
        phase: "02. فراخوانی اسکیل",
        title: "تشخیص گفتار و زمان‌بندی دقیق با Whisper",
        summary: "موتور Whisper دیالوگ‌ها و تایم‌کدهای دقیق رو با دقت بالا استخراج می‌کنه.",
        payload: "whisper.transcribe -> 842 segments with timestamps",
      },
      {
        phase: "03. بازنویسی محاوره‌ای",
        title: "ترجمه با لحن طبیعی و اصطلاحات واقعی",
        summary: "مدل زبانی محلی دیالوگ‌ها را با توجه به بافت صحنه به فارسی روون و محاوره‌ای برمی‌گردونه.",
        payload: "local_llm.translate(tone='colloquial_fa', preserve_idioms=true)",
      },
      {
        phase: "04. خروجی عملی",
        title: "ذخیره فایل SRT آماده پخش",
        summary: "زیرنویس هماهنگ و خوانا روی سیستم ذخیره می‌شه؛ ۱۰۰٪ آفلاین و رایگان.",
        payload: "export.srt -> episode_03.fa.srt saved locally",
      },
    ],
  },
];

export interface HumanTrait {
  index: string;
  title: string;
  desc: string;
}

export const HUMAN_TRAITS: HumanTrait[] = [
  {
    index: "01",
    title: "کنجکاویِ عملی، نه فقط خواندن",
    desc: "اگه چیزی برام جالب باشه باید بازش کنم ببینم زیر کاپوتش چه خبره؛ از موتور ماشین و قطعات آیفون تا کدهای لینوکس و مدل‌های هوش مصنوعی.",
  },
  {
    index: "02",
    title: "اول مسئله واقعی، بعد ابزار",
    desc: "هیچ‌وقت برای نمایش دادن یه تکنولوژی جدید کد نمی‌زنم. هر وقت توی بازار یا کار روزمره یه دردسر واقعی می‌بینم، ابزارش رو هم می‌سازم.",
  },
  {
    index: "03",
    title: "سلیقه بصری کنار منطق فنی",
    desc: "چهار سال کار کف بازار مد و سال‌ها عکاسی یادم داد که یه محصول خوب فقط نباید کار کنه؛ باید حس درست، ظاهر تمیز و تجربه راحت داشته باشه.",
  },
  {
    index: "04",
    title: "استقلال و تمام کردن کار",
    desc: "وقتی زیر فشار یا محدودیتم، بهونه نمیارم. یاد گرفتم حتی با اینترنت سخت و ابزار محدود، راه خودم رو پیدا کنم و کار رو به نتیجه برسونم.",
  },
];

export interface NowItem {
  status: string;
  title: string;
  detail: string;
}

export const NOW_ITEMS: NowItem[] = [
  {
    status: "در حال ساخت",
    title: "دستیار هوش مصنوعی شخصی",
    detail:
      "یه دستیار شخصی با الهام از هیرو توی Big Hero 6 که بتونه به ابزارهام وصل بشه، مهارت‌های جدید یاد بگیره و کارهای روزمره رو برام انجام بده.",
  },
  {
    status: "در حال آزمایش",
    title: "گرافیک بلادرنگ با WebGPU و TSL",
    detail:
      "کار روی شیدرهای اختصاصی، نورپردازی زنده و بلوم انتخابی (مثل پروژه Box of Light) برای تجربه‌های متفاوت توی وب.",
  },
  {
    status: "در حال توسعه",
    title: "ابزارهای آفلاین سخت‌افزار و AI",
    detail:
      "تکمیل ابزارهای کارشناسی محلی iOS و مدل‌های کم‌حجم آفلاین که بدون نیاز به سرویس‌های خارجی و تحریم، سریع و دقیق کار کنن.",
  },
  {
    status: "روال روزمره",
    title: "یادگیری عمیق‌تر علوم کامپیوتر و لینوکس",
    detail:
      "ادامه مسیر دانشگاه، مهندسی معکوس، شبکه و عمیق‌تر شدن توی معماری سیستم‌های پایدار روی Arch Linux.",
  },
];

export interface TimelineStation {
  step: string;
  epoch: string;
  title: string;
  desc: string;
}

export const TIMELINE_STATIONS: TimelineStation[] = [
  {
    step: "01",
    epoch: "2010 — 2015",
    title: "اتاق کودکی، یاهو و بازی‌های قدیمی",
    desc: "زل می‌زدم به مانیتور داداشم تا ببینم با کامپیوترش چیکار می‌کنه. ساعت‌ها تو یاهو می‌گشتم، Most Wanted بازی می‌کردم و تو ذهنم دنیای ابرقهرمانی خودم رو می‌ساختم.",
  },
  {
    step: "02",
    epoch: "2015 — 2018",
    title: "زمین فوتبال و آچار مکانیکی",
    desc: "از کلاس پنجم رفتم فوتبال باشگاهی، بعدش هم دستم رفت تو آچار و مکانیکی. همون‌جا یاد گرفتم کار واقعی یعنی چی و چطور زیر فشار کم نیارم.",
  },
  {
    step: "03",
    epoch: "2018 — 2022",
    title: "دوربین عکاسی و ۴ سال کف بازار مد",
    desc: "از ۱۴ سالگی عکاسی و فیلم‌برداری رو شروع کردم و چهار سال توی فروشگاه پوشاک همه کارها، از ویترین و محتوا تا فروش رو چرخوندم. سلیقه بصری و شناخت آدم‌ها از همون‌جا اومد.",
  },
  {
    step: "04",
    epoch: "2022 — 2024",
    title: "لینوکس، امنیت و شب‌زنده‌داری‌ها",
    desc: "افتادم تو دنیای امنیت سایبری و آرچ لینوکس. روزی ۱۰ تا ۱۲ ساعت پای سیستم بودم و شبکه‌ها و سیستم‌ها رو می‌شکافتم تا بفهمم پشت پرده چطوری کار می‌کنن.",
  },
  {
    step: "05",
    epoch: "2024 — الان",
    title: "فقط پیدا کردن ایراد بس نیست، باید ساخت",
    desc: "هوش مصنوعی که اومد، دیدم بیشتر از کشف باگ، از ساختن راه‌حل لذت می‌برم. الان دارم سیستم‌های واقعی می‌سازم و دنبال ساختن دستیار هوشمند شخصیِ خودم هستم.",
  },
];

export const ABOUT_STORY_PARAGRAPHS: string[] = [
  "حدود ۱۴ سال پیش، از زیر صندلی سرک می‌کشیدم تا ببینم برادر بزرگترم با کامپیوتر زغالی‌رنگش چه می‌کند. گاهی Most Wanted بازی می‌کرد، گاهی در خیابان‌های Vice City می‌چرخید و گاهی با یک مودم قدیمی در یاهو و اینترنت می‌گشت. آن موقع نمی‌دانستم این جعبه قرار است مرا به کجا ببرد؛ فقط می‌خواستم بیشتر از آن سر دربیاورم.",
  "بعدتر، فوتبال شد تمام زندگی‌ام. بعد مکانیکی، آرایشگری و دنیای مد و ساختن برند لباس. هر بار فکر می‌کردم مسیرم را پیدا کرده‌ام، چیزی تازه توجهم را جلب می‌کرد. تنها چیزی که در تمام این سال‌ها تغییر نکرد، لپ‌تاپم بود.",
  "کنجکاوی‌ام بالاخره مرا به دنیای امنیت سایبری رساند. یاد گرفتم سیستم‌ها چطور کار می‌کنند، چطور آسیب‌پذیری‌هایشان را پیدا کنم و چطور از زاویه‌ای متفاوت به آن‌ها نگاه کنم. مدتی رؤیای تبدیل شدن به یک باگ‌بانتی‌هانتر حرفه‌ای را داشتم، تا اینکه فهمیدم بیشتر از پیدا کردن ایرادها، از ساختن راه‌حل‌ها لذت می‌برم.",
  "از آنجا برنامه‌نویسی، شبکه، لینوکس و طراحی وب وارد مسیرم شدند. دانشگاه هم فرصتی شد تا مبانی علوم کامپیوتر را جدی‌تر دنبال کنم. در تمام این مدت، هوش مصنوعی یکی از حوزه‌هایی بود که پیوسته دنبالش می‌کردم؛ از بررسی ابزارها و مدل‌ها گرفته تا آزمایش راه‌های تازه برای استفاده از آن‌ها.",
  "حالا بیشتر از هر چیز، ساختن سیستم‌هایی برایم جذاب است که بتوانند کارهای واقعی انجام دهند. یکی از ایده‌هایی که دنبال می‌کنم، ساختن یک دستیار هوش مصنوعی شخصی است؛ چیزی با الهام از هیرو در انیمیشن Big Hero 6، که بتواند ابزارهای مختلف را به هم وصل کند، مهارت‌های تازه به دست بیاورد و در انجام کارها کمکم کند.",
  "هنوز دارم یاد می‌گیرم و مسیرم تمام نشده. شاید بالاخره جواب سؤال آن بچه‌ای را پیدا کرده باشم که از زیر صندلی به مانیتور نگاه می‌کرد، اما حالا سؤال‌های بزرگ‌تری دارم.",
];

export const ABOUT_CLOSING_STATEMENT =
  "دیگر فقط نمی‌خواهم بفهمم با کامپیوتر چه کارهایی می‌شود کرد؛ می‌خواهم خودم آن‌ها را بسازم.";

export interface ArtworkItem {
  id: string;
  src: string;
  title: string;
  mood: string;
  note: string;
  span: "wide" | "tall" | "square";
}

export const ARTWORKS: ArtworkItem[] = [
  {
    id: "dreamscape",
    src: "/images/art-dreamscape.webp",
    title: "چشم‌انداز رویا",
    mood: "آرامش و خیال",
    note: "همون حسی که وسط کد زدن و فکر کردن به ایده‌های بزرگ سراغم میاد.",
    span: "wide",
  },
  {
    id: "stereogram",
    src: "/images/art-stereogram.webp",
    title: "استریوگرام ریترو",
    mood: "نوستالژی دیجیتال",
    note: "علاقه‌ام به زیبایی‌شناسی قدیمی، بافت‌های گرین‌دار و رنگ‌های تند.",
    span: "square",
  },
  {
    id: "design",
    src: "/images/art-design.webp",
    title: "پوستر تایپوگرافی پیکسلی",
    mood: "فرم و تایپ",
    note: "ترکیب نظم هندسی و تایپوگرافی که توی طراحی رابط‌ها هم همراهمه.",
    span: "square",
  },
  {
    id: "run",
    src: "/images/art-run.webp",
    title: "در حال حرکت",
    mood: "انرژی و ریتم",
    note: "یادآور اینکه هیچ‌وقت نباید سر جام وایستم و همیشه باید رو به جلو برم.",
    span: "wide",
  },
];

export type CultureKind = "all" | "game" | "screen" | "music";

export interface CultureItem {
  title: string;
  kind: Exclude<CultureKind, "all">;
  kindLabel: string;
  year: string;
  note: string;
}

export const CULTURE_FILTERS: { id: CultureKind; label: string }[] = [
  { id: "all", label: "همه" },
  { id: "screen", label: "فیلم و انیمیشن" },
  { id: "game", label: "بازی" },
  { id: "music", label: "موسیقی" },
];

export const CULTURAL_SHELF: CultureItem[] = [
  {
    title: "Big Hero 6",
    kind: "screen",
    kindLabel: "انیمیشن",
    year: "2014",
    note: "شخصیت هیرو و ساختن بایمکس از هیچ، دقیقاً همون حسیه که باعث می‌شه بخوام دستیار هوش مصنوعی خودم رو بسازم.",
  },
  {
    title: "Need for Speed: Most Wanted",
    kind: "game",
    kindLabel: "بازی",
    year: "2005",
    note: "اولین جرقه‌های پای کامپیوتر نشستن؛ حس سرعت، رقابت و لیست سیاهش هنوز توی سلیقه بصریم هست.",
  },
  {
    title: "Mr. Robot",
    kind: "screen",
    kindLabel: "سریال",
    year: "2015",
    note: "دنیای ترمینال لینوکس، کنجکاوی امنیتی و اون سکوت شبونه پای سیستم.",
  },
  {
    title: "80s Synthwave & Retrowave",
    kind: "music",
    kindLabel: "موسیقی",
    year: "Playlist",
    note: "بهترین همراه برای ساعت‌های دیباگ کردن و کدنویسی نیمه‌شب.",
  },
  {
    title: "GTA: Vice City",
    kind: "game",
    kindLabel: "بازی",
    year: "2002",
    note: "نوستالژیِ خیابان‌های نئونی و رادیوهای دهه هشتادی که از بچگی تو ذهنم مونده.",
  },
  {
    title: "Stranger Things",
    kind: "screen",
    kindLabel: "سریال",
    year: "2016",
    note: "حال‌وهوای رترو، رفاقت و حس کشف یه دنیای پنهان پشت ظاهر عادی.",
  },
];
