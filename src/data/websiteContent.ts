import bannerImage from '../assets/1.svg';
import certLogos from '../assets/Group 124.svg';
import containerImg from '../assets/Container.svg';
import planeImg from '../assets/PLANE.svg';
import shipSvg from '../Assets/Ship.svg';
import truckSvg from '../Assets/Truck.svg';
import highlightedShipSvg from '../Assets/Helighted Ship.svg';
import shipMainSvg from '../Assets/ShipMain.svg';
import cap1 from '../Assets/capablities1.svg';
import cap2 from '../Assets/capablities2.svg';
import cap3 from '../Assets/capablities3.svg';
import cap4 from '../Assets/capablities4.svg';
import cap5 from '../Assets/capablities5.svg';
import welcomeImage from '../assets/Rectangle 54.svg';
import hazardousImage from '../assets/Rectangle 56.svg';
import cargoImage from '../assets/Rectangle 57.svg';
import regulatoryImage from '../assets/Rectangle 58.svg';
import lisImage from '../assets/Rectangle 59.svg';
import ucImage from '../assets/Rectangle 60.svg';
import breakSectionImage from '../assets/2151998711 1.svg';
import aos1 from '../assets/AOS1.svg';
import aos2 from '../assets/AOS2.svg';
import aos3 from '../assets/AOS3.svg';
import partner1 from '../Assets/partner1.svg';
import partner2 from '../Assets/partner2.svg';
import partner3 from '../Assets/partner3.svg';
import partner4 from '../Assets/partner4.svg';
import partner5 from '../Assets/partner5.svg';
import partner6 from '../Assets/partner6.svg';
import award1 from '../Assets/award1.svg';
import award2 from '../Assets/award2.svg';
import award3 from '../Assets/award3.svg';
import award4 from '../Assets/award4.svg';
import award5 from '../Assets/award5.svg';
import spec1 from '../assets/specialization1.svg';
import spec2 from '../assets/specialization2.svg';
import spec3 from '../assets/specialization3.svg';
import spec4 from '../assets/specialization4.svg';
import spec5 from '../assets/specialization5.svg';
import spec6 from '../assets/specialization6.svg';
import spec7 from '../assets/specialization7.svg';
import spec8 from '../assets/specialization8.svg';
import spec9 from '../assets/specialization9.svg';
import specPlane from '../assets/specializationplane.svg';
import specTruck from '../assets/service container.svg';
import servicePlane from '../assets/ServicePlane.svg';
import connectionShip from '../assets/connectionship.svg';
import aboutPlane from '../assets/AboutUsPlane.svg';
import howWeDoItImg from '../assets/how we do it.svg';
import f1 from '../assets/Foundation1.svg';
import f2 from '../assets/Foundation2.svg';
import f3 from '../assets/Foundation3.svg';
import f4 from '../assets/Foundation4.svg';
import f5 from '../assets/Foundation5.svg';
import f6 from '../assets/Foundation6.svg';
import f7 from '../assets/Foundation7.svg';
import f8 from '../assets/Foundation8.svg';
import f9 from '../assets/Foundation9.svg';
import f10 from '../assets/Foundation10.svg';
import f11 from '../assets/Foundation11.svg';
import f12 from '../assets/Foundation12.svg';

