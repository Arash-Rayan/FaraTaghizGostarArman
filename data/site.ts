import type {
  ActivityArea,
  CompanyInfo,
  FeatureItem,
  NavLink,
  ProductCategory,
  ProductItem,
  ProjectItem,
  ServiceItem,
  ValueItem,
} from "@/types/site";

export const company: CompanyInfo = {
  nameFa: "فرا تجهیز گستر آرمان",
  nameEn: "FTGA",
  tagline: "برق صنعتی، اتوماسیون و ابزار دقیق",
  phone: "۰۹۱۳ ۶۰۳ ۸۰۵۵",
  email: "ftgagroup.my@gmail.com",
  contacts: [
    {
      name: "مهندس حسن‌پور",
      role: "برق صنعتی، اتوماسیون و ابزار دقیق",
      phone: "۰۹۱۳ ۴۰۳ ۰۲۷۲",
    },
    {
      name: "مهندس مشهدی",
      role: "برق صنعتی، اتوماسیون و ابزار دقیق",
      phone: "۰۹۱۳ ۷۸۳ ۸۴۰۰",
    },
    {
      name: "مهندس رایان",
      role: "یادگیری ماشین، بینایی کامپیوتر و اتوماسیون با ایجنت‌ها",
      phone: "۰۹۱۳ ۶۰۳ ۸۰۵۵",
    },
  ],
};

