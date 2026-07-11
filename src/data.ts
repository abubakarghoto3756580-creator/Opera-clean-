import { ServiceItem, SubscriptionPlan, WhyChooseUsItem, ProcessStep, Branch } from "./types";

export const TRANSLATIONS = {
  ar: {
    brandName: "أوبرا كلين",
    brandSubtitle: "العناية بالموضة والملابس الفاخرة",
    tagline: "تنظيف جاف وغسيل فاخر — استلام وتوصيل في جميع أنحاء الكويت",
    subTagline: "أوبرا كلين: العناية الاستثنائية بملابسك الفاخرة بلمسة من الرقي والإتقان مع توصيل سريع وموثوق.",
    bookPickup: "احجز خدمة استلام عبر واتساب",
    viewServices: "عرض الخدمات المتاحة",
    contactUs: "اتصل بنا",
    callNow: "اتصل الآن",
    complaints: "الشكاوي والاقتراحات",
    instagram: "تابعنا على إنستغرام",
    license: "رقم رخصة البلدية: 4210985 / 2022",
    whyChooseUsTitle: "لماذا تختار أوبرا كلين؟",
    whyChooseUsSubtitle: "نهتم بأدق التفاصيل لنمنح مقتنياتك الفاخرة العناية الفندقية الفائقة التي تستحقها.",
    servicesTitle: "خدماتنا المتميزة",
    servicesSubtitle: "باقة متكاملة من الخدمات المصممة خصيصاً لتلبية احتياجاتك اليومية والمناسبات الخاصة بأسلوب راقٍ.",
    bookThisService: "احجز هذه الخدمة",
    beforeAfterTitle: "روعة التحول ومثالية النتيجة",
    beforeAfterSubtitle: "انقر واسحب لرؤية سحر إزالة البقع الصعبة واستعادة بريق الملابس الأصلي بأحدث تقنيات التنظيف الصديقة للبيئة.",
    beforeLabel: "قبل التنظيف",
    afterLabel: "بعد العناية الفائقة",
    processTitle: "رحلة العناية بملابسك",
    processSubtitle: "عملية ميسرة ودقيقة من عتبة بابك وإليها لضمان تجربة غسيل مثالية خالية من المتاعب.",
    subscriptionTitle: "باقات العضوية الفاخرة",
    subscriptionSubtitle: "اشترك الآن واحصل على رصيد إضافي مجاني يمنحك أفضل قيمة لتنظيف مستمر على مدار الشهر.",
    subscribeNow: "اشترك الآن عبر واتساب",
    kd: "د.ك",
    free: "مجانًا",
    bestValue: "الأكثر توفيراً",
    branchesTitle: "فروعنا في الكويت",
    branchesSubtitle: "تفضل بزيارة أحد فروعنا الفاخرة أو دعنا نصل إليك أينما كنت.",
    allRightsReserved: "جميع الحقوق محفوظة. أوبرا كلين © ٢٠٢٦",
    navHome: "الرئيسية",
    navWhy: "لماذا نحن",
    navServices: "الخدمات",
    navCompare: "قبل وبعد",
    navProcess: "آلية العمل",
    navPlans: "الباقات",
    navBranches: "الفروع",
    staticMapLabel: "اضغط للاتصال بالفرع أو طلب المساعدة",
    expressBadge: "سريع ومضمون",
    whatsappPulseText: "تواصل معنا مباشرة",
  },
  en: {
    brandName: "Opera Clean",
    brandSubtitle: "Luxury Fabric Care & Dry Cleaning",
    tagline: "Premium Laundry & Dry Cleaning — Pickup & Delivery Across Kuwait",
    subTagline: "Opera Clean: Exceptional care for your premium garments, delivered with absolute sophistication, precision, and prompt dispatch.",
    bookPickup: "Book Pickup via WhatsApp",
    viewServices: "View Our Services",
    contactUs: "Contact Us",
    callNow: "Call Now",
    complaints: "Complaints & Feedback",
    instagram: "Follow on Instagram",
    license: "Municipal License No: 4210985 / 2022",
    whyChooseUsTitle: "Why Choose Opera Clean?",
    whyChooseUsSubtitle: "We curate every detail of fabric care to restore the original finish of your finest garments.",
    servicesTitle: "Our Premium Services",
    servicesSubtitle: "A holistic suite of specialized care services designed for your daily essentials and exquisite occasion wear.",
    bookThisService: "Book This Service",
    beforeAfterTitle: "Prisinte Transformations",
    beforeAfterSubtitle: "Drag or interact with the slider to experience how we dissolve deep stains while protecting delicate fiber structures.",
    beforeLabel: "Before Cleaning",
    afterLabel: "After Premium Care",
    processTitle: "Our Seamless Process",
    processSubtitle: "Five smooth stages designed for absolute convenience from your front door back to your wardrobe.",
    subscriptionTitle: "Premium Club Memberships",
    subscriptionSubtitle: "Subscribe today and receive complimentary free credits, giving you exceptional value and ongoing priority service.",
    subscribeNow: "Subscribe via WhatsApp",
    kd: "KD",
    free: "Free",
    bestValue: "Best Value",
    branchesTitle: "Our Luxury Branches",
    branchesSubtitle: "Visit our dedicated locations or request a concierge pick-up at your absolute convenience.",
    allRightsReserved: "All rights reserved. Opera Clean © 2026",
    navHome: "Home",
    navWhy: "Why Us",
    navServices: "Services",
    navCompare: "Before & After",
    navProcess: "How It Works",
    navPlans: "Memberships",
    navBranches: "Branches",
    staticMapLabel: "Tap to call the branch directly",
    expressBadge: "Express Guarantee",
    whatsappPulseText: "Chat with us",
  }
};

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    id: "luxury-cleaning",
    titleAr: "تنظيف فاخر فندقي",
    titleEn: "Luxury Concierge Quality",
    descAr: "نستخدم أفضل المذيبات الألمانية الصديقة للبيئة لحماية خامات القماش الفاخرة واستعادة ألوانها البراقة.",
    descEn: "We utilize eco-friendly, premium German solvents to revitalize rich fabrics and maintain exquisite structural integrity.",
    iconName: "Sparkles"
  },
  {
    id: "fast-delivery",
    titleAr: "توصيل سريع ومرن",
    titleEn: "Express Dispatch",
    descAr: "استلام وتوصيل مجاني وسريع في الوقت المحدد تماماً ليتناسب مع جدول أعمالك المزدحم.",
    descEn: "Reliable, free doorstep pickup and dispatch timed perfectly around your schedule.",
    iconName: "Truck"
  },
  {
    id: "service-24hr",
    titleAr: "خدمة على مدار الساعة",
    titleEn: "24-Hour Active Support",
    descAr: "فريقنا متواجد ومستعد لخدمتكم طوال اليوم، لتقديم حلول غسيل مرنة ومستعجلة عند الحاجة.",
    descEn: "Our team operates 24/7 to support tight deadlines and deliver pristine express laundry turnarounds.",
    iconName: "Clock"
  },
  {
    id: "fabric-care",
    titleAr: "عناية فائقة بالمنسوجات",
    titleEn: "Delicate Fiber Care",
    descAr: "طرق كوي وتجفيف متخصصة تحافظ على الملمس الناعم وتفاصيل الخياطة الدقيقة للبدل والفساتين.",
    descEn: "Tailored drying and low-temperature finishing setups built specifically for luxury suits and haute couture.",
    iconName: "Shirt"
  }
];

