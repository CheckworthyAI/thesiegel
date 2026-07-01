export const SITE = {
  name: 'The Siegel Law Group, P.A.',
  shortName: 'Siegel Law Group',
  phone: '(561) 867-7980',
  phoneHref: 'tel:+15618677980',
  email: 'info@siegellawgroup.com',
  address: {
    line1: '2500 N Military Trail, Suite 470',
    line2: 'Boca Raton, FL 33431',
  },
  tagline: 'Your Family. Your Future. Your Legacy.',
}

export type NavLink = {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'The Book', href: '/book' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export type PracticeArea = {
  slug: string
  title: string
  excerpt: string
  description: string[]
  highlights: string[]
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: 'estate-planning',
    title: 'Estate Planning',
    excerpt:
      'Comprehensive plans that protect your assets, your family, and your wishes for generations to come.',
    description: [
      'A thoughtful estate plan is the foundation of peace of mind. We design comprehensive strategies that ensure your assets pass to the people you love, on your terms, while minimizing taxes, delays, and conflict.',
      'From foundational wills to sophisticated trust structures, our team tailors every plan to your unique family and financial circumstances. We take the time to understand your goals so the plan we build truly reflects your intentions.',
    ],
    highlights: [
      'Customized wills, trusts, and powers of attorney',
      'Strategies to minimize estate and gift taxes',
      'Healthcare directives and living wills',
      'Regular plan reviews as your life changes',
    ],
  },
  {
    slug: 'wills-and-trusts',
    title: 'Wills & Trusts',
    excerpt:
      'Protect your home and savings from probate, taxes, lawsuits, and long-term care costs.',
    description: [
      'Wills and trusts work together to form a complete estate plan. A will directs how your assets are distributed, while trusts can help you avoid probate, maintain privacy, and protect assets from creditors and long-term care costs.',
      'We help you choose the right combination of instruments to safeguard what you have built and ensure your loved ones are cared for exactly as you intend.',
    ],
    highlights: [
      'Last will and testament drafting',
      'Asset protection trust structures',
      'Probate and tax avoidance planning',
      'Guardianship designations for minor children',
    ],
  },
  {
    slug: 'revocable-living-trusts',
    title: 'Revocable Living Trusts',
    excerpt:
      'Set the terms for managing your affairs during life and after you pass away.',
    description: [
      'A revocable living trust allows you to maintain full control of your assets during your lifetime while providing a seamless transition of management if you become incapacitated or pass away.',
      'Together with a will, a living trust forms a comprehensive estate plan that keeps your affairs private and out of the probate court system.',
    ],
    highlights: [
      'Avoid the cost and delay of probate',
      'Maintain privacy for your family',
      'Plan for incapacity with successor trustees',
      'Flexible terms you can change at any time',
    ],
  },
  {
    slug: 'probate-and-trust-administration',
    title: 'Probate & Trust Administration',
    excerpt:
      "Carry out your loved one's final wishes and settle their estate with compassionate guidance.",
    description: [
      'Losing a loved one is difficult, and navigating the legal process that follows can feel overwhelming. Our team guides families through probate and trust administration with compassion and efficiency.',
      'We handle the details, deadlines, and court requirements so you can focus on what matters most during a challenging time.',
    ],
    highlights: [
      'Probate court representation',
      'Trust administration and distribution',
      'Creditor claims and estate settlement',
      'Guidance for personal representatives and trustees',
    ],
  },
  {
    slug: 'medicaid-planning',
    title: 'Medicaid Planning',
    excerpt:
      'Prepare for long-term care without losing your life savings to nursing home costs.',
    description: [
      'Long-term care is expensive, and many families are unprepared for the financial impact. Medicaid planning helps you qualify for benefits while protecting the assets you have worked a lifetime to build.',
      'We help South Florida families, seniors, and their loved ones develop strategies to pay for care now and in the future without sacrificing financial security.',
    ],
    highlights: [
      'Medicaid eligibility planning',
      'Asset preservation strategies',
      'Application assistance and appeals',
      'Crisis planning for immediate care needs',
    ],
  },
  {
    slug: 'long-term-care-planning',
    title: 'Long-Term Care Planning',
    excerpt:
      'Thoughtful planning designed to secure your future care and protect your independence.',
    description: [
      'Planning ahead for long-term care gives you choices and control. We help you understand your options and create a plan that protects both your finances and your dignity.',
      'Whether you are planning proactively or facing an immediate need, our experienced elder law attorneys are here to guide you every step of the way.',
    ],
    highlights: [
      'Care needs and cost analysis',
      'Coordination with insurance and benefits',
      'In-home and facility care planning',
      'Protection of assets for a healthy spouse',
    ],
  },
  {
    slug: 'elder-medicaid-nursing-home-care',
    title: 'Elder Medicaid & Nursing Home Care',
    excerpt:
      'Pay for long-term care costs now and in the future without losing your life savings.',
    description: [
      'When a family member needs nursing home care, the costs can be staggering. Our elder law attorneys help you access the benefits you are entitled to while preserving assets for your family.',
      'We provide clear, compassionate guidance during what is often a stressful and emotional time.',
    ],
    highlights: [
      'Nursing home Medicaid qualification',
      'Spousal impoverishment protection',
      'Veterans benefits coordination',
      'Crisis and pre-planning solutions',
    ],
  },
  {
    slug: 'ira-trusts',
    title: 'IRA Trusts',
    excerpt:
      'Understand and protect one of your most valuable retirement assets for your heirs.',
    description: [
      'Your retirement accounts may be among your largest assets, yet they require special planning to pass to your heirs efficiently. An IRA trust helps protect these funds from taxes, creditors, and poor financial decisions.',
      'We help you structure your retirement assets so they continue to provide for your loved ones long after you are gone.',
    ],
    highlights: [
      'Protect inherited IRAs from creditors',
      'Control distributions to beneficiaries',
      'Tax-efficient wealth transfer',
      'Coordination with your overall estate plan',
    ],
  },
  {
    slug: 'special-needs-planning',
    title: 'Special Needs Planning',
    excerpt:
      'Protect a loved one with a disability without jeopardizing their public benefits.',
    description: [
      'If someone you love has a disability, you may worry about their care and security when you are no longer able to provide it. A special needs trust ensures your loved one is supported without losing access to essential government benefits.',
      'We create plans that provide for your family member while preserving their eligibility for programs like Medicaid and SSI.',
    ],
    highlights: [
      'Special needs and supplemental needs trusts',
      'Preservation of government benefits',
      'Guardianship and advocacy planning',
      'Coordination with caregivers and families',
    ],
  },
  {
    slug: 'asset-protection-planning',
    title: 'Asset Protection Planning',
    excerpt:
      'Legal strategies to safeguard your assets from creditors, litigants, and other claimants.',
    description: [
      'Asset protection planning uses proven legal strategies to shield your wealth from creditors, lawsuits, and other potential claims, keeping your assets available for you and your family in the long term.',
      'We design protection strategies that are both effective and fully compliant, tailored to your profession, assets, and risk profile.',
    ],
    highlights: [
      'Creditor and lawsuit protection strategies',
      'Business and professional asset shielding',
      'Trust-based protection structures',
      'Integration with estate and tax planning',
    ],
  },
  {
    slug: 'pet-trusts',
    title: 'Pet Trusts',
    excerpt:
      'Ensure your beloved pets are cared for if something happens to you.',
    description: [
      'For many of us, pets are family. A pet trust is an essential part of a comprehensive estate plan for pet owners, ensuring your animals receive the care and love they deserve if you are no longer able to provide it.',
      'We help you establish clear instructions and funding so your pets are protected, no matter what the future holds.',
    ],
    highlights: [
      'Legally enforceable care instructions',
      'Designated caregivers and funding',
      'Veterinary and lifestyle provisions',
      'Peace of mind for pet owners',
    ],
  },
]

