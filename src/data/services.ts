export interface SubService {
  slug: string;
  name: string;
  shortLabel?: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  icon: string;
  ogImage?: string;
  subServices?: SubService[];
}

export const SERVICES: Service[] = [
  {
    slug: "blocked-drains",
    name: "Blocked Drains",
    shortLabel: "Blocked drains cleared fast",
    description: "Professional drain unblocking service using the latest equipment. We clear all types of blockages quickly and efficiently.",
    icon: "🚿",
    ogImage: "/og/blocked-drains-og.jpg",
    subServices: [
      {
        slug: "blocked-toilet",
        name: "Blocked Toilet",
        shortLabel: "Toilet unblocking",
        description: "Fast and effective toilet unblocking service for domestic and commercial properties.",
      },
      {
        slug: "blocked-sink",
        name: "Blocked Sink",
        shortLabel: "Sink unblocking",
        description: "Professional sink unblocking for kitchen and bathroom sinks.",
      },
      {
        slug: "blocked-bath",
        name: "Blocked Bath & Shower",
        shortLabel: "Bath and shower unblocking",
        description: "Clear blockages in baths, showers, and wet rooms.",
      },
    ],
  },
  {
    slug: "drain-unblocking",
    name: "Drain Unblocking",
    shortLabel: "Sink and toilet unblocking",
    description: "Expert unblocking of sinks, toilets, baths, and shower drains. No call-out charges, fixed pricing.",
    icon: "🔧",
    ogImage: "/og/drain-unblocking-og.jpg",
    subServices: [
      {
        slug: "external-drain-unblocking",
        name: "External Drain Unblocking",
        shortLabel: "Outside drain clearing",
        description: "Clear blockages in external drains, gullies, and manholes.",
      },
      {
        slug: "internal-drain-unblocking",
        name: "Internal Drain Unblocking",
        shortLabel: "Inside drain clearing",
        description: "Unblock internal drains throughout your property.",
      },
    ],
  },
  {
    slug: "cctv-drain-surveys",
    name: "CCTV Drain Surveys",
    shortLabel: "CCTV drain inspections",
    description: "High-definition CCTV surveys to diagnose drainage issues accurately. Detailed reports provided.",
    icon: "📹",
    ogImage: "/og/cctv-surveys-og.jpg",
    subServices: [
      {
        slug: "pre-purchase-survey",
        name: "Pre-Purchase Drain Survey",
        shortLabel: "Homebuyer drain survey",
        description: "Comprehensive drain survey before buying a property.",
      },
      {
        slug: "drainage-investigation",
        name: "Drainage Investigation",
        shortLabel: "Problem diagnosis",
        description: "Detailed investigation to identify the cause of drainage problems.",
      },
    ],
  },
  {
    slug: "drain-jetting",
    name: "Drain Jetting",
    shortLabel: "High-pressure jetting",
    description: "Powerful high-pressure water jetting to clear stubborn blockages and clean drains thoroughly.",
    icon: "💧",
    ogImage: "/og/drain-jetting-og.jpg",
    subServices: [
      {
        slug: "domestic-jetting",
        name: "Domestic Drain Jetting",
        shortLabel: "Home drain jetting",
        description: "High-pressure jetting for residential properties.",
      },
      {
        slug: "commercial-jetting",
        name: "Commercial Drain Jetting",
        shortLabel: "Business drain jetting",
        description: "Industrial-strength jetting for commercial properties.",
      },
    ],
  },
  {
    slug: "emergency-drain-services",
    name: "Emergency Drain Services",
    shortLabel: "24/7 emergency callouts",
    description: "Round-the-clock emergency drainage services. Fast response times when you need us most.",
    icon: "🚨",
    ogImage: "/og/emergency-drains-og.jpg",
    subServices: [
      {
        slug: "flooding-emergency",
        name: "Flooding Emergency",
        shortLabel: "Flood response",
        description: "Immediate response to flooding and water damage emergencies.",
      },
      {
        slug: "sewage-emergency",
        name: "Sewage Emergency",
        shortLabel: "Sewage backup",
        description: "Urgent response to sewage backups and overflows.",
      },
    ],
  },
  {
    slug: "drain-repairs",
    name: "Drain Repairs",
    shortLabel: "Drain repair services",
    description: "Professional drain repair services including pipe repairs, relining, and replacement.",
    icon: "🔧",
    ogImage: "/og/manchesterblockeddrains-og.jpg",
    subServices: [
      {
        slug: "pipe-relining",
        name: "Pipe Relining",
        shortLabel: "No-dig pipe repair",
        description: "Trenchless pipe relining to repair damaged drains without excavation.",
      },
      {
        slug: "drain-excavation",
        name: "Drain Excavation",
        shortLabel: "Excavation and replacement",
        description: "Full drain excavation and replacement for severely damaged pipes.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getSubServiceBySlug(serviceSlug: string, subServiceSlug: string): SubService | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.subServices?.find((sub) => sub.slug === subServiceSlug);
}

// Related services mapping for improved cross-linking
export const RELATED_SERVICES: Record<string, string[]> = {
  "blocked-drains": ["drain-unblocking", "cctv-drain-surveys", "drain-jetting"],
  "drain-unblocking": ["blocked-drains", "drain-jetting", "emergency-drain-services"],
  "cctv-drain-surveys": ["blocked-drains", "drain-repairs", "drain-jetting"],
  "drain-jetting": ["blocked-drains", "drain-unblocking", "cctv-drain-surveys"],
  "emergency-drain-services": ["blocked-drains", "drain-unblocking", "drain-repairs"],
  "drain-repairs": ["cctv-drain-surveys", "drain-jetting", "blocked-drains"],
};

export function getRelatedServices(slug: string): Service[] {
  const relatedSlugs = RELATED_SERVICES[slug] || [];
  return relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((service): service is Service => service !== undefined);
}
