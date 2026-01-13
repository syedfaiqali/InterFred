import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import CoreFreight from '../assets/CFLMain.svg';
import CFL1 from '../assets/CFL1.svg';
import CFL2 from '../assets/CFL2.svg';
import CFL3 from '../assets/CFL3.svg';
import CFL4 from '../assets/CFL$.svg';
import SPCDG1 from '../assets/SPCDG1.svg';
import SPCDG2 from '../assets/SPCDG2.svg';
import SPCDG3 from '../assets/SPCDG3.svg';
import SL1 from '../assets/SL1.svg';
import SL2 from '../assets/SL2.svg';
import SL3 from '../assets/SL3.svg';
import AS1 from '../assets/AS1.svg';
import AS2 from '../assets/AS2.svg';
import AS3 from '../assets/AS3.svg';
import AS4 from '../assets/AS4.svg';
import OM1 from '../assets/OM1.svg';
import OM2 from '../assets/OM2.svg';
import OM3 from '../assets/OM3.svg';
import TES1 from '../assets/TES1.svg';
import TES2 from '../assets/TES2.svg';
import TES3 from '../assets/TES3.svg';
import VAS1 from '../assets/VAS1.svg';
import VAS2 from '../assets/VAS2.svg';
import VAS3 from '../assets/VAS3.svg';
import VAS4 from '../assets/VAS4.svg';
import VAS5 from '../assets/VAS5.svg';

interface ServiceSection {
    title: string;
    description: string;
    points?: string[];
    image: string;
}

interface ServiceDetailData {
    id: number;
    title: string;
    subtitle: string;
    heroImage: string;
    sections: ServiceSection[];
}

