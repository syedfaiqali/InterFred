import { websiteContent as baseContent } from './websiteContent'
import type { Language } from '../context/LanguageContext'

const englishContent = {
  ...baseContent,
  ui: {
    languageToggle: {
      english: 'English',
      arabic: 'Arabic',
    },
    common: {
      home: 'Home',
      mapLink: 'Click here to view on Google Maps',
      moreAboutUs: 'More about us',
      visitMore: 'Visit More',
      backToServices: 'Back to Services',
    },
    valuePropSub: {
      eyebrow: 'Why us',
      titleLines: ['Value', 'Proposition'],
      cta: "Let's discuss today!",
      cards: [
        {
          titleLines: ['Proven Track', 'Record'],
          text: 'Since 1987, we have won contracts for the U.S. Armed Forces and the United Nations, and serve clients like Schlumberger, BASF, and Abbott Laboratories.',
        },
        {
          titleLines: ['Industrial', 'Engineering'],
          text: 'Beyond transport, we offer specialized maintenance services for industrial machinery, including lifecycle assessments, pipeline pigging, and repairs.',
        },
        {
          titleLines: ['Unmatched', 'Specialization'],
          text: "We don't just move boxes. We move turbines, compressors, live animals, and sensitive bio-medical logistics under controlled conditions.",
        },
        {
          titleLines: ['Strategic', 'Partnerships'],
          text: 'Exclusive relationships with Air Cargo Group, Hartrodt Group (Germany), and Target Logistics Services (USA).',
        },
      ],
    },
    contactModal: {
      titleLines: ['Get in', 'touch with', 'us!'],
      description: 'We are currently working at full speed on the development of the ship. Feel free to reach out to us if you are keen on finding out more about Inter-Fret.',
      nameLabel: 'Your name',
      emailLabel: 'Your email',
      messageLabel: 'Message',
      emailPrompt: 'Or just wanna say hi?',
      sendCta: ['Send', 'message'],
      validation: {
        nameRequired: 'Please enter your name',
        emailRequired: 'Please enter your email',
        emailInvalid: 'Invalid email address',
        messageRequired: 'Please enter a message',
        success: 'Message sent successfully!',
        failure: 'Failed to send message. Try again.',
      },
      closeAria: 'Close modal',
    },
    scrollingText: {
      text: "Let's discuss today! Are you Interested?",
      cursorLabel: 'Say Hi!',
    },
    tracking: {
      tryPrefix: 'Try:',
      backToSearch: 'Back to Search',
      masterBill: 'Master Bill of Lading',
      origin: 'Origin',
      destination: 'Destination',
      shipmentTimeline: 'Shipment Timeline',
      cargoInfo: 'Cargo Info',
      containerNumber: 'Container Number',
      typeSize: 'Type & Size',
      weightVolume: 'Weight / Volume',
      certifiedSafe: 'Certified Safe',
    },
    partners: {
      cta: 'Partner with us today',
      awardsTitle: 'Awards & Recognition',
    },
    network: {
      locationsTitle: 'WORLDWIDE LOCATIONS',
    },
    serviceSlider: {
      eyebrow: 'Explore',
      title: 'Inter-Fret Services',
      learnMore: 'Learn More',
      prevAria: 'Previous slide',
      nextAria: 'Next slide',
      slides: [
        {
          title: 'Core Freight & Logistics',
          description: 'Comprehensive freight solutions tailored to your global needs.',
        },
        {
          title: 'Specialized Cargo & DG',
          description: 'Secure handling for dangerous, sensitive, and oversized cargo.',
        },
        {
          title: 'Specialized Logistics',
          description: 'Specialized logistics support for repatriation, perishables, and critical cargo.',
        },
        {
          title: 'Aviation Services',
          description: 'Ground handling, cargo operations, and flight support for air operators.',
        },
        {
          title: 'Outsourcing & Maintenance',
          description: 'Industrial maintenance and engineering support for critical equipment.',
        },
        {
          title: 'Trading & Equipment Supply',
          description: 'Reliable sourcing and supply of logistics hardware and heavy equipment.',
        },
        {
          title: 'Value-Added Services',
          description: 'Compliance, warehousing, insurance, and integrated support services.',
        },
      ],
    },
  },
}