export const SERVICES_ITEMS: ServiceItem[] = [
  {
    id: "dry-cleaning",
    titleAr: "التنظيف الجاف الفاخر",
    titleEn: "Luxury Dry Cleaning",
    descAr: "أرقى تقنيات إزالة الأوساخ والمحافظة على النسيج للبدل الرسمية والأزياء الراقية.",
    descEn: "Superior bespoke care for formal tailoring, tailored blazers, and luxury silks.",
    imageUrl: "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=600&q=80",
    iconName: "Sparkles"
  },
  {
    id: "regular-special-clothes",
    titleAr: "الملابس العادية والخاصة",
    titleEn: "Casual & Special Attire",
    descAr: "غسيل، كوي، وتعطير برائحة فرنسية فاخرة لملابسك اليومية ومقتنياتك المفضلة.",
    descEn: "Premium washing, crisp ironing, and french misting for everyday and luxury casualwear.",
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    iconName: "Shirt"
  },
  {
    id: "wedding-dresses",
    titleAr: "فساتين الزفاف والأعراس",
    titleEn: "Wedding & Evening Gowns",
    descAr: "عناية فائقة ومفصلة لفساتين الأفراح مع تطريزاتها الحساسة باستخدام تقنيات آمنة كلياً.",
    descEn: "Meticulous detail cleaning and preserving for gowns, lace, beads, and wedding couture.",
    imageUrl: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
    iconName: "Crown"
  },
  {
    id: "abaya-cleaning",
    titleAr: "تنظيف العبايات والجلابيب",
    titleEn: "Premium Abaya & Jalabiya Care",
    descAr: "غسيل مخصص للعبايات يحافظ على سوادها الداكن، ولمعان الكريستال والتطريز اليدوي.",
    descEn: "Specialized formula washing to prevent black fading and maintain delicate stone embellishments.",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    iconName: "Heart"
  },
  {
    id: "curtains-drapery",
    titleAr: "تنظيف الستائر والمفروشات",
    titleEn: "Curtains & Premium Drapery",
    descAr: "إزالة الغبار والأتربة عن الستائر الثقيلة والخفيفة مع الكوي بالبخار وهي معلقة في مكانها.",
    descEn: "Deep allergen and dust extraction for drapes, followed by vertical steam pressing.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    iconName: "Scissors"
  },
  {
    id: "express-wash-iron",
    titleAr: "غسيل + كوي + تعطير سريع",
    titleEn: "Express Laundry & Fragrance",
    descAr: "خدمة مستعجلة للغسيل والكي والتعطير بأرقى الروائح الفواحة خلال ساعات معدودة.",
    descEn: "Supercharged wash, perfect alignment press, and signature custom misting on short notice.",
    imageUrl: "https://images.unsplash.com/photo-1604335399105-a0c5e5fd90d1?auto=format&fit=crop&w=600&q=80",
    iconName: "Flame"
  },
  {
    id: "stain-removal",
    titleAr: "إزالة البقع الصعبة والمستعصية",
    titleEn: "Advanced Stain Extraction",
    descAr: "معالجة دقيقة لبقع القهوة، الدهون، الحبر، والمكياج دون التأثير على جودة القماش.",
    descEn: "Chemical-free targeted treatment for oil, coffee, makeup, and ink on delicate textiles.",
    imageUrl: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
    iconName: "Droplet"
  },
  {
    id: "carpet-cleaning",
    titleAr: "تنظيف السجاد والموكيت الفاخر",
    titleEn: "Artisanal Carpet Cleaning",
    descAr: "غسيل عميق وتعقيم للسجاد بكافة أحجامه لإزالة الجراثيم والبقع مع حماية أليافه.",
    descEn: "Deep micro-shampoo treatment, sanitizing, and spinning for delicate wool and Persian rugs.",
    imageUrl: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
    iconName: "Grid"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    stepNumber: 1,
    titleAr: "1. حجز فوري",
    titleEn: "1. Smart Booking",
    descAr: "بلمسة واحدة عبر واتساب، حدد موقعك ووقت الاستلام المناسب لك.",
    descEn: "Submit your location and preferred schedule in seconds via WhatsApp.",
  },
  {
    id: "step-2",
    stepNumber: 2,
    titleAr: "2. استلام فاخر",
    titleEn: "2. Premium Collection",
    descAr: "يصلك مندوبنا اللبق لباب منزلك لاستلام ملابسك في حقائب حماية خاصة.",
    descEn: "Our concierge collects your garments directly from your doorstep.",
  },
  {
    id: "step-3",
    stepNumber: 3,
    titleAr: "3. العناية والتنظيف",
    titleEn: "3. Precision Cleaning",
    descAr: "يتم فحص وتصنيف الأقمشة ومعالجتها بأرقى الأساليب الصديقة للبيئة.",
    descEn: "Garments are individually triaged, pre-treated, and carefully cleaned.",
  },
  {
    id: "step-4",
    stepNumber: 4,
    titleAr: "4. فحص الجودة",
    titleEn: "4. Quality Auditing",
    descAr: "تخضع كل قطعة لفحص دقيق للتأكد من زوال البقع تماماً وجودة الكي.",
    descEn: "Every garment is double-audited for stain removal and precise alignment.",
  },
  {
    id: "step-5",
    stepNumber: 5,
    titleAr: "5. توصيل معطر",
    titleEn: "5. Scented Delivery",
    descAr: "نعيدها إليك نظيفة، مكوية، ومعطرة بأجود الروائح على علاقة وبغطاء حماية.",
    descEn: "Returned in dust-covers, pristine, and scented with premium French mists.",
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "sub-10",
    price: 10,
    value: 20,
    bonus: 10,
  },
  {
    id: "sub-15",
    price: 15,
    value: 30,
    bonus: 15,
  },
  {
    id: "sub-20",
    price: 20,
    value: 40,
    bonus: 20,
  },
  {
    id: "sub-40",
    price: 40,
    value: 60,
    bonus: 20,
    isBestValue: true,
  }
];