const serviceDetails: Record<string, ServiceDetailData> = {
    "CoreFreightLogistics": { // Core Freight & Logistics
        id: 1,
        title: "Core Freight & Logistics",
        subtitle: "Moving your cargo globally via Air, Sea, and Land.",
        heroImage: CoreFreight,
        sections: [
            {
                title: "Air Cargo Services",
                description: "We handle domestic and international air shipments ranging from small packages to large, heavy cargo.",
                points: [
                    "Consolidation Services: Cost-effective solutions for smaller shipments.",
                    "Sea-Air & Air-Sea: Multimodal transport for optimized cost and speed.",
                    "Chartering: Full aircraft chartering for large or urgent bulk shipments.",
                    "Expedited Services: For time-critical deliveries."
                ],
                image: CFL1
            },
            {
                title: "Ocean Freight Services",
                description: "As an NVOCC since 1990, we offer global shipping solutions with strong carrier partnerships.",
                points: [
                    "FCL (Full Container Load): Exclusive container use for bulk goods.",
                    "LCL (Less-than-Container Load): Economical consolidation for smaller volumes.",
                    "Bulk & Breakbulk: Fully equipped to handle breakbulk cargo of any size (e.g., contracts with U.S. Armed Forces & UN)."
                ],
                image: CFL2
            },
            {
                title: "Overland & Trucking Services",
                description: "We operate our own fleet of trucks and trailers for inland transportation and cross-border logistics.",
                points: [
                    "Fleet Capabilities: Low-bed, semi-low-bed, and normal road feeders.",
                    "Regional Reach: Specialized cross-border shipments to neighboring countries, including Afghanistan."
                ],
                image: CFL3
            },
            {
                title: "Door-to-Door Delivery",
                description: "A seamless end-to-end service picking up from the sender's location and delivering directly to the recipient's door, managing all intermediate steps.",
                image: CFL4
            }
        ]
    },
    "SpecializedCargoDG": { // Specialized Project Cargo & Dangerous Goods
        id: 2,
        title: "Specialized Project Cargo & Dangerous Goods",
        subtitle: "We are the specialists for hazardous, oversized, and high-value cargo.",
        heroImage: SPCDG3,
        sections: [
            {
                title: "Dangerous Goods (DGR) Handling",
                description: "We are the only freight forwarder in Pakistan with DGAC (USA) membership, ensuring strict compliance with IATA DGR and IMO guidelines.",
                points: [
                    "Explosives: Inbound and outbound movement of explosives essential for oil rigs and multinational companies.",
                    "Radioactive Materials: Licensed personnel providing solutions for transporting radioactive materials by air and sea (often refused by other carriers).",
                    "Specialized Packing: Crating and packing specifically for DGR items."
                ],
                image: SPCDG1
            },
            {
                title: "Oversized & Project Cargo",
                description: "We provide tailored solutions for complex, heavy, or oversized moves.",
                points: [
                    "Oil Well Drilling Equipment: Practical experience transporting 15-20 ft oversized equipment by air via passenger aircraft.",
                    "Rig Equipment: Specialized movement of rig equipment using our own low-bed fleet.",
                    "Heavy Machinery: Relocation of industrial machinery and construction equipment."
                ],
                image: SPCDG2
            }
        ]
    },
    "SpecializedLogistics": { // Specialized Logistics
        id: 3,
        title: "Specialized Logistics",
        subtitle: "Handling sensitive and perishable commodities with care.",
        heroImage: SL3,
        sections: [
            {
                title: "Human Remains Repatriation (HUM)",
                description: "We provide dignified and professional assistance for the transportation of human remains.",
                points: [
                    "Global Repatriation: Coordinating with airlines and embassies to return loved ones home.",
                    "Documentation: Handling all necessary health, customs, and airline clearances.",
                    "24/7 Support: Compassionate service available round-the-clock for urgent requirements."
                ],
                image: SL1
            },
            {
                title: "Agriculture & Perishables",
                description: "Reliable cold-chain and logistics solutions for the agricultural sector.",
                points: [
                    "Fresh Produce: Temperature-controlled transport for fruits, vegetables, and seeds.",
                    "Live Plants: Handling phytosanitary certificates and swift transit times.",
                    "Farm Equipment: Import/export of agricultural machinery and fertilizers."
                ],
                image: SL2
            }
        ]
    },
    "AviationServices": { // Aviation Services
        id: 4,
        title: "Aviation Services",
        subtitle: "Complete ground and flight support for airlines and private operators.",
        heroImage: AS4,
        sections: [
            {
                title: "Ground & Cargo Handling",
                description: "",
                points: [
                    "Ramp Services: Export/import handling and palletization.",
                    "Cargo Operations: Acceptance, loading to aircraft, load sheet preparation, and manifest preparation.",
                    "Import Handling: De-consolidation, customs processing, and deposition."
                ],
                image: AS3
            },
            {
                title: "Flight Support",
                description: "",
                points: [
                    "Traffic Rights: Securing over-flying permissions, landing rights, and re-fueling arrangements.",
                    "Crew Handling: Briefing, pick & drop services, and hotel reservations."
                ],
                image: AS2
            },
            {
                title: "Passenger Services",
                description: "",
                points: [
                    "Passenger check-in, boarding, and disembarking.",
                    "Baggage handling services."
                ],
                image: AS1
            }
        ]
    },
    "OutsourcingMaintenance": { // Industrial Outsourcing & Maintenance
        id: 5,
        title: "Industrial Outsourcing & Maintenance",
        subtitle: "Specialized engineering services for your industrial assets.",
        heroImage: OM1,
        sections: [
            {
                title: "Services Include",
                description: "",
                points: [
                    "Pipeline Pigging",
                    "Surveys and Inspections",
                    "Repairs and Routine Maintenance",
                    "Machinery Relocation Services"
                ],
                image: OM2
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
                ],
                image: OM3
            }
        ]
    },
    "TradingEquipmentSupply": { // Trading & Equipment Supply
        id: 6,
        title: "Trading & Equipment Supply",
        subtitle: "Sourcing and supplying essential logistics hardware.",
        heroImage: TES1,
        sections: [
            {
                title: "Container Trading",
                description: "We engage in the buying, selling, and leasing of freight containers:",
                points: [
                    "Open-top containers",
                    "Reefers (Refrigerated)",
                    "Insulated boxes",
                    "Flat racks"
                ],
                image: TES2
            },
            {
                title: "Heavy Equipment Trading",
                description: "",
                points: [
                    "Heavy-duty handling units",
                    "Forklifts",
                    "Top lifters"
                ],
                image: TES3
            }
        ]
    },
    "ValueAddedServices": { // Value-Added Services
        id: 7,
        title: "Value-Added Services",
        subtitle: "Supporting your supply chain with compliance, storage, and specialized care.",
        heroImage: VAS5,
        sections: [
            {
                title: "Customs & Compliance",
                description: "",
                points: [
                    "Custom Clearance / Brokerage: Handling all documentation, tariff classification, and regulatory compliance.",
                    "Custom Consultancy: Advisory on import/export regulations, taxation, and trade laws.",
                    "Clearing & Forwarding: Expert facilitation of cross-border movement."
                ],
                image: VAS1
            },
            {
                title: "Warehousing & Storage",
                description: "",
                points: [
                    "Facilities: Owned warehouse in Shershah (near Karachi port).",
                    "Management: Modern inventory systems with 24/7 staff availability to prevent demurrage.",
                    "Storage Options: Short-term and long-term storage."
                ],
                image: VAS2
            },
            {
                title: "Additional Specialized Logistics",
                description: "",
                points: [
                    "Bio-Medical Logistics: Temperature and humidity-controlled transport for pharmaceuticals, vaccines, and medical devices.",
                    "Pet Transportation: Safe travel arrangements, health compliance, and documentation for animals.",
                    "Cargo Insurance: Protection against damage, loss, or theft during transit."
                ],
                image: VAS3
            },
            {
                title: "Support Services",
                description: "",
                points: [
                    "Packing, Crating & Removal: Professional packing to minimize damage; removal services for relocating large items.",
                    "Procurement / Sourcing: Global product sourcing, supplier identification, negotiation, and logistics management.",
                    "Supply Chain Management: End-to-end solutions integrating procurement, transport, and distribution."
                ],
                image: VAS4
            }
        ]
    },
    // Fallbacks for other IDs
    "default": {
        id: 0,
        title: "Core Freight & Logistics",
        subtitle: "Moving your cargo globally via Air, Sea, and Land.",
        heroImage: CoreFreight,
        sections: [
            {
                title: "Air Cargo Services",
                description: "We handle domestic and international air shipments ranging from small packages to large, heavy cargo.",
                points: [
                    "Consolidation Services: Cost-effective solutions for smaller shipments.",
                    "Sea-Air & Air-Sea: Multimodal transport for optimized cost and speed.",
                    "Chartering: Full aircraft chartering for large or urgent bulk shipments.",
                    "Expedited Services: For time-critical deliveries."
                ],
                image: CFL1
            },
            {
                title: "Ocean Freight Services",
                description: "As an NVOCC since 1990, we offer global shipping solutions with strong carrier partnerships.",
                points: [
                    "FCL (Full Container Load): Exclusive container use for bulk goods.",
                    "LCL (Less-than-Container Load): Economical consolidation for smaller volumes.",
                    "Bulk & Breakbulk: Fully equipped to handle breakbulk cargo of any size (e.g., contracts with U.S. Armed Forces & UN)."
                ],
                image: CFL2
            },
            {
                title: "Overland & Trucking Services",
                description: "We operate our own fleet of trucks and trailers for inland transportation and cross-border logistics.",
                points: [
                    "Fleet Capabilities: Low-bed, semi-low-bed, and normal road feeders.",
                    "Regional Reach: Specialized cross-border shipments to neighboring countries, including Afghanistan."
                ],
                image: CFL3
            },
            {
                title: "Door-to-Door Delivery",
                description: "A seamless end-to-end service picking up from the sender's location and delivering directly to the recipient's door, managing all intermediate steps.",
                image: CFL4
            }
        ]
    }
};

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const data = (id && serviceDetails[id]) ? serviceDetails[id] : serviceDetails["default"];

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-12">
                    {/* Hero Section */}
                    <div className="relative w-full h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden mb-16 shadow-2xl group">
                        <img
                            src={data.heroImage}
                            alt={data.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </div>
                {/* Left Spacer */}
                <div className="hidden lg:block col-span-1"></div>

                {/* Main Content Area */}
                <div className="col-span-12 lg:col-span-10">

                    {/* Main Heading */}
                    <div className="mb-16">
                        <h1 className="text-4xl lg:text-6xl font-bold text-[#07119B] mb-4">
                            {data.title}
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                            {data.subtitle}
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-24 lg:space-y-32">
                        {data.sections.map((section, index) => (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                                {/* Text Content */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A]">{section.title}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        {section.description}
                                    </p>

                                    {section.points && section.points.length > 0 && (
                                        <ul className="space-y-4 mt-6">
                                            {section.points.map((point, pIndex) => (
                                                <li key={pIndex} className="flex items-start gap-3">
                                                    <div className="mt-2 w-3 h-3 rounded-full bg-[#07119B] flex-shrink-0"></div>
                                                    <span className="text-gray-700 font-medium leading-relaxed">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="relative">
                                    <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] w-full">
                                        <img
                                            src={section.image}
                                            alt={section.title}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                    {/* Decorative Element */}
                                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gray-100 -z-10 rounded-full hidden lg:block"></div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Back Link */}
                    <div className="mt-16">
                        <Link
                            to="/service"
                            state={{ fromDetail: true }}
                            className="text-[#07119B] font-semibold hover:underline flex items-center gap-2"
                        >
                            &larr; Back to Services
                        </Link>
                    </div>

                </div>

                {/* Right Spacer */}
                <div className="hidden lg:block col-span-1"></div>

            </div>
        </div>
    );
};

export default ServiceDetail;