const arabicContent = {
  ...englishContent,
  header: {
    ...englishContent.header,
    navItems: [
      { label: 'من نحن', href: '/about' },
      { label: 'الخدمات', href: '/service' },
      { label: 'شبكتنا', href: '/network' },
      { label: 'التتبع', href: '/tracking' },
    ],
    cta: 'تواصل معنا',
  },
  hero: {
    ...englishContent.hero,
    heading: {
      line1: 'حلول',
      line2: 'لوجستية',
      line3: 'وصناعية عالمية',
    },
    description: {
      highlight: 'الخدمات اللوجستية الاحترافية، وتطورت من شركة شحن جوي إلى شبكة عالمية رائدة تغطي أكثر من',
      bold: '250 وجهة.',
    },
    scrollingTexts: [
      'مرر للأسفل لاكتشاف كيف تعمل خدماتنا',
      'مرر للأسفل لاكتشاف كيف تعمل خدماتنا',
    ],
  },
  highlights: {
    ...englishContent.highlights,
    welcomeSection: {
      ...englishContent.highlights.welcomeSection,
      label: 'الشركة',
      title: 'مرحبًا بكم في إنتر فريت كونسوليديتورز، حيث يلتقي الابتكار بالامتثال العالمي.',
      firstText: 'تأسست إنتر فريت في عام 1987 في كراتشي، وأصبحت اليوم واحدة من أكبر خمس شركات شحن في باكستان، مع مكتب رئيسي يقع استراتيجيًا بالقرب من المطار والميناء البحري.',
      secondText: 'نؤمن بتجاوز توقعات العملاء من خلال الابتكار العالي والالتزام الصارم بمعايير الجودة والسلامة العالمية. مهمتنا هي الحفاظ على دورنا الريادي في حلول سلاسل الإمداد.',
    },
    industrySection: {
      ...englishContent.highlights.industrySection,
      label: 'التحديات',
      title: 'التحديات التي يحلها إنتر فريت في هذا القطاع',
      firstText: 'التعامل مع المواد الخطرة',
      secondText: 'يرفض العديد من الناقلين نقل البضائع الخطرة. تتطلب خبرة إنتر فريت في لوجستيات المواد الكيميائية التزامًا صارمًا ببروتوكولات السلامة التي تفتقر إليها معظم شركات الخدمات اللوجستية.',
    },
    challenges: [
      {
        ...englishContent.highlights.challenges[0],
        title: 'الشحنات الضخمة والمعقدة',
        description: 'يعد نقل الآلات الصناعية مثل الهياكل بارتفاع 25 قدمًا أو المعدات العريضة أمرًا معقدًا لوجستيًا، وتتسبب الأخطاء فيه في تأخيرات مكلفة.',
      },
      {
        ...englishContent.highlights.challenges[1],
        title: 'العوائق التنظيمية',
        description: 'قد يؤدي التعامل مع الجمارك وتصنيفات التعرفة والقوانين التجارية الدولية دون خبرة متخصصة إلى تعطيل الشحنات وإرباك سلاسل الإمداد.',
      },
      {
        ...englishContent.highlights.challenges[2],
        title: 'غياب الدعم المتكامل',
        description: 'يضطر العملاء غالبًا للتعامل مع عدة مزودين للتخزين والنقل، مما ينتج سلسلة إمداد مجزأة وغير فعالة.',
      },
      {
        ...englishContent.highlights.challenges[3],
        title: 'عدم الجاهزية لكل مدينة',
        description: 'العثور على شركاء لوجستيين لكل وجهة، خصوصًا المناطق البعيدة، أمر صعب في سوق متقلب.',
      },
    ],
  },
  answer: {
    ...englishContent.answer,
    heading: 'الحل',
    mainText: 'إجابتنا هي شبكة لوجستية متكاملة ومعتمدة ومتخصصة بالكامل.',
    infoBoxes: [
      {
        title: 'متخصصو البضائع الخطرة',
        content: 'نحن شركة الشحن الوحيدة في باكستان الحاصلة على عضوية DGAC الأمريكية. ندير المتفجرات والمواد المشعة بأمان وفق معايير IATA DGR وIMO.',
      },
      {
        title: 'خدمات الطيران والخدمات الأرضية',
        content: 'من خدمات الطواقم ودعم الرحلات إلى خدمات الساحة والإجراءات الجمركية، نقدم باقة متكاملة من خدمات الدعم الأرضي والجوي.',
      },
      {
        title: 'خبرة في شحن المشاريع',
        content: 'نتخصص في الشحنات الكبيرة والثقيلة والضخمة. نحن الشركة الوحيدة في باكستان التي تمتلك خبرة عملية في نقل معدات حفر نفط بطول 15 إلى 20 قدمًا جوًا عبر طائرات ركاب.',
      },
      {
        title: 'سلسلة إمداد من البداية للنهاية',
        content: 'توصيل سلس من الباب إلى الباب، وتخزين حديث بأنظمة جرد متطورة، وتخليص جمركي احترافي لضمان تدفق لوجستي دون انقطاع.',
      },
    ],
  },
  slideGallery: {
    ...englishContent.slideGallery,
    slides: [
      {
        ...englishContent.slideGallery.slides[0],
        title: 'نحوّل المشهد من',
        description: 'نماذج لوجستية تقليدية وجامدة',
      },
      {
        ...englishContent.slideGallery.slides[1],
        title: 'إلى حلول مرنة مدفوعة بالتقنية',
        description: 'حلول نقل مستدامة',
      },
      {
        ...englishContent.slideGallery.slides[2],
        title: 'مدعومة بالذكاء الاصطناعي وتعلّم الآلة',
        description: 'حلول نقل آمنة ومستدامة',
      },
    ],
  },
  valueProp: {
    ...englishContent.valueProp,
    highlight: {
      label: 'القدرات والمواصفات',
      title: 'أبرز قدراتنا التشغيلية',
    },
    cards: [
      { ...englishContent.valueProp.cards[0], title: 'انتشار عالمي', description: 'شبكة تغطي أكثر من 250 وجهة.' },
      { ...englishContent.valueProp.cards[1], title: 'معايير السلامة', description: 'شركة الشحن الباكستانية الوحيدة التي تتعامل مع المتفجرات والمواد المشعة وفق لوائح DGR.' },
      { ...englishContent.valueProp.cards[2], title: 'الأسطول', description: 'أسطولنا الخاص من المقطورات منخفضة الارتفاع وشبه منخفضة الارتفاع.' },
      { ...englishContent.valueProp.cards[3], title: 'التخزين', description: 'منشأة آمنة في كراتشي مع توفر الطاقم على مدار الساعة.' },
      { ...englishContent.valueProp.cards[4], title: 'السعة', description: 'نوفر خيارات سعة واسعة لتلبية جميع احتياجاتك اللوجستية.' },
    ],
  },
  specialization: {
    ...englishContent.specialization,
    label: 'خدماتنا',
    title: 'مجالات التخصص',
    services: [
      { ...englishContent.specialization.services[0], title: 'التعامل مع البضائع الخطرة (DGR)' },
      { ...englishContent.specialization.services[1], title: 'لوجستيات قطاع النفط والطاقة' },
      { ...englishContent.specialization.services[2], title: 'إعادة الرفات البشرية إلى الوطن (HUM)' },
    ],
  },
  partners: {
    ...englishContent.partners,
    label: 'الشركاء والمستثمرون',
    title: 'موثوق بنا من قبل أبرز الشركاء والداعمين',
  },
  faq: {
    ...englishContent.faq,
    label: 'الأسئلة الشائعة',
    title: 'إجابات سريعة على الأسئلة التي قد تكون لديك',
    contactText: 'لم تجد ما تبحث عنه؟ تواصل معنا هنا:',
    globalPresenceLabel: 'الانتشار العالمي',
    globalPresence: [
      {
        country: 'باكستان (المكتب الرئيسي)',
        address: 'الطابق الثاني، أمير تريد سنتر، بلوك 2، بي إي سي إتش إس، شارع الشهيد ملت، كراتشي، باكستان',
        code: 'PK'
      },
      {
        country: 'مكتب السعودية',
        address: 'أبو فراس الحمداني، الرويس، جدة 23214، المملكة العربية السعودية',
        phone: '+966 599 686 962',
        code: 'SA'
      },
      {
        country: 'الولايات المتحدة الأمريكية',
        address: '3 ذا جرين، جناح ب، دوفر، ديلاوير 19901، الولايات المتحدة الأمريكية',
        code: 'US'
      },
      {
        country: 'المملكة المتحدة',
        address: '4 شارع سانت لورانس، كوفنتري CV6 7AA، إنجلترا وويلز، المملكة المتحدة',
        code: 'GB'
      },
      {
        country: 'سنغافورة',
        address: '68 طريق سيركولار، #02-01، سنغافورة 049422',
        code: 'SG'
      }
    ],
    items: [
      {
        question: 'هل تتعاملون مع البضائع الخطرة؟',
        answer: 'نعم. نحن شركة الشحن الوحيدة في باكستان الحاصلة على عضوية مجلس استشارات البضائع الخطرة DGAC في واشنطن، الولايات المتحدة. ونحن مرخصون بالكامل للتعامل مع المتفجرات والمواد المشعة والمواد الكيميائية.',
      },
      {
        question: 'هل يمكنكم نقل المعدات الصناعية الضخمة؟',
        answer: 'بالتأكيد. نحن متخصصون في شحن المشاريع. لقد نجحنا في نقل معدات حفر آبار النفط الضخمة حتى 20 قدمًا، ونوفر خدمات هندسية متخصصة للتوربينات والغلايات والأوعية.',
      },
      {
        question: 'هل تقدمون خدمات التخليص الجمركي؟',
        answer: 'نعم. نقدم خدمات وساطة جمركية شاملة، بما في ذلك تصنيف التعرفة، والوثائق، والامتثال التنظيمي لمنع التأخير.',
      },
      {
        question: 'أين تعمل شبكتكم؟',
        answer: 'نغطي أكثر من 250 وجهة عالمية، ولدينا شركاء في الولايات المتحدة وألمانيا والصين والإمارات وعبر أوروبا وآسيا وأفريقيا.',
      },
      {
        question: 'هل لديكم مرافق تخزين؟',
        answer: 'نقوم بتشغيل مستودعات حديثة وآمنة في باكستان وحول العالم، مجهزة بأنظمة متقدمة لإدارة المخزون.',
      },
      {
        question: 'ما عنوان مكتبكم؟',
        answer: '<b>باكستان (المكتب الرئيسي):</b> الطابق الثاني، أمير تريد سنتر، بلوك 2، بي إي سي إتش إس، شارع الشهيد ملت، كراتشي، باكستان\n\n<b>مكتب السعودية:</b> شارع أبو فراس الحمداني، حي الرويس، جدة 23214، المملكة العربية السعودية\n\n<b>مكتب الولايات المتحدة:</b> 3 ذا جرين، جناح ب، دوفر، ديلاوير 19901، الولايات المتحدة الأمريكية\n\n<b>مكتب المملكة المتحدة:</b> 4 شارع سانت لورانس، كوفنتري CV6 7AA، إنجلترا وويلز، المملكة المتحدة\n\n<b>مكتب سنغافورة:</b> 68 طريق سيركولار، #02-01، سنغافورة 049422',
      },
    ],
  },
  about: {
    ...englishContent.about,
    whatWeDo: {
      ...englishContent.about.whatWeDo,
      label: 'ماذا نفعل',
      title: 'شريك شحن رائد بتصنيف IATA يربط باكستان بالعالم.',
      stats: [
        { value: '4', label: 'مواقع المكاتب' },
        { value: '250', label: 'أعضاء الفريق' },
      ],
      heading: 'نُظهر للعالم أن ذلك ممكن.',
      description: 'تُعد شركة إنتر فريت كونسوليديتورز (ذ.م.م) من الشركات الرائدة في تقديم حلول النقل السريع الاحترافية لعملائها في باكستان وخارجها. وبإدارة نخبة من أصحاب الخبرة في قطاع الطيران، تفخر إنتر فريت بكونها ضمن أفضل خمس شركات شحن من حيث التنافسية والخدمة في باكستان وفق تصنيف IATA، كما طورت شبكة تغطي أكثر من 250 وجهة حول العالم.',
    },
    howWeDoIt: {
      ...englishContent.about.howWeDoIt,
      title: 'كيف ننجز ذلك',
      description: 'تُعد IFCL الشركة الوحيدة في باكستان المعتمدة لنظام الإدارة المتكامل IMS للجودة والبيئة والصحة والسلامة كما يلي:',
      certifications: [
        'الجودة: 19001:2000',
        'البيئة: 14001:2004',
        'الصحة والسلامة: 18001:1999',
      ],
      mainText: 'توفر IFCL حلولًا متكاملة لسلسلة الإمداد والخدمات اللوجستية مع دعم موثوق على مدار الساعة. وتقع الشركة في وسط كراتشي على بعد 15 دقيقة فقط من مطار كراتشي الدولي وميناء كراتشي، ما يوفّر سهولة وصول للعملاء. وخارج كراتشي، أنشأت IFCL مكاتب إضافية في شمال باكستان بالقرب من المطارات الرئيسية لضمان خدمة سلسة في أنحاء البلاد.',
    },
    history: {
      ...englishContent.about.history,
      title: 'تاريخنا',
      phases: [
        {
          label: 'تاريخنا',
          line1: 'التأسيس',
          line2: 'والتوسع',
          line3: 'المبكر',
        },
        {
          label: 'الانتشار العالمي',
          line1: 'المعايير',
          line2: 'العالمية',
          line3: 'والاعتمادية',
        },
        {
          label: 'التميّز',
          line1: 'التميّز',
          line2: 'والسلامة',
          line3: 'المتكاملة',
        },
      ],
    },
  },
  milestones: [
    { ...englishContent.milestones[0], description: 'تأسست شركة إنتر فريت كونسوليديتورز (ذ.م.م) في كراتشي، وبدأت عملياتها أساسًا كشركة شحن جوي.' },
    { ...englishContent.milestones[1], description: 'التوسع إلى الشحن البحري. نوّعت الشركة خدماتها إلى الشحن البحري وأثبتت حضورها كناقل مشترك غير مشغّل للسفن (NVOCC).' },
    { ...englishContent.milestones[2], description: 'نمو الشبكة المحلية عبر افتتاح فروع استراتيجية في مراكز صناعية رئيسية مثل لاهور وسيالكوت.' },
    { ...englishContent.milestones[3], description: 'الاعتماد القطاعي عبر الانضمام رسميًا إلى PIFFA وغرفة تجارة وصناعة كراتشي KCCI.' },
    { ...englishContent.milestones[4], description: 'إطلاق خدمات الوساطة الجمركية وتقديم حل متكامل بنظام النافذة الواحدة لوثائق الاستيراد والتصدير.' },
    { ...englishContent.milestones[5], description: 'التحول إلى اللوجستيات المتخصصة مثل شحن المشاريع ونقل البضائع الخطرة، مما مهّد لريادة السوق لاحقًا.' },
    { ...englishContent.milestones[6], description: 'الحصول على اعتماد IATA كوكيل معتمد، تأكيدًا للالتزام بمعايير الطيران العالمية.' },
    { ...englishContent.milestones[7], description: 'إنجاز عالمي في الامتثال عبر عضوية DGAC في واشنطن، لتصبح إنتر فريت الشركة الوحيدة في باكستان الحاصلة على هذا الاعتماد.' },
    { ...englishContent.milestones[8], description: 'تعزيز الحصة السوقية في الشحن البحري وترسيخ المكانة كمزود لوجستي رائد.' },
    { ...englishContent.milestones[9], description: 'تأكيد الالتزام بالجودة والسلامة عبر الحصول على ISO 9001 وISO 14001 وOHSAS 18001.' },
    { ...englishContent.milestones[10], description: 'استمرار التوسع العالمي إلى أكثر من 250 وجهة وتأمين عقود مع القوات المسلحة الأمريكية والأمم المتحدة لخدمات أفغانستان.' },
    { ...englishContent.milestones[11], description: 'جوائز وتقديرات من شركات الشحن مثل طيران الإمارات للشحن، قطر للشحن، لوفتهانزا للشحن، وتركيش كارغو.' },
  ],
  tracking: {
    ...englishContent.tracking,
    header: {
      ...englishContent.tracking.header,
      label: 'الرؤية',
      title: 'التتبع اللحظي',
      description: 'أدخل رقم التتبع أدناه لمعرفة الحالة الحالية لشحنتك.',
      validIdNote: 'IF-123456',
    },
    placeholder: 'أدخل رقم التتبع (مثل IF-123456)',
    buttonText: 'تتبع',
    errorMessage: 'لم يتم العثور على رقم التتبع. جرّب IF-123456.',
    mockData: {
      ...englishContent.tracking.mockData,
      status: 'قيد النقل',
      cargoType: 'شحن بحري سائب',
      origin: {
        name: 'ميناء كراتشي',
        code: 'PK KHI',
      },
      destination: {
        name: 'ميناء روتردام',
        code: 'NL RTM',
      },
      estimatedRemaining: 'المتبقي التقديري: 3 أيام',
      timeline: [
        { date: '19 يناير 2024', time: '14:20', task: 'غادرت السفينة PK KHI', desc: 'بدأ الإبحار نحو نقطة إعادة الشحن في سنغافورة.' },
        { date: '18 يناير 2024', time: '09:15', task: 'تم تحميل الحاوية', desc: 'تم تحميلها بأمان على السفينة Maersk Ganges.' },
        { date: '16 يناير 2024', time: '16:45', task: 'التخليص الجمركي في باكستان', desc: 'تم إكمال التخليص التصديري بنجاح.' },
        { date: '15 يناير 2024', time: '11:00', task: 'تم إنشاء الشحنة', desc: 'تم تأكيد الحجز وتخصيص الحاوية.' },
      ],
      cargoInfo: {
        containerNumber: 'MRKU-9284-1',
        typeSize: '40 قدم هاي كيوب',
        weightVolume: '22,450 كجم / 67.3 متر مكعب',
      },
    },
    footerNotes: 'الناقلون المدعومون: الشحن الجوي والبحري والبري.',
  },
  services: {
    ...englishContent.services,
    hero: {
      ...englishContent.services.hero,
      title: 'ربط الأعمال بشبكات الشحن العالمية',
      label: 'الخدمة',
    },
    solutions: {
      ...englishContent.services.solutions,
      title: 'حلول شاملة في اللوجستيات والطيران والخدمات الصناعية',
      description: 'في إنتر فريت كونسوليديتورز (ذ.م.م)، نتجاوز مفهوم الشحن التقليدي. نقدم حلًا متكاملًا لسلسلة الإمداد، بدءًا من دعم الطيران المتخصص وحتى الهندسة الصناعية. وبصفتنا العضو الوحيد في DGAC داخل باكستان ووكيلًا معتمدًا من IATA، فإننا نتعامل مع التحديات المعقدة التي يعجز الآخرون عن معالجتها.',
    },
    specializations: {
      ...englishContent.services.specializations,
      header: {
        title: 'مجالات التخصص',
        description: 'نفخر بخدمة القطاعات المتخصصة التي تتطلب دقة وسلامة عالية. وتشمل كفاءاتنا الأساسية ما يلي:',
      },
      items: [
        { ...englishContent.services.specializations.items[0], title: 'متخصصو الشحن الجوي', description: 'معالجة ذات أولوية للشحنات العالمية الحساسة للوقت.' },
        { ...englishContent.services.specializations.items[1], title: 'نقل المتفجرات', description: 'نقل آمن ومتوافق للتطبيقات الزلزالية والصناعية.' },
        { ...englishContent.services.specializations.items[2], title: 'نقل المواد المشعة', description: 'تعامل مرخّص للنظائر الطبية والصناعية.' },
        { ...englishContent.services.specializations.items[3], title: 'التعامل مع البضائع الخطرة (DGR)', description: 'خبرة استثنائية في المواد الخطرة مع التزام كامل بلوائح IATA وIMO.' },
        { ...englishContent.services.specializations.items[4], title: 'لوجستيات قطاع النفط والطاقة', description: 'دعم مخصص لشركات النفط، بما يشمل نقل الحفارات ومعدات الحفر الضخمة.' },
        { ...englishContent.services.specializations.items[5], title: 'نقل الحمولات الثقيلة لحقول النفط', description: 'نقل البنى التحتية الضخمة عبر حلول جوية وبرية متخصصة.' },
        { ...englishContent.services.specializations.items[6], title: 'نقل معدات المشاريع', description: 'خدمات لوجستية متكاملة للمشاريع الصناعية الكبيرة.' },
        { ...englishContent.services.specializations.items[7], title: 'الشحنات السائبة والبريك بلك', description: 'إدارة الشحنات الثقيلة وغير المعبأة في حاويات.' },
        { ...englishContent.services.specializations.items[8], title: 'الوساطة الجمركية والتخزين', description: 'تخليص سلس وحلول تخزين آمنة بالقرب من ميناء كراتشي.' },
      ],
    },
  },
  countries: [
    { name: 'ألبانيا', code: 'AL' },
    { name: 'أنغولا', code: 'AO' },
    { name: 'الأرجنتين', code: 'AR' },
    { name: 'أستراليا', code: 'AU' },
    { name: 'النمسا', code: 'AT' },
    { name: 'بنغلاديش', code: 'BD' },
    { name: 'بلجيكا', code: 'BE' },
    { name: 'بنين', code: 'BJ' },
    { name: 'بلغاريا', code: 'BG' },
    { name: 'كمبوديا', code: 'KH' },
    { name: 'كندا', code: 'CA' },
    { name: 'تشاد', code: 'TD' },
    { name: 'الصين', code: 'CN' },
    { name: 'الكونغو', code: 'CG' },
    { name: 'كرواتيا', code: 'HR' },
    { name: 'قبرص', code: 'CY' },
    { name: 'جمهورية التشيك', code: 'CZ' },
    { name: 'الدنمارك', code: 'DK' },
    { name: 'غينيا الاستوائية', code: 'GQ' },
    { name: 'فرنسا', code: 'FR' },
    { name: 'بولينيزيا الفرنسية', code: 'PF' },
    { name: 'ألمانيا', code: 'DE' },
    { name: 'اليونان', code: 'GR' },
    { name: 'غوادلوب', code: 'GP' },
    { name: 'غينيا', code: 'GN' },
    { name: 'هونغ كونغ', code: 'HK' },
    { name: 'المجر', code: 'HU' },
    { name: 'الهند', code: 'IN' },
    { name: 'إيطاليا', code: 'IT' },
    { name: 'كوريا', code: 'KR' },
    { name: 'لبنان', code: 'LB' },
    { name: 'لوكسمبورغ', code: 'LU' },
    { name: 'مدغشقر', code: 'MG' },
    { name: 'ماليزيا', code: 'MY' },
    { name: 'مارتينيك', code: 'MQ' },
    { name: 'مايوت', code: 'YT' },
    { name: 'المغرب', code: 'MA' },
    { name: 'هولندا', code: 'NL' },
    { name: 'كاليدونيا الجديدة', code: 'NC' },
    { name: 'نيوزيلندا', code: 'NZ' },
    { name: 'النرويج', code: 'NO' },
    { name: 'بولندا', code: 'PL' },
    { name: 'ريونيون', code: 'RE' },
    { name: 'السنغال', code: 'SN' },
    { name: 'صربيا', code: 'RS' },
    { name: 'سيشل', code: 'SC' },
    { name: 'سنغافورة', code: 'SG' },
    { name: 'سلوفينيا', code: 'SI' },
    { name: 'إسبانيا', code: 'ES' },
    { name: 'سريلانكا', code: 'LK' },
    { name: 'السويد', code: 'SE' },
    { name: 'تايلاند', code: 'TH' },
    { name: 'توغو', code: 'TG' },
    { name: 'تركيا', code: 'TR' },
    { name: 'أوكرانيا', code: 'UA' },
    { name: 'الإمارات العربية المتحدة', code: 'AE' },
  ],
  network: {
    ...englishContent.network,
    hero: {
      title: 'حيث تلتقي إنتر فريت بالاتصال العالمي.',
      label: 'الشبكة',
    },
  },
  serviceDetails: {
    CoreFreightLogistics: {
      id: 1,
      title: 'الشحن والخدمات اللوجستية الأساسية',
      subtitle: 'ننقل شحنتك عالميًا عبر الجو والبحر والبر.',
      sections: [
        {
          title: 'خدمات الشحن الجوي',
          description: 'نتعامل مع الشحنات الجوية المحلية والدولية بدءًا من الطرود الصغيرة وحتى الشحنات الكبيرة والثقيلة.',
          points: [
            'خدمات التجميع: حلول اقتصادية للشحنات الصغيرة.',
            'البحر-جو والجو-بحر: نقل متعدد الوسائط لتحقيق توازن مثالي بين السرعة والتكلفة.',
            'الاستئجار: استئجار طائرات كاملة للشحنات الكبيرة أو العاجلة.',
            'الخدمات السريعة: للتسليمات الحساسة للوقت.',
          ],
        },
        {
          title: 'خدمات الشحن البحري',
          description: 'بصفتنا NVOCC منذ عام 1990، نقدم حلول شحن عالمية مع شراكات قوية مع شركات النقل.',
          points: [
            'FCL الحاوية الكاملة: استخدام حصري للحاوية للبضائع الكبيرة.',
            'LCL الشحن الجزئي: تجميع اقتصادي للأحجام الصغيرة.',
            'البضائع السائبة والبريك بلك: جاهزون بالكامل للتعامل مع الشحنات السائبة بأي حجم.',
          ],
        },
        {
          title: 'خدمات النقل البري والشاحنات',
          description: 'نُشغّل أسطولنا الخاص من الشاحنات والمقطورات للنقل الداخلي واللوجستيات العابرة للحدود.',
          points: [
            'قدرات الأسطول: مقطورات منخفضة وشبه منخفضة وناقلات برية عادية.',
            'الانتشار الإقليمي: شحنات متخصصة إلى الدول المجاورة بما فيها أفغانستان.',
          ],
        },
        {
          title: 'التوصيل من الباب إلى الباب',
          description: 'خدمة متكاملة تبدأ من موقع المرسل وتنتهي عند باب المستلم مع إدارة جميع المراحل الوسيطة.',
        },
      ],
    },
    SpecializedCargoDG: {
      id: 2,
      title: 'شحن المشاريع والبضائع الخطرة المتخصصة',
      subtitle: 'نحن المتخصصون في الشحنات الخطرة والضخمة وعالية القيمة.',
      sections: [
        {
          title: 'التعامل مع البضائع الخطرة (DGR)',
          description: 'نحن شركة الشحن الوحيدة في باكستان الحاصلة على عضوية DGAC الأمريكية، مع التزام صارم بلوائح IATA DGR وIMO.',
          points: [
            'المتفجرات: نقل المتفجرات الواردة والصادرة اللازمة للحفارات النفطية والشركات متعددة الجنسيات.',
            'المواد المشعة: كوادر مرخصة توفر حلولًا لنقل المواد المشعة جوًا وبحرًا.',
            'التغليف المتخصص: صناديق وتغليف مخصص لعناصر DGR.',
          ],
        },
        {
          title: 'الشحنات الضخمة وشحن المشاريع',
          description: 'نقدم حلولًا مصممة خصيصًا للحركات المعقدة والثقيلة أو الضخمة.',
          points: [
            'معدات حفر آبار النفط: خبرة عملية في نقل معدات ضخمة بطول 15 إلى 20 قدمًا جوًا عبر طائرات ركاب.',
            'معدات الحفارات: نقل متخصص باستخدام أسطولنا منخفض الارتفاع.',
            'الآلات الثقيلة: نقل المعدات الصناعية ومعدات البناء.',
          ],
        },
      ],
    },
    SpecializedLogistics: {
      id: 3,
      title: 'الخدمات اللوجستية المتخصصة',
      subtitle: 'نتعامل مع الشحنات الحساسة والقابلة للتلف بعناية.',
      sections: [
        {
          title: 'إعادة الرفات البشرية إلى الوطن (HUM)',
          description: 'نقدم مساعدة مهنية وإنسانية لنقل الرفات البشرية بكرامة.',
          points: [
            'إعادة عالمية: تنسيق مع شركات الطيران والسفارات لإعادة الأحبة إلى أوطانهم.',
            'الوثائق: إدارة جميع الموافقات الصحية والجمركية والجوية المطلوبة.',
            'دعم 24/7: خدمة متعاطفة على مدار الساعة للحالات العاجلة.',
          ],
        },
        {
          title: 'الزراعة والمواد القابلة للتلف',
          description: 'حلول موثوقة لسلسلة التبريد والخدمات اللوجستية للقطاع الزراعي.',
          points: [
            'المنتجات الطازجة: نقل بدرجات حرارة مضبوطة للفواكه والخضروات والبذور.',
            'النباتات الحية: إدارة الشهادات الصحية النباتية وسرعة العبور.',
            'المعدات الزراعية: استيراد وتصدير المعدات والأسمدة.',
          ],
        },
      ],
    },
    AviationServices: {
      id: 4,
      title: 'خدمات الطيران',
      subtitle: 'دعم أرضي وجوي متكامل لشركات الطيران والمشغلين الخاصين.',
      sections: [
        {
          title: 'المناولة الأرضية ومناولة الشحن',
          description: '',
          points: [
            'خدمات الساحة: مناولة الصادرات والواردات وتجهيز الطبالي.',
            'عمليات الشحن: الاستلام والتحميل وإعداد جداول الحمولة والبيانات.',
            'مناولة الواردات: فك التجميع والمعالجة الجمركية والإيداع.',
          ],
        },
        {
          title: 'دعم الرحلات',
          description: '',
          points: [
            'حقوق المرور: تأمين تصاريح العبور والهبوط وترتيبات التزود بالوقود.',
            'خدمات الطواقم: الإحاطة والنقل والحجوزات الفندقية.',
          ],
        },
        {
          title: 'خدمات المسافرين',
          description: '',
          points: [
            'تسجيل الركاب وصعودهم ونزولهم من الطائرة.',
            'خدمات مناولة الأمتعة.',
          ],
        },
      ],
    },
    OutsourcingMaintenance: {
      id: 5,
      title: 'الاستعانة الصناعية والصيانة',
      subtitle: 'خدمات هندسية متخصصة لأصولك الصناعية.',
      sections: [
        {
          title: 'تشمل الخدمات',
          description: '',
          points: [
            'تنظيف خطوط الأنابيب',
            'المسوحات والفحوصات',
            'الإصلاحات والصيانة الدورية',
            'خدمات نقل الآلات',
          ],
        },
        {
          title: 'الآلات التي نخدمها',
          description: '',
          points: [
            'التوربينات والضواغط',
            'المحركات والمضخات',
            'الحراقات والغلايات',
            'الأوعية والصمامات',
            'المحامل',
          ],
        },
      ],
    },
    TradingEquipmentSupply: {
      id: 6,
      title: 'التجارة وتوريد المعدات',
      subtitle: 'توريد وتجهيز معدات لوجستية أساسية.',
      sections: [
        {
          title: 'تجارة الحاويات',
          description: 'نمارس شراء وبيع وتأجير حاويات الشحن بما في ذلك:',
          points: [
            'الحاويات مفتوحة السقف',
            'الحاويات المبردة',
            'الصناديق المعزولة',
            'الحاويات المسطحة',
          ],
        },
        {
          title: 'تجارة المعدات الثقيلة',
          description: '',
          points: [
            'وحدات مناولة ثقيلة',
            'الرافعات الشوكية',
            'معدات الرفع العلوية',
          ],
        },
      ],
    },
    ValueAddedServices: {
      id: 7,
      title: 'الخدمات ذات القيمة المضافة',
      subtitle: 'ندعم سلسلة الإمداد لديك عبر الامتثال والتخزين والعناية المتخصصة.',
      sections: [
        {
          title: 'الجمارك والامتثال',
          description: '',
          points: [
            'التخليص الجمركي / الوساطة: إدارة الوثائق والتصنيفات والامتثال التنظيمي.',
            'الاستشارات الجمركية: المشورة حول لوائح الاستيراد والتصدير والضرائب والقوانين التجارية.',
            'التخليص والتفريغ: تسهيل احترافي للحركة العابرة للحدود.',
          ],
        },
        {
          title: 'التخزين والمستودعات',
          description: '',
          points: [
            'المرافق: مستودع مملوك في شيرشاه قرب ميناء كراتشي.',
            'الإدارة: أنظمة مخزون حديثة مع توفر الطاقم 24/7 لمنع رسوم التأخير.',
            'خيارات التخزين: قصير وطويل الأجل.',
          ],
        },
        {
          title: 'خدمات لوجستية متخصصة إضافية',
          description: '',
          points: [
            'اللوجستيات الطبية الحيوية: نقل بدرجات حرارة ورطوبة مضبوطة للأدوية واللقاحات والأجهزة الطبية.',
            'نقل الحيوانات الأليفة: ترتيبات سفر آمنة مع الالتزام الصحي والوثائقي.',
            'تأمين الشحن: حماية من التلف أو الفقد أو السرقة أثناء النقل.',
          ],
        },
        {
          title: 'خدمات الدعم',
          description: '',
          points: [
            'التغليف والصناديق والنقل: تغليف احترافي لتقليل الضرر وخدمات نقل للمعدات الكبيرة.',
            'الشراء / التوريد: توريد عالمي وتحديد الموردين والتفاوض وإدارة اللوجستيات.',
            'إدارة سلسلة الإمداد: حلول متكاملة تربط الشراء بالنقل والتوزيع.',
          ],
        },
      ],
    },
  },
  ui: {
    languageToggle: {
      english: 'الإنجليزية',
      arabic: 'العربية',
    },
    common: {
      home: 'الرئيسية',
      mapLink: 'اضغط هنا لعرض الموقع على خرائط جوجل',
      moreAboutUs: 'المزيد عنا',
      visitMore: 'استكشف المزيد',
      backToServices: 'العودة إلى الخدمات',
    },
    valuePropSub: {
      eyebrow: 'لماذا نحن',
      titleLines: ['عرض', 'القيمة'],
      cta: 'لنتحدث اليوم!',
      cards: [
        {
          titleLines: ['سجل', 'مثبت'],
          text: 'منذ عام 1987، فزنا بعقود مع القوات المسلحة الأمريكية والأمم المتحدة، ونخدم عملاء مثل شلمبرجير وBASF وAbbott Laboratories.',
        },
        {
          titleLines: ['الهندسة', 'الصناعية'],
          text: 'إلى جانب النقل، نقدم خدمات صيانة متخصصة للآلات الصناعية، بما في ذلك تقييمات دورة الحياة وتنظيف خطوط الأنابيب والإصلاحات.',
        },
        {
          titleLines: ['تخصص', 'استثنائي'],
          text: 'نحن لا ننقل الصناديق فقط. بل ننقل التوربينات والضواغط والحيوانات الحية والشحنات الطبية الحيوية الحساسة ضمن ظروف مضبوطة.',
        },
        {
          titleLines: ['شراكات', 'استراتيجية'],
          text: 'علاقات حصرية مع Air Cargo Group وHartrodt Group (ألمانيا) وTarget Logistics Services (الولايات المتحدة).',
        },
      ],
    },
    contactModal: {
      titleLines: ['تواصل', 'معنا', 'الآن'],
      description: 'نعمل بكامل السرعة على تطوير حلولنا. لا تتردد في التواصل معنا إذا كنت ترغب في معرفة المزيد عن إنتر فريت.',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      messageLabel: 'الرسالة',
      emailPrompt: 'أو فقط تريد إلقاء التحية؟',
      sendCta: ['إرسال', 'الرسالة'],
      validation: {
        nameRequired: 'يرجى إدخال الاسم',
        emailRequired: 'يرجى إدخال البريد الإلكتروني',
        emailInvalid: 'عنوان البريد الإلكتروني غير صالح',
        messageRequired: 'يرجى إدخال رسالة',
        success: 'تم إرسال الرسالة بنجاح!',
        failure: 'فشل إرسال الرسالة. حاول مرة أخرى.',
      },
      closeAria: 'إغلاق النافذة',
    },
    scrollingText: {
      text: 'لنتحدث اليوم! هل أنت مهتم؟',
      cursorLabel: 'قل مرحبًا!',
    },
    tracking: {
      tryPrefix: 'جرّب:',
      backToSearch: 'العودة إلى البحث',
      masterBill: 'بوليصة الشحن الرئيسية',
      origin: 'المنشأ',
      destination: 'الوجهة',
      shipmentTimeline: 'الجدول الزمني للشحنة',
      cargoInfo: 'معلومات الشحنة',
      containerNumber: 'رقم الحاوية',
      typeSize: 'النوع والحجم',
      weightVolume: 'الوزن / الحجم',
      certifiedSafe: 'معتمد وآمن',
    },
    partners: {
      cta: 'كن شريكًا معنا اليوم',
      awardsTitle: 'الجوائز والتقدير',
    },
    network: {
      locationsTitle: 'وجهاتنا حول العالم',
    },
    serviceSlider: {
      eyebrow: 'استكشف',
      title: 'خدمات إنتر فريت',
      learnMore: 'اعرف المزيد',
      prevAria: 'الشريحة السابقة',
      nextAria: 'الشريحة التالية',
      slides: [
        {
          title: 'الشحن والخدمات اللوجستية الأساسية',
          description: 'حلول شحن متكاملة مصممة لتلبية احتياجاتك العالمية.',
        },
        {
          title: 'الشحن المتخصص والبضائع الخطرة',
          description: 'مناولة آمنة للبضائع الخطرة والحساسة والضخمة.',
        },
        {
          title: 'الخدمات اللوجستية المتخصصة',
          description: 'دعم لوجستي متخصص للرفات البشرية والمواد القابلة للتلف والشحنات الحرجة.',
        },
        {
          title: 'خدمات الطيران',
          description: 'مناولة أرضية وعمليات شحن ودعم رحلات للمشغلين الجويين.',
        },
        {
          title: 'الاستعانة الصناعية والصيانة',
          description: 'دعم هندسي وصيانة صناعية للمعدات الحيوية.',
        },
        {
          title: 'التجارة وتوريد المعدات',
          description: 'توريد موثوق لمعدات اللوجستيات والمعدات الثقيلة.',
        },
        {
          title: 'الخدمات ذات القيمة المضافة',
          description: 'الامتثال والتخزين والتأمين وخدمات الدعم المتكامل.',
        },
      ],
    },
  },
}

export const websiteContentByLanguage = {
  en: englishContent,
  ar: arabicContent,
}

export const getWebsiteContent = (language: Language) => websiteContentByLanguage[language]
