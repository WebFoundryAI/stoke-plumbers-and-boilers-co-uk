import { BRAND } from './brand';
import { getLocationHubContent } from './locationHubContent';

export interface FAQ {
  question: string;
  answer: string;
}

export const GENERIC_FAQS: FAQ[] = [
  {
    question: "Do you charge a call-out fee?",
    answer: `No, ${BRAND.brandName} does not charge any call-out fees. You only pay for the work we carry out, and we provide a clear fixed quote before starting.`,
  },
  {
    question: "How quickly can you arrive in an emergency?",
    answer: `For urgent plumbing, boiler, or drainage problems, we aim to reach you within 60-90 minutes anywhere in ${BRAND.serviceAreaLabel}, including Hanley, Burslem, Tunstall, Longton, Fenton, and Stoke town.`,
  },
  {
    question: "Are your engineers Gas Safe registered?",
    answer: `Yes, all our boiler and gas engineers hold valid Gas Safe registration. We carry out boiler repairs, servicing, and safety checks to the highest industry standards across ${BRAND.serviceAreaLabel}.`,
  },
  {
    question: "How much does drain unblocking or a boiler repair cost?",
    answer: "Costs vary depending on the nature and severity of the problem. We always provide a transparent fixed quote before any work begins, so there are no surprises on your bill.",
  },
  {
    question: "What is included in a standard visit?",
    answer: "Every visit includes a full diagnosis of the issue, the repair or clearance work itself, a check that everything is functioning correctly afterwards, and practical advice on preventing future problems.",
  },
  {
    question: "Do you work with landlords and commercial properties?",
    answer: "Yes. We serve homeowners, landlords, letting agents, and businesses across Stoke-on-Trent and Staffordshire, including restaurants, offices, retail premises, and managed housing.",
  },
  {
    question: "Do you provide a guarantee on your work?",
    answer: "Yes, all plumbing, boiler, and drainage work carried out by our team is fully guaranteed. We stand behind the quality of our service and workmanship.",
  },
];

export const SERVICE_FAQS: Record<string, FAQ[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you clear a blocked drain in Stoke-on-Trent?",
      answer: "Most blocked drains across the six towns and surrounding areas can be cleared within one to two hours of our arrival. For more complex blockages involving tree roots or collapsed sections, we will provide a clear timeframe after our initial CCTV assessment.",
    },
    {
      question: "What commonly causes drains to block in Staffordshire properties?",
      answer: "In Stoke-on-Trent, the most common causes are fat and grease buildup, tree root intrusion through ageing clay joints, hair accumulation, food waste, and ground movement in Staffordshire's Keuper Marl clay subsoil displacing pipe connections.",
    },
    {
      question: "Will clearing a blocked drain damage my old pipes?",
      answer: "No. Our engineers assess the pipe material and condition before selecting the appropriate clearing method. For the older clay and cast-iron pipes found in many Potteries properties, we adjust our techniques and jetting pressure to clear blockages safely.",
    },
  ],
  "cctv-drain-surveys": [
    {
      question: "What does a CCTV drain survey show?",
      answer: "A CCTV survey reveals the full internal condition of your drains, including blockages, cracks, root ingress, collapsed sections, displaced joints, and scale buildup. You receive HD footage and a detailed written report.",
    },
    {
      question: "Should I get a drain survey before buying a house in Stoke-on-Trent?",
      answer: "We strongly recommend it. Many properties in the Potteries have drainage systems that are over 80 years old. A pre-purchase survey can uncover hidden defects that a standard building survey will not detect, potentially saving you thousands in unexpected repair costs.",
    },
    {
      question: "How long does a CCTV drain survey take?",
      answer: "A typical residential survey in Stoke-on-Trent takes between one and two hours depending on the size of the property and the number of drainage access points. You receive the full report and footage on the same day.",
    },
  ],
  "drain-jetting": [
    {
      question: "Is high-pressure jetting safe for the old pipes in Stoke-on-Trent houses?",
      answer: "Yes, when carried out by trained engineers. We adjust the water pressure according to the pipe material — lower pressures for older clay and cast-iron systems, higher pressures for modern plastic pipework. If we suspect structural damage, we inspect with CCTV first.",
    },
    {
      question: "How often should drains be jetted?",
      answer: "For most Stoke-on-Trent residential properties, annual jetting helps prevent blockages from developing. Commercial kitchens and restaurants in Hanley or Newcastle-under-Lyme may benefit from quarterly jetting due to heavier grease loads.",
    },
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a plumbing or drainage emergency?",
      answer: `We aim to reach you within 60 to 90 minutes for emergency call-outs anywhere in ${BRAND.serviceAreaLabel}, including evenings, weekends, and bank holidays. Call ${BRAND.phoneFormatted} for immediate help.`,
    },
    {
      question: "Do you charge extra for out-of-hours or weekend emergencies?",
      answer: "We provide competitive fixed pricing for all work, including emergency call-outs at unsocial hours. You will always receive a clear quote before we begin any repair.",
    },
  ],
};

