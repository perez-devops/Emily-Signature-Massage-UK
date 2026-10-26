/**
 * Centralized content for Emily Signature Massage UK.
 * All details localized for the United Kingdom market.
 *
 * index.html renders this content statically (for SEO, fast initial paint, and
 * no-JS accessibility) and mirrors these exact values.
 * booking.html's service dropdown is driven by this file at runtime.
 */
window.EMILY_CONTENT = {
  business: {
    name: "Emily Signature Massage UK",
    phone: "+44 (0)7700 900842",
    email: "hello@emilysignaturemassage.co.uk",
    address: "24 Berkeley Square, Mayfair, London W1J 6HE, UK",
    hours: [
      { days: "Mon – Sun", time: "Available 24 Hours" }
    ],
    paymentOptions: [
      "Bank Transfer",
      "Voucher",
      "Bitcoin / Crypto"
    ],
    social: {
      instagram: "https://instagram.com/emilysignaturemassageuk",
      facebook: "https://facebook.com/emilysignaturemassageuk"
    }
  },

  hero: {
    eyebrow: "Emily Signature Massage · London UK",
    headline: "Work that finds the tension you stopped noticing.",
    sub: "One therapist, one private studio, sessions built around what your body actually needs — not a menu of upsells.",
    trust: "8 years in practice · CThA Registered & Fully Insured (UK)",
    ctaPrimary: { label: "Book my session", href: "booking.html" },
    ctaSecondary: { label: "See reviews", href: "#reviews" }
  },

  intro: {
    eyebrow: "How it works here",
    heading: "No two sessions are the same, because no two bodies are.",
    body: "Before any table time, we talk — about where you're carrying tension, what's changed since your last session, what you want to feel like when you leave. The work follows that conversation, not a fixed routine.",
    expectationNote: "That means your first visit runs a few minutes longer than a typical massage. If you're looking for something you can walk straight into with zero conversation, this isn't that — it's built for people who want the work actually aimed at what's wrong.",
    experience: "8 years",
    credential: "CThA Registered & Insured (UK)",
    ctaLabel: "More about Emily",
    ctaHref: "#about"
  },

  services: [
    {
      slug: "signature-deep-tissue",
      name: "Signature Deep Tissue",
      description: "Slow, sustained pressure through the layers that are actually holding the tension — shoulders, low back, hips.",
      bestFor: "Chronic tightness that comes back no matter how many times you stretch it out",
      duration: "60 / 90 min",
      price: "£150 / £200"
    },
    {
      slug: "swedish",
      name: "Swedish",
      description: "Long, even strokes for a nervous system that needs to stand down for an hour.",
      bestFor: "Stress, bad sleep, a week that hasn't let up",
      duration: "60 / 90 min",
      price: "£150 / £200"
    },
    {
      slug: "nuru-massage",
      name: "Nuru Massage",
      description: "A luxurious, full-body relaxation experience using silky massage gel and flowing techniques to ease tension, encourage relaxation, and restore a sense of well-being.",
      bestFor: "Comfort, relaxation, and whole-body wellness",
      duration: "60 / 90 min",
      price: "£150 / £200"
    },
    {
      slug: "hot-stone",
      name: "Hot Stone",
      description: "Warmed basalt stones work as an extension of the hands — heat opens tissue that resists pressure alone.",
      bestFor: "Deep tension that doesn't budge for hands alone",
      duration: "90 min",
      price: "£200"
    },
    {
      slug: "sports-recovery",
      name: "Sports Recovery",
      description: "Targeted work for training load — pre-event prep, post-event flush, or the overuse pattern that keeps coming back.",
      bestFor: "Training load, recurring overuse pain, race or event prep",
      duration: "60 / 90 min",
      price: "£150 / £200"
    },
    {
      slug: "prenatal",
      name: "Prenatal",
      description: "Side-lying positioning and pressure calibrated for each trimester, with a focus on the low back and hips.",
      bestFor: "Pregnancy-related low back and hip discomfort",
      duration: "60 / 90 min",
      price: "£150 / £200"
    },
    {
      slug: "aromatherapy",
      name: "Aromatherapy",
      description: "A relaxation-focused session with essential oils chosen for what you need that day — calm, clarity, or recovery.",
      bestFor: "An off day that needs more than just quiet",
      duration: "60 / 90 min",
      price: "£150 / £200"
    },
    {
      slug: "half-hour-reset",
      name: "Focused Reset (Half Hour)",
      description: "A targeted 30-minute reset focusing on one or two high-tension areas (neck, shoulders or lower back).",
      bestFor: "Quick targeted relief when you are short on time",
      duration: "30 min",
      price: "£100"
    },
    {
      slug: "two-hour-intensive",
      name: "2-Hour Intensive Session",
      description: "Our deepest, most thorough two-hour immersion for total body transformation and complete unhurried restoration.",
      bestFor: "Full-body relief and profound unwinding without rushing",
      duration: "120 min",
      price: "£250"
    },
    {
      slug: "overnight-session",
      name: "Overnight Session",
      description: "An exclusive, bespoke overnight treatment dedicated entirely to your ultimate relaxation and rejuvenation.",
      bestFor: "Ultimate VIP relaxation, sleep restoration, and total unwinding",
      duration: "Overnight",
      price: "£500"
    }
  ],

  pricing: {
    intro: "Not sure how long you need? 60 minutes is the right starting point for a first visit — you can always book longer once you know what works for you.",
    rows: [
      { duration: "30 min", price: "£100", description: "A focused reset — targeted treatment for one or two high-tension areas.", popular: false },
      { duration: "60 min", price: "£150", description: "The standard full-body session.", popular: true, badge: "Recommended first visit" },
      { duration: "90 min", price: "£200", description: "Full body with real time to work through problem areas.", popular: false },
      { duration: "120 min", price: "£250", description: "The deepest, most thorough session available (2 hours).", popular: false },
      { duration: "Overnight Session", price: "£500", description: "An exclusive, bespoke overnight wellness experience dedicated entirely to you.", popular: false, badge: "Exclusive VIP" }
    ],
    ctaLabel: "Book my session"
  },

  whyChooseUs: {
    statement: "You're not one of twelve clients booked back-to-back in identical 50-minute slots.",
    reasons: [
      "One therapist, so the person who learns your body is the person treating it every time",
      "Private studio or private outcalls across London — not a curtained bay in a shared room",
      "Sessions run on your body's schedule, not a timer that ends mid-work",
      "Straightforward pricing, no membership pressure or upsell menu"
    ]
  },

  giftCards: {
    eyebrow: "Give the session, not the guesswork",
    heading: "Gift cards for the person who never books time for themselves.",
    body: "Available in any amount, sent by email or printed for handing over in person. Good toward any service — they pick what they need, not what you guess they need.",
    occasionNote: "Birthdays, anniversaries, holidays, a rough month at work — or no occasion at all.",
    ctaLabel: "Buy a gift card",
    ctaHref: "#contact"
  },

  reviews: {
    transparencyNote: "Genuine reviews from our clients in London and across the UK.",
    ratingSummary: "5.0 average · Verified reviews",
    platform: "Google Reviews",
    testimonials: [
      {
        quote: "I've tried deep tissue at several clinics across London and this was the first time someone actually found the knot instead of just working the general area. Left an hour later able to turn my head freely again.",
        attribution: "Rachel M. (Kensington, London)",
        rating: 5
      },
      {
        quote: "Booked the 90-minute for lower back pain from sitting at a desk all day in Canary Wharf. She spent almost twenty minutes just on my hips before ever touching my back, which sounds odd until you feel the difference.",
        attribution: "James T. (Canary Wharf, London)",
        rating: 5
      },
      {
        quote: "The intake conversation alone was longer than most massages I've had elsewhere in the UK. I mentioned an old shoulder injury and she actually built the session around it instead of running the same routine on everyone.",
        attribution: "Priya K. (Marylebone, London)",
        rating: 5
      },
      {
        quote: "The overnight session was genuinely transformative. Incredibly peaceful setting, soothing atmosphere, and Emily made me feel completely relaxed from start to finish. Worth every penny.",
        attribution: "Mariam H. (Chelsea, London)",
        rating: 5
      },
      {
        quote: "One of the best massages I've had in a while. Booked the 2-hour session after training for the London Marathon. Felt completely relaxed and restored by the end. Highly recommended.",
        attribution: "Stephen G. (Richmond, London)",
        rating: 5
      }
    ]
  },

  about: {
    portraitAlt: "Portrait of Emily — professional massage therapist in London",
    title: "Qualified & Insured Massage Therapist",
    experience: "8 years in practice",
    credentials: [
      "Complementary Therapists Association (CThA) Registered Member",
      "ITEC & VTCT Level 4/5 Qualified in Sports & Holistic Massage",
      "Fully Insured for Private Studio & Outcall Practice (UK)"
    ],
    specialties: ["Deep tissue", "Sports recovery", "Nurū massage", "Overnight sessions"],
    philosophy: "Massage that starts with listening. Every session opens with a real conversation about what's going on in your body that week, and the work is built around that — not a fixed protocol run the same way for everyone.",
    positioningNote: "This isn't the fastest way to get a massage, and it's not for someone who just wants background noise while they scroll their phone for an hour. It's for people who want the pressure and the focus aimed at whatever's actually bothering them."
  },

  faqs: [
    { q: "What should I expect at my first session?", a: "A short intake conversation about your health history and what's bothering you, then a session built around that — expect it to run a few minutes longer than a typical massage." },
    { q: "What if I need to cancel?", a: "Give at least 24 hours' notice and there's no charge. Cancellations inside 24 hours, or no-shows, are charged 50% of the service price." },
    { q: "Do you require a deposit?", a: "A £100 booking fee is required to hold your appointment, payable by bank transfer, voucher, or Bitcoin/crypto." }
  ],

  finalCta: {
    heading: "The tension will still be there next week. Might as well deal with it now.",
    body: "Book a session in a couple of minutes — no account required.",
    ctaLabel: "Book my session",
    ctaHref: "booking.html"
  },

  booking: {
    subhead: "This is a request, not an instant booking — we'll follow up by phone or email to confirm your time. A £100 booking fee, payable by bank transfer, voucher, or Bitcoin/crypto, secures your appointment.",
    noticeIntro: "No surprises — here's exactly what to expect:",
    depositPolicy: "A £100 booking fee is required to confirm your appointment, payable by bank transfer, voucher, or Bitcoin/crypto. You'll choose your payment method after submitting this form.",
    cancellationPolicy: "Give at least 24 hours' notice to cancel or reschedule. Cancellations inside 24 hours, or no-shows, are charged 50% of the service price.",
    paymentOptions: ["Bank Transfer", "Voucher", "Bitcoin / Crypto"],
    submitLabel: "Send my request"
  },

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Services", href: "index.html#services" },
    { label: "Rates", href: "index.html#pricing" },
    { label: "Gift Cards", href: "index.html#gift-cards" },
    { label: "Reviews", href: "index.html#reviews" },
    { label: "About", href: "index.html#about" },
    { label: "Contact", href: "index.html#contact" }
  ]
};
