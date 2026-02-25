/**
 * Detailed content for each sub-service page
 * Keyed by sub-service slug (globally unique across all parent services)
 */

export interface SubServiceFAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface RelatedLink {
  text: string;
  href: string;
}

export interface SubServiceContent {
  detailedDescription: string;
  signsYouNeed: string[];
  processSteps: ProcessStep[];
  pricingGuide: string;
  faqs: SubServiceFAQ[];
  relatedLinks: RelatedLink[];
}

export const SUB_SERVICE_CONTENT: Record<string, SubServiceContent> = {
  "blocked-toilet": {
    detailedDescription:
      "A blocked toilet is one of the most common and urgent plumbing issues households face. When a toilet blocks, waste water cannot pass through the soil pipe into the main drainage system, causing the bowl to fill and potentially overflow. Our engineers carry specialist toilet augers, plungers rated for high-pressure use, and electromechanical drain snakes designed specifically for the tight bends found in toilet waste pipes. Most domestic toilet blockages are caused by excess toilet paper, sanitary products, wet wipes, or children's toys that have been flushed accidentally. In some cases the blockage sits further downstream in the soil stack or underground drainage rather than in the toilet itself. We diagnose the exact location before selecting the right clearance method, ensuring the problem is resolved first time. Expect us to protect your bathroom floor, work cleanly, and leave the area tidy once the blockage is cleared. A typical toilet unblocking visit takes between 30 minutes and two hours depending on the severity and location of the obstruction.",
    signsYouNeed: [
      "Water rises towards the rim when you flush instead of draining away",
      "The bowl drains very slowly after flushing, taking several minutes to empty",
      "Gurgling or bubbling sounds come from the toilet when other fixtures drain nearby",
      "Unpleasant sewage odours rising from the bowl even after cleaning",
      "Water backs up into the shower tray or bath when you flush the toilet"
    ],
    processSteps: [
      { title: "Assessment", description: "We inspect the toilet pan, check nearby fixtures for related symptoms, and determine whether the blockage is local to the toilet or further downstream in shared drainage." },
      { title: "Blockage Location", description: "Using specialist tools and, where needed, a CCTV drain camera, we pinpoint the exact position and nature of the obstruction within the waste pipe." },
      { title: "Clearance", description: "We clear the blockage using the appropriate method — a high-grade plunger for soft obstructions, a toilet auger for material caught in the pan trap, or a drain snake for blockages further along the pipe." },
      { title: "Test & Clean Up", description: "We flush the toilet multiple times to confirm full flow is restored, check connected fixtures, and leave the bathroom clean and dry." }
    ],
    pricingGuide:
      "Most blocked toilet callouts in the Manchester area are resolved for between £80 and £150 depending on the severity and location of the blockage. There is no call-out fee — you only pay for completed work. We provide a fixed price before starting so there are no surprises. Complex blockages requiring camera investigation may cost more.",
    faqs: [
      { question: "Can I unblock my toilet myself before calling an engineer?", answer: "A standard plunger may clear simple blockages caused by excess toilet paper. However, if the water level is high or the blockage returns after plunging, professional equipment is needed. Avoid using chemical drain cleaners in toilets as they can damage seals and are rarely effective on solid obstructions." },
      { question: "What causes a toilet to block repeatedly?", answer: "Recurring toilet blockages usually indicate a partial obstruction further downstream — often tree root ingress, a displaced pipe joint, or accumulated scale in older pipework. A CCTV drain survey can identify the root cause so it can be fixed permanently rather than just cleared each time." },
      { question: "How long does a toilet unblocking callout take?", answer: "Most toilet blockages are cleared within 30 minutes to one hour. If the obstruction is located further along the drainage system or requires camera investigation, the visit may take up to two hours. We always advise an estimated timeframe on arrival." }
    ],
    relatedLinks: [
      { text: "Blocked drains services", href: "/services/blocked-drains/" },
      { text: "Emergency drain services", href: "/services/emergency-drain-services/" },
      { text: "Drain unblocking in Manchester", href: "/locations/manchester/drain-unblocking/" }
    ]
  },

  "blocked-sink": {
    detailedDescription:
      "A blocked sink disrupts your daily routine whether it occurs in the kitchen or bathroom. Kitchen sinks typically block due to grease, food debris, and soap residue accumulating in the trap and waste pipe over time. Bathroom sinks are more commonly affected by hair, soap scum, and toothpaste buildup. Our engineers use a combination of manual rodding, high-pressure micro-jetting equipment, and electromechanical drain snakes to clear sink blockages at any point from the trap beneath the basin to the underground connection. We carry specialist descaling tools for hard water deposits and grease-cutting attachments for kitchen waste pipes. During the visit we inspect the full waste run — not just the visible trap — to ensure there are no secondary obstructions that could cause the problem to return. We also check the external gulley where the waste pipe discharges, as debris often accumulates at this point. Most sink unblocking jobs are completed within 30 to 60 minutes, and we always test flow rates before leaving.",
    signsYouNeed: [
      "Water pools in the basin and drains very slowly or not at all",
      "Gurgling sounds come from the plughole when water drains",
      "Unpleasant smells rise from the sink drain, particularly in warm weather",
      "Water backs up into the adjacent sink bowl in a double-basin kitchen setup",
      "The overflow outlet starts leaking because the basin cannot empty fast enough"
    ],
    processSteps: [
      { title: "Inspect the Trap", description: "We check the U-bend or bottle trap beneath the sink for visible obstructions and assess whether the blockage is in the trap itself or further along the waste pipe." },
      { title: "Clear the Waste Pipe", description: "Using drain rods, a powered drain snake, or targeted micro-jetting, we remove the blockage and flush accumulated debris from the full length of the waste run." },
      { title: "Check the External Gulley", description: "We inspect the gulley or hopper where the waste pipe exits the property, clearing any debris that could restrict drainage or cause future problems." },
      { title: "Flow Test", description: "We run both taps at full pressure to verify the sink drains freely with no residual slow drainage or gurgling, confirming the blockage has been fully resolved." }
    ],
    pricingGuide:
      "Sink unblocking in the Manchester area typically costs between £80 and £130. Kitchen sinks with heavy grease buildup may require jetting and sit towards the higher end. We provide a fixed quote before any work begins and never charge a call-out fee. If we discover a deeper problem such as a broken pipe, we explain your options before proceeding.",
    faqs: [
      { question: "Why does my kitchen sink keep blocking?", answer: "Recurring kitchen sink blockages are almost always caused by grease and fat accumulation inside the waste pipe. Even small amounts of cooking oil solidify as they cool, gradually narrowing the pipe. Using a sink strainer, wiping greasy pans with kitchen roll before washing, and flushing the drain with hot water weekly can significantly reduce blockage frequency." },
      { question: "Are chemical drain cleaners safe to use on a blocked sink?", answer: "Chemical drain cleaners can provide temporary relief for minor blockages but are not a long-term solution. Repeated use can corrode older metal pipes and damage rubber seals. For persistent or complete blockages, professional mechanical clearance is more effective and safer for your pipework." },
      { question: "Can a blocked sink cause other drainage problems?", answer: "Yes. If a sink waste pipe connects to the same underground drain as other fixtures, a blockage in the shared section can cause slow drainage or backups in multiple appliances. This is particularly common in older terraced properties where kitchen and bathroom waste share a single pipe run." }
    ],
    relatedLinks: [
      { text: "Blocked drains services", href: "/services/blocked-drains/" },
      { text: "Drain jetting services", href: "/services/drain-jetting/" },
      { text: "Internal drain unblocking", href: "/services/drain-unblocking/internal-drain-unblocking/" }
    ]
  },

  "blocked-bath": {
    detailedDescription:
      "A blocked bath or shower drain creates standing water that makes the fixture unusable and can lead to water damage if left unresolved. Bath and shower blockages are predominantly caused by hair combining with soap scum to form a dense plug in the trap or waste pipe. Shower trays with shallow traps are particularly susceptible because the smaller diameter pipe clogs more easily. Our engineers use flexible drain snakes that navigate the tight bends in bath waste pipes, along with micro-jetting nozzles designed for smaller pipe diameters found in bathroom waste systems. For shower trays set into the floor, we have specialist low-profile access tools that reach the trap without requiring tiles to be lifted. We always inspect the waste pipe beyond the immediate trap to ensure there are no secondary obstructions or pipe damage contributing to slow drainage. The visit typically takes between 30 minutes and one hour, and we take care to protect bathroom surfaces throughout.",
    signsYouNeed: [
      "Water drains noticeably slower than usual, leaving you standing in pooling water during a shower",
      "Gurgling or bubbling sounds come from the plughole as water drains away",
      "Bad smells rise from the bath or shower drain despite regular cleaning",
      "Water backs up when you run the tap, sometimes rising faster than it can drain",
      "The bath takes significantly longer to empty after being filled"
    ],
    processSteps: [
      { title: "Access the Trap", description: "We remove the drain cover or waste fitting to access the trap, checking for visible hair and debris that can be removed immediately." },
      { title: "Snake the Waste Pipe", description: "A flexible drain snake is fed through the waste pipe to break up and extract the blockage. For stubborn clogs, a rotating cutting head removes compacted hair and soap deposits." },
      { title: "Flush and Jet", description: "We flush the cleared pipe with water and, where necessary, use a micro-jetting nozzle to remove residual buildup from the pipe walls, restoring full bore drainage." },
      { title: "Test Drainage", description: "We fill the bath or run the shower to full capacity and confirm the water drains at the expected rate with no residual gurgling or slow flow." }
    ],
    pricingGuide:
      "Bath and shower drain unblocking in the Manchester area typically costs between £80 and £140. Shower trays with restricted access or blockages located further downstream may require additional work and cost slightly more. We always confirm the price before starting. No call-out fee applies.",
    faqs: [
      { question: "How can I prevent my bath or shower from blocking?", answer: "Fitting a simple hair catcher over the plughole is the single most effective prevention measure. These inexpensive mesh or silicone guards catch hair before it enters the waste pipe. Cleaning the guard after each use and flushing the drain with hot water weekly keeps the pipe clear." },
      { question: "Is a slow-draining bath always caused by a blockage?", answer: "Usually, yes. Slow drainage almost always indicates a partial blockage forming in the trap or waste pipe. Occasionally the issue can be a venting problem — if air cannot enter the pipe behind the draining water, it creates a vacuum that slows flow. Our engineers check for both causes." },
      { question: "Can a blocked bath affect other drains in the house?", answer: "If the bath shares a waste pipe with other fixtures — common in many Manchester properties — a blockage in the shared section can affect the bath, basin, and sometimes the toilet. If multiple fixtures are draining slowly, the obstruction is likely in the underground drainage rather than an individual waste pipe." }
    ],
    relatedLinks: [
      { text: "Blocked drains services", href: "/services/blocked-drains/" },
      { text: "CCTV drain surveys", href: "/services/cctv-drain-surveys/" },
      { text: "Drain unblocking in Stockport", href: "/locations/stockport/drain-unblocking/" }
    ]
  },

  "external-drain-unblocking": {
    detailedDescription:
      "External drain unblocking covers all drainage outside your property — gullies, manholes, inspection chambers, and underground pipe runs that carry waste water and surface water to the public sewer. External drains are exposed to leaves, soil, moss, grit, tree roots, and other environmental debris that builds up over time. Because these pipes are underground and often out of sight, problems frequently go unnoticed until water starts pooling in the garden, overflowing from manholes, or backing up into the property. Our engineers arrive with high-pressure jetting equipment capable of clearing even the most compacted external blockages, along with drain rods for accessible obstructions and CCTV cameras for diagnosing hidden issues. We clear the blockage, flush the full pipe run, and inspect the condition of the drainage to identify any structural issues that might cause problems in future. External drain work typically takes one to two hours depending on pipe length, access, and the nature of the blockage.",
    signsYouNeed: [
      "Water pooling around external drain covers, gullies, or in the garden after rainfall",
      "Manhole or inspection chamber covers have water sitting at or near the surface",
      "Foul smells outside your property, particularly near drain covers or gullies",
      "Slow drainage from internal fixtures that share the same underground pipe run",
      "Visible sewage or waste water surfacing in the garden or driveway"
    ],
    processSteps: [
      { title: "Locate and Access", description: "We identify all external access points — manholes, inspection chambers, and gullies — and open them to assess water levels and flow direction to pinpoint the blockage location." },
      { title: "High-Pressure Jetting", description: "Our jetting unit feeds a high-pressure hose into the blocked pipe section, blasting through the obstruction and scouring the pipe walls clean as it progresses." },
      { title: "CCTV Check", description: "Where appropriate, we run a camera through the cleared pipe to verify the blockage is fully removed and check for structural issues such as root ingress, cracks, or displaced joints." },
      { title: "Restore and Report", description: "We refit all access covers securely, clear any surface debris, and advise you on the condition of your external drainage and any maintenance or repairs that may be beneficial." }
    ],
    pricingGuide:
      "External drain unblocking across the Manchester area typically costs between £90 and £180 depending on the length of pipe affected and the nature of the blockage. Tree root clearance or heavily compacted debris may require extended jetting and sit towards the higher end. We confirm all pricing before starting and there is no call-out fee.",
    faqs: [
      { question: "Who is responsible for external drain blockages?", answer: "You are generally responsible for private drains within your property boundary. Shared sewers and public drains beyond your boundary are the responsibility of United Utilities in the Manchester area. If the blockage is in a shared or public sewer, we can advise you on how to report it to the water company." },
      { question: "Can tree roots cause external drain blockages?", answer: "Tree roots are one of the most common causes of external drain blockages in Manchester. Roots seek out moisture and can penetrate pipe joints and cracks, growing inside the pipe until they obstruct flow. Regular CCTV inspections help detect root ingress early before it causes a complete blockage." },
      { question: "How often should external drains be cleared?", answer: "For most residential properties, an annual external drain inspection and clean is sufficient. Properties with large trees near drainage runs, or those that have experienced previous blockages, may benefit from more frequent maintenance every six to twelve months." }
    ],
    relatedLinks: [
      { text: "Drain unblocking services", href: "/services/drain-unblocking/" },
      { text: "CCTV drain surveys", href: "/services/cctv-drain-surveys/" },
      { text: "Drain jetting services", href: "/services/drain-jetting/" }
    ]
  },

  "internal-drain-unblocking": {
    detailedDescription:
      "Internal drain unblocking addresses blockages within the waste pipes inside your property — from kitchen sinks, bathroom basins, baths, showers, toilets, and utility room drains through to the point where they exit the building into underground external drainage. Internal blockages are caused by everyday materials including hair, soap, food waste, grease, sanitary products, and wet wipes accumulating inside waste traps and pipes. Because internal pipes run through walls, under floors, and behind fixtures, blockages are not always straightforward to locate without specialist equipment. Our engineers carry a full range of internal drain clearing tools including hand rods, powered drain snakes with interchangeable cutting heads, micro-jetting units for smaller diameter pipes, and compact CCTV cameras for pipe inspection. We work carefully inside your home, protecting floors and surfaces, and always clean up after ourselves. Most internal blockages are cleared within 30 minutes to one hour, restoring full use of the affected fixtures.",
    signsYouNeed: [
      "One or more sinks, baths, or showers draining slowly or not at all",
      "Gurgling sounds from plugholes when other fixtures are used or when the toilet is flushed",
      "Water backing up into a basin, bath, or shower tray when another appliance drains",
      "Unpleasant odours from internal drains that persist despite cleaning",
      "A washing machine or dishwasher failing to drain properly and displaying error codes"
    ],
    processSteps: [
      { title: "Identify the Affected Run", description: "We check which fixtures are affected to determine whether the blockage is localised to a single trap or located in a shared pipe section serving multiple appliances." },
      { title: "Access and Clear", description: "Using drain rods, a powered snake, or micro-jetting, we clear the obstruction from the waste pipe. For traps directly beneath fixtures, we may remove and clean the trap assembly." },
      { title: "Full Pipe Flush", description: "We flush the cleared pipe with running water from all connected fixtures simultaneously to confirm no secondary blockages exist further along the run." },
      { title: "Protect and Tidy", description: "Any access panels or traps are refitted, surfaces are wiped down, and we confirm every connected fixture is draining freely before finishing." }
    ],
    pricingGuide:
      "Internal drain unblocking in the Manchester area typically costs between £80 and £140. Simple single-fixture blockages such as a clogged sink trap are usually at the lower end. Blockages in shared pipe runs or those requiring camera investigation cost more. We always provide a fixed price before we begin and never charge a call-out fee.",
    faqs: [
      { question: "Why are multiple drains in my house blocked at the same time?", answer: "When more than one fixture blocks simultaneously, the obstruction is almost certainly in a shared waste pipe or the underground drainage rather than in individual traps. This is common in older properties where multiple fixtures connect to a single pipe run before it exits the building." },
      { question: "Can internal drain blockages cause damp or water damage?", answer: "Yes. A blocked internal drain can cause water to leak from pipe joints, overflow from waste traps, or back up through fixtures. Persistent dampness from slow leaks can damage plaster, flooring, and joinery. Addressing blockages promptly minimises the risk of secondary water damage." },
      { question: "Do you need to lift floorboards to access internal drains?", answer: "In most cases, no. We access internal drainage through existing access points — removable trap fittings, clean-out plugs, and external inspection chambers. On rare occasions where pipes are completely inaccessible, we discuss access options with you before proceeding." }
    ],
    relatedLinks: [
      { text: "Drain unblocking services", href: "/services/drain-unblocking/" },
      { text: "Blocked toilet service", href: "/services/blocked-drains/blocked-toilet/" },
      { text: "Emergency drain services", href: "/services/emergency-drain-services/" }
    ]
  },

  "pre-purchase-survey": {
    detailedDescription:
      "A pre-purchase CCTV drain survey is an essential part of due diligence when buying a property. Standard homebuyer surveys and building surveys do not include drainage inspection, yet drainage defects can cost thousands of pounds to repair and may not be visible from the surface. Our pre-purchase surveys use high-definition CCTV cameras to inspect the full accessible drainage system beneath and around the property, recording footage of every pipe run from the property to the point of connection with the public sewer. The survey identifies cracks, fractures, root ingress, displaced joints, bellied sections where water pools, and any areas of concern. You receive a detailed written report with annotated screenshots, a plan showing pipe routes and defect locations, and a condition grading for each section. This report is accepted by solicitors for conveyancing and can be shared with your surveyor, lender, or insurer. Having this information before exchange gives you the evidence to negotiate a price reduction, request repairs as a condition of sale, or make an informed decision to walk away from a property with serious drainage issues.",
    signsYouNeed: [
      "You are about to exchange contracts on a property purchase and want full visibility of the drainage condition",
      "The property is more than 30 years old and likely has original clay or cast-iron drainage",
      "There are mature trees close to the property that may have caused root ingress into pipes",
      "The homebuyer or building survey flagged damp, subsidence, or drainage concerns",
      "Previous buyers have withdrawn from the purchase and you want to understand why"
    ],
    processSteps: [
      { title: "Book and Prepare", description: "Contact us with the property address and we arrange a survey date. No preparation is needed — we access drainage through external manholes and chambers." },
      { title: "Full System Survey", description: "We feed the CCTV camera through every accessible drain run, recording high-definition footage of pipe condition, joints, connections, and any defects encountered." },
      { title: "Analysis and Reporting", description: "Our technician reviews the footage and produces a detailed report with annotated images, pipe route mapping, condition grades, and clear recommendations." },
      { title: "Delivery and Support", description: "The report is delivered within 24 hours in a format suitable for your solicitor. We are available to explain findings and provide repair quotes if defects are discovered." }
    ],
    pricingGuide:
      "A pre-purchase CCTV drain survey in the Manchester area typically costs between £180 and £350 depending on the size of the property and the extent of the drainage network. Larger properties with multiple drainage runs or outbuildings sit towards the higher end. The price includes the survey, a full written report, and annotated footage.",
    faqs: [
      { question: "When should I book a pre-purchase drain survey?", answer: "Ideally, book the survey after your offer has been accepted but before you exchange contracts. This gives you time to negotiate based on the findings or withdraw if serious defects are found. Most surveys can be arranged within a few days of booking." },
      { question: "Will the survey report be accepted by my solicitor?", answer: "Yes. Our pre-purchase reports are produced to a professional standard and are routinely accepted by solicitors, mortgage lenders, and insurers for conveyancing purposes. The report includes detailed findings, annotated imagery, and clear condition assessments." },
      { question: "What happens if the survey finds problems?", answer: "If defects are identified, you can use the report to negotiate a reduction in the purchase price, request that the seller arranges repairs before completion, or factor the repair costs into your decision. We can provide repair quotes for any issues found." }
    ],
    relatedLinks: [
      { text: "CCTV drain survey services", href: "/services/cctv-drain-surveys/" },
      { text: "Drainage investigation", href: "/services/cctv-drain-surveys/drainage-investigation/" },
      { text: "Drain repairs", href: "/services/drain-repairs/" }
    ]
  },

  "drainage-investigation": {
    detailedDescription:
      "A drainage investigation uses CCTV camera technology to diagnose the cause of persistent or recurring drainage problems. Unlike a routine drain survey, an investigation is targeted — we focus on the specific symptoms you are experiencing and methodically trace the issue to its source. This service is invaluable when you are dealing with recurring blockages, unexplained damp patches, persistent bad smells, or slow drainage that does not respond to standard unblocking. Our engineers use push-rod and crawler CCTV cameras with pan-and-tilt heads that provide detailed views inside pipes, allowing us to inspect joints, connections, and hard-to-reach sections thoroughly. The investigation maps your drainage layout, identifies defects, and provides clear evidence of what is causing the problem. You receive a written report with footage, annotated images, and specific recommendations for resolution. This evidence is also useful for insurance claims, disputes with neighbours over shared drainage, and planning applications that affect existing drainage routes.",
    signsYouNeed: [
      "Recurring blockages that keep returning despite professional clearing",
      "Unexplained damp patches on walls, floors, or ceilings near drainage runs",
      "Persistent foul smells inside or outside the property that you cannot locate",
      "Sinkholes, depressions, or unusually lush patches of grass in the garden above drain routes",
      "You need evidence of drainage condition for an insurance claim or neighbour dispute"
    ],
    processSteps: [
      { title: "Discuss Symptoms", description: "We begin by understanding the problem — which fixtures are affected, when symptoms occur, and what has been tried previously. This guides where we focus the investigation." },
      { title: "Systematic Camera Survey", description: "We trace the drainage from the affected area outward, recording footage of every pipe section, joint, and connection until we locate the defect causing the issue." },
      { title: "Diagnosis and Evidence", description: "Once the cause is identified — whether root ingress, a collapsed section, a displaced joint, or a design fault — we document it thoroughly with annotated footage and images." },
      { title: "Report and Recommendations", description: "You receive a detailed report explaining the problem, its location, and recommended solutions ranked by cost and effectiveness. We can provide repair quotes immediately." }
    ],
    pricingGuide:
      "A targeted drainage investigation in the Manchester area typically costs between £150 and £300 depending on the complexity of the drainage system and the time required to identify the issue. Simple investigations where the cause is quickly located are at the lower end. We provide a fixed price before starting and there is no call-out fee.",
    faqs: [
      { question: "How is a drainage investigation different from a standard CCTV survey?", answer: "A standard survey provides a general condition assessment of your entire drainage system. An investigation is problem-focused — we work from your reported symptoms to trace and identify a specific fault. The investigation may cover the full system or concentrate on the affected section depending on what is needed." },
      { question: "Can you investigate drains under a building extension?", answer: "Yes. Our push-rod cameras can access pipes running beneath extensions, conservatories, and other structures through existing manholes and access points. If there are no nearby access points, we can discuss options for creating temporary access." },
      { question: "Will the investigation report help with an insurance claim?", answer: "Yes. Our investigation reports include timestamped footage, annotated images, and professional condition assessments that are accepted by home insurance providers. We produce reports to a standard suitable for claims, disputes, and legal proceedings." }
    ],
    relatedLinks: [
      { text: "CCTV drain survey services", href: "/services/cctv-drain-surveys/" },
      { text: "Pre-purchase drain survey", href: "/services/cctv-drain-surveys/pre-purchase-survey/" },
      { text: "Drain repairs", href: "/services/drain-repairs/" }
    ]
  },

  "domestic-jetting": {
    detailedDescription:
      "Domestic drain jetting uses high-pressure water to clean and clear the drainage system in residential properties. A specialised jetting unit pumps water through a flexible hose fitted with a rotating nozzle, which scours the inside of pipes to remove grease, scale, tree root fragments, silt, and general debris. Domestic jetting is effective on all common household pipe materials including clay, plastic, and cast iron, with the pressure adjusted to suit the pipe type and condition. Unlike chemical drain cleaners, jetting physically removes deposits from the pipe walls rather than just dissolving a channel through them, meaning results are more thorough and longer-lasting. The process is also environmentally friendly — only water is used, with no chemicals entering the drainage system. Domestic jetting is suitable for both reactive blockage clearance and preventative maintenance. Many homeowners schedule annual jetting to keep their drains in optimal condition, particularly if they have experienced blockages in the past or have mature trees near drainage runs. A typical domestic jetting visit takes one to two hours.",
    signsYouNeed: [
      "Drains are running slowly across multiple fixtures in the property",
      "You have cleared a blockage recently and want to remove residual deposits from the pipe walls",
      "There is a persistent foul smell from drains that cleaning does not resolve",
      "Your property has mature trees and you want to clear root fragments from the pipes",
      "It has been more than 12 months since your drains were last professionally cleaned"
    ],
    processSteps: [
      { title: "Pre-Jetting Inspection", description: "We inspect your drainage access points and, where appropriate, run a brief CCTV check to assess pipe condition and identify the areas that need the most attention." },
      { title: "Set Up Equipment", description: "Our jetting unit is positioned and the hose is fed into the drainage through the most suitable access point. We select the correct nozzle and pressure setting for your pipe material." },
      { title: "Systematic Jetting", description: "The jetting nozzle is advanced through the pipe, cleaning from the problem area back towards the access point. The rotating water jets scour the pipe walls while flushing loosened debris downstream." },
      { title: "Post-Jetting Verification", description: "We run water through the system to confirm full flow is restored and, where included, perform a final CCTV check so you can see the before-and-after difference." }
    ],
    pricingGuide:
      "Domestic drain jetting in the Manchester area typically costs between £100 and £220 depending on the length of drainage and the extent of buildup to be removed. Routine maintenance jetting for a standard residential property is usually at the lower end. We confirm the price before starting and there is no call-out fee.",
    faqs: [
      { question: "Is drain jetting safe for my pipes?", answer: "Yes, when performed by a professional. We adjust the water pressure to match your pipe material and condition — lower pressures for older clay pipes, higher for modern plastic. A brief CCTV check beforehand confirms the pipe is structurally sound enough for jetting." },
      { question: "How often should I have my drains jetted?", answer: "For most homes, annual jetting keeps drains in good condition. Properties with mature trees near drainage runs, or those prone to grease buildup, may benefit from jetting every six to twelve months. We advise a suitable maintenance schedule based on what we find during the clean." },
      { question: "Will jetting damage my garden or driveway?", answer: "No. All work is carried out through existing drainage access points — manholes, inspection chambers, and gullies. We do not need to dig or lift any surfaces. The jetting unit is compact and can be set up on a driveway or garden without causing damage." }
    ],
    relatedLinks: [
      { text: "Drain jetting services", href: "/services/drain-jetting/" },
      { text: "Commercial drain jetting", href: "/services/drain-jetting/commercial-jetting/" },
      { text: "CCTV drain surveys", href: "/services/cctv-drain-surveys/" }
    ]
  },

  "commercial-jetting": {
    detailedDescription:
      "Commercial drain jetting provides heavy-duty cleaning for business premises including restaurants, cafes, takeaways, hotels, offices, retail units, warehouses, and industrial sites. Commercial drainage handles significantly higher volumes than residential systems and is subject to heavier deposits — particularly grease and fat in food preparation environments. Our commercial jetting equipment delivers water at pressures up to 4,000 PSI with higher flow rates than domestic units, allowing us to clear larger diameter pipes and more compacted deposits. We carry a range of specialist nozzles including root cutters for tree root intrusion, chain flails for heavy scale, and penetrating nozzles for long pipe runs. Commercial jetting is essential for businesses that must comply with environmental regulations and trade effluent discharge consents issued by United Utilities. Regular scheduled jetting helps businesses avoid emergency callouts, maintain hygiene standards, and demonstrate compliance during inspections. We offer one-off reactive jetting and scheduled maintenance contracts tailored to your business needs.",
    signsYouNeed: [
      "Floor drains in kitchens or food preparation areas are draining slowly or producing odours",
      "Grease traps are overflowing or need emptying more frequently than usual",
      "External drainage around the premises is sluggish or backing up",
      "An environmental health inspection has flagged drainage maintenance as a concern",
      "It has been more than six months since commercial drains were last professionally cleaned"
    ],
    processSteps: [
      { title: "Site Assessment", description: "We survey your commercial drainage system, identifying all access points, pipe runs, and problem areas. For food premises, we pay particular attention to grease trap connections and kitchen waste lines." },
      { title: "Equipment Selection", description: "Based on the assessment, we select the appropriate jetting unit, nozzle types, and pressure settings for your pipe materials and the type of deposits to be removed." },
      { title: "Thorough Jetting", description: "We systematically jet every pipe section, working from the furthest points back towards the main sewer connection. Kitchen waste lines receive particular attention with grease-cutting nozzles." },
      { title: "Certification and Scheduling", description: "We provide a completion certificate for your records and compliance documentation. If you opt for a maintenance contract, we schedule your next visit at the agreed interval." }
    ],
    pricingGuide:
      "Commercial drain jetting in the Manchester area typically starts from £200 and can range up to £500 or more depending on the size of the drainage network and severity of deposits. Scheduled maintenance contracts offer reduced per-visit rates. We provide detailed fixed quotes following an initial site assessment and never charge call-out fees.",
    faqs: [
      { question: "How often should commercial drains be jetted?", answer: "Restaurants, takeaways, and food preparation businesses should have drainage jetted every three to six months. Offices and retail premises with lighter drainage usage typically need annual jetting. We advise a suitable schedule based on your business type and drainage condition." },
      { question: "Can you jet drains during business hours?", answer: "Yes. We can schedule jetting to minimise disruption — early mornings, evenings, or weekends are common for food businesses. Our equipment is self-contained and does not require us to shut off your water supply, so your business can continue operating during the work." },
      { question: "Do you provide compliance documentation for environmental inspections?", answer: "Yes. We provide completion certificates confirming the date, scope, and outcome of jetting work. These records demonstrate that your business maintains its drainage to the required standard and can be presented during environmental health or trade effluent inspections." }
    ],
    relatedLinks: [
      { text: "Drain jetting services", href: "/services/drain-jetting/" },
      { text: "Domestic drain jetting", href: "/services/drain-jetting/domestic-jetting/" },
      { text: "Blocked drains in Manchester", href: "/locations/manchester/blocked-drains/" }
    ]
  },

  "flooding-emergency": {
    detailedDescription:
      "A flooding emergency from drainage failure requires immediate professional response to protect your property and health. When drains block, collapse, or become overwhelmed during heavy rainfall, water can flood gardens, driveways, basements, and ground-floor rooms within minutes. The damage from drainage flooding goes beyond surface water — contaminated water from foul drains poses serious health risks and can destroy carpets, flooring, plasterwork, and electrical systems. Our emergency flooding response teams are available 24 hours a day, 7 days a week, including bank holidays. We arrive equipped with industrial submersible pumps to remove standing water, high-pressure jetting equipment to clear the underlying blockage, and containment materials to prevent further ingress while we work. Once the immediate flooding is controlled, we diagnose and fix the drainage failure that caused it — whether a blocked pipe, a collapsed section, tree root ingress, or inadequate surface water drainage. We also advise on steps to prevent future flooding and can recommend installation of flood prevention measures such as non-return valves.",
    signsYouNeed: [
      "Water is flooding into your property from overwhelmed or blocked drains",
      "Manholes or inspection chambers are overflowing and water is spreading across your garden or drive",
      "Sewage or foul water is backing up through toilets, sinks, or floor drains",
      "Rainwater is not draining from around the property and water levels are rising",
      "You can see or smell sewage outside your property near drain covers"
    ],
    processSteps: [
      { title: "Emergency Dispatch", description: "Call our 24/7 emergency line. We prioritise flooding calls and dispatch the nearest available engineer immediately, providing an estimated arrival time." },
      { title: "Containment", description: "On arrival, we deploy pumps to remove standing water, set up barriers to prevent further ingress, and isolate the drainage failure if possible to stop additional water entering the property." },
      { title: "Clear the Cause", description: "Using jetting equipment, drain rods, or emergency repair methods, we address the underlying drainage failure — clearing blockages, removing debris, or making temporary repairs to collapsed sections." },
      { title: "Assessment and Next Steps", description: "We assess the extent of the drainage issue, advise on any follow-up repairs needed, and recommend preventative measures such as non-return valves or improved surface water drainage." }
    ],
    pricingGuide:
      "Emergency flooding callouts in the Manchester area typically cost between £150 and £350 depending on the severity of the flooding and the work required to resolve the drainage failure. Pumping, jetting, and emergency repairs are included in the quoted price. We confirm costs before starting substantive work, and there is no call-out fee.",
    faqs: [
      { question: "How quickly can you respond to a flooding emergency?", answer: "We aim to arrive within 60 to 90 minutes for flooding emergencies across Greater Manchester. Flooding calls are given the highest priority in our dispatch system. Call us immediately — the sooner we arrive, the less damage your property sustains." },
      { question: "Should I try to deal with flooding myself before you arrive?", answer: "If it is safe to do so, move valuable items away from floodwater and turn off electricity at the consumer unit if water is near electrical outlets. Do not wade through floodwater that may contain sewage. If the flooding is from a blocked manhole, do not attempt to lift the cover — wait for our engineers." },
      { question: "Will my insurance cover the cost of emergency drain flooding?", answer: "Most home insurance policies cover emergency drainage work and subsequent repairs caused by sudden events like pipe collapse or blockage. We provide detailed invoices and reports suitable for insurance claims. Check your policy excess and coverage details, and contact your insurer promptly." }
    ],
    relatedLinks: [
      { text: "Emergency drain services", href: "/services/emergency-drain-services/" },
      { text: "Sewage emergency response", href: "/services/emergency-drain-services/sewage-emergency/" },
      { text: "Drain repairs", href: "/services/drain-repairs/" }
    ]
  },

  "sewage-emergency": {
    detailedDescription:
      "A sewage emergency is one of the most unpleasant and potentially hazardous situations a property owner can face. When foul water drainage fails — due to a blockage, pipe collapse, or pump failure — raw sewage can back up through toilets, sinks, and floor drains into your living or working space. Sewage contains harmful bacteria, viruses, and parasites that pose serious health risks, making professional cleanup essential. Our sewage emergency response teams operate around the clock and carry specialist equipment including protective gear, industrial extraction units, sanitisation equipment, and high-pressure jetting systems. We contain and remove sewage safely, clear the underlying drainage failure, and sanitise affected areas to a safe standard. Where the sewage backup is caused by a structural failure such as a collapsed pipe or broken pump, we carry emergency repair materials to restore function. We also coordinate with United Utilities if the issue originates in the public sewer network. Sewage emergencies require fast action — every hour of delay increases contamination, property damage, and health risks.",
    signsYouNeed: [
      "Raw sewage or foul-smelling water is backing up through toilets, sinks, or floor drains",
      "There is a strong sewage smell inside or immediately outside the property",
      "Sewage is visible around manhole covers or inspection chambers",
      "Toilet flushing causes waste water to appear in other ground-floor fixtures",
      "A sewage pump or lifting station has failed and waste is not being removed from the property"
    ],
    processSteps: [
      { title: "Immediate Dispatch", description: "Call our 24/7 emergency line. Sewage emergencies receive the highest priority. We dispatch an engineer immediately with full containment and clearing equipment." },
      { title: "Safe Containment", description: "On arrival, we don protective equipment, isolate the sewage source where possible, and begin extracting standing sewage using industrial-grade pumping equipment." },
      { title: "Clear the Drainage Failure", description: "We identify and resolve the cause of the backup — clearing blockages with jetting equipment, making emergency pipe repairs, or addressing pump failures to restore normal drainage flow." },
      { title: "Sanitise and Advise", description: "Affected areas are cleaned and sanitised to reduce health risks. We advise on further deep cleaning if needed, provide a report for your insurer, and recommend measures to prevent recurrence." }
    ],
    pricingGuide:
      "Sewage emergency callouts in the Manchester area typically cost between £180 and £400 depending on the extent of contamination and the drainage work required. This includes containment, clearance, and basic sanitisation. We confirm costs as quickly as possible once the situation is assessed, and there is no call-out fee.",
    faqs: [
      { question: "Is sewage backup dangerous to health?", answer: "Yes. Raw sewage contains harmful bacteria including E. coli and Salmonella, as well as viruses and parasites. Avoid direct contact with sewage, keep children and pets away from affected areas, and do not attempt cleanup without protective equipment. Professional extraction and sanitisation is strongly recommended." },
      { question: "What should I do while waiting for your engineer?", answer: "Stay out of affected rooms, ventilate the area by opening windows, and turn off electricity at the consumer unit if sewage is near electrical outlets. Do not flush toilets or run taps, as this can worsen the backup. If possible, place towels at doorways to limit sewage spreading to unaffected rooms." },
      { question: "Can you help if the problem is in the public sewer?", answer: "If the backup originates from the public sewer network rather than your private drainage, United Utilities is responsible for the repair. We can diagnose whether the issue is in your private drainage or the public network, and if it is a public sewer problem, we can provide emergency containment while you contact United Utilities." }
    ],
    relatedLinks: [
      { text: "Emergency drain services", href: "/services/emergency-drain-services/" },
      { text: "Flooding emergency response", href: "/services/emergency-drain-services/flooding-emergency/" },
      { text: "External drain unblocking", href: "/services/drain-unblocking/external-drain-unblocking/" }
    ]
  },

  "pipe-relining": {
    detailedDescription:
      "Pipe relining is a trenchless repair method that fixes damaged drains without the need for excavation. A flexible liner saturated with structural resin is inserted into the damaged pipe and inflated against the pipe walls. Once the resin cures — typically within a few hours — it forms a smooth, jointless pipe within the original pipe, sealing cracks, bridging gaps at displaced joints, and blocking root entry points. The result is effectively a new pipe installed inside the old one, with a design life of 50 years or more. Pipe relining is suitable for repairing cracks, fractures, root damage, joint displacement, and localised corrosion in pipes from 100mm to 300mm in diameter. It works on all common pipe materials including clay, concrete, cast iron, and plastic. The main advantage over traditional excavation is that your garden, driveway, patio, or interior flooring remains undisturbed. There is no need to remove and replace hard landscaping, and the work is typically completed in a single day. Our engineers use CCTV inspection before and after relining to ensure the repair is precise and the finished lining is defect-free.",
    signsYouNeed: [
      "A CCTV survey has identified cracks, fractures, or displaced joints in your underground drainage",
      "Tree roots are entering your pipes through damaged joints and causing recurring blockages",
      "Damp patches or subsidence near drainage routes suggest leaking pipes underground",
      "Your drains are beneath a patio, driveway, or extension where excavation would be extremely disruptive",
      "You want a long-lasting repair without the cost and disruption of digging up and replacing pipes"
    ],
    processSteps: [
      { title: "CCTV Assessment", description: "We survey the damaged pipe to map the exact location, length, and nature of the damage. This determines whether relining is suitable and what liner specification is needed." },
      { title: "Pipe Preparation", description: "The pipe is cleaned by high-pressure jetting to remove deposits, root fragments, and debris. A clean pipe surface is essential for the resin to bond properly." },
      { title: "Liner Installation", description: "The resin-saturated liner is pulled or inverted into position inside the pipe, then inflated against the pipe walls using air pressure. The liner conforms precisely to the pipe shape." },
      { title: "Curing and Verification", description: "The resin cures to form a rigid structural lining. A final CCTV inspection confirms the lining is smooth, correctly positioned, and defect-free. You receive before-and-after footage." }
    ],
    pricingGuide:
      "Pipe relining in the Manchester area typically costs between £300 and £800 per section depending on pipe diameter, length, and access conditions. Short localised repairs are at the lower end, while longer runs or larger diameter pipes cost more. Relining is often significantly cheaper than excavation when the cost of surface reinstatement is included.",
    faqs: [
      { question: "How long does pipe relining last?", answer: "A properly installed pipe reline has a design life of 50 years or more. The cured resin liner is resistant to root ingress, corrosion, and chemical attack. We provide a written guarantee on all relining work as standard." },
      { question: "Can all damaged pipes be relined?", answer: "Relining is suitable for most pipe damage including cracks, fractures, root intrusion, and displaced joints. However, pipes that have completely collapsed or lost their circular shape may need excavation instead. A CCTV survey determines whether your specific damage is suitable for relining." },
      { question: "Is pipe relining disruptive to my property?", answer: "Relining is minimally disruptive. All work is carried out through existing manholes and access points — no digging is required. Your garden, driveway, and landscaping remain untouched. Most relining jobs are completed within a single day." }
    ],
    relatedLinks: [
      { text: "Drain repair services", href: "/services/drain-repairs/" },
      { text: "Drain excavation", href: "/services/drain-repairs/drain-excavation/" },
      { text: "CCTV drain surveys", href: "/services/cctv-drain-surveys/" }
    ]
  },

  "drain-excavation": {
    detailedDescription:
      "Drain excavation is the definitive repair method for severely damaged drainage that cannot be fixed by relining or patch repair. When pipes have completely collapsed, lost their shape, or suffered extensive damage along a significant length, excavation allows us to remove the failed section entirely and replace it with new pipework. Our excavation teams use mini-diggers, hand-dig equipment, and shoring systems appropriate to the depth and ground conditions. We work in all soil types found across Greater Manchester including clay, sand, rock, and mixed ground. Before any digging begins, we use CCTV survey data to plan the excavation precisely — identifying the exact location and extent of damage so we dig only where necessary, minimising disruption. New pipework is installed to current building regulations using appropriate materials and gradient specifications. Once the pipe is laid and tested, we backfill the trench in compacted layers and reinstate the surface to match the surrounding area — whether that is lawn, paving, tarmac, or concrete. Drain excavation typically takes one to three days depending on the length of pipe, depth, and reinstatement requirements.",
    signsYouNeed: [
      "A CCTV survey has confirmed a complete pipe collapse or loss of pipe shape that cannot be relined",
      "There is visible subsidence or a sinkhole forming above a drainage route in your garden or driveway",
      "Sewage is leaking into the surrounding ground, causing contamination or persistent damp",
      "Previous relining or patch repairs have failed because the underlying pipe structure is too degraded",
      "You need to replace a section of pipe to accommodate a new connection for an extension or development"
    ],
    processSteps: [
      { title: "Survey and Plan", description: "We review CCTV footage to plan the excavation precisely — marking out the dig area, confirming pipe depth, and identifying any utilities or obstacles. You receive a clear scope of work before we start." },
      { title: "Excavation", description: "We carefully dig down to the damaged pipe using appropriate equipment for the location — mini-digger for open areas, hand-dig for confined spaces or near buildings. Shoring is installed as needed for safety." },
      { title: "Pipe Replacement", description: "The damaged section is removed and replaced with new pipework laid to the correct gradient. Connections to existing upstream and downstream pipes are made using appropriate adaptors and sealed joints." },
      { title: "Backfill and Reinstatement", description: "The trench is backfilled in compacted layers to prevent future settlement. The surface is reinstated to match the surrounding area — turf, paving, concrete, or tarmac — leaving a neat, professional finish." }
    ],
    pricingGuide:
      "Drain excavation in the Manchester area varies depending on depth, length, ground conditions, and surface reinstatement. Typical costs range from £500 to £2,000 or more for extensive work. We provide a detailed fixed quote after CCTV diagnosis so you know exactly what to expect. Surface reinstatement is always included in our quotes.",
    faqs: [
      { question: "How long does drain excavation take?", answer: "A straightforward excavation of a short section at moderate depth is typically completed in one day. Longer runs, deeper pipes, or complex ground conditions may take two to three days. We always provide a realistic timeframe before starting." },
      { question: "Will excavation damage my garden or driveway?", answer: "Excavation does require digging a trench to reach the pipe. We minimise the width and length of the trench using precise CCTV data, and we reinstate all surfaces to match the surrounding area once the pipe is replaced. Most gardens and driveways look fully restored within a few weeks." },
      { question: "Is excavation the only option for a collapsed drain?", answer: "If the pipe has completely collapsed and lost its shape, excavation is usually the only reliable repair method. Partially collapsed pipes may sometimes be relined, but this depends on the extent of damage. A CCTV survey determines which method is appropriate for your specific situation." }
    ],
    relatedLinks: [
      { text: "Drain repair services", href: "/services/drain-repairs/" },
      { text: "Pipe relining", href: "/services/drain-repairs/pipe-relining/" },
      { text: "CCTV drain surveys", href: "/services/cctv-drain-surveys/" }
    ]
  }
};

export function getSubServiceContent(subServiceSlug: string): SubServiceContent | null {
  return SUB_SERVICE_CONTENT[subServiceSlug] || null;
}