export type TeamMember = {
  name: string
  role: string
  bio: string
  image: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Barry D. Siegel, Esq.',
    role: 'Managing Partner / Shareholder',
    bio: 'Barry founded The Siegel Law Group to provide compassionate, effective legal representation to Florida families and seniors. He focuses on comprehensive estate planning, elder law, and probate.',
    image: '/images/barry-siegel.png',
  },
  {
    name: 'Jay Silverstein',
    role: 'Senior Estate Planning Attorney',
    bio: 'Jay brings decades of experience helping families design estate plans that protect their assets and reflect their values, with a focus on trusts and probate avoidance.',
    image: '/images/JAY-SILVERSTEIN-HEADSHOT-2-e1743779872623.jpeg',
  },
  {
    name: 'Abby L. Steinberg',
    role: 'Elder Law Attorney',
    bio: 'Abby guides seniors and their families through Medicaid planning and long-term care, ensuring clients access the benefits they deserve while preserving their savings.',
    image: '/images/ABBY.webp',
  },
  {
    name: 'Madison Wells',
    role: 'Client Services Director',
    bio: 'Madison ensures every client feels supported from their first call through the completion of their plan, coordinating each step of the process with care.',
    image: '/images/maddison-edited-e1773755732792.jpg',
  },
  {
    name: 'Maria Siegel',
    role: 'Medicaid Consultant & Community Outreach Specialist',
    bio: 'Maria helps families navigate the Medicaid application process and leads our community outreach, educating South Florida seniors about their planning options.',
    image: '/images/maria-bio-img.webp',
  },
]

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The Siegel Law Group made a complicated process feel simple and reassuring. They treated my parents with such patience and respect. I cannot recommend them highly enough.',
    name: 'Linda R.',
    detail: 'Estate Planning Client',
  },
  {
    quote:
      'When my father needed nursing home care, Barry and his team helped us protect his savings and qualify for Medicaid. They were a lifeline during an incredibly stressful time.',
    name: 'Michael T.',
    detail: 'Elder Law Client',
  },
  {
    quote:
      'Professional, compassionate, and truly knowledgeable. They took the time to explain every option and built a plan that gives our family real peace of mind.',
    name: 'Susan & David K.',
    detail: 'Living Trust Clients',
  },
  {
    quote:
      'After my mother passed, the team guided us through probate with kindness and efficiency. They handled everything so we could focus on our family.',
    name: 'Jennifer M.',
    detail: 'Probate Client',
  },
  {
    quote:
      'I finally have peace of mind knowing my special needs son will be cared for. The trust they created was exactly what our family needed.',
    name: 'Robert P.',
    detail: 'Special Needs Planning Client',
  },
  {
    quote:
      'From the first consultation, I felt heard and respected. This is a firm that genuinely cares about its clients and their families.',
    name: 'Carol B.',
    detail: 'Asset Protection Client',
  },
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  content: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'northern-estate-plan-florida',
    title: 'Why Your Northern Estate Plan Might Melt Under the Florida Sun',
    excerpt:
      'Moving to Florida? The estate plan you created up north may not hold up under Florida law. Here is what every new resident needs to review.',
    category: 'Estate Planning',
    date: 'June 18, 2026',
    readTime: '6 min read',
    image: '/images/blog-florida.png',
    content: [
      'Relocating to Florida is an exciting new chapter, but it comes with legal considerations many new residents overlook. The estate plan you carefully built in another state may not function as intended under Florida law.',
      'Florida has unique rules regarding homestead property, spousal rights, and the execution of wills and trusts. A document that was perfectly valid in your former state could create unexpected complications here.',
      'Once you establish Florida residency, it is essential to have your estate plan reviewed by a Florida attorney. Small adjustments now can prevent significant problems for your family later.',
      'At The Siegel Law Group, we help new Florida residents update their plans so they remain effective, compliant, and aligned with their wishes.',
    ],
  },
  {
    slug: 'avoid-probate-florida',
    title:
      'How to Avoid Probate in Florida: A Simple Guide to Keeping Your Assets Private',
    excerpt:
      'Probate can be costly, slow, and public. Learn the proven strategies that keep your assets private and protected for your heirs.',
    category: 'Probate',
    date: 'June 4, 2026',
    readTime: '5 min read',
    image: '/images/blog-probate.png',
    content: [
      'Probate is the court-supervised process of settling an estate, and in Florida it can be time-consuming, expensive, and entirely public. Fortunately, there are several effective ways to keep your assets out of probate.',
      'Revocable living trusts are one of the most powerful tools for probate avoidance. Assets held in a properly funded trust pass directly to your beneficiaries without court involvement.',
      'Other strategies include beneficiary designations, payable-on-death accounts, and certain forms of property ownership. The right combination depends on your unique circumstances.',
      'A comprehensive estate plan ensures your wishes are honored privately and efficiently, sparing your loved ones unnecessary cost and delay.',
    ],
  },
  {
    slug: 'lady-bird-deed-florida',
    title:
      "How a 'Lady Bird Deed' Keeps Your Florida Home Out of Probate",
    excerpt:
      'A Lady Bird deed is a powerful and affordable tool for Florida homeowners. Here is how it works and why you may need one.',
    category: 'Elder Law',
    date: 'May 21, 2026',
    readTime: '4 min read',
    image: '/images/blog-ladybird.png',
    content: [
      'A Lady Bird deed, also known as an enhanced life estate deed, is a uniquely powerful tool for Florida homeowners who want to pass their home to loved ones without probate.',
      'With a Lady Bird deed, you retain complete control of your property during your lifetime. You can sell it, mortgage it, or change your mind at any time, and your beneficiaries have no rights until your passing.',
      'When you pass away, the home transfers automatically to your named beneficiaries, avoiding probate entirely while preserving valuable homestead protections.',
      'This strategy is not right for everyone, but for many Florida families it offers a simple, cost-effective way to protect their most valuable asset.',
    ],
  },
  {
    slug: 'medicaid-planning-mistakes',
    title: 'Five Common Medicaid Planning Mistakes That Cost Families Dearly',
    excerpt:
      'Well-meaning families often make costly errors when planning for long-term care. Avoid these five common Medicaid planning mistakes.',
    category: 'Medicaid Planning',
    date: 'May 7, 2026',
    readTime: '7 min read',
    image: '/images/blog-medicaid.png',
    content: [
      'Medicaid planning is complex, and the consequences of mistakes can be severe, including penalties, delays, and the unnecessary loss of assets. Here are five common errors families make.',
      'First, waiting too long to plan. Many families wait until a crisis hits, when fewer options remain available. Proactive planning provides far greater protection.',
      'Second, gifting assets improperly. Transferring assets without understanding the Medicaid look-back period can trigger significant penalties.',
      'Third, failing to protect the healthy spouse. With proper planning, a spouse remaining at home can keep more assets than many families realize.',
      'An experienced elder law attorney can help you avoid these pitfalls and protect your family\u2019s financial future.',
    ],
  },
  {
    slug: 'why-everyone-needs-power-of-attorney',
    title: 'Why Every Adult Needs a Durable Power of Attorney',
    excerpt:
      'A durable power of attorney is one of the most important documents you can have. Learn why it matters at every stage of life.',
    category: 'Estate Planning',
    date: 'April 23, 2026',
    readTime: '5 min read',
    image: '/images/blog-poa.png',
    content: [
      'A durable power of attorney allows someone you trust to manage your financial affairs if you become unable to do so. Without one, your family may face a costly court guardianship process.',
      'This document is not just for the elderly. Accidents and illness can affect anyone at any age, making a power of attorney essential for every adult.',
      'Choosing the right agent and granting the appropriate powers requires careful thought. A poorly drafted document can create as many problems as having none at all.',
      'We help you create a durable power of attorney that protects you and gives your loved ones the authority they need when it matters most.',
    ],
  },
  {
    slug: 'talking-to-aging-parents',
    title: 'How to Talk to Your Aging Parents About Their Estate Plan',
    excerpt:
      'Starting the conversation about estate planning with aging parents can be difficult. Here are compassionate ways to begin.',
    category: 'Elder Law',
    date: 'April 9, 2026',
    readTime: '6 min read',
    image: '/images/blog-parents.png',
    content: [
      'Talking with aging parents about their estate plan is one of the most important and most difficult conversations a family can have. Approached with care, it can bring everyone closer.',
      'Choose a calm, private moment and lead with love and concern rather than logistics. Emphasize that planning is about honoring their wishes and protecting the whole family.',
      'Focus on listening. Understanding their goals and concerns is far more valuable than pushing your own agenda.',
      'When the family is ready, an experienced attorney can guide the conversation and help translate wishes into a clear, legally sound plan.',
    ],
  },
]

export const ASSOCIATIONS = [
  'Florida Bar Association',
  'National Academy of Elder Law Attorneys',
  'American Academy of Estate Planning Attorneys',
  'Boca Raton Chamber of Commerce',
]
