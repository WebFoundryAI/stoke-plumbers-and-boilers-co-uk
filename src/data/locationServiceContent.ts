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
  manchester: {
    neighborhoods: ["Didsbury", "Chorlton", "Fallowfield", "Rusholme", "Withington", "Levenshulme", "Moss Side", "Hulme", "Ancoats", "Northern Quarter"],
    landmarks: ["Manchester city centre", "Old Trafford", "the Etihad Stadium", "Manchester University", "Piccadilly Gardens"],
    drainageInfo: "Manchester's Victorian-era drainage infrastructure serves a diverse mix of properties, from terraced houses to high-rise apartments. The city centre's commercial properties and older residential areas often experience drainage issues due to ageing clay pipes and tree root intrusion.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, modern apartments, commercial premises, and student accommodation"
  },
  salford: {
    neighborhoods: ["MediaCityUK", "Salford Quays", "Eccles", "Swinton", "Pendleton", "Walkden", "Worsley", "Irlam", "Cadishead", "Little Hulton"],
    landmarks: ["MediaCityUK", "the Lowry Theatre", "Salford Royal Hospital", "the University of Salford", "Salford Quays"],
    drainageInfo: "Salford combines historic industrial architecture with modern developments at MediaCityUK and Salford Quays. The older terraced properties in areas like Eccles and Swinton often have shared drainage systems that require specialist attention, while newer developments may face issues with inadequate pipe gradients.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "industrial conversions, modern waterside apartments, traditional terraces, and commercial units"
  },
  stockport: {
    neighborhoods: ["Heaton Moor", "Heaton Chapel", "Heaton Norris", "Bramhall", "Cheadle", "Cheadle Hulme", "Marple", "Reddish", "Edgeley", "Hazel Grove"],
    landmarks: ["Stockport Market", "the Pyramid", "Stockport Viaduct", "Vernon Park", "Bramhall Hall"],
    drainageInfo: "Stockport's varied topography creates unique drainage challenges. The hilly areas around Marple and Romiley can experience surface water issues, while the low-lying town centre and areas near the River Mersey are prone to flooding. Victorian properties in Heaton Moor feature original clay drainage that often requires attention.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "Victorian villas, Edwardian semis, 1930s properties, and modern housing estates"
  },
  altrincham: {
    neighborhoods: ["Hale", "Hale Barns", "Bowdon", "Timperley", "Broadheath", "Navigation Road", "Dunham Massey", "Ashley", "Well Green", "Oldfield Brow"],
    landmarks: ["Altrincham Market", "Dunham Massey", "Altrincham Interchange", "Stamford Park", "the Ice Arena"],
    drainageInfo: "Altrincham and the surrounding Trafford area feature many large, mature properties with extensive grounds. These older homes in Hale and Bowdon often have complex drainage systems serving multiple outbuildings. Tree root intrusion from established gardens is a common issue, as is the maintenance of period drainage features.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "large Victorian and Edwardian houses, prestigious detached properties, converted barns, and newer executive homes"
  },
  bolton: {
    neighborhoods: ["Horwich", "Farnworth", "Kearsley", "Little Lever", "Westhoughton", "Bromley Cross", "Egerton", "Astley Bridge", "Harwood", "Smithills"],
    landmarks: ["Bolton Town Hall", "the Macron Stadium", "Rivington Pike", "Last Drop Village", "Smithills Hall"],
    drainageInfo: "Bolton's industrial heritage means many properties sit on former mill sites with complex underground drainage. The town's hilly terrain, particularly towards the West Pennine Moors, creates natural drainage challenges. Older terraced properties in Farnworth and Little Lever often share drainage infrastructure that requires coordinated maintenance.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "mill conversions, traditional stone terraces, suburban semis, and rural properties"
  },
  oldham: {
    neighborhoods: ["Shaw", "Royton", "Chadderton", "Failsworth", "Lees", "Uppermill", "Delph", "Greenfield", "Saddleworth", "Springhead"],
    landmarks: ["Oldham Town Centre", "Saddleworth Moor", "Alexandra Park", "Oldham Coliseum", "the Pennine Way"],
    drainageInfo: "Oldham's Pennine location means properties often contend with significant rainfall and surface water drainage challenges. The steep terrain in Saddleworth and surrounding villages requires careful drainage design. Historic mill town properties in the town centre have ageing Victorian drainage that benefits from regular maintenance and inspection.",
    responseTime: "typically within 75-90 minutes",
    propertyTypes: "Pennine stone cottages, Victorian terraces, converted mills, and hilltop properties"
  },
  rochdale: {
    neighborhoods: ["Littleborough", "Milnrow", "Heywood", "Middleton", "Norden", "Castleton", "Sudden", "Bamford", "Wardle", "Smallbridge"],
    landmarks: ["Rochdale Town Hall", "Hollingworth Lake", "the Rochdale Canal", "Healey Dell", "Rochdale Pioneers Museum"],
    drainageInfo: "Rochdale's mill town heritage is reflected in its drainage infrastructure, with many properties connected to Victorian-era systems. The Pennine foothills create surface water management challenges, particularly in Littleborough and Norden. Canal-side properties require specialist attention due to their proximity to waterways.",
    responseTime: "typically within 75-90 minutes",
    propertyTypes: "stone-built terraces, mill conversions, canal-side properties, and moorland homes"
  },
  sale: {
    neighborhoods: ["Sale Moor", "Ashton upon Mersey", "Brooklands", "Dane Road", "Worthington", "Cross Street", "Marsland", "Priory", "Springfield", "Walton Park"],
    landmarks: ["Sale Water Park", "Waterside Arts Centre", "Sale Metrolink station", "Walkden Gardens", "the Bridgewater Canal"],
    drainageInfo: "Sale's residential character means most drainage issues relate to domestic properties. The area's relatively flat terrain and proximity to the Mersey floodplain means surface water drainage is crucial. Period properties around Sale Moor feature original Victorian drainage, while newer estates in Brooklands have modern systems that occasionally suffer from construction-related issues.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian semis, 1930s properties, modern townhouses, and waterside developments"
  },
  didsbury: {
    neighborhoods: ["East Didsbury", "West Didsbury", "Withington", "Burnage", "Fog Lane", "Parrs Wood", "Barlow Moor", "Albert Park", "Lapwing Lane", "Burton Road"],
    landmarks: ["Didsbury Village", "Fletcher Moss Park", "the Didsbury Pub", "Parrs Wood Entertainment Centre", "Simon's Bridge"],
    drainageInfo: "Didsbury's Victorian and Edwardian housing stock features original clay drainage systems that are often over 100 years old. The leafy, tree-lined streets create beautiful environments but also contribute to root intrusion in underground pipes. The village centre's restaurants and cafes generate commercial drainage demands alongside residential needs.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian villas, Edwardian family homes, converted apartments, and period terraces"
  },
  chorlton: {
    neighborhoods: ["Chorlton-cum-Hardy", "Chorlton Green", "Barlow Moor", "Beech Road", "Manchester Road", "Oswald Road", "St Werburgh's", "Hardy Lane", "Edge Lane", "Longford Park"],
    landmarks: ["Chorlton Water Park", "Longford Park", "Beech Road", "Chorlton Meadows", "the Metrolink station"],
    drainageInfo: "Chorlton's eclectic mix of property types presents varied drainage challenges. Victorian terraces around Beech Road and Chorlton Green have period drainage requiring specialist attention. The proximity to Chorlton Water Park and the Mersey floodplain means some properties face surface water challenges. Converted properties and rear extensions have often modified original drainage layouts.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian terraces, Edwardian semis, 1930s houses, and converted flats"
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
  manchester: {
    "blocked-drains": {
      intro: "Manchester's diverse property portfolio means blocked drains can strike anywhere, from the Victorian terraces of Chorlton to the high-rise apartments of the city centre. Our experienced engineers understand the unique drainage challenges facing Manchester properties and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in restaurant districts", "Tree root intrusion from mature street trees", "Debris accumulation in Victorian clay pipes", "Wet wipe blockages in student accommodation areas", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Manchester's tree-lined streets in Didsbury and Withington should consider annual drain inspections to catch root intrusion early."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Manchester, you need a fast response from engineers who know the local area. Whether you're in Ancoats, Moss Side, or the Northern Quarter, our drain unblocking teams are strategically positioned across the city to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in terraced properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Manchester's busy restaurants and takeaways in the Northern Quarter and Rusholme benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Manchester property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for older Manchester properties with Victorian-era drainage.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Manchester's older suburbs? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Manchester's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Manchester's hard water contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Manchester emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the city. From Fallowfield student houses to city centre businesses, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Manchester location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Manchester's mix of Victorian infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Manchester's clay soil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  salford: {
    "blocked-drains": {
      intro: "Salford's transformation from industrial heartland to modern media hub has created a fascinating mix of old and new drainage systems. From the converted warehouses of Salford Quays to the terraced streets of Eccles and Swinton, our engineers have the expertise to clear blocked drains in any property type.",
      commonProblems: ["Sediment accumulation in converted industrial buildings", "Shared drainage conflicts in terraced housing", "Modern plastic pipe blockages in new developments", "Commercial kitchen waste in MediaCityUK restaurants", "Surface water issues near the canal system"],
      process: "Every Salford blocked drain is unique, and we treat it that way. Our engineers assess the property type and drainage configuration before selecting the most effective clearing method, whether that's rodding, jetting, or mechanical cutting.",
      localTip: "Salford Quays properties should ensure their drainage connects correctly to the main sewer system, as some converted buildings have complex private drainage arrangements."
    },
    "drain-unblocking": {
      intro: "From emergency callouts at Salford Royal Hospital to routine unblocking in Worsley's residential streets, our Salford drain unblocking service covers every eventuality. We understand the varied property stock across the borough and bring the right equipment to handle Victorian clay pipes and modern plastic systems alike.",
      commonProblems: ["Hair and soap accumulation in bathroom drains", "Food waste blockages in kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in commercial premises"],
      process: "Our Salford-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Salford's older properties in Pendleton and Irlam often have deep external manholes. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period property in Worsley or investigating drainage issues at a MediaCityUK business, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Salford property.",
      commonProblems: ["Unknown pipe routes in converted buildings", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Salford Quays apartments often share complex drainage systems. A CCTV survey helps identify responsibility boundaries before issues arise."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Salford, equally effective on Victorian clay pipes in Swinton and modern systems in new developments. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in commercial kitchens", "Scale deposits from hard water", "Silt and sediment in surface water drains", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Salford restaurants and food businesses should schedule regular jetting to comply with environmental regulations and prevent emergency callouts."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Salford receive our immediate attention, with engineers stationed to respond rapidly to properties from Walkden to the Quays. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally, minimising damage and disruption to your property.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Foul odours indicating pipe damage"],
      process: "Emergency calls are prioritised and dispatched to our nearest Salford engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Salford properties near the Irwell and Bridgewater Canal should have emergency drainage contacts readily available, particularly during autumn leaf fall."
    },
    "drain-repairs": {
      intro: "Salford's diverse building stock requires drainage repair expertise spanning centuries of construction techniques. Our repair teams handle everything from relining Victorian clay pipes in Eccles to replacing damaged plastic sections in new-build estates, always using materials and methods suited to your specific property.",
      commonProblems: ["Cracked clay pipes in Victorian properties", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Damage from third-party excavations"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Salford's former industrial areas may have unexpected underground features. Always commission surveys before excavating for drain repairs."
    }
  },
  stockport: {
    "blocked-drains": {
      intro: "Stockport's varied terrain, from the valley floor to the heights of Marple and Romiley, creates diverse drainage challenges. Our Stockport blocked drain specialists understand how topography affects drainage systems and bring the expertise needed to clear blockages in any location, from Heaton Moor's Victorian villas to Bramhall's modern developments.",
      commonProblems: ["Gradient-related silt accumulation", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared Victorian drainage"],
      process: "We assess your Stockport property's position and drainage layout before selecting clearing methods. Uphill properties may require different approaches than those in low-lying areas. Our engineers are experienced with all Stockport property types and drainage configurations.",
      localTip: "Stockport's hillside properties in Marple and Romiley should ensure external drains have adequate gully pots to catch debris before it enters the pipe system."
    },
    "drain-unblocking": {
      intro: "When drains block in Stockport, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Cheadle or an overflowing external drain in Hazel Grove, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Stockport engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Stockport's market town heritage means many properties have rear drainage running through neighbouring land. Know your drainage easements to avoid disputes."
    },
    "cctv-drain-surveys": {
      intro: "Stockport's architectural variety, from Heaton Moor's Edwardian gems to Bramhall's executive homes, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing in Stockport's conservation areas? CCTV surveys can identify period drainage features that may have heritage significance."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Stockport's varied drainage systems often need. From clearing scale deposits in Heaton Chapel's Victorian pipes to routine maintenance for Bramhall's newer systems, our jetting service restores optimal drainage performance across the borough.",
      commonProblems: ["Scale accumulation from hard water", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "Stockport's hard water area means pipes benefit from periodic jetting to remove mineral scale before it restricts flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Stockport receive rapid response from our local teams, day or night. From flooded gardens in Cheadle to sewage issues in Marple, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Stockport service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Stockport's hilly areas are prone to surface water issues during heavy rain. Keeping gullies clear helps prevent property flooding."
    },
    "drain-repairs": {
      intro: "Stockport's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for a Victorian pipe in Heaton Moor or excavation repairs in a newer Bramhall property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Damage from external factors"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "Stockport's clay soil can cause seasonal pipe movement. Consider flexible repair solutions that accommodate ground conditions."
    }
  },
  bolton: {
    "blocked-drains": {
      intro: "Bolton's proud industrial heritage is reflected in its drainage infrastructure, from historic mill buildings to terraced workers' cottages. Our Bolton blocked drain service combines traditional clearing expertise with modern techniques, effectively tackling blockages in properties across the borough from Horwich to Little Lever.",
      commonProblems: ["Debris in converted mill drainage", "Root intrusion from established trees", "Fat accumulation in domestic drains", "Stone and mortar debris in older systems", "Shared drainage conflicts"],
      process: "Bolton's varied property types require flexible approaches. We assess your specific situation, considering property age, drainage type, and blockage characteristics before selecting the most effective clearing method.",
      localTip: "Bolton's hillside properties towards Rivington should have drainage inspected after periods of heavy rainfall when debris can accumulate rapidly."
    },
    "drain-unblocking": {
      intro: "When Bolton drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Bromley Cross to Farnworth, we handle residential and commercial drain unblocking with professional efficiency and minimal disruption.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages", "Commercial drainage issues"],
      process: "Our Bolton engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Bolton's stone-built properties often have deep inspection chambers. Ensure access covers are in good condition and accessible."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Bolton property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable for Bolton's many period properties.",
      commonProblems: ["Unknown drainage routes", "Pipe condition assessment", "Root ingress detection", "Joint and connection problems", "Planning investigation"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Bolton properties built on former mill sites may have unexpected underground features. Surveys help identify complex drainage arrangements."
    },
    "drain-jetting": {
      intro: "Bolton's combination of hard water and varied pipe materials makes regular drain jetting a valuable maintenance investment. Our high-pressure cleaning service removes deposits that accumulate over time, maintaining optimal flow in domestic and commercial drainage systems throughout the borough.",
      commonProblems: ["Scale buildup from hard water", "Grease accumulation", "Silt and debris deposits", "Root fragment removal", "General maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Bolton businesses should consider scheduled jetting as part of their maintenance regime, particularly food preparation premises."
    },
    "emergency-drain-services": {
      intro: "Bolton drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded cellar in Westhoughton or sewage backup in Astley Bridge, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "Collapsed drainage", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest Bolton engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Bolton's older properties should have emergency drain contacts readily available. Know your stopcock and manhole locations for faster service."
    },
    "drain-repairs": {
      intro: "Bolton's property stock spans centuries of building traditions, and our drain repair expertise matches this diversity. From stone-built terraces to modern estates, we provide repair solutions appropriate to each property type, using techniques that respect original construction while delivering reliable results.",
      commonProblems: ["Cracked stone drainage channels", "Clay pipe deterioration", "Joint failures", "Root damage", "Ground movement effects"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Bolton conservation area properties may require specific approaches for drainage repairs. We work sensitively with period features."
    }
  },
  didsbury: {
    "blocked-drains": {
      intro: "Didsbury's reputation as one of Manchester's most desirable suburbs comes with distinctive drainage challenges. The area's mature Victorian and Edwardian housing stock features original clay drainage systems, while tree-lined streets contribute to root intrusion issues. Our Didsbury specialists understand these local factors and deliver effective blocked drain solutions.",
      commonProblems: ["Tree root intrusion from mature gardens", "Aged clay pipe deterioration", "Fat buildup from busy household kitchens", "Leaf debris in autumn months", "Shared drainage in converted properties"],
      process: "We approach Didsbury blocked drains with appreciation for the area's period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Didsbury's beautiful mature trees are a root intrusion risk. Consider annual CCTV checks if you have large trees near your drainage runs."
    },
    "drain-unblocking": {
      intro: "Didsbury residents deserve drain unblocking services that match the quality of their homes. Our local teams respond promptly to calls from East Didsbury to West Didsbury, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs", "Kitchen sink blockages", "External gulley obstructions", "Downpipe connections", "Cellar drainage issues"],
      process: "Our Didsbury engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate clay pipes or jetting for more robust modern sections.",
      localTip: "Didsbury's Victorian properties often have drainage running beneath conservatories and extensions. Know your drainage routes before planning building work."
    },
    "cctv-drain-surveys": {
      intro: "Didsbury's premium property market makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the area's sought-after Victorian and Edwardian homes.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Insurance requirements"],
      process: "We survey Didsbury properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes.",
      localTip: "Didsbury home sellers can benefit from proactive drainage surveys, addressing any issues before they become negotiating points."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Didsbury's period drainage at peak performance. Our careful approach removes decades of accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage features that add character to your home.",
      commonProblems: ["Scale from hard water supply", "Grease accumulation over time", "Root mass removal", "Silt and debris clearing", "Pre-survey preparation"],
      process: "Didsbury's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Didsbury's hard water contributes to scale buildup. Periodic jetting maintains optimal flow and extends drainage lifespan."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Didsbury receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a Victorian villa or flooding in a modern conversion, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into cellars", "Garden flooding", "Manhole overflows", "Drain collapse affecting foundations", "Persistent foul odours"],
      process: "Emergency response to Didsbury properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying problem.",
      localTip: "Didsbury properties with cellars should ensure drainage pumps and non-return valves are regularly serviced to prevent backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Didsbury's character properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original Victorian installations to modern connections, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement effects", "Historical modification issues", "Cellar drainage problems"],
      process: "We investigate Didsbury drainage issues thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Didsbury's Victorian drainage often includes original salt-glazed pipes. These can be repaired and relined rather than replaced, preserving heritage features."
    }
  },
  altrincham: {
    "blocked-drains": {
      intro: "Altrincham's prestigious properties in Hale, Bowdon, and Hale Barns come with extensive grounds and mature gardens that create distinctive drainage challenges. Large Victorian and Edwardian houses often have complex drainage serving multiple outbuildings, while established trees and hedgerows contribute to root intrusion. Our Altrincham specialists bring the expertise needed for these high-value properties.",
      commonProblems: ["Tree root intrusion from mature garden specimens", "Leaf and organic debris from large gardens", "Fat and grease buildup in large household kitchens", "Blocked drainage serving outbuildings and annexes", "Ageing clay pipes in period properties"],
      process: "We approach Altrincham properties with the care their value demands. Our engineers assess the full drainage layout including outbuildings and extensions, then select clearing methods appropriate for the pipe material and blockage type.",
      localTip: "Altrincham's large mature gardens in Hale and Bowdon are beautiful but pose a significant root intrusion risk — schedule annual CCTV inspections if you have large trees within 5 metres of drainage runs."
    },
    "drain-unblocking": {
      intro: "When drains block in Altrincham's desirable Trafford neighbourhoods, our local teams respond promptly with the right equipment for every property type. From period homes on Stamford New Road to modern executive developments in Timperley, we clear blockages efficiently while respecting your property and grounds.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in en-suite-heavy properties", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "Shared drainage issues in converted properties"],
      process: "Our Altrincham engineers arrive equipped for the area's predominantly large, well-appointed properties. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Altrincham properties with gravel driveways should fit gulley guards to prevent stones entering surface water drains."
    },
    "cctv-drain-surveys": {
      intro: "With Altrincham's premium property values, understanding your drainage condition is a smart investment. Our CCTV surveys provide detailed assessments for buyers, sellers, and homeowners in Hale, Bowdon, and Timperley, revealing the true condition of pipes beneath these sought-after properties.",
      commonProblems: ["Pre-purchase surveys for high-value transactions", "Root ingress investigation in mature gardens", "Mapping complex drainage serving multiple buildings", "Condition assessment of period drainage features", "Insurance and renovation planning requirements"],
      process: "We survey Altrincham properties thoroughly, documenting all drainage routes including connections to outbuildings and extensions. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Buying in Altrincham's conservation areas? A pre-purchase CCTV drain survey can reveal hidden issues that could cost significantly more to fix after completion."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Altrincham's period and modern drainage at peak performance. Our careful approach removes accumulated deposits from Victorian clay pipes in Bowdon and clears root masses from garden-heavy properties in Hale Barns, restoring optimal flow throughout your system.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from hard water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance for large drainage networks"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Altrincham's older properties receive gentler treatment that effectively clears deposits without risking damage to original drainage.",
      localTip: "Altrincham properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Altrincham's high-value properties demand swift, professional response. Whether you're facing sewage backup in a Hale villa or flooding at a Bowdon family home, our emergency teams are available around the clock to protect your property from damage.",
      commonProblems: ["Sewage backing up into cellars and ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways and patios", "Storm water overwhelming period drainage systems"],
      process: "Emergency calls from Altrincham are prioritised and dispatched immediately. Our engineers understand the area's property values and act quickly to contain damage while implementing effective, lasting solutions.",
      localTip: "Altrincham properties with cellars or lower ground floors should ensure non-return valves are fitted and serviced annually to prevent sewage backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Altrincham's prestigious properties requires specialist care and quality workmanship. Our repair teams work with all property ages across the Trafford area, from restoring Victorian clay pipes in Bowdon to fixing modern systems in Timperley's newer developments.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways and patios", "Displaced joints from ground movement", "Age-related deterioration of period drainage", "Damage from extension and renovation projects"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage requiring full replacement.",
      localTip: "Altrincham's clay soil and mature tree cover cause seasonal ground movement — flexible repair solutions like pipe relining accommodate this better than rigid replacements."
    }
  },
  oldham: {
    "blocked-drains": {
      intro: "Oldham's Pennine location brings distinctive drainage challenges, from the heavy rainfall that sweeps across Saddleworth Moor to the steep terrain of villages like Uppermill and Delph. Our Oldham blocked drain specialists understand how this hillside geography affects drainage systems across the borough, from stone cottages to converted mills.",
      commonProblems: ["Storm debris washed into drains during heavy rainfall", "Root intrusion in rural and semi-rural properties", "Silt and sediment accumulation from hillside runoff", "Fat and grease buildup in domestic kitchens", "Debris in shared Victorian mill town drainage"],
      process: "We factor in Oldham's terrain when assessing blockages. Hillside properties require different approaches than valley-floor homes, and our engineers carry equipment suited to every situation the Pennine geography presents.",
      localTip: "Oldham properties in exposed Pennine locations like Saddleworth should clear external gullies before autumn to prevent storm debris causing blockages through winter."
    },
    "drain-unblocking": {
      intro: "From the terraced streets of Chadderton to the stone-built villages of Saddleworth, Oldham's varied property types each present unique unblocking challenges. Our local engineers respond quickly across the borough, equipped to handle Victorian clay pipes and modern plastic systems alike.",
      commonProblems: ["Kitchen waste blockages in terraced properties", "Bathroom drain clogs from hair and soap", "External drain blockages from leaf litter and debris", "Interceptor trap problems in older properties", "Shared drainage issues between neighbouring homes"],
      process: "Our Oldham engineers carry comprehensive equipment for the area's mixed property stock. We diagnose the blockage type and location quickly, then apply the most effective clearing technique for your specific pipe material and configuration.",
      localTip: "Oldham's terraced properties in Shaw and Royton often share rear drainage — coordinating maintenance with neighbours prevents recurring blockages."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a stone cottage in Uppermill or investigating drainage problems at a Chadderton family home, our CCTV surveys reveal what's happening beneath the surface. This is particularly valuable in Oldham where Pennine weather conditions accelerate pipe deterioration.",
      commonProblems: ["Storm damage assessment after heavy rainfall", "Root ingress from moorland vegetation", "Pipe condition surveys for property purchases", "Investigating recurring blockage causes", "Mapping drainage routes in converted mill buildings"],
      process: "We survey Oldham properties systematically, recording pipe condition and identifying defects. Reports include annotated footage and prioritised recommendations, accounting for the area's specific environmental factors.",
      localTip: "Oldham's Pennine properties experience freeze-thaw cycles that can crack pipes — a CCTV survey after harsh winters catches damage before it causes blockages."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is essential maintenance for Oldham's drainage systems, which contend with Pennine rainfall, hillside silt, and hard water deposits. Our specialist equipment handles everything from clearing storm debris in Saddleworth to descaling Victorian pipes in Failsworth.",
      commonProblems: ["Silt and sediment from hillside runoff", "Scale buildup from hard Pennine water", "Storm debris accumulation", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We select jetting equipment suited to Oldham's conditions — higher capacity for storm-deposited debris, careful pressure settings for older stone-channelled drainage. Flow is verified before completing the service.",
      localTip: "Oldham properties at higher elevations experience more rainfall and faster silt buildup — consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Pennine weather can overwhelm drainage systems quickly, and Oldham properties need an emergency service that understands this reality. Our teams respond around the clock to flooding, sewage backup, and drain failures across the borough, from Lees to Greenfield and everywhere between.",
      commonProblems: ["Storm water flooding overwhelming drainage capacity", "Sewage backing up during heavy rainfall events", "Hillside drain collapses after ground saturation", "Manhole overflows affecting multiple properties", "Foul water backing up through ground-floor fittings"],
      process: "Emergency calls from Oldham trigger immediate dispatch. Our engineers arrive prepared for weather-related emergencies with pumping equipment and temporary drainage solutions to protect your property while permanent repairs are arranged.",
      localTip: "Oldham hillside properties should keep sandbags or flood barriers readily available — Pennine storms can overwhelm local drainage faster than urban systems."
    },
    "drain-repairs": {
      intro: "Oldham's drainage faces unique stresses from Pennine weather, steep terrain, and ageing mill town infrastructure. Our repair specialists work across the borough, from relining cracked pipes in Royton to excavating collapsed drains in Saddleworth, always using materials that withstand the local conditions.",
      commonProblems: ["Freeze-thaw cracking in exposed pipes", "Ground movement damage on steep terrain", "Erosion around pipe joints from high water flow", "Root damage from moorland and garden vegetation", "Deterioration of original mill town drainage"],
      process: "We assess Oldham drainage repairs with local conditions in mind. Materials and methods are chosen to withstand Pennine weather, with flexible solutions preferred on steep terrain where ground movement is ongoing.",
      localTip: "Oldham properties in Saddleworth and the Pennine villages should use frost-resistant pipe materials for any exposed or shallow drainage repairs."
    }
  },
  rochdale: {
    "blocked-drains": {
      intro: "Rochdale's mill town heritage and Pennine foothills location create a distinctive set of drainage challenges. From canal-side properties in Littleborough to the Victorian terraces of Castleton and Norden, our Rochdale blocked drain experts bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Silt and debris from Pennine hillside drainage", "Root intrusion from canal-side vegetation", "Fat and grease buildup in domestic kitchens", "Stone and mortar debris in heritage drainage", "Shared drainage blockages in terraced housing"],
      process: "Rochdale's varied property types and terrain demand flexible approaches. We assess each situation individually, considering property age, pipe material, and the area's specific environmental factors before selecting our clearing method.",
      localTip: "Rochdale properties near the canal in Littleborough and Smithbridge should have drainage inspected regularly, as canal-side tree roots and water table levels affect pipe integrity."
    },
    "drain-unblocking": {
      intro: "When Rochdale drains need unblocking, our local teams cover the entire borough from Heywood and Middleton to Milnrow and Wardle. We handle everything from simple kitchen sink blockages to complex shared drainage issues in the area's many Victorian terraced properties.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages from hair and soap", "External gulley obstructions from fallen leaves", "Interceptor trap blockages in older properties", "Washing machine and utility drain problems"],
      process: "Our Rochdale engineers arrive with comprehensive unblocking tools suited to the area's property mix. We identify the obstruction quickly and clear it completely, testing flow restoration before finishing the job.",
      localTip: "Rochdale's terraced streets in Castleton and Sudden often share rear drainage — if neighbours are experiencing slow drains too, the blockage is likely in the shared section."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Rochdale property's drainage is essential for effective maintenance. Our CCTV surveys provide detailed pipe condition assessments, particularly valuable for the area's mill conversions, canal-side homes, and period terraces where drainage history may be complex.",
      commonProblems: ["Mapping drainage in converted mill buildings", "Canal-side property drainage assessment", "Pre-purchase surveys for period properties", "Root ingress from mature vegetation", "Investigating causes of recurring blockages"],
      process: "We survey Rochdale drainage methodically, recording condition and mapping routes. This is especially important for converted buildings and canal-side properties where drainage layouts can be unconventional.",
      localTip: "Buying a converted mill property in Rochdale? Always commission a full CCTV drain survey — industrial buildings often have complex, modified drainage that surface inspection cannot reveal."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Rochdale's varied drainage systems, from Victorian stone channels in heritage properties to modern plastic pipes in newer estates. Our specialist equipment clears the silt, scale, and debris that Pennine conditions deposit in local drainage.",
      commonProblems: ["Pennine silt and sediment deposits", "Hard water scale accumulation", "Grease buildup in residential drains", "Root fragments requiring clearance", "Pre-survey cleaning for accurate assessment"],
      process: "We match jetting equipment to Rochdale's pipe types and conditions. Heritage drainage receives careful, lower-pressure treatment, while modern systems can handle more aggressive cleaning for thorough results.",
      localTip: "Rochdale's canal-side properties experience higher groundwater levels that can carry silt into drainage — regular jetting prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Rochdale drainage emergencies receive rapid response from our local teams, whether you're dealing with flooding in Norden or sewage backup in Heywood. Our engineers are available around the clock, equipped to handle the weather-related emergencies that Pennine properties face during heavy rainfall.",
      commonProblems: ["Surface water flooding during Pennine storms", "Sewage backing up into ground-floor rooms", "Manhole overflows on terraced streets", "Drain collapses after ground saturation", "Canal-related drainage emergencies"],
      process: "Emergency calls from Rochdale receive immediate dispatch. We provide realistic arrival times and come prepared with pumping equipment and emergency repair materials to contain damage and resolve the situation.",
      localTip: "Rochdale properties near Hollingworth Lake and the Rochdale Canal should maintain clear surface water drains year-round, as water table levels can rise rapidly after sustained rainfall."
    },
    "drain-repairs": {
      intro: "Rochdale's drainage spans from original mill town stone channels to modern plastic systems, and our repair teams work confidently with all types. Whether it's relining Victorian pipes in Bamford or replacing collapsed sections in Middleton, we select repair methods suited to each property's age and construction.",
      commonProblems: ["Cracked stone drainage channels", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Storm damage to exposed drainage sections"],
      process: "We investigate thoroughly before recommending Rochdale drainage repairs. Our approach accounts for the area's terrain and weather conditions, using durable materials that provide long-lasting results in Pennine environments.",
      localTip: "Rochdale's mill conversions may have original industrial drainage that requires specialist knowledge — ensure your repair contractor has experience with heritage drainage systems."
    }
  },
  sale: {
    "blocked-drains": {
      intro: "Sale's residential character and proximity to the Mersey floodplain create specific drainage considerations for homeowners. From the Victorian semis of Sale Moor to the modern developments in Brooklands, our Sale blocked drain specialists understand the flat terrain and water table challenges that affect local drainage systems.",
      commonProblems: ["Fat and grease buildup from busy family kitchens", "Tree root intrusion from established street trees", "Surface water drainage issues on flat terrain", "Debris accumulation in period property drains", "Shared drainage blockages in semi-detached housing"],
      process: "We assess Sale blockages with knowledge of the area's flat topography, which can slow drainage flow and allow deposits to accumulate more quickly. Our clearing methods restore full flow capacity and address the underlying causes.",
      localTip: "Sale's flat terrain means drainage relies entirely on pipe gradient rather than gravity — even minor blockages can cause slow drainage, so address issues early before they worsen."
    },
    "drain-unblocking": {
      intro: "When Sale drains need unblocking, our local teams respond quickly across the area from Ashton upon Mersey to Brooklands. We handle the full range of domestic drainage issues that Sale's family-oriented housing stock experiences, from kitchen waste blockages to external gulley problems.",
      commonProblems: ["Kitchen sink blockages from cooking waste", "Bathroom drain clogs from hair and soap", "External gulley obstructions from garden debris", "Downpipe connection blockages", "Utility and laundry room drainage issues"],
      process: "Our Sale engineers arrive with equipment suited to the area's predominantly residential properties. We locate and clear blockages efficiently, providing advice on prevention to help you avoid future call-outs.",
      localTip: "Sale properties with flat rear gardens should ensure gulley grates are kept clear of leaves and debris, as the flat terrain means water won't naturally bypass a blocked grate."
    },
    "cctv-drain-surveys": {
      intro: "Sale's active property market makes drainage condition a key consideration for buyers and sellers. Our CCTV surveys provide the detailed assessment needed for property transactions, as well as helping long-term homeowners understand and maintain their drainage systems effectively.",
      commonProblems: ["Pre-purchase drainage assessment", "Investigating persistent slow drainage", "Root ingress from street and garden trees", "Mapping drainage routes before extensions", "Condition surveys for insurance purposes"],
      process: "We survey Sale properties thoroughly, with particular attention to pipe gradients given the area's flat terrain. Reports highlight any areas where inadequate fall may be contributing to drainage problems.",
      localTip: "Planning an extension on your Sale property? Commission a CCTV survey first — the Mersey floodplain's high water table means drainage diversions need careful planning."
    },
    "drain-jetting": {
      intro: "Regular jetting is particularly important for Sale properties, where the flat terrain and proximity to the Mersey floodplain mean drainage systems work harder to maintain flow. Our high-pressure cleaning removes the deposits that accumulate more readily in low-gradient pipes.",
      commonProblems: ["Silt deposits from low-gradient drainage", "Fat and grease accumulation", "Scale buildup from water supply", "Root fragments after treatment", "Preventative maintenance for optimal flow"],
      process: "We pay special attention to pipe gradients when jetting Sale properties. Flat terrain requires thorough cleaning at key points where flow naturally slows, ensuring the entire system drains efficiently.",
      localTip: "Sale's low-lying properties near the Water Park and Mersey should schedule jetting more frequently than average — flat drainage accumulates deposits faster."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Sale receive rapid response from our local teams, day and night. The area's proximity to the Mersey floodplain means we're experienced with water-related emergencies and arrive prepared with pumping equipment and containment measures.",
      commonProblems: ["Surface water flooding during heavy rainfall", "Sewage backing up through ground-floor fittings", "Garden flooding from overwhelmed surface drainage", "Manhole overflows affecting neighbouring properties", "Rising water table causing drainage backup"],
      process: "Emergency calls from Sale receive priority dispatch. Our engineers understand the area's flood risk profile and arrive equipped to manage water ingress while resolving the underlying drainage failure.",
      localTip: "Sale properties in flood-risk zones near the Mersey should fit non-return valves on main drainage connections to prevent river-level rises forcing sewage back into properties."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Sale requires understanding the area's specific challenges — flat terrain, high water tables near the Mersey, and a mix of Victorian and modern property stock. Our repair specialists select methods and materials suited to these conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from ground settlement", "Root damage from mature street trees", "Joint displacement in clay pipe systems", "Low-gradient pipes requiring re-laying", "Waterlogged ground complicating excavation"],
      process: "We assess Sale drainage repairs with the local water table and terrain in mind. Where excavation is needed, we manage groundwater appropriately, and all repairs account for the area's flat gradient requirements.",
      localTip: "Sale's high water table near the Mersey can make traditional excavation repairs challenging — ask about no-dig relining options that avoid groundwater complications."
    }
  },
  chorlton: {
    "blocked-drains": {
      intro: "Chorlton's eclectic character extends to its drainage systems, with Victorian terraces, Edwardian semis, and converted properties all presenting unique challenges. Our Chorlton blocked drain specialists navigate this diversity daily, providing effective solutions whether you're on Beech Road or Hardy Lane.",
      commonProblems: ["Victorian pipe deterioration", "Root intrusion from street trees", "Fat buildup from home cooking", "Wet wipe blockages", "Shared drainage issues in conversions"],
      process: "We assess each Chorlton blockage individually, considering property type, drainage age, and blockage characteristics. Our approach is always tailored to achieve effective clearing while protecting your drainage infrastructure.",
      localTip: "Chorlton's vibrant food scene means household drains often handle more cooking waste. Sink strainers and proper fat disposal prevent many blockages."
    },
    "drain-unblocking": {
      intro: "Chorlton's community-minded residents deserve reliable drain unblocking services that respond quickly and work efficiently. Our local teams cover all of Chorlton-cum-Hardy, from the village centre to surrounding residential streets, with the expertise to handle any unblocking challenge.",
      commonProblems: ["Kitchen drain blockages", "Bathroom clogs", "External drain obstructions", "Garage and utility drainage", "Shared access drainage"],
      process: "Our Chorlton engineers arrive prepared for the varied property types in the area. We diagnose blockage location and type quickly, then apply the most effective clearing method for your specific situation.",
      localTip: "Chorlton's terraced properties often share rear drainage. Good neighbourly communication helps manage shared drainage responsibilities."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying, selling, or maintaining a Chorlton property, CCTV drainage surveys provide essential information. Our detailed inspections reveal conditions invisible from the surface, helping you make informed decisions about your home's drainage system.",
      commonProblems: ["Pre-purchase assessment", "Recurring problem investigation", "Drainage route mapping", "Extension planning requirements", "Insurance documentation"],
      process: "We survey Chorlton drainage systematically, recording findings and producing detailed reports. Our surveys meet requirements for property transactions, insurance claims, and planning applications.",
      localTip: "Planning a Chorlton property extension? A pre-build drainage survey identifies any pipes that need protecting or redirecting."
    },
    "drain-jetting": {
      intro: "High-pressure jetting keeps Chorlton's varied drainage systems in optimal condition. Our service removes accumulations from Victorian clay pipes and modern plastic systems alike, restoring full flow capacity and reducing the risk of future blockages.",
      commonProblems: ["Grease and fat deposits", "Scale buildup", "Root fragments", "Silt accumulation", "General maintenance cleaning"],
      process: "We select jetting equipment and settings appropriate for Chorlton's mixed drainage stock. Older pipes receive gentler treatment, while robust modern sections can handle more aggressive cleaning.",
      localTip: "Chorlton's busy restaurants on Beech Road and Barlow Moor Road benefit from regular commercial jetting to maintain compliance and prevent emergencies."
    },
    "emergency-drain-services": {
      intro: "Chorlton drainage emergencies receive rapid response from our local teams. Whether you're dealing with an overflowing drain near Chorlton Green or sewage backup on Manchester Road, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Garden flooding", "Blocked gulley overflows", "Drain collapses", "Storm-related emergencies"],
      process: "Emergency calls trigger immediate response. We dispatch engineers to Chorlton locations within our target response times, arriving prepared to contain and resolve the emergency situation.",
      localTip: "Chorlton properties near the Water Park should maintain clear surface water drains, particularly during autumn when fallen leaves can cause rapid blockages."
    },
    "drain-repairs": {
      intro: "Chorlton's diverse housing requires drain repair expertise spanning multiple eras and construction types. From patching Victorian clay pipes to replacing damaged modern sections, our repair specialists deliver solutions appropriate to each property's age and character.",
      commonProblems: ["Cracked period pipes", "Joint displacement", "Root damage", "Conversion modifications", "Ground movement effects"],
      process: "We investigate thoroughly before recommending Chorlton drainage repairs. Our approach respects property character while delivering reliable, long-lasting results. All repairs include appropriate guarantees.",
      localTip: "Chorlton's Victorian terraces often have original features worth preserving. We offer repair techniques that maintain period drainage character."
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
    "Experienced with flood-risk and sewage situations across Greater Manchester"
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
      answer: "Our engineers are based across Greater Manchester and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
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
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Greater Manchester. You only pay for the work carried out, and we confirm the price before we start."
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
      answer: "Our emergency teams are positioned across Greater Manchester and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
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