export const navLinks: NavLink[] = [
  { href: "/", label: "خانه" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export const features: FeatureItem[] = [
  {
    title: "تابلوهای برق صنعتی",
    text: "طراحی، ساخت، نصب و راه‌اندازی تابلوهای فشار قوی، متوسط و صنعتی.",
    icon: "panel",
  },
  {
    title: "اتوماسیون و کنترل",
    text: "تابلوهای اتوماسیون، PLC، موشن کنترلر و یکپارچه‌سازی خط تولید.",
    icon: "automation",
  },
  {
    title: "ابزار دقیق",
    text: "مشاوره، انتخاب، نصب و راه‌اندازی سنسورها و تجهیزات اندازه‌گیری.",
    icon: "instrument",
  },
  {
    title: "برنامه‌نویسی فرآیند",
    text: "PLC، HMI، WinCC، CNC و تنظیم پارامتر انواع درایو.",
    icon: "code",
  },
  {
    title: "شبکه صنعتی",
    text: "مشاوره، طراحی و اجرای شبکه‌های صنعتی و انتخاب تجهیزات.",
    icon: "box",
  },
];

export const services: ServiceItem[] = [
  {
    id: "lab-equipment",
    number: "01",
    title: "تجهیزات آزمایشگاهی و ماشین مخصوص",
    text: "طراحی و ساخت تجهیزات آزمایشگاهی، دستگاه‌های لایف‌تست و ماشین‌های مخصوص صنعتی.",
    image: "/images/service-lab-equipment.jpg",
    imagePos: "center",
    details: [
      "دستگاه تست پارامترهای الکتریکی (ولتاژ، جریان، توان و ...)",
      "دستگاه تست پرشر سوئیچ با دقت ۱۰ پاسکال",
      "لایف‌تست تجهیزات و شبیه‌ساز فرآیند",
      "تست نشتی انواع سیالات (گاز و مایع)",
    ],
  },
  {
    id: "control-panels",
    number: "02",
    title: "طراحی و ساخت تابلو برق",
    text: "طراحی، ساخت، نصب و راه‌اندازی تابلوهای فشار قوی، متوسط، صنعتی، درایو و اتوماسیون.",
    image: "/images/service-panel.jpg",
    imagePos: "center 30%",
    details: [
      "طراحی نقشه‌های برق و جانمایی تابلو",
      "مونتاژ، وایرینگ، تست سرد و گرم",
      "نصب سنسور و تست I/O",
      "تحویل مستندات فنی و پارت‌لیست",
    ],
  },
  {
    id: "automation",
    number: "03",
    title: "اتوماسیون صنعتی و کنترل",
    text: "طراحی و ساخت تابلوهای اتوماسیون، مشاوره، برنامه‌نویسی PLC و موشن کنترلر.",
    image: "/images/service-automation.jpg",
    imagePos: "center",
    details: [
      "انتخاب و نصب سنسورهای فشار، دما، فلو و TDS",
      "برنامه‌نویسی انواع PLC و موشن کنترلر",
      "طراحی صفحات HMI، WinCC و مانیتورینگ",
      "تنظیم و پارامتردهی انواع درایو",
      "به‌روزرسانی سیستم‌های کنترلی قدیمی",
    ],
  },
  {
    id: "instrument-network",
    number: "04",
    title: "ابزار دقیق و شبکه صنعتی",
    text: "مشاوره در برق، ابزار دقیق و اجرای شبکه‌های صنعتی برای هوشمندسازی فرآیند.",
    image: "/images/service-instrument-network.jpg",
    imagePos: "center",
    details: [
      "ثبت داده برای تحلیل و گزارش‌گیری",
      "طراحی و اجرای شبکه صنعتی",
      "پایش انرژی پست برق و دیزل ژنراتور",
    ],
  },
];

export const brands = [
  "زیمنس",
  "دلتا",
  "یاسکاوا",
  "اشنایدر",
  "آلن-بردلی",
  "امرن",
] as const;

export const productCategories: ProductCategory[] = [
  { id: "all", label: "همه" },
  { id: "panel", label: "تابلو برق" },
  { id: "plc", label: "PLC" },
  { id: "hmi", label: "HMI" },
  { id: "drive", label: "درایو" },
  { id: "instrument", label: "ابزار دقیق" },
  { id: "network", label: "شبکه صنعتی" },
];

export const products: ProductItem[] = [
  {
    id: "panel-industrial",
    name: "تابلو برق صنعتی",
    brand: "FTGA",
    category: "panel",
    featured: true,
    text: "طراحی و ساخت تابلو قدرت، کنترل و اتوماسیون مطابق نیاز پروژه",
    image: "/images/product-panel.jpg",
    imagePos: "center",
  },
  {
    id: "plc-control",
    name: "PLC و سیستم کنترل",
    brand: "زیمنس / دلتا",
    category: "plc",
    featured: true,
    text: "انتخاب، نصب و برنامه‌نویسی PLC برای خطوط تولید و ماشین مخصوص",
    image: "/images/product-plc.jpg",
    imagePos: "center 25%",
  },
  {
    id: "hmi-panels",
    name: "HMI و مانیتورینگ",
    brand: "دلتا / زیمنس",
    category: "hmi",
    featured: true,
    text: "طراحی صفحات HMI، WinCC و مانیتورینگ فرآیند",
    image: "/images/product-hmi.jpg",
    imagePos: "center",
  },
  {
    id: "drive-vfd",
    name: "درایو و کنترل موتور",
    brand: "چندبرند",
    category: "drive",
    featured: true,
    text: "انتخاب، نصب و پارامتردهی انواع درایو و کنترل حرکت",
    image: "/images/product-switch.jpg",
    imagePos: "center top",
  },
  {
    id: "instrument-sensors",
    name: "سنسور و ابزار دقیق",
    brand: "چندبرند",
    category: "instrument",
    featured: false,
    text: "فشار، دما، فلو، سطح، TDS و تجهیزات اندازه‌گیری فرآیند",
    image: "/images/product-io.jpg",
    imagePos: "center",
  },
  {
    id: "network-industrial",
    name: "شبکه صنعتی",
    brand: "چندبرند",
    category: "network",
    featured: false,
    text: "مشاوره، طراحی و اجرای شبکه برای هوشمندسازی و ثبت داده",
    image: "/images/project-energy.jpg",
    imagePos: "center",
  },
  {
    id: "panel-mcc",
    name: "تابلو درایو و MCC",
    brand: "FTGA",
    category: "panel",
    featured: false,
    text: "تابلوهای چندخانه‌ای قدرت، درایو و توزیع برای خطوط سنگین",
    image: "/images/product-panel.jpg",
    imagePos: "center 40%",
  },
  {
    id: "hmi-wincc",
    name: "WinCC / SCADA",
    brand: "زیمنس",
    category: "hmi",
    featured: false,
    text: "طراحی صفحات مانیتورینگ خط تولید با WinCC و TIA Portal",
    image: "/images/project-mehr-hmi.jpg",
    imagePos: "center",
  },
];

/** پروژه‌های اجراشده — بدون تکرار با حوزه‌های تخصصی و راه‌حل‌های عمومی */
const caseProjects: ProjectItem[] = [
  {
    id: "yaskawa-robots",
    title: "نصب و راه‌اندازی ربات یاسکاوا",
    industry: "رباتیک صنعتی",
    featured: true,
    text: "نصب ربات‌های صنعتی یاسکاوا، تیچ موقعیت‌ها و اتصال به دستگاه‌های خط تولید.",
    image: "/images/project-robot.jpg",
    highlights: [
      "تیچ در موقعیت‌های مختلف",
      "نصب ابزار و تنظیمات مربوطه",
      "یکپارچه‌سازی با تجهیزات صنعتی",
    ],
  },
  {
    id: "textile-cops",
    title: "بروزرسانی کوپس‌وایندر نخ زاگرس",
    industry: "نساجی",
    text: "حذف کنترلرهای قدیمی و جایگزینی با PLC و HMI در کارخانه نخ زاگرس.",
    image: "/images/project-textile.jpg",
    highlights: ["برنامه‌نویسی PLC", "طراحی صفحات HMI"],
  },
  {
    id: "mehr-bistoon",
    title: "تابلو برق و کنترل مهر بیستون",
    industry: "خوراک دام",
    featured: true,
    text: "طراحی و ساخت تابلو، کابل‌کشی، تست I/O، برنامه‌نویسی PLC و صفحات WinCC-TIA.",
    image: "/images/project-mehr-hmi.jpg",
    highlights: [
      "نصب سنسور و تست سرد/گرم",
      "برنامه‌نویسی PLC",
      "طراحی HMI با WinCC-TIA",
    ],
  },
  {
    id: "patleh-roll",
    title: "تابلو کنترل دستگاه رول پاتله",
    industry: "ماشین‌سازی",
    text: "طراحی تابلو برق و کنترل، برنامه‌نویسی PLC و به‌روزرسانی اتوماسیون ماشین‌های مخصوص.",
    image: "/images/project-patleh.jpg",
    highlights: ["نصب PLC و HMI", "تست I/O", "به‌روزرسانی فرز، ساب و تراش"],
  },
  {
    id: "tampo-print",
    title: "ارتقای سیستم چاپ تامپو",
    industry: "تولید",
    text: "حذف بردهای قدیمی کمپرسور و جایگزینی با اتوماسیون صنعتی برای افزایش تولید.",
    image: "/images/project-tampo.jpg",
  },
  {
    id: "energy-monitoring",
    title: "پایش انرژی پست و دیزل ژنراتور",
    industry: "انرژی",
    text: "مانیتورینگ توان، جریان، ولتاژ و وضعیت دیزل ژنراتور با قابلیت اتصال به شبکه.",
    image: "/images/project-energy-2.jpg",
    highlights: [
      "پایش توان اکتیو و راکتیو",
      "ثبت داده برای تحلیل",
      "نمایش سرعت، دما و ولتاژ باتری",
    ],
  },
  {
    id: "mobarakeh-transfer",
    title: "مستندات ترنسفرکار فولاد مبارکه",
    industry: "فولاد",
    text: "طراحی نقشه‌های برق و اتوماسیون و تهیه مدارک مهندسی شامل UPS، ارت، پارت‌لیست و کابل‌لیست.",
    image: "/images/project-mehr.jpg",
  },
  {
    id: "glaze-furnace",
    title: "اتوماسیون کوره لعاب",
    industry: "سرامیک / لعاب",
    text: "طراحی تابلوهای برق و اتوماسیون کوره ۹۰۰ درجه با کاهش تلرانس دمایی تا ۲ درجه.",
    image: "/images/project-energy.jpg",
    highlights: [
      "کاهش مصرف گاز",
      "کاهش استهلاک مشعل",
      "کنترل دقیق دما",
    ],
  },
];

function serviceAsProject(service: ServiceItem): ProjectItem {
  return {
    id: `svc-${service.id}`,
    title: service.title,
    industry: "حوزه تخصصی",
    text: service.text,
    image: service.image,
    imagePos: service.imagePos,
    highlights: service.details,
    featured: service.id === "lab-equipment" || service.id === "automation",
  };
}

const caseById = Object.fromEntries(
  caseProjects.map((item) => [item.id, item]),
) as Record<string, ProjectItem>;

/** حوزه‌های تخصصی + پروژه‌های اجراشده — هر کارت یک تصویر منحصربه‌فرد، بدون استوک تکراری */
export const projects: ProjectItem[] = [
  serviceAsProject(services[0]),
  serviceAsProject(services[1]),
  caseById["mehr-bistoon"],
  serviceAsProject(services[2]),
  caseById["yaskawa-robots"],
  serviceAsProject(services[3]),
  caseById["energy-monitoring"],
  caseById["textile-cops"],
  caseById["patleh-roll"],
  caseById["tampo-print"],
  caseById["mobarakeh-transfer"],
  caseById["glaze-furnace"],
];

export const aboutValues: ValueItem[] = [
  {
    icon: "target",
    title: "مهندسی دقیق",
    text: "از نقشه‌کشی و پارت‌لیست تا تست سرد و گرم؛ طراحی بر اساس نیاز واقعی فرآیند.",
  },
  {
    icon: "wrench",
    title: "اجرای میدانی",
    text: "نصب تابلو، کابل‌کشی، سنسور، ربات و راه‌اندازی خط در محل پروژه.",
  },
  {
    icon: "shield",
    title: "پایداری و ایمنی",
    text: "آلارم‌دهی، اینترلاک، پایش انرژی و کاهش استهلاک تجهیزات.",
  },
  {
    icon: "users",
    title: "همراهی فنی",
    text: "مشاوره اتوماسیون، برق و ابزار دقیق از طراحی تا پشتیبانی پس از راه‌اندازی.",
  },
];

export const aboutSummary = `${company.nameFa} (${company.nameEn}) مجموعه‌ای تخصصی در حوزه برق صنعتی، اتوماسیون و ابزار دقیق است. فعالیت ما از طراحی و ساخت تجهیزات آزمایشگاهی و ماشین مخصوص آغاز می‌شود و تا طراحی، ساخت و نصب تابلوهای برق فشار قوی، متوسط و صنعتی، سیستم‌های اتوماسیون و کنترل، برنامه‌نویسی PLC و HMI، تنظیم درایو و اجرای شبکه‌های صنعتی ادامه پیدا می‌کند.`;

export const aboutIntroParagraphs = [
  `${company.nameFa} با تمرکز بر پروژه‌های واقعی صنعتی، مسیر کامل از مشاوره و طراحی تا ساخت، نصب، برنامه‌نویسی و راه‌اندازی را پوشش می‌دهد.`,
  "تجربه تیم فنی در صنایع آب و تصفیه، نساجی، خوراک دام، ماشین‌سازی، انرژی، فولاد و خطوط تولید، به ما کمک می‌کند راه‌حل را متناسب با شرایط فرآیند و استانداردهای ایمنی طراحی کنیم؛ نه صرفاً یک تابلوی آماده یا کد عمومی.",
  "هدف ما پایداری عملکرد، کاهش توقفات، مستندسازی فنی شفاف و امکان توسعه سیستم در آینده است.",
];

/** زمینه‌های فعالیت شرکت — بر اساس رزومه FTGA */
export const activityAreas: ActivityArea[] = [
  {
    id: "lab-machines",
    number: "01",
    title: "طراحی و ساخت تجهیزات آزمایشگاهی و ماشین مخصوص",
    description:
      "طراحی و ساخت تجهیزات آزمایشگاهی، دستگاه‌های تست و لایف‌تست، و ماشین‌های مخصوص صنعتی مطابق نیاز کارفرما.",
    points: [
      "دستگاه تست پارامترهای الکتریکی (ولتاژ، جریان، توان و ثبت داده)",
      "دستگاه تست پرشر سوئیچ با دقت بالا و لایف‌تست در بازه‌های کاری مشخص",
      "شبیه‌ساز فرآیند و تست نشتی انواع سیالات (گاز و مایع)",
      "طراحی و ساخت ماشین مخصوص برای خطوط و ایستگاه‌های تولیدی",
    ],
  },
  {
    id: "power-panels",
    number: "02",
    title: "تابلوهای برق فشار قوی، متوسط و صنعتی",
    description:
      "طراحی، ساخت، نصب و راه‌اندازی تابلوهای برق در سطوح مختلف قدرت و کاربردهای صنعتی.",
    points: [
      "طراحی نقشه‌های تک‌خطی، جانمایی و مستندات مهندسی",
      "ساخت و مونتاژ تابلوهای قدرت، توزیع و کنترل",
      "نصب در محل، کابل‌کشی، تست سرد و گرم و تحویل",
      "تهیه پارت‌لیست، کابل‌لیست و مدارک فنی پروژه",
    ],
  },
  {
    id: "automation-panels",
    number: "03",
    title: "تابلوهای اتوماسیون صنعتی و کنترلی",
    description:
      "طراحی و ساخت تابلوهای اتوماسیون و کنترل برای خطوط تولید، ماشین‌آلات و فرآیندهای صنعتی.",
    points: [
      "معماری کنترل و انتخاب تجهیزات مناسب فرآیند",
      "وایرینگ استاندارد، تست I/O و راه‌اندازی",
      "یکپارچه‌سازی با سنسور، درایو و سیستم‌های جانبی",
      "به‌روزرسانی تابلوها و سیستم‌های کنترلی قدیمی",
    ],
  },
  {
    id: "consulting",
    number: "04",
    title: "مشاوره اتوماسیون، برق و ابزار دقیق",
    description:
      "مشاوره تخصصی در طراحی سیستم‌های اتوماسیون صنعتی، برق و ابزار دقیق از مرحله امکان‌سنجی تا اجرا.",
    points: [
      "بررسی نیاز فرآیند و پیشنهاد معماری کنترل",
      "انتخاب برند و تجهیزات متناسب با بودجه و شرایط محیطی",
      "طراحی لوپ‌های اندازه‌گیری و کنترل",
      "بهینه‌سازی مصرف انرژی، ایمنی و نگهداری",
    ],
  },
  {
    id: "plc-motion-cnc",
    number: "05",
    title: "برنامه‌نویسی PLC، موشن کنترلر و CNC",
    description:
      "برنامه‌نویسی انواع PLC، موشن کنترلرها و دستگاه‌های CNC برای کنترل دقیق ماشین و خط تولید.",
    points: [
      "منطق فرآیندی، اینترلاک و آلارم",
      "رسیپی تولید و کنترل سیکل ماشین",
      "موشن کنترل و همگام‌سازی محورها",
      "بروزرسانی نرم‌افزار کنترلرهای قدیمی",
    ],
  },
  {
    id: "hmi-monitoring",
    number: "06",
    title: "طراحی و برنامه‌نویسی مانیتورینگ صنعتی (HMI / WinCC)",
    description:
      "طراحی صفحات مانیتورینگ و رابط اپراتور برای کنترل، پایش و ثبت داده فرآیند.",
    points: [
      "طراحی صفحات HMI کاربرپسند و صنعتی",
      "پیاده‌سازی با WinCC، TIA Portal و پنل‌های لمسی",
      "نمایش وضعیت، آلارم، ترند و گزارش",
      "ارتباط پایدار با PLC و سیستم‌های جانبی",
    ],
  },
  {
    id: "drives",
    number: "07",
    title: "تنظیم و پارامتردهی انواع درایو",
    description:
      "انتخاب، نصب، تنظیم و پارامتردهی درایوها برای کنترل موتور و بهینه‌سازی عملکرد مکانیکی.",
    points: [
      "تنظیم پارامترهای راه‌اندازی، شتاب و حفاظت",
      "هماهنگی درایو با PLC و سیستم کنترل",
      "کاهش مصرف انرژی و استهلاک مکانیکی",
      "عیب‌یابی و بهینه‌سازی عملکرد موجود",
    ],
  },
  {
    id: "industrial-network",
    number: "08",
    title: "مشاوره، طراحی و اجرای شبکه‌های صنعتی",
    description:
      "طراحی و اجرای شبکه‌های صنعتی و انتخاب تجهیزات ارتباطی برای هوشمندسازی و یکپارچه‌سازی سیستم.",
    points: [
      "انتخاب توپولوژی و تجهیزات شبکه مناسب محیط صنعتی",
      "اتصال PLC، HMI، درایو و ابزار دقیق",
      "ثبت داده و آماده‌سازی برای مانیتورینگ متمرکز",
      "پایش انرژی پست برق، دیزل ژنراتور و مصرف‌کننده‌ها",
    ],
  },
];

export const contactSubjects = [
  "طراحی تابلو برق",
  "اتوماسیون صنعتی",
  "ابزار دقیق",
  "برنامه‌نویسی PLC / HMI",
  "ربات و ماشین مخصوص",
  "استعلام تجهیزات",
] as const;

export const featuredProjects = projects.filter((item) => item.featured);