export const websiteContent = {
    header: {
        logoText: 'INTER-FRET',
        logoSubtext: 'CONSOLIDATORS (PVT) LTD',
        navItems: [
            { label: 'About us', href: '/about' },
            { label: 'Services', href: '/service' },
            // { label: 'Achievements', href: '/achievements' },
            { label: 'Network', href: '/network' },
            { label: 'Tracking', href: '/tracking' },
        ],
        cta: 'Get in touch'
    },
    hero: {
        heading: {
            line1: 'Global',
            line2: 'Logistics &',
            line3: 'Industrial Solutions'
        },
        description: {
            highlight: 'professional logistics, evolving from an airfreight forwarder to a top-tier global network covering over',
            bold: '250 destinations.'
        },
        scrollingTexts: [
            'Scroll down to discover how it works',
            'Scroll down to discover how it works',
        ],
        bgImage: bannerImage,
        certLogos: certLogos
    },
    highlights: {
        welcomeSection: {
            label: 'Company',
            title: 'Welcome to Inter-Fret Consolidators, where innovation meets global compliance.',
            image: welcomeImage,
            firstText: 'Established in 1987 in Karachi, Inter-Fret is now one of Pakistan’s top five freight forwarders, with a head office strategically located near the airport and seaport.',
            secondText: 'We believe in exceeding customer expectations by being highly innovative and strictly compliant with global quality and safety standards. Our mission is to sustain our leadership role in supply chain solutions.',
            moreLinkVisible: true,
            bgColor: '#ffffff'
        },
        industrySection: {
            label: 'Problem',
            title: 'The industry challenges that Inter-Fret solves',
            image: hazardousImage,
            firstText: 'Handling Hazardous Materials',
            secondText: 'Many carriers refuse to transport dangerous goods. Inter-Fret\'s expertise in chemical logistics requires strict adherence to safety protocols that most logistics providers lack.',
            moreLinkVisible: false,
            bgColor: '#f9fafb'
        },
        breakSectionImage: breakSectionImage,
        challenges: [
            {
                title: 'Complex Oversized Cargo',
                description: 'Incorporating industrial machinery like 25-foot tall structures or wide cargo equipment is logistically complex. Our expertise results in costly delays.',
                image: cargoImage,
            },
            {
                title: 'Regulatory Bottlenecks',
                description: 'Navigating customs, tariff classifications, and international trade laws without expert guidance can derail shipments and disrupt supply chains.',
                image: regulatoryImage,
            },
            {
                title: 'Lack of Integrated Support',
                description: 'Clients often have to juggle multiple vendors for warehousing, and transportation, leading to a fragmented and obsolete supply chain.',
                image: lisImage,
            },
            {
                title: 'Unequipped for Every City',
                description: 'Finding logistics partners for every destination (especially far-flung locations) is difficult in a volatile market.',
                image: ucImage,
            },
        ]
    },
    answer: {
        heading: 'Solution',
        mainText: 'Our Answer is a fully integrated, certified, and specialized logistics network.',
        infoBoxes: [
            {
                title: 'Dangerous Goods Specialists',
                content: 'We are the only freight forwarder in Pakistan with DGAC (USA) membership. We safely manage explosives and radioactive materials compliant with IATA DGR and IMO guidelines.'
            },
            {
                title: 'Aviation & Ground Services',
                content: 'From crew handling and flight support to ramp services and customs formalities, we offer a complete range of ground and flight support services.'
            },
            {
                title: 'Project Cargo Expertise',
                content: 'We specialize in large, heavy, and oversized shipments. We are the only company in Pakistan with practical experience transporting 15–20ft oil drilling equipment by air via passenger aircraft.'
            },
            {
                title: 'End-to-End Supply Chain',
                content: 'Seamless door-to-door delivery, warehousing with modern inventory systems, and expert customs brokerage to ensure uninterrupted logistics.'
            }
        ],
        containerImg: containerImg,
        planeImg: planeImg
    },
    slideGallery: {
        slides: [
            {
                title: 'Shifting the paradigm from',
                description: 'Traditional, rigid logistics models',
                type: 'intro'
            },
            {
                title: 'to agile, technology-driven',
                description: 'sustainable transport solutions',
                type: 'transition',
                image: shipSvg
            },
            {
                title: 'Powered by AI & ML',
                description: 'Secure & sustainable transport solutions',
                type: 'final',
                image: truckSvg
            }
        ]
    },
    valueProp: {
        mainShipImg: shipMainSvg,
        highlight: {
            label: 'Capabilities & Specs',
            title: 'Highlights of our operational capacity'
        },
        cards: [
            {
                title: 'Global Reach',
                description: 'Network covering 250+ destinations.',
                icon: cap2
            },
            {
                title: 'Safety Standard',
                description: 'The only Pakistani forwarder handling DGR explosives / radioactive material.',
                icon: cap1
            },
            {
                title: 'Fleet',
                description: 'Own fleet of low-bed and semi-low-bed trailers.',
                icon: cap3
            },
            {
                title: 'Warehousing',
                description: 'Secure Karachi facility with 24/7 staff availability.',
                icon: cap4
            },
            {
                title: 'Capacity',
                description: 'We offer extensive capacity options to meet all your logistics needs.',
                icon: cap5
            }
        ],
        highlightedShipImg: highlightedShipSvg
    },
    specialization: {
        label: 'Our Services',
        title: 'Areas of Specialization',
        services: [
            {
                title: 'Dangerous Goods (DGR) Handling',
                image: aos1,
            },
            {
                title: 'Oil & Energy Sector Logistics',
                image: aos2,
            },
            {
                title: 'Human Remains Repatriation (HUM)',
                image: aos3,
            },
        ]
    },
    partners: {
        label: 'Partners & Investors',
        title: 'Trusted by top Partners & Supporters',
        partnerLogos: [
            { name: 'Schlumberger', src: partner1 },
            { name: 'BASF', src: partner2 },
            { name: 'Abbott', src: partner3 },
            { name: 'ICI PAKISTAN LTD.', src: partner4 },
            { name: 'Sapphire', src: partner5 },
            { name: 'ADNOC', src: partner6 },
        ],
        awards: [award1, award2, award3, award4, award5]
    },
    faq: {
        label: 'FAQ',
        title: 'Quick answers to questions you may have',
        contactText: 'Can\'t find what you\'re looking for? Contact us here:',
        contactEmail: 'info@interfret.com',
        items: [
            {
                question: "Do you handle dangerous goods?",
                answer: "Yes. We are the only freight forwarder in Pakistan with a membership to the Dangerous Goods Advisory Council (DGAC), Washington, USA. We are fully licensed to handle explosives, radioactive materials, and chemicals."
            },
            {
                question: "Can you transport oversized industrial equipment?",
                answer: "Absolutely. We specialize in Project Cargo. We have successfully moved oversized oil well drilling equipment (up to 20 feet) and offer specialized engineering services for turbines, boilers, and vessels."
            },
            {
                question: "Do you offer customs clearance services?",
                answer: "Yes. We provide comprehensive customs brokerage, including tariff classification, documentation, and regulatory compliance to prevent delays."
            },
            {
                question: "Where does your network operate?",
                answer: "We cover over 250 global destinations, with partners in the USA, Germany, China, UAE, and across Europe, Asia, and Africa."
            },
            {
                question: "Do you have warehousing facilities?",
                answer: "Yes, we own a secure warehouse located in Shershah, near the Karachi port, equipped with modern inventory management systems."
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Newsletters',
        subtitle: 'Want to stay up to date? Sign up for InterFret\'s biannual update.',
        offices: [
            {
                title: 'Head Office',
                address: 'Suite 814, 815, Park Avenue, PECHS Block 6, Shahra-e-Faisal, Karachi, Pakistan.'
            },
            {
                title: 'Branch Office',
                branches: [
                    { name: 'Lahore', info: 'Cavalry Ground (+92 42 3662-0837-9)' },
                    { name: 'Rawalpindi', info: 'New Gulzar-E-Quaid (+92 51 3570-7924-5)' },
                    { name: 'Sialkot', info: 'Ugoki Road (+92 52 3355-4468)' }
                ]
            }
        ],
        contact: {
            email: 'info@interfret.com',
            phone: '+9233154989455'
        }
    },
    about: {
        whatWeDo: {
            label: 'What we do',
            title: 'Top IATA-rated freight partner, connecting Pakistan worldwide.',
            stats: [
                { value: '4', label: 'Office Location' },
                { value: '250', label: 'Team Member' }
            ],
            image: aboutPlane,
            heading: "We show the world it's possible.",
            description: "Inter-Fret Consolidators (Pvt) Ltd being among the leaders in providing professional solution of speedy transportation to its valued customers in Pakistan and beyond. Managed by some of the most experienced personnel in the aviation trade, Inter-Fret rightly claim to be the top 5th most competitive and service oriented freight forwarding organization based in Pakistan (rated by IATA). And also developed a network for more than 250 destinations world wide."
        },
        howWeDoIt: {
            title: 'How we do it',
            description: 'IFCL is being the only company in Pakistan who has been accredited for IMS certification (Integrated Management System) for Quality, Environment, Health and Safety as follows:',
            certifications: [
                'Quality 19001:2000',
                'Environment: 14001:2004',
                'Health and Safety: 18001:1999'
            ],
            mainText: 'IFCL offers comprehensive services in the field of Supply Chain Management & logistics and always meet the expectations of its customers round the clock with an easy . Located in the heart of Karachi and 15 minutes drive from Karachi International Airport and Karachi Port makes IFCL very accessible to its clients round the clock. Not only in Karachi but too in upper Pakistan IFCL offices are located near by Airport.',
            image: howWeDoItImg
        },
        history: {
            title: 'Our History',
            phases: [
                {
                    label: 'Our History',
                    line1: 'The',
                    line2: 'Foundation &',
                    line3: 'Early Expansion'
                },
                {
                    label: 'Global Reach',
                    line1: 'Global',
                    line2: 'Standards &',
                    line3: 'Authority'
                },
                {
                    label: 'Excellence',
                    line1: 'Excellence &',
                    line2: 'Integrated',
                    line3: 'Safety'
                }
            ]
        }
    },
    milestones: [
        {
            year: '1987',
            description: 'Inter-Fret Consolidators (Pvt) Ltd is established in Karachi, starting operations primarily as an Airfreight Forwarder.',
            image: f12
        },
        {
            year: '1990',
            description: 'Expansion into Ocean Freight. The company diversifies into Sea Cargo, establishing itself as a Non-Vessel Operating Common Carrier (NVOCC).',
            image: f11
        },
        {
            year: '1991-93',
            description: 'National Network Growth Domestic presence is expanded by opening strategic branch offices in key industrial hubs: Lahore and Sialkot.',
            image: f10
        },
        {
            year: '1995',
            description: 'Industry Accreditation Officially became members of the Pakistan International Freight Forwarders Association (PIFFA) and the Karachi Chamber of Commerce & Industry (KCCI).',
            image: f9
        },
        {
            year: '1996',
            description: 'Launch of Customs Brokerage Introduced Customs Clearance services, offering clients a complete "one-window" solution for import and export documentation.',
            image: f8
        },
        {
            year: '1998',
            description: 'Pivot to Niche Logistics Made a strategic shift to specialize in high-stakes logistics, specifically Project Cargo and the Transportation of Dangerous Goods, setting the stage for future market leadership.',
            image: f7
        },
        {
            year: '2000',
            description: 'IATA Certification Achieved status as an IATA Approved Agent (International Air Transport Association), validating adherence to global aviation standards.',
            image: f6
        },
        {
            year: '2002',
            description: 'Global Compliance Milestone Recognized as a Top Agent and achieved membership with the Dangerous Goods Advisory Council (DGAC) in Washington, USA. Note: Inter-Fret became the only freight forwarder in Pakistan to hold this membership.',
            image: f5
        },
        {
            year: '2005',
            description: 'Market Dominance Recorded substantial growth in Sea Cargo market share, solidifying position as a top-tier logistics provider for ocean freight.',
            image: f4
        },
        {
            year: '2006-07',
            description: 'HSE Certification Triad – Formalized commitment to quality and safety by achieving a comprehensive suite of international certifications: ISO 9001, ISO 14001, OHSAS 18001.',
            image: f3
        },
        {
            year: '2008 - Present',
            description: 'Innovation & Global Expansion Continued expansion of the global network to over 250 destinations and securing contracts with the U.S. Armed Forces and UN for Afghanistan logistics.',
            image: f2
        },
        {
            year: '2018-19',
            description: 'Carrier Recognition Awards: Emirates SkyCargo, Qatar Airways Cargo, Lufthansa Cargo, Turkish Cargo.',
            image: f1
        }
    ],
    tracking: {
        header: {
            label: 'Visibility',
            title: 'Real-time Tracking',
            description: 'Enter your tracking number below to see the current status of your shipment.',
            validIdNote: 'IF-123456'
        },
        placeholder: 'Enter Tracking ID (e.g. IF-123456)',
        buttonText: 'Track',
        errorMessage: 'Tracking ID not found. Please try IF-123456.',
        mockData: {
            validId: 'IF-123456',
            status: 'In Transit',
            cargoType: 'Ocean Freight Bulk',
            origin: {
                name: 'Port of Karachi',
                code: 'PK KHI'
            },
            destination: {
                name: 'Port of Rotterdam',
                code: 'NL RTM'
            },
            estimatedRemaining: 'EST. 3 DAYS REMAINING',
            timeline: [
                { date: 'Jan 19, 2024', time: '14:20', task: 'Vessel Departed PK KHI', desc: 'Sailing started towards Singapore transshipment point.' },
                { date: 'Jan 18, 2024', time: '09:15', task: 'Container Loaded', desc: 'Securely loaded onto Vessel: Maersk Ganges.' },
                { date: 'Jan 16, 2024', time: '16:45', task: 'Customs Clearance PK', desc: 'Export clearance completed successfully.' },
                { date: 'Jan 15, 2024', time: '11:00', task: 'Shipment Created', desc: 'Booking confirmed and container assigned.' },
            ],
            cargoInfo: {
                containerNumber: 'MRKU-9284-1',
                typeSize: "40' High Cube",
                weightVolume: '22,450 KG / 67.3 CBM'
            }
        },
        footerNotes: 'Supported carriers: Air, Sea, and Ground Freight.'
    },
    services: {
        hero: {
            title: 'Connecting Businesses with Global Cargo Networks',
            label: 'Service',
            mainImage: servicePlane,
            secondaryImage: connectionShip
        },
        solutions: {
            title: 'Comprehensive Global Logistics, Aviation, and Industrial Solutions',
            description: "At Inter-Fret Consolidators (Pvt) Ltd, we go beyond traditional freight forwarding. We offer a fully integrated supply chain solution, ranging from specialized aviation support to industrial engineering. As Pakistan's only DGAC member and an IATA-approved agent, we handle the complex challenges others cannot."
        },
        specializations: {
            header: {
                title: 'Areas of Specialization',
                description: 'We pride ourselves on serving niche industries where precision and safety are paramount. Our core competencies include:'
            },
            items: [
                {
                    id: 1,
                    title: "Air Freight Specialists",
                    description: "Priority handling for time-sensitive global cargo.",
                    image: spec1
                },
                {
                    id: 2,
                    title: "Movement of Explosives",
                    description: "Secure, compliant transport for seismic and industrial applications.",
                    image: spec8
                },
                {
                    id: 3,
                    title: "Movement of Radioactive Material",
                    description: "Licensed handling for medical and industrial isotopes.",
                    image: spec2
                },
                {
                    id: 4,
                    title: "Dangerous Goods (DGR) Handling",
                    description: "Unmatched expertise in hazardous materials, ensuring full compliance with IATA/IMO regulations.",
                    image: spec3
                },
                {
                    id: 5,
                    title: "Oil & Energy Sector Logistics",
                    description: "Tailored support for oil companies, including the movement of rigs and oversized drilling equipment.",
                    image: spec4
                },
                {
                    id: 6,
                    title: "Oilfield Heavy Cargo Transportation",
                    description: "Transporting massive infrastructure via specialized air and road solutions.",
                    image: spec5
                },
                {
                    id: 7,
                    title: "Transportation of Project Equipment",
                    description: "End-to-end logistics for large-scale industrial projects.",
                    image: spec6
                },
                {
                    id: 8,
                    title: "Bulk & Break Bulk Cargo",
                    description: "Managing non-containerized, heavy-lift shipments.",
                    image: spec7
                },
                {
                    id: 9,
                    title: "Custom Brokerage & Warehousing",
                    description: "Seamless clearance and secure storage solutions near Karachi port.",
                    image: spec9
                }
            ],
            planeImage: specPlane,
            truckImage: specTruck
        }
    },
    countries: [
        { name: "Albania", code: "AL" },
        { name: "Angola", code: "AO" },
        { name: "Argentina", code: "AR" },
        { name: "Australia", code: "AU" },
        { name: "Austria", code: "AT" },
        { name: "Bangladesh", code: "BD" },
        { name: "Belgium", code: "BE" },
        { name: "Benin", code: "BJ" },
        { name: "Bulgaria", code: "BG" },
        { name: "Cambodia", code: "KH" },
        { name: "Canada", code: "CA" },
        { name: "Chad", code: "TD" },
        { name: "China", code: "CN" },
        { name: "Congo", code: "CG" },
        { name: "Croatia", code: "HR" },
        { name: "Cyprus", code: "CY" },
        { name: "Czech Republic", code: "CZ" },
        { name: "Denmark", code: "DK" },
        { name: "Equatorial Guinea", code: "GQ" },
        { name: "France", code: "FR" },
        { name: "French Polynesia", code: "PF" },
        { name: "Germany", code: "DE" },
        { name: "Greece", code: "GR" },
        { name: "Guadeloupe", code: "GP" },
        { name: "Guinea", code: "GN" },
        { name: "Hong Kong", code: "HK" },
        { name: "Hungary", code: "HU" },
        { name: "India", code: "IN" },
        { name: "Italy", code: "IT" },
        { name: "Korea", code: "KR" },
        { name: "Lebanon", code: "LB" },
        { name: "Luxembourg", code: "LU" },
        { name: "Madagascar", code: "MG" },
        { name: "Malaysia", code: "MY" },
        { name: "Martinique", code: "MQ" },
        { name: "Mayotte", code: "YT" },
        { name: "Morocco", code: "MA" },
        { name: "Netherlands", code: "NL" },
        { name: "New Caledonia", code: "NC" },
        { name: "New Zealand", code: "NZ" },
        { name: "Norway", code: "NO" },
        { name: "Poland", code: "PL" },
        { name: "Reunion", code: "RE" },
        { name: "Senegal", code: "SN" },
        { name: "Serbia", code: "RS" },
        { name: "Seychelles", code: "SC" },
        { name: "Singapore", code: "SG" },
        { name: "Slovenia", code: "SI" },
        { name: "Spain", code: "ES" },
        { name: "Sri Lanka", code: "LK" },
        { name: "Sweden", code: "SE" },
        { name: "Thailand", code: "TH" },
        { name: "Togo", code: "TG" },
        { name: "Turkey", code: "TR" },
        { name: "Ukraine", code: "UA" },
        { name: "United Arab Emirates", code: "AE" }
    ],
    network: {
        hero: {
            title: 'Where Inter-Fret Meets Connection.',
            label: 'Network'
        }
    },
    serviceDetails: {
        CoreFreightLogistics: {
            id: 1,
            title: "Core Freight & Logistics",
            subtitle: "Moving your cargo globally via Air, Sea, and Land.",
            sections: [
                {
                    title: "Air Cargo Services",
                    description: "We handle domestic and international air shipments ranging from small packages to large, heavy cargo.",
                    points: [
                        "Consolidation Services: Cost-effective solutions for smaller shipments.",
                        "Sea-Air & Air-Sea: Multimodal transport for optimized cost and speed.",
                        "Chartering: Full aircraft chartering for large or urgent bulk shipments.",
                        "Expedited Services: For time-critical deliveries."
                    ]
                },
                {
                    title: "Ocean Freight Services",
                    description: "As an NVOCC since 1990, we offer global shipping solutions with strong carrier partnerships.",
                    points: [
                        "FCL (Full Container Load): Exclusive container use for bulk goods.",
                        "LCL (Less-than-Container Load): Economical consolidation for smaller volumes.",
                        "Bulk & Breakbulk: Fully equipped to handle breakbulk cargo of any size (e.g., contracts with U.S. Armed Forces & UN)."
                    ]
                },
                {
                    title: "Overland & Trucking Services",
                    description: "We operate our own fleet of trucks and trailers for inland transportation and cross-border logistics.",
                    points: [
                        "Fleet Capabilities: Low-bed, semi-low-bed, and normal road feeders.",
                        "Regional Reach: Specialized cross-border shipments to neighboring countries, including Afghanistan."
                    ]
                },
                {
                    title: "Door-to-Door Delivery",
                    description: "A seamless end-to-end service picking up from the sender's location and delivering directly to the recipient's door, managing all intermediate steps."
                }
            ]
        },
        SpecializedCargoDG: {
            id: 2,
            title: "Specialized Project Cargo & Dangerous Goods",
            subtitle: "We are the specialists for hazardous, oversized, and high-value cargo.",
            sections: [
                {
                    title: "Dangerous Goods (DGR) Handling",
                    description: "We are the only freight forwarder in Pakistan with DGAC (USA) membership, ensuring strict compliance with IATA DGR and IMO guidelines.",
                    points: [
                        "Explosives: Inbound and outbound movement of explosives essential for oil rigs and multinational companies.",
                        "Radioactive Materials: Licensed personnel providing solutions for transporting radioactive materials by air and sea (often refused by other carriers).",
                        "Specialized Packing: Crating and packing specifically for DGR items."
                    ]
                },
                {
                    title: "Oversized & Project Cargo",
                    description: "We provide tailored solutions for complex, heavy, or oversized moves.",
                    points: [
                        "Oil Well Drilling Equipment: Practical experience transporting 15-20 ft oversized equipment by air via passenger aircraft.",
                        "Rig Equipment: Specialized movement of rig equipment using our own low-bed fleet.",
                        "Heavy Machinery: Relocation of industrial machinery and construction equipment."
                    ]
                }
            ]
        },
        SpecializedLogistics: {
            id: 3,
            title: "Specialized Logistics",
            subtitle: "Handling sensitive and perishable commodities with care.",
            sections: [
                {
                    title: "Human Remains Repatriation (HUM)",
                    description: "We provide dignified and professional assistance for the transportation of human remains.",
                    points: [
                        "Global Repatriation: Coordinating with airlines and embassies to return loved ones home.",
                        "Documentation: Handling all necessary health, customs, and airline clearances.",
                        "24/7 Support: Compassionate service available round-the-clock for urgent requirements."
                    ]
                },
                {
                    title: "Agriculture & Perishables",
                    description: "Reliable cold-chain and logistics solutions for the agricultural sector.",
                    points: [
                        "Fresh Produce: Temperature-controlled transport for fruits, vegetables, and seeds.",
                        "Live Plants: Handling phytosanitary certificates and swift transit times.",
                        "Farm Equipment: Import/export of agricultural machinery and fertilizers."
                    ]
                }
            ]
        },
        AviationServices: {
            id: 4,
            title: "Aviation Services",
            subtitle: "Complete ground and flight support for airlines and private operators.",
            sections: [
                {
                    title: "Ground & Cargo Handling",
                    description: "",
                    points: [
                        "Ramp Services: Export/import handling and palletization.",
                        "Cargo Operations: Acceptance, loading to aircraft, load sheet preparation, and manifest preparation.",
                        "Import Handling: De-consolidation, customs processing, and deposition."
                    ]
                },
                {
                    title: "Flight Support",
                    description: "",
                    points: [
                        "Traffic Rights: Securing over-flying permissions, landing rights, and re-fueling arrangements.",
                        "Crew Handling: Briefing, pick & drop services, and hotel reservations."
                    ]
                },
                {
                    title: "Passenger Services",
                    description: "",
                    points: [
                        "Passenger check-in, boarding, and disembarking.",
                        "Baggage handling services."
                    ]
                }
            ]
        },
        OutsourcingMaintenance: {
            id: 5,
            title: "Industrial Outsourcing & Maintenance",
            subtitle: "Specialized engineering services for your industrial assets.",
            sections: [
                {
                    title: "Services Include",
                    description: "",
                    points: [
                        "Pipeline Pigging",
                        "Surveys and Inspections",
                        "Repairs and Routine Maintenance",
                        "Machinery Relocation Services"
                    ]
                },
                {
                    title: "Machinery We Service",
                    description: "",
                    points: [
                        "Turbines & Compressors",
                        "Motors & Pumps",
                        "Burners & Boilers",
                        "Vessels & Valves",
                        "Bearings"
                    ]
                }
            ]
        },
        TradingEquipmentSupply: {
            id: 6,
            title: "Trading & Equipment Supply",
            subtitle: "Sourcing and supplying essential logistics hardware.",
            sections: [
                {
                    title: "Container Trading",
                    description: "We engage in the buying, selling, and leasing of freight containers:",
                    points: [
                        "Open-top containers",
                        "Reefers (Refrigerated)",
                        "Insulated boxes",
                        "Flat racks"
                    ]
                },
                {
                    title: "Heavy Equipment Trading",
                    description: "",
                    points: [
                        "Heavy-duty handling units",
                        "Forklifts",
                        "Top lifters"
                    ]
                }
            ]
        },
        ValueAddedServices: {
            id: 7,
            title: "Value-Added Services",
            subtitle: "Supporting your supply chain with compliance, storage, and specialized care.",
            sections: [
                {
                    title: "Customs & Compliance",
                    description: "",
                    points: [
                        "Custom Clearance / Brokerage: Handling all documentation, tariff classification, and regulatory compliance.",
                        "Custom Consultancy: Advisory on import/export regulations, taxation, and trade laws.",
                        "Clearing & Forwarding: Expert facilitation of cross-border movement."
                    ]
                },
                {
                    title: "Warehousing & Storage",
                    description: "",
                    points: [
                        "Facilities: Owned warehouse in Shershah (near Karachi port).",
                        "Management: Modern inventory systems with 24/7 staff availability to prevent demurrage.",
                        "Storage Options: Short-term and long-term storage."
                    ]
                },
                {
                    title: "Additional Specialized Logistics",
                    description: "",
                    points: [
                        "Bio-Medical Logistics: Temperature and humidity-controlled transport for pharmaceuticals, vaccines, and medical devices.",
                        "Pet Transportation: Safe travel arrangements, health compliance, and documentation for animals.",
                        "Cargo Insurance: Protection against damage, loss, or theft during transit."
                    ]
                },
                {
                    title: "Support Services",
                    description: "",
                    points: [
                        "Packing, Crating & Removal: Professional packing to minimize damage; removal services for relocating large items.",
                        "Procurement / Sourcing: Global product sourcing, supplier identification, negotiation, and logistics management.",
                        "Supply Chain Management: End-to-end solutions integrating procurement, transport, and distribution."
                    ]
                }
            ]
        }
    }
};
