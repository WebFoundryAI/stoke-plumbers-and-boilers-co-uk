/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  "stoke-on-trent": {
    neighborhoods: ["Fenton", "Longton", "Burslem", "Tunstall", "Hanley", "Shelton", "Trentham", "Hartshill", "Penkhull", "Newcastle Road"],
    landmarks: ["Stoke-on-Trent city centre", "Trentham Gardens", "the Potteries Museum", "Hanley Park", "Victoria Hall"],
    drainageInfo: "Stoke-on-Trent's drainage infrastructure reflects its industrial pottery heritage, with many properties connected to Victorian-era systems. The six towns that make up the city each have distinct drainage characteristics, from older clay pipe networks in Burslem to more modern systems in newer residential developments.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian terraces, Edwardian semis, modern apartments, and commercial premises"
  },
  "newcastle-under-lyme": {
    neighborhoods: ["Knutton", "Cross Heath", "May Bank", "Clayton", "Silverdale", "Westlands", "Keele", "Chesterton", "Porthill", "Bradwell"],
    landmarks: ["Newcastle-under-Lyme town centre", "Keele University", "the Guildhall", "Brampton Park", "Castle Hill"],
    drainageInfo: "Newcastle-under-Lyme's mix of historic town centre properties and modern residential estates creates varied drainage requirements. Properties in the older areas feature clay drainage systems, while newer developments around Westlands and Clayton have modern plastic pipework.",
    responseTime: "typically within 30-45 minutes",
    propertyTypes: "Victorian terraces, 1930s semis, modern housing estates, and student accommodation"
  },
  stafford: {
    neighborhoods: ["Stafford town centre", "Littleworth", "Rowley Park", "Baswich", "Weeping Cross", "Tillington", "Doxey", "Highfields", "Coton Fields", "Beaconside"],
    landmarks: ["Stafford Castle", "the Ancient High House", "Victoria Park", "Stafford railway station", "Shire Hall Gallery"],
    drainageInfo: "Stafford's drainage infrastructure includes a mix of historic Victorian systems in the town centre and modern installations in newer residential areas. The River Sow and Penk influence the local water table and drainage capacity, particularly during periods of heavy rainfall.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian and Edwardian town houses, 1960s-1980s estates, modern new builds, and rural properties"
  },
  crewe: {
    neighborhoods: ["Nantwich Road", "Wistaston", "Haslington", "Shavington", "Weston", "Coppenhall", "Crewe Green", "Leighton", "Sydney", "Hungerford"],
    landmarks: ["Crewe railway station", "Crewe Heritage Centre", "Queens Park", "Crewe Alexandra stadium", "the market square"],
    drainageInfo: "Crewe's railway heritage has shaped its infrastructure, including drainage. Many properties near the historic railway works have complex underground services. The town's relatively flat terrain means drainage relies on adequate pipe gradients, and older clay systems in central areas benefit from regular maintenance.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian railway workers' terraces, interwar semis, modern estates, and commercial properties"
  },
  congleton: {
    neighborhoods: ["Congleton town centre", "Mossley", "Buglawton", "Astbury", "Dane-in-Shaw", "Biddulph Road", "Sandbach Road", "West Heath", "Eaton", "Hulme Walfield"],
    landmarks: ["Congleton Park", "the Town Hall", "Astbury Mere", "the River Dane", "Little Moreton Hall"],
    drainageInfo: "Congleton's position beside the River Dane creates specific drainage considerations for local properties. The town's stone-built older properties have original drainage systems that may need attention, while the proximity to the river means surface water drainage management is important for lower-lying areas.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "stone-built terraces, Victorian properties, 1970s-1990s estates, and rural homes"
  },
  leek: {
    neighborhoods: ["Leek town centre", "Compton", "Westwood", "Ball Haye Green", "Ladderedge", "Birchall", "Buxton Road", "Macclesfield Road", "Abbots Road", "Ashbourne Road"],
    landmarks: ["Leek market square", "the Nicholson War Memorial", "Brough Park", "the Roaches", "Brindley Mill"],
    drainageInfo: "Leek's Staffordshire Moorlands setting means properties contend with significant rainfall and moorland runoff. The town's stone-built properties have drainage systems suited to the local geology, but older clay pipes benefit from regular inspection. The hilly terrain requires careful surface water management.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Moorland stone cottages, Victorian mill-town terraces, detached properties, and rural farmhouses"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  "stoke-on-trent": {
    "blocked-drains": {
      intro: "Stoke-on-Trent's six towns each have their own drainage character, from the Victorian clay pipes of Burslem to the newer systems in Trentham. Our engineers understand the local infrastructure and respond quickly to clear blocked drains across the city.",
      commonProblems: ["Clay pipe deterioration in older terraces", "Fat and grease buildup in domestic kitchens", "Tree root intrusion in established residential streets", "Debris accumulation in older shared drainage", "Foreign object blockages in commercial premises"],
      process: "We begin with a thorough assessment using CCTV cameras where needed to pinpoint the blockage. High-pressure jetting or mechanical rodding clears the obstruction, and we verify full flow restoration before completing the job.",
      localTip: "Properties in Burslem and Hanley with older clay drainage should consider annual CCTV checks to catch root intrusion and pipe deterioration early."
    },
    "drain-unblocking": {
      intro: "When drains back up in Stoke-on-Trent, our local engineers respond quickly across all six towns. Whether you are in Fenton, Longton, or Tunstall, we bring the right equipment to unblock your drains with minimal disruption.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap", "External drain blockages from leaves and debris", "Shared drainage issues in terraced properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive with manual rods, electric drain snakes, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage, select the appropriate method, and clear your drains efficiently.",
      localTip: "Stoke-on-Trent's terraced streets often share rear drainage — if neighbours are also experiencing slow drains, the blockage is likely in the shared section."
    },
    "cctv-drain-surveys": {
      intro: "Our advanced CCTV drain surveys provide clear footage of pipe conditions throughout Stoke-on-Trent, helping identify issues before they become emergencies. This is particularly valuable for the city's many older Victorian and Edwardian properties.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from ground movement"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and images showing any areas of concern.",
      localTip: "Buying a property in Stoke-on-Trent? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair after completion."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Stoke-on-Trent's often ageing pipe systems. Our specialist equipment delivers powerful water pressure to cut through grease, scale, and debris.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Stoke-on-Trent's hard water contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Stoke-on-Trent receive our immediate attention, with engineers ready to tackle overflowing drains, flooding, and sewage backups around the clock, from Hanley city centre to residential areas across the six towns.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we dispatch the nearest available engineer to your Stoke-on-Trent location. They assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Stoke-on-Trent's mix of Victorian infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in older metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Stoke-on-Trent's clay-rich soil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs of pipe damage."
    }
  },
  "newcastle-under-lyme": {
    "blocked-drains": {
      intro: "Newcastle-under-Lyme's mix of historic town centre properties and modern residential estates means blocked drains can strike in a variety of pipe types. Our local engineers understand the area's drainage character and respond quickly to restore your system.",
      commonProblems: ["Fat and grease buildup in domestic kitchens", "Root intrusion from established garden trees", "Debris accumulation in older clay pipes", "Blockages in shared terraced property drainage", "Foreign objects in commercial drainage"],
      process: "We assess the blockage using CCTV inspection where necessary, then select the most effective clearing method — whether jetting, rodding, or mechanical cutting. We verify full flow before leaving.",
      localTip: "Newcastle-under-Lyme properties near Keele University should maintain drainage regularly, as high-occupancy student accommodation increases the risk of blockages."
    },
    "drain-unblocking": {
      intro: "When drains block in Newcastle-under-Lyme, our engineers respond promptly across the borough from Knutton to Clayton. We carry comprehensive equipment to handle all drain unblocking scenarios.",
      commonProblems: ["Kitchen waste blockages", "Bathroom drain clogs", "External gulley obstructions", "Toilet and bathroom blockages", "Washing machine drain problems"],
      process: "Our engineers arrive equipped for all unblocking situations. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, confirming flow restoration before completing the visit.",
      localTip: "Newcastle-under-Lyme's newer developments around Westlands and Clayton have modern plastic drainage — avoid chemical drain cleaners that can damage plastic fittings."
    },
    "cctv-drain-surveys": {
      intro: "Whether you are buying a period property in the town centre or investigating recurring drainage problems in a modern Newcastle-under-Lyme estate, our CCTV surveys provide the answers you need.",
      commonProblems: ["Pre-purchase drainage condition assessment", "Root ingress investigation", "Mapping drainage before extensions", "Condition surveys for insurance", "Investigating recurring blockage causes"],
      process: "We survey your drainage system methodically, recording footage and producing a detailed written report with prioritised recommendations for any repairs or maintenance needed.",
      localTip: "Newcastle-under-Lyme's older properties near the town centre may have original clay drainage — a CCTV survey reveals condition before it becomes an expensive problem."
    },
    "drain-jetting": {
      intro: "High-pressure jetting keeps Newcastle-under-Lyme drainage systems flowing efficiently, removing accumulated deposits from both Victorian clay pipes and modern plastic systems across the borough.",
      commonProblems: ["Scale and grease accumulation", "Silt deposits in surface water drains", "Root fragment clearance", "General maintenance cleaning", "Pre-survey pipe preparation"],
      process: "We select jetting pressure and nozzle type suited to your pipe material and the nature of the deposits. The result is thoroughly cleaned drainage with verified improved flow.",
      localTip: "Newcastle-under-Lyme food businesses should schedule regular drain jetting to maintain compliance and prevent costly emergency callouts."
    },
    "emergency-drain-services": {
      intro: "Newcastle-under-Lyme drainage emergencies receive rapid response from our local teams, day and night. Whether you face flooding in Cross Heath or sewage backup in Silverdale, we are available around the clock.",
      commonProblems: ["Sewage backup into ground-floor rooms", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Collapsed drainage", "Foul odour emergencies"],
      process: "Emergency calls are prioritised immediately. Our nearest engineer heads to your property with pumping, jetting, and containment equipment to manage the situation swiftly.",
      localTip: "Know your stopcock location and the position of external manholes — this information allows our emergency engineers to begin work more quickly on arrival."
    },
    "drain-repairs": {
      intro: "Drain repairs in Newcastle-under-Lyme cover the full range of property ages, from Victorian town centre houses to modern estate homes. We select repair methods matched to your property's construction and drainage type.",
      commonProblems: ["Cracked clay and plastic pipes", "Displaced joints from ground movement", "Root damage requiring pipe sections", "Corrosion in older connections", "Settlement damage in newer estates"],
      process: "CCTV diagnosis confirms the extent and nature of damage before we recommend any repair. We explain all options clearly and complete work to a high standard with a written guarantee.",
      localTip: "Newcastle-under-Lyme properties on sloping ground towards the town centre should check drainage for joint displacement after periods of heavy rain."
    }
  },
  stafford: {
    "blocked-drains": {
      intro: "Stafford's town centre Victorian properties and surrounding modern residential estates each present distinct drainage challenges. Our engineers cover the whole of Stafford and surrounding villages, clearing blocked drains with professional efficiency.",
      commonProblems: ["Fat and grease in domestic kitchen drains", "Root intrusion from mature trees", "Silt accumulation from surface water drainage", "Blockages in shared Victorian drainage systems", "Debris in commercial premises drainage"],
      process: "We assess your Stafford property's drainage system before selecting the most effective clearing method. CCTV inspection pinpoints the blockage location, and high-pressure jetting or rodding removes the obstruction completely.",
      localTip: "Stafford properties near the River Sow and Penk should ensure surface water drains are kept clear, as rainfall can cause rapid rises in local water levels."
    },
    "drain-unblocking": {
      intro: "From Stafford town centre to the surrounding residential areas of Rowley Park and Baswich, our drain unblocking teams respond quickly with the right equipment for every property type.",
      commonProblems: ["Kitchen and bathroom blockages", "External gulley obstructions", "Toilet blockages", "Utility room drain problems", "Commercial drainage issues"],
      process: "Our Stafford engineers carry comprehensive unblocking equipment. We identify the blockage quickly and apply the most effective clearing technique, ensuring complete removal before confirming flow restoration.",
      localTip: "Stafford's newer developments on the outskirts of town have modern plastic drainage — use enzyme-based drain cleaners rather than harsh chemicals to maintain flow without damaging pipes."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Stafford property's drainage condition is important whether you are buying, selling, or maintaining your home. Our CCTV surveys provide detailed reports that protect your investment.",
      commonProblems: ["Pre-purchase drainage assessment", "Condition surveys for period properties", "Root ingress investigation", "Extension planning drainage mapping", "Insurance documentation requirements"],
      process: "We survey your entire accessible drainage network, producing a comprehensive written report with annotated footage, condition summary, and prioritised maintenance recommendations.",
      localTip: "Stafford Castle and historic town centre properties may have original drainage features worth documenting — our CCTV surveys provide a full record of your system."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting maintains Stafford drainage at peak performance, removing grease, scale, and debris from both Victorian clay pipes in the town centre and modern plastic systems in newer developments.",
      commonProblems: ["Grease and fat accumulation", "Hard water scale deposits", "Silt in surface water drainage", "Root fragment removal", "Preventative maintenance cleaning"],
      process: "We assess pipe material and deposit type before jetting, selecting appropriate pressure and nozzle configuration. Post-jetting flow verification confirms the system is fully cleared.",
      localTip: "Stafford's proximity to agricultural land means some drainage can accumulate unusual organic debris — annual jetting keeps systems running optimally."
    },
    "emergency-drain-services": {
      intro: "Stafford drainage emergencies receive rapid response from our teams operating across the county town and surrounding area. We are available around the clock to tackle flooding, sewage backup, and drain failures.",
      commonProblems: ["Flooding from blocked drains", "Sewage backing up into properties", "Overflowing manholes", "Drain collapses", "Storm damage to drainage systems"],
      process: "Emergency calls trigger immediate dispatch. Our engineers arrive prepared for the reported situation, implementing containment and working to resolve the emergency as quickly as possible.",
      localTip: "Stafford properties near the town's watercourses should have emergency drainage contacts readily available, particularly during winter and periods of heavy rainfall."
    },
    "drain-repairs": {
      intro: "Drain repairs in Stafford cover the full range of property types, from historic town centre buildings to modern suburban estates. Our repair specialists select methods and materials suited to each property's age and drainage type.",
      commonProblems: ["Cracked pipes from ground movement", "Root damage to joints", "Displaced sections in older systems", "Corrosion in cast iron pipes", "Damage from extension groundworks"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach and explain all options clearly. No-dig relining suits many Stafford property types, avoiding disruption to gardens and driveways.",
      localTip: "Stafford's varied ground conditions from river alluvium to Triassic sandstone affect drainage pipe stability — flexible repair solutions perform better in areas prone to ground movement."
    }
  },
  crewe: {
    "blocked-drains": {
      intro: "Crewe's railway heritage has shaped its property stock and underground infrastructure. Our engineers understand the town's varied drainage landscape, from Victorian workers' terraces near the historic railway works to modern residential developments, and respond quickly to clear any blockage.",
      commonProblems: ["Fat and grease buildup in terraced property drains", "Root intrusion from mature street trees", "Silt accumulation in flat terrain drainage", "Shared drainage blockages in Victorian housing", "Commercial kitchen drain problems"],
      process: "We assess Crewe drainage with knowledge of the town's flat topography, which can slow drainage flow and allow deposits to accumulate. Our clearing methods restore full flow capacity and address the underlying causes.",
      localTip: "Crewe's flat terrain means drainage relies on adequate pipe gradients — even minor blockages can cause slow drainage, so address issues early before they worsen."
    },
    "drain-unblocking": {
      intro: "When Crewe drains need unblocking, our local teams respond across the town from Nantwich Road to Wistaston and Haslington. We handle all domestic and commercial drain unblocking with professional efficiency.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet and cistern blockages", "Industrial drain problems"],
      process: "Our Crewe engineers carry comprehensive unblocking equipment for the town's varied property types. We locate and clear blockages efficiently, checking flow restoration before completing each job.",
      localTip: "Crewe properties near the former railway works site may have complex underground infrastructure — call us before attempting any DIY drainage work."
    },
    "cctv-drain-surveys": {
      intro: "Whether you are purchasing a period property near Crewe town centre or investigating drainage problems in a newer development, our CCTV surveys provide the detailed information you need to make informed decisions.",
      commonProblems: ["Pre-purchase condition surveys", "Industrial heritage drainage mapping", "Root ingress detection", "Pipe condition assessment for insurance", "Planning drainage for extensions"],
      process: "We survey Crewe properties thoroughly, documenting all accessible drainage and producing comprehensive reports suitable for property transactions and insurance claims.",
      localTip: "Crewe properties near the former Rolls-Royce and railway sites may have unusual drainage arrangements — a CCTV survey before purchasing is strongly recommended."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides effective maintenance for Crewe's drainage systems, cleaning both Victorian clay pipes in the town centre and modern plastic systems in newer estates. Regular jetting is particularly important on flat terrain where deposits accumulate faster.",
      commonProblems: ["Silt deposits from low-gradient drainage", "Fat and grease accumulation", "Scale buildup from water supply", "Root fragments after treatment", "Preventative maintenance cleaning"],
      process: "We pay special attention to pipe gradients when jetting Crewe properties, ensuring thorough cleaning at key points where flow naturally slows. Post-jetting verification confirms the entire system drains efficiently.",
      localTip: "Crewe's flat terrain means jetting every 12 months rather than 18 keeps drainage flowing freely and prevents gradual blockage development."
    },
    "emergency-drain-services": {
      intro: "Crewe drainage emergencies receive rapid response from our local teams, available around the clock. Whether you face flooding in Wistaston or sewage backup near the town centre, we arrive quickly with the right equipment.",
      commonProblems: ["Surface water flooding during heavy rain", "Sewage backing up through ground-floor fittings", "Manhole overflows", "Drain collapses", "Foul odour emergencies"],
      process: "Emergency calls from Crewe receive immediate dispatch. Our engineers understand the town's flat terrain drainage challenges and arrive equipped to manage water ingress while resolving the underlying failure.",
      localTip: "Crewe properties should fit non-return valves on main drainage connections to prevent sewage backup during periods of intense rainfall."
    },
    "drain-repairs": {
      intro: "Drain repairs in Crewe address the full range of issues found in the town's varied property stock. From Victorian terraces to modern estates, our repair specialists deliver solutions that account for Crewe's flat terrain and drainage characteristics.",
      commonProblems: ["Cracked pipes from ground settlement", "Root damage from established trees", "Joint displacement in clay pipe systems", "Low-gradient pipe re-laying requirements", "Damage from utility works"],
      process: "CCTV diagnosis confirms damage extent before we recommend any repair approach. We explain all options and complete work efficiently, restoring your drainage with a written guarantee.",
      localTip: "Crewe's former industrial areas may have unexpected underground features — always commission surveys before excavating for drainage repairs."
    }
  },
  congleton: {
    "blocked-drains": {
      intro: "Congleton's stone-built older properties and riverside setting create specific drainage considerations. Our engineers cover the whole town and surrounding villages, clearing blocked drains with knowledge of local property types and drainage characteristics.",
      commonProblems: ["Organic debris from riverside vegetation", "Root intrusion in older stone-built properties", "Fat and grease in domestic drains", "Silt accumulation near the River Dane", "Debris in period property drainage"],
      process: "We assess each Congleton drainage situation individually, considering proximity to the River Dane and property age. Our clearing methods are tailored to achieve effective results while protecting your drainage infrastructure.",
      localTip: "Congleton properties near the River Dane should have drainage inspected regularly, as river-side tree roots and seasonal water table changes can affect pipe integrity."
    },
    "drain-unblocking": {
      intro: "When Congleton drains need unblocking, our local teams respond quickly across the town from Mossley to Astbury. We handle residential and commercial drain unblocking for all property types in the area.",
      commonProblems: ["Kitchen sink blockages", "Bathroom and shower drain clogs", "External gulley obstructions", "Toilet blockages", "Shared drainage issues"],
      process: "Our Congleton engineers arrive with full unblocking equipment suited to the town's varied property types. We identify and clear blockages efficiently, testing flow before completing each visit.",
      localTip: "Congleton's stone-built properties often have original drainage fittings — use gentle clearing methods initially and call us if blockages are persistent."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys are valuable for Congleton properties of all ages, from historic stone buildings to modern developments. Our detailed reports reveal pipe conditions and help you plan maintenance effectively.",
      commonProblems: ["Pre-purchase drainage assessment", "Root ingress detection", "River proximity drainage evaluation", "Condition surveys for insurance", "Extension planning requirements"],
      process: "We survey your Congleton property's drainage systematically, producing detailed reports with annotated footage and prioritised recommendations for any work needed.",
      localTip: "Congleton properties near Astbury Mere and the River Dane benefit from periodic CCTV surveys to monitor the effects of the local water environment on drainage."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides effective maintenance for Congleton's drainage systems, removing organic debris, scale, and grease from both older stone-built properties and modern homes across the town.",
      commonProblems: ["Organic debris from riverside vegetation", "Grease accumulation in domestic drains", "Scale deposits from water supply", "Root fragments after treatment", "General maintenance cleaning"],
      process: "We select appropriate jetting equipment for Congleton's varied pipe types. The cleaning process is thorough but controlled, removing deposits while protecting your drainage system's integrity.",
      localTip: "Congleton properties surrounded by mature vegetation should consider annual jetting to prevent organic debris building up in drainage over time."
    },
    "emergency-drain-services": {
      intro: "Congleton drainage emergencies receive rapid response from our local teams. Whether you face flooding near the River Dane or sewage backup in the town centre, we are available around the clock.",
      commonProblems: ["Flooding from overwhelmed drainage", "Sewage backup into properties", "Overflowing inspection chambers", "Drain collapse", "Storm-related drainage emergencies"],
      process: "Emergency calls from Congleton receive immediate attention. Our engineers arrive prepared for the specific situation, implementing containment and resolving the emergency effectively.",
      localTip: "Congleton properties in lower-lying areas near watercourses should have non-return valves fitted to prevent back-flow during heavy rainfall events."
    },
    "drain-repairs": {
      intro: "Drain repairs in Congleton address issues across the full range of local property types. From period stone buildings to modern estates, our repair team delivers lasting solutions suited to local ground conditions and drainage requirements.",
      commonProblems: ["Cracked pipes from seasonal ground movement", "Root damage to joints", "Stone drainage channel deterioration", "Displaced joints in older systems", "Damage from watercourse proximity"],
      process: "Following CCTV investigation, we recommend appropriate repair methods and explain all options clearly. No-dig relining suits many Congleton properties, preserving gardens and hard surfaces.",
      localTip: "Congleton's proximity to the River Dane means groundwater can complicate excavation repairs — ask about no-dig options to avoid these challenges."
    }
  },
  leek: {
    "blocked-drains": {
      intro: "Leek's Staffordshire Moorlands setting brings significant rainfall and distinctive drainage challenges for local properties. Our engineers understand the moorland environment and the stone-built properties that characterise the town, responding quickly to clear blocked drains across the area.",
      commonProblems: ["Storm debris washed into drains during heavy rainfall", "Root intrusion from moorland and garden vegetation", "Silt and sediment from hillside runoff", "Fat and grease buildup in domestic kitchens", "Organic debris in rural drainage systems"],
      process: "We factor Leek's terrain and rainfall patterns into our assessment. Hillside properties require different clearing approaches than valley properties, and our engineers carry equipment suited to every scenario the moorland geography presents.",
      localTip: "Leek properties in exposed moorland locations should clear external gullies before autumn to prevent storm debris causing blockages through winter."
    },
    "drain-unblocking": {
      intro: "When Leek drains need unblocking, our local teams respond across the town and surrounding moorland villages. We handle Victorian clay pipes in the town centre and rural drainage systems with equal expertise.",
      commonProblems: ["Kitchen drain blockages in terraced properties", "Bathroom clogs from hair and soap", "External drain blockages from moorland debris", "Shared drainage issues in older housing", "Agricultural drainage connections"],
      process: "Our Leek engineers carry comprehensive equipment suited to moorland property drainage. We diagnose the blockage accurately and clear it completely, confirming full flow restoration before leaving.",
      localTip: "Leek's stone-built properties often have original Victorian clay drainage — regular clearing prevents the gradual accumulation of silt and organic debris."
    },
    "cctv-drain-surveys": {
      intro: "CCTV drain surveys are particularly valuable in Leek's older properties, where drainage systems have been subject to Staffordshire Moorlands weather conditions for many decades. Our surveys reveal condition and help you plan effective maintenance.",
      commonProblems: ["Storm damage assessment after heavy moorland rainfall", "Root ingress from moorland vegetation", "Pipe condition surveys before property purchase", "Investigating persistent blockage causes", "Rural drainage route mapping"],
      process: "We survey Leek properties with an understanding of local environmental factors, producing comprehensive reports that account for the moorland climate's effects on drainage infrastructure.",
      localTip: "Leek properties experience freeze-thaw cycles that can crack pipes — a CCTV survey after harsh winters catches damage before it leads to blockages or flooding."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides essential maintenance for Leek's drainage systems, which contend with moorland rainfall, hillside silt, and organic debris year-round. Our specialist equipment handles everything from clearing storm debris to descaling Victorian pipes in the town centre.",
      commonProblems: ["Silt and sediment from hillside runoff", "Organic debris from moorland vegetation", "Scale buildup from water supply", "Root fragment removal after treatment", "Preventative cleaning before winter"],
      process: "We select jetting equipment and settings appropriate for Leek's conditions — higher capacity for moorland debris, careful pressure settings for older stone drainage. Flow verification confirms complete clearing.",
      localTip: "Leek properties at higher elevations experience more rainfall and faster silt buildup — annual jetting before winter keeps drainage clear through the wettest months."
    },
    "emergency-drain-services": {
      intro: "Moorland weather can overwhelm drainage systems quickly, and Leek properties need emergency drainage services that understand this reality. Our teams respond around the clock to flooding, sewage backup, and drain failures across the town and surrounding villages.",
      commonProblems: ["Storm water flooding overwhelming drainage", "Sewage backup during heavy rainfall", "Hillside drain collapse after ground saturation", "Manhole overflows on steep streets", "Foul water backing up through ground-floor fittings"],
      process: "Emergency calls from Leek trigger immediate dispatch. Our engineers arrive prepared for weather-related moorland emergencies, with pumping equipment and temporary drainage solutions to protect your property.",
      localTip: "Leek hillside properties should keep drainage contacts readily available — Staffordshire Moorlands storms can overwhelm local drainage faster than in lower-lying areas."
    },
    "drain-repairs": {
      intro: "Leek's drainage faces unique stresses from moorland weather, steep terrain, and ageing stone-built infrastructure. Our repair specialists work across the town and surrounding villages, using materials that withstand the local conditions.",
      commonProblems: ["Freeze-thaw cracking in exposed pipe sections", "Ground movement damage on steep terrain", "Erosion around joints from high water flow", "Root damage from moorland vegetation", "Deterioration of original stone drainage channels"],
      process: "We assess drainage repairs with Leek's specific conditions in mind, choosing materials and methods that withstand moorland weather. Flexible solutions are preferred on steep terrain where ground movement is ongoing.",
      localTip: "Leek properties should use frost-resistant pipe materials for any exposed or shallow drainage repairs to withstand the Staffordshire Moorlands climate."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with United Utilities infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and United Utilities"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and drainage emergencies across Stoke-on-Trent and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Stoke-on-Trent and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across our service area. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Stoke-on-Trent and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