export const BRANCHES_DATA: Branch[] = [
  {
    id: "jahra-ind",
    nameAr: "فرع الجهراء الصناعية",
    nameEn: "Jahra Industrial Branch",
    phone: "91102095",
    phoneCall: "tel:+96591102095",
    addressAr: "الجهراء، المنطقة الصناعية، مجمع أوبرا كلين الرئيسي",
    addressEn: "Al Jahra, Industrial Area, Opera Clean Central Complex"
  },
  {
    id: "jahra-qasima",
    nameAr: "فرع الجهراء قسيمة 105",
    nameEn: "Jahra Qasima 105 Branch",
    phone: "91102095",
    phoneCall: "tel:+96591102095",
    addressAr: "الجهراء، قسيمة 105، بجوار أسواق النخبة",
    addressEn: "Al Jahra, Qasima 105, Adjacent to Elite Markets"
  },
  {
    id: "nw-salibikhat",
    nameAr: "فرع شمال غرب الصليبيخات",
    nameEn: "NW Sulaibikhat Branch",
    phone: "91102095",
    phoneCall: "tel:+96591102095",
    addressAr: "شمال غرب الصليبيخات، قطعه 1، الشارع الرئيسي",
    addressEn: "Northwest Sulaibikhat, Block 1, Main Commercial Street"
  },
  {
    id: "sabah-ahmad",
    nameAr: "فرع مدينة صباح الأحمد",
    nameEn: "Sabah Al-Ahmad City Branch",
    phone: "91102095",
    phoneCall: "tel:+96591102095",
    addressAr: "مدينة صباح الأحمد السكنية، مجمع الجمعية التعاونية الرئيسي",
    addressEn: "Sabah Al-Ahmad Residential City, Main Coop Complex"
  }
];