export function getServiceFAQs(serviceSlug: string): FAQ[] {
  const serviceFaqs = SERVICE_FAQS[serviceSlug] || [];
  return [...serviceFaqs, ...GENERIC_FAQS];
}

export function getLocationFAQs(locationName: string): FAQ[] {
  // Map location name to slug for content lookup
  const locationSlug = locationName.toLowerCase().replace(/\s+/g, '-');
  const hubContent = getLocationHubContent(locationSlug);

  if (hubContent && hubContent.localFAQs) {
    return hubContent.localFAQs as FAQ[];
  }

  // Fallback to generic location FAQs if location-specific content not found
  return [
    {
      question: `Do you cover ${locationName}?`,
      answer: `Yes, ${BRAND.brandName} provides comprehensive drainage services throughout ${locationName} and the surrounding locations of ${BRAND.serviceAreaLabel}.`,
    },
    {
      question: `How quickly can you get to ${locationName}?`,
      answer: `We typically arrive within 1-2 hours for emergency callouts in ${locationName}. For scheduled appointments, we offer flexible booking times.`,
    },
    {
      question: `What drainage services do you offer in ${locationName}?`,
      answer: `We offer all our services in ${locationName} including drain unblocking, CCTV surveys, drain jetting, repairs, and 24/7 emergency callouts.`,
    },
  ];
}

export const PAGE_FAQS: FAQ[] = [
  {
    question: "How quickly can you respond to a plumbing or boiler emergency in Stoke-on-Trent?",
    answer: 'We aim to respond to <a href="/services/emergency-drain-services/" class="text-primary hover:underline">emergency call-outs</a> within 60-90 minutes anywhere in <a href="/locations/stoke-on-trent/" class="text-primary hover:underline">Stoke-on-Trent</a> and across the wider Staffordshire area. Our team operates around the clock, so whether your boiler breaks down at midnight or a drain backs up on a bank holiday, help is available.'
  },
  {
    question: "Do you charge a call-out fee?",
    answer: "No. You only pay for the work we carry out. We provide a transparent fixed quote before starting any job, so there are no hidden charges or unexpected costs."
  },
  {
    question: "What areas of Staffordshire do you cover?",
    answer: 'We provide plumbing, boiler, and drainage services throughout <a href="/locations/stoke-on-trent/" class="text-primary hover:underline">Stoke-on-Trent</a> and all six towns (Hanley, Burslem, Tunstall, Longton, Fenton, and Stoke), plus <a href="/locations/newcastle-under-lyme/" class="text-primary hover:underline">Newcastle-under-Lyme</a>, <a href="/locations/stafford/" class="text-primary hover:underline">Stafford</a>, <a href="/locations/crewe/" class="text-primary hover:underline">Crewe</a>, Leek, Congleton, and Stone. See <a href="/locations/" class="text-primary hover:underline">all locations we cover</a>.'
  },
  {
    question: "Are your boiler engineers Gas Safe registered?",
    answer: 'Yes. Every engineer who works on gas boilers and appliances holds a valid Gas Safe registration. We carry out boiler repairs, annual servicing, safety checks, and full system diagnostics to the highest industry standards. Learn more <a href="/about/" class="text-primary hover:underline">about our team</a>.'
  },
  {
    question: "Do you offer annual boiler servicing?",
    answer: "Yes, we provide comprehensive annual boiler servicing across Stoke-on-Trent and Staffordshire. Regular servicing keeps your boiler running efficiently, helps prevent breakdowns during cold Staffordshire winters, and is typically required to maintain your manufacturer's warranty."
  },
  {
    question: "What is a CCTV drain survey and when would I need one?",
    answer: 'A <a href="/services/cctv-drain-surveys/" class="text-primary hover:underline">CCTV drain survey</a> sends a small camera through your drainage pipes to inspect their internal condition. It is invaluable for diagnosing recurring blockages, identifying cracks or root intrusion in Stoke-on-Trent\'s older clay pipes, and assessing drainage before purchasing a property. We also offer specialist <a href="/services/cctv-drain-surveys/pre-purchase-survey/" class="text-primary hover:underline">pre-purchase drain surveys</a> for homebuyers.'
  },
  {
    question: "How can I prevent blocked drains in my Stoke-on-Trent home?",
    answer: 'Avoid pouring cooking fats and oils down the sink, fit drain guards to catch hair and food debris, and never flush wet wipes or sanitary products. For older properties with narrow-bore clay pipes — common across the Potteries — regular preventative <a href="/services/drain-jetting/" class="text-primary hover:underline">drain jetting</a> is particularly worthwhile. Read our <a href="/blog/prevent-blocked-drains-kitchen/" class="text-primary hover:underline">guide to preventing kitchen drain blockages</a> for more advice.'
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, debit and credit card payments (including contactless), and bank transfers. Payment is collected upon completion of the work."
  }
];

/** Alias used by the homepage */
export const HOMEPAGE_FAQS = PAGE_FAQS;
