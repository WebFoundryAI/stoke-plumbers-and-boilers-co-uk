import { BRAND } from './brand';

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "signs-of-blocked-drain",
    title: "7 Warning Signs You Have a Blocked Drain",
    metaTitle: "7 Warning Signs of a Blocked Drain | When to Call a Professional",
    metaDescription: "Learn the early warning signs of a blocked drain in Manchester. From slow drainage to bad smells, know when to call a professional before it becomes an emergency.",
    excerpt: "Catching a blocked drain early can save you hundreds of pounds in emergency repairs. Here are the key warning signs every Manchester homeowner should know.",
    content: `A blocked drain rarely happens overnight. In most cases, there are warning signs that build up over weeks or even months before a complete blockage occurs. Recognising these signs early can help you avoid costly emergency callouts and potential water damage to your property.

## 1. Slow Draining Water

The most common early sign of a developing blockage is water that drains more slowly than usual. You might notice your sink takes longer to empty, or water pools around your feet in the shower. This typically indicates a partial blockage that will worsen over time.

## 2. Gurgling Sounds

If you hear gurgling noises coming from your drains, plughole, or toilet after flushing or emptying a sink, this suggests air is trapped in the pipes. This is often caused by a blockage restricting normal water flow and allowing air bubbles to form.

## 3. Unpleasant Odours

Bad smells coming from your drains are a clear indication that something is decomposing in your pipes. This could be food waste, grease buildup, or other organic matter that has become stuck and is now rotting.

## 4. Rising Water Levels in Toilets

If the water level in your toilet rises higher than normal when you flush, or if it takes a long time to return to the normal level, you likely have a blockage somewhere in the system. This is particularly concerning if it affects multiple toilets in your property.

## 5. Water Coming Back Up

When water starts coming back up through drains or toilets, you have a serious blockage that needs immediate attention. This can quickly lead to flooding and potential sewage backup into your home.

## 6. Multiple Blocked Fixtures

If more than one drain in your home is affected, the blockage is likely in the main sewer line rather than individual pipes. This requires professional equipment to diagnose and clear.

## 7. Damp Patches or Water Marks

Unexplained damp patches on walls or floors near drainage pipes could indicate a leak caused by pressure from a blockage. Left untreated, this can cause structural damage and mould growth.

## What to Do Next

If you notice any of these warning signs, it's best to act quickly. While minor slow drainage might be resolved with a plunger, persistent issues usually require professional attention. Our team at ${BRAND.brandName} can quickly diagnose the problem using [CCTV drain surveys](/services/cctv-drain-surveys/) and clear blockages using [high-pressure jetting](/services/drain-jetting/).

If you're experiencing a complete blockage, our [blocked drain specialists](/services/blocked-drains/) are available 24/7 across [Manchester](/locations/manchester/) and surrounding areas. For urgent situations, our [emergency drain service](/services/emergency-drain-services/) guarantees a rapid response.

Call us on ${BRAND.phoneFormatted} for a no-obligation quote, or [contact us online](/contact/) to book an appointment.`,
    author: "Blocked Drains Manchester",
    publishDate: "2026-01-15",
    category: "Drain Maintenance",
    tags: ["blocked drains", "drain problems", "home maintenance", "plumbing tips"],
    readingTime: 5,
    featured: true
  },
  {
    slug: "prevent-blocked-drains-kitchen",
    title: "How to Prevent Blocked Kitchen Drains: A Complete Guide",
    metaTitle: "Prevent Kitchen Drain Blockages | Manchester Tips",
    metaDescription: "Stop kitchen drain blockages before they start. Expert tips on preventing grease buildup, food waste disposal, and maintaining clear drains in your Manchester home.",
    excerpt: "Kitchen drains are the most commonly blocked drains in UK homes. Learn how to prevent costly blockages with these simple daily habits.",
    content: `Kitchen drains handle more abuse than any other drain in your home. Between cooking oils, food scraps, soap residue, and everything else that goes down the sink, it's no wonder they're the most frequently blocked drains we see in Manchester homes.

## Why Kitchen Drains Block So Easily

The primary culprit is fats, oils, and grease (often called FOG in the plumbing industry). When hot, these substances are liquid and flow easily down the drain. However, as they cool in your pipes, they solidify and stick to the pipe walls. Over time, this buildup catches other debris and eventually creates a complete blockage.

## Daily Habits to Prevent Blockages

### Never Pour Grease Down the Drain

This is the single most important rule for preventing kitchen drain blockages. Instead of pouring cooking oil or fat down the sink:

- Let it cool and solidify, then scrape it into the bin
- Pour small amounts into a container and dispose of it with your household waste
- For large amounts of oil, take it to your local recycling centre

### Use a Sink Strainer

A simple mesh strainer catches food particles before they enter your drain. Empty it into your food waste bin after each use. This inexpensive device can prevent the majority of kitchen blockages.

### Scrape Plates Before Washing

Remove all food debris from plates, pots, and pans before they go in the sink. Even with a garbage disposal unit, large amounts of food waste can overwhelm your drainage system.

### Run Hot Water After Use

After washing up, run hot water for 15-30 seconds to help flush any remaining residue through the pipes. This is especially important after washing greasy items.

## Weekly Maintenance Tips

### Hot Water Flush

Once a week, boil a full kettle of water and pour it slowly down the kitchen drain. The heat helps dissolve any grease that may be starting to build up on the pipe walls.

### Natural Cleaning Solution

For a deeper clean, try this natural method monthly:

1. Pour half a cup of baking soda down the drain
2. Follow with half a cup of white vinegar
3. Wait 15 minutes while it fizzes
4. Flush with boiling water

This helps break down organic matter without using harsh chemicals that can damage older pipes.

## What to Avoid

- **Chemical drain cleaners**: While they can clear minor blockages, regular use can corrode pipes
- **Coffee grounds**: Despite myths, they don't clean drains and actually contribute to blockages
- **Flour and starchy foods**: These form a paste-like substance in pipes
- **Eggshells**: They break into small pieces that catch other debris

## When to Call a Professional

If you notice water draining slowly despite following these tips, or if you experience recurring blockages, there may be a deeper issue in your drainage system. A professional [CCTV drain survey](/services/cctv-drain-surveys/) can identify the root cause and prevent future problems.

For persistent kitchen blockages, professional [drain jetting](/services/drain-jetting/) thoroughly cleans the pipe walls and removes grease buildup far more effectively than DIY methods. If you have a [blocked sink](/services/blocked-drains/blocked-sink/) that won't clear, our engineers can usually resolve it within the hour.

Contact ${BRAND.brandName} on ${BRAND.phoneFormatted} for expert advice and assistance, or [get in touch online](/contact/).`,
    author: "Blocked Drains Manchester",
    publishDate: "2026-01-10",
    category: "Drain Maintenance",
    tags: ["kitchen drains", "prevention tips", "drain maintenance", "grease blockages"],
    readingTime: 6
  },
  {
    slug: "cctv-drain-survey-home-buyers",
    title: "Why Every Home Buyer Needs a CCTV Drain Survey",
    metaTitle: "CCTV Drain Survey Before Buying | Manchester Guide",
    metaDescription: "Buying a house in Manchester? Discover why a pre-purchase CCTV drain survey could save you thousands and give you negotiating power.",
    excerpt: "A CCTV drain survey before buying a property can reveal hidden problems that cost thousands to fix. Here's what you need to know.",
    content: `When buying a house, most people focus on the obvious: the roof, windows, boiler, and electrics. But there's a hidden network of pipes beneath every property that's often overlooked until something goes wrong. A CCTV drain survey can reveal problems that standard home surveys miss entirely.

## What is a CCTV Drain Survey?

A CCTV drain survey involves inserting a small, waterproof camera into your drainage system. The camera travels through the pipes, recording high-definition footage of their condition. This allows drainage engineers to identify blockages, damage, and potential problems without any digging.

## Why Standard Home Surveys Don't Cover Drains

When you get a homebuyer's survey or even a full building survey, the surveyor examines the visible and accessible parts of the property. Drains, being underground and hidden, fall outside their scope. Unless there's visible evidence of a problem (like damp or subsidence), drainage issues won't be flagged.

## Common Problems Discovered During Drain Surveys

### Tree Root Ingress

Tree roots naturally seek out moisture, and your drains provide exactly that. Roots can infiltrate pipe joints and cracks, eventually causing complete blockages or pipe collapse. Properties with mature trees nearby are particularly at risk.

### Collapsed or Broken Pipes

Older properties often have clay or pitch fibre pipes that deteriorate over time. A CCTV survey can reveal cracks, breaks, or complete collapses that would require excavation and repair.

### Displaced Joints

Ground movement, traffic vibrations, or poor installation can cause pipe joints to separate. This allows waste to leak into the surrounding soil and can eventually lead to subsidence.

### Incorrect Connections

Sometimes properties have illegal or incorrect connections, such as surface water drains connected to foul sewers or vice versa. This can cause compliance issues and potential fines.

### Fat and Debris Buildup

Even if there's no structural damage, significant buildup in the pipes can indicate future problems and may need addressing before you move in.

## The Cost of Not Surveying

Drain repairs can be extremely expensive, particularly if excavation is required. Here are some typical costs:

- Simple drain unblocking: £80-£200
- Drain relining: £1,500-£3,000
- Excavation and pipe replacement: £3,000-£10,000+
- Full drainage system replacement: £10,000-£20,000+

A pre-purchase CCTV survey typically costs £150-£350 and can save you from inheriting someone else's expensive problem.

## Using Survey Results in Negotiations

If the CCTV survey reveals issues, you have several options:

1. **Negotiate a price reduction** to cover repair costs
2. **Request the seller fix the issues** before completion
3. **Walk away** if the problems are too severe
4. **Proceed with full knowledge** and budget for repairs

Many of our Manchester customers have negotiated thousands off their purchase price after our surveys revealed drain problems the seller wasn't aware of.

## What to Look for in a Survey Provider

Choose a drainage company that provides:

- Full HD camera footage you can keep
- A detailed written report
- Clear explanation of any issues found
- Recommendations for remedial work
- No-obligation quotes for any repairs needed

At ${BRAND.brandName}, we provide comprehensive [pre-purchase drain surveys](/services/cctv-drain-surveys/pre-purchase-survey/) across [Manchester](/locations/manchester/) and Greater Manchester. Our engineers explain exactly what they find and provide honest advice about any issues.

If a survey reveals damage, we also offer professional [drain repairs](/services/drain-repairs/) including [pipe relining](/services/drain-repairs/pipe-relining/) and [drain excavation](/services/drain-repairs/drain-excavation/) to resolve problems quickly.

Book your [CCTV drain survey](/services/cctv-drain-surveys/) today by calling ${BRAND.phoneFormatted} or [contact us online](/contact/).`,
    author: "Blocked Drains Manchester",
    publishDate: "2026-01-05",
    category: "CCTV Surveys",
    tags: ["CCTV survey", "home buying", "property survey", "drain inspection"],
    readingTime: 7,
    featured: true
  },
  {
    slug: "emergency-drain-problems-what-to-do",
    title: "Emergency Drain Problems: What to Do Before the Engineer Arrives",
    metaTitle: "Emergency Drain Problems | Immediate Steps While Waiting for Help",
    metaDescription: "Experiencing a drain emergency in Manchester? Learn what to do immediately to minimise damage while waiting for professional help to arrive.",
    excerpt: "When drains fail, every minute counts. Here's how to protect your property while waiting for emergency drainage help.",
    content: `A drain emergency can strike at any time, often at the most inconvenient moment. Whether it's sewage backing up into your home, a blocked drain causing flooding, or a collapsed pipe, knowing what to do in the first few minutes can significantly reduce damage to your property.

## Recognising a Drain Emergency

Not every drainage problem is an emergency, but these situations require immediate action:

- Sewage backing up into your property
- Water flooding from drains
- Multiple drains blocked simultaneously
- Strong sewage smell inside your home
- Visible sewage in your garden or driveway

## Immediate Steps to Take

### 1. Stop Using Water

As soon as you realise there's a serious problem, stop all water usage in your property:

- Don't flush toilets
- Don't run taps or showers
- Don't use the washing machine or dishwasher
- Turn off any appliances that drain water

Every additional bit of water you put into the system will make the problem worse.

### 2. Protect Your Property

If water or sewage is entering your home:

- Move furniture and valuables away from affected areas
- Roll up rugs and carpets if possible
- Use towels or sandbags to create barriers
- Open windows to ventilate the area (sewage gases can be harmful)

### 3. Turn Off Water Supply

If water is continuously flowing and you can't stop it, locate your stopcock (usually under the kitchen sink or near the front door) and turn off the main water supply to your property.

### 4. Avoid Contaminated Areas

Sewage contains harmful bacteria and pathogens. Keep children and pets away from affected areas. If you must enter a flooded area:

- Wear rubber boots and gloves
- Avoid touching your face
- Wash thoroughly afterwards
- Don't eat or drink in the contaminated area

### 5. Document the Damage

Once you've done what you can to limit the damage:

- Take photos and videos of affected areas
- Note the time the problem started
- Record any damage to belongings
- Keep this information for insurance claims

## What NOT to Do

### Don't Use Chemical Drain Cleaners

In an emergency situation, pouring chemicals down the drain won't help and could make things worse. These products are designed for minor blockages, not major problems.

### Don't Try to Access the Sewer

The main sewer runs under your property and connects to the public sewer. Never try to access or clear this yourself. It's dangerous and often illegal without proper authorisation.

### Don't Ignore the Problem

Some people hope a drainage problem will resolve itself. It won't. Delaying action only allows more damage to occur and can significantly increase repair costs.

## While Waiting for Help

Once you've called a professional drainage company, there are a few more things you can do:

- Clear access to manholes and inspection chambers
- Make note of where water is entering or backing up
- Check if neighbours are experiencing similar problems (this might indicate a shared sewer issue)
- Keep your phone charged in case the engineer needs to contact you

## Calling for Emergency Help

When you call ${BRAND.brandName} for emergency assistance, we'll ask:

- Your address and postcode
- What symptoms you're experiencing
- When the problem started
- Whether it's affecting multiple properties
- Your contact details

We aim to arrive within 1-2 hours for [emergency callouts across Manchester](/locations/manchester/emergency-drain-services/) and Greater Manchester. Our [emergency drain services](/services/emergency-drain-services/) team is available 24 hours a day, 7 days a week.

Whether you're dealing with a [flooding emergency](/services/emergency-drain-services/flooding-emergency/) or a [sewage emergency](/services/emergency-drain-services/sewage-emergency/), our engineers carry specialist equipment including [CCTV cameras](/services/cctv-drain-surveys/) and [high-pressure jetting](/services/drain-jetting/) to diagnose and resolve problems on the first visit.

Call us immediately on ${BRAND.phoneFormatted} if you're experiencing a drain emergency, or [request urgent help online](/contact/).`,
    author: "Blocked Drains Manchester",
    publishDate: "2025-12-28",
    category: "Emergency Services",
    tags: ["emergency drains", "flooding", "sewage backup", "drain emergency"],
    readingTime: 6
  },
  {
    slug: "drain-jetting-vs-drain-rods",
    title: "Drain Jetting vs Drain Rods: Which Method is Best?",
    metaTitle: "Drain Jetting vs Rods | Manchester Comparison",
    metaDescription: "Should you use drain rods or high-pressure jetting to clear a blockage? Our Manchester drainage experts explain when each method works best.",
    excerpt: "Not all drain clearing methods are equal. Learn when jetting beats rods and why professionals prefer high-pressure water.",
    content: `When it comes to clearing blocked drains, there are two main methods: traditional drain rods and modern high-pressure water jetting. Each has its place, but understanding the differences can help you choose the right solution for your problem.

## Traditional Drain Rods

Drain rods have been used for over a century. They consist of flexible rods that screw together, with various attachments for breaking up blockages.

### How They Work

The rods are inserted into the drain and pushed towards the blockage. By rotating and pushing, the operator attempts to break up or dislodge whatever is causing the problem.

### Advantages of Drain Rods

- **Low cost**: Rods are inexpensive and widely available
- **Simple operation**: Basic training is sufficient
- **No power needed**: Can be used anywhere
- **Good for simple blockages**: Effective against loose debris and minor buildup

### Limitations of Drain Rods

- **Limited reach**: Typically effective up to about 15 metres
- **Can't remove all debris**: May push material further into the pipe
- **Risk of damage**: Inexperienced users can crack pipes
- **Time-consuming**: Clearing tough blockages takes considerable effort
- **Incomplete cleaning**: Doesn't clean pipe walls

## High-Pressure Water Jetting

Professional drain jetting uses specialised equipment to blast water through pipes at extremely high pressure (up to 4,000 PSI or more).

### How It Works

A flexible hose with a specialised nozzle is inserted into the drain. Water is pumped through at high pressure, with jets pointing both forward (to cut through blockages) and backward (to pull the hose through and flush debris back towards the access point).

### Advantages of Jetting

- **Complete blockage removal**: Breaks up and removes all debris
- **Cleans pipe walls**: Removes grease, scale, and buildup
- **Long reach**: Can clear pipes over 100 metres away
- **Fast and efficient**: Most blockages cleared in minutes
- **Preventative**: Regular jetting prevents future blockages
- **Safe for pipes**: When used correctly, won't damage modern pipes

### Limitations of Jetting

- **Requires professional equipment**: Not a DIY solution
- **Water supply needed**: Requires access to significant water volume
- **Higher cost**: More expensive than basic rodding
- **Not suitable for damaged pipes**: Can worsen existing cracks

## When to Use Each Method

### Use Drain Rods For:

- Simple, accessible blockages
- Blockages you can see from the access point
- Situations where professional help isn't immediately available
- Very minor slow drainage

### Use Professional Jetting For:

- Stubborn or recurring blockages
- Fat and grease buildup
- Tree root ingress
- Complete blockages
- Preventative maintenance
- Commercial properties
- Any blockage that rods can't clear

## Why Professionals Prefer Jetting

At ${BRAND.brandName}, we use high-pressure jetting as our primary clearing method because:

1. **It's more effective**: Jetting clears blockages that rods simply can't
2. **It's faster**: What might take hours with rods takes minutes with jetting
3. **It's thorough**: The pipes are cleaned, not just unblocked
4. **It lasts longer**: Clean pipes are less likely to block again soon
5. **It's diagnostic**: Water flow patterns help identify other issues

## The Professional Approach

When you call us for a blocked drain in Manchester, we typically:

1. Assess the problem and access points
2. Use CCTV to locate and identify the blockage (if needed)
3. Select the appropriate jetting nozzle for the situation
4. Clear the blockage with high-pressure water
5. Verify the pipe is clear with another camera inspection
6. Provide advice on preventing future blockages

## Cost Comparison

While DIY drain rods might seem cheaper initially, consider:

- Rods may not solve the problem, requiring professional help anyway
- Incomplete clearing leads to recurring blockages
- Pipe damage from improper rodding can cost thousands to repair
- Professional jetting provides a lasting solution

If you suspect pipe damage is causing recurring issues, a [CCTV drain survey](/services/cctv-drain-surveys/) can confirm whether [drain repairs](/services/drain-repairs/) are needed before committing to more extensive work.

For reliable [drain clearing across Manchester](/locations/manchester/drain-jetting/), call ${BRAND.brandName} on ${BRAND.phoneFormatted} or [request a quote online](/contact/). We also cover [Salford](/locations/salford/), [Stockport](/locations/stockport/), and [Altrincham](/locations/altrincham/).`,
    author: "Blocked Drains Manchester",
    publishDate: "2025-12-20",
    category: "Drain Services",
    tags: ["drain jetting", "drain rods", "blocked drains", "drain clearing"],
    readingTime: 7
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const categories = BLOG_POSTS.map((post) => post.category);
  return [...new Set(categories)];
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
}

// Blog posts related to each service - used for cross-linking on service pages
export const SERVICE_BLOG_POSTS: Record<string, string[]> = {
  "blocked-drains": ["signs-of-blocked-drain", "prevent-blocked-drains-kitchen"],
  "drain-unblocking": ["signs-of-blocked-drain", "prevent-blocked-drains-kitchen"],
  "cctv-drain-surveys": ["cctv-drain-survey-home-buyers", "signs-of-blocked-drain"],
  "drain-jetting": ["drain-jetting-vs-drain-rods", "prevent-blocked-drains-kitchen"],
  "emergency-drain-services": ["emergency-drain-problems-what-to-do", "signs-of-blocked-drain"],
  "drain-repairs": ["cctv-drain-survey-home-buyers", "drain-jetting-vs-drain-rods"],
};

export function getRelatedBlogPosts(serviceSlug: string): BlogPost[] {
  const relatedSlugs = SERVICE_BLOG_POSTS[serviceSlug] || [];
  return relatedSlugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined);
}
