// /data/events.js
export const events = [
  {
    id: "ev-01",
    title: "Education for Poor Children",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80",
    // existing fields your grid already uses:
    dateDay: "30",
    dateMonth: "July",
    organizer: "SoulRise Foundation",
    organizerUrl: "https://example.org",
    excerpt:
      "Community session on education access, supplies distribution, and mentor sign-ups.",
    // new fields for the details page:
    location: "Dhaka, Bangladesh",
    venue: "Shapla Community Center",
    address: "21/4 Shapla Rd, Dhaka",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.903931!2d90.399452!3d23.750867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDhaka!5e0!3m2!1sen!2sbd!4v0000000000000",
    dateISO: "2025-07-30T10:00:00+06:00",
    lastUpdated: "2025-09-26",
    languages: ["Bangla", "English"],
    accessibility: ["Wheelchair accessible", "Child-friendly"],
    content:
      "<p>Join us to improve education access through supply drives and mentorship. We will collect notebooks, pencils, and organize mentor sign-ups for the next term.</p><p>Light refreshments served; volunteers welcome.</p>",
    tickets: {
      currency: "USD",
      capacity: 150,
      seatsBooked: 87,
      registrationUrl: "#",
      tiers: [
        {
          name: "General Admission",
          price: 0,
          includes: ["Entry", "Refreshments"],
        },
        {
          name: "Donor Ticket",
          price: 25,
          includes: ["Entry", "Refreshments", "Donor badge"],
        },
      ],
    },
    schedule: [
      {
        start: "10:00",
        end: "10:20",
        title: "Welcome & Overview",
        speakerId: "sp-01",
      },
      {
        start: "10:20",
        end: "10:50",
        title: "Education Access Brief",
        speakerId: "sp-02",
      },
      {
        start: "10:50",
        end: "11:30",
        title: "Mentor Sign-ups & Q&A",
        speakerId: "sp-01",
      },
    ],
    speakers: [
      {
        id: "sp-01",
        name: "David James",
        role: "Program Lead",
        avatar: "https://i.pravatar.cc/150?img=12",
        bio: "Coordinates community mentoring initiatives.",
      },
      {
        id: "sp-02",
        name: "Amrin Noor",
        role: "Education Officer",
        avatar: "https://i.pravatar.cc/150?img=32",
        bio: "Focuses on access and retention for primary students.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1604881988758-f76ad2e95f2e?w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
    ],
    sponsors: [
      {
        name: "EduBooks Co.",
        url: "#",
        logo: "https://dummyimage.com/120x40/edf2f7/0f172a&text=EduBooks",
      },
      {
        name: "Dhaka Helpers",
        url: "#",
        logo: "https://dummyimage.com/120x40/e2e8f0/0f172a&text=Helpers",
      },
    ],
    tags: ["education", "mentoring", "supplies"],
    faq: [
      {
        q: "Is this event free?",
        a: "Yes, general admission is free. Optional donor ticket supports supplies.",
      },
      {
        q: "Can I bring donations?",
        a: "Yes — notebooks, pens, school bags are most helpful.",
      },
    ],
    updates: [
      {
        date: "2025-09-18",
        title: "Supplies secured",
        body: "Bulk notebooks and pens purchased from local vendors.",
      },
    ],
  },
  {
    id: "ev-02",
    title: "Healthy Food for Growing",
    image:
      "/assets/images/events/food.jpg",
    dateDay: "30",
    dateMonth: "July",
    organizer: "SoulRise Foundation",
    organizerUrl: "https://example.org",
    excerpt: "Food kit distribution with nutrition tips for families.",
    location: "Chattogram, Bangladesh",
    venue: "Ananda School Field",
    address: "1 Old Port Rd, Chattogram",
    mapEmbedUrl: "",
    dateISO: "2025-07-30T15:00:00+06:00",
    lastUpdated: "2025-09-20",
    languages: ["Bangla"],
    accessibility: ["Open-air", "Shade tents"],
    content:
      "<p>Distribute nutrition kits and share simple recipes using local ingredients.</p>",
    tickets: {
      currency: "USD",
      capacity: 300,
      seatsBooked: 210,
      registrationUrl: "#",
      tiers: [
        { name: "Volunteer", price: 0, includes: ["Volunteer badge", "Water"] },
        { name: "Community", price: 0, includes: ["Entry"] },
      ],
    },
    schedule: [
      { start: "15:00", end: "15:20", title: "Briefing", speakerId: "sp-03" },
      {
        start: "15:20",
        end: "16:30",
        title: "Distribution",
        speakerId: "sp-03",
      },
    ],
    speakers: [
      {
        id: "sp-03",
        name: "Jake Gibson",
        role: "Field Coordinator",
        avatar: "https://i.pravatar.cc/150?img=5",
        bio: "Leads field logistics and volunteer ops.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1584596050913-2f3047c7cf44?w=1200&q=80",
    ],
    sponsors: [
      {
        name: "NutriAid",
        url: "#",
        logo: "https://dummyimage.com/120x40/f1f5f9/0f172a&text=NutriAid",
      },
    ],
    tags: ["food", "nutrition", "volunteer"],
    faq: [
      {
        q: "Do I need to register?",
        a: "Registration helps us plan; walk-ins welcome while supplies last.",
      },
    ],
    updates: [
      {
        date: "2025-09-10",
        title: "500 kits prepared",
        body: "Community partners helped pre-pack kits.",
      },
    ],
  },
  {
    id: "ev-03",
    title: "Mothers & Children Health Camp",
    image:
      "/assets/images/events/mom.jpg",
    dateDay: "30",
    dateMonth: "July",
    organizer: "SoulRise Foundation",
    organizerUrl: "https://example.org",
    excerpt:
      "Mobile clinic offering checkups, vaccinations, and nutrition counseling.",
    location: "Khulna, Bangladesh",
    venue: "Ward 12 Clinic Yard",
    address: "Ward 12, Khulna",
    mapEmbedUrl: "",
    dateISO: "2025-07-30T11:30:00+06:00",
    lastUpdated: "2025-09-24",
    languages: ["Bangla"],
    accessibility: ["Wheelchair accessible"],
    content:
      "<p>Volunteer doctors and nurses provide checkups and vaccinations. Medicines and tests offered free.</p>",
    tickets: {
      currency: "USD",
      capacity: 200,
      seatsBooked: 132,
      registrationUrl: "#",
      tiers: [{ name: "Registration", price: 0, includes: ["Queue token"] }],
    },
    schedule: [
      {
        start: "11:30",
        end: "12:00",
        title: "Registration & Vitals",
        speakerId: "",
      },
      {
        start: "12:00",
        end: "14:00",
        title: "Doctor Consultations",
        speakerId: "",
      },
    ],
    speakers: [],
    gallery: [],
    sponsors: [],
    tags: ["health", "vaccines", "community"],
    faq: [
      { q: "Bring ID?", a: "Not required, but helpful for record keeping." },
    ],
    updates: [
      {
        date: "2025-09-21",
        title: "Team assembled",
        body: "4 doctors, 6 nurses confirmed.",
      },
    ],
  },
  {
    id: "ev-04",
    title: "Clean Water & Hygiene Kits",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1600&q=80",
    dateDay: "30",
    dateMonth: "July",
    organizer: "SoulRise Foundation",
    organizerUrl: "https://example.org",
    excerpt:
      "Install a community tube-well and provide hygiene kits to 150 households.",
    location: "Sylhet, Bangladesh",
    venue: "Surma School Ground",
    address: "Surma Rd, Sylhet",
    mapEmbedUrl: "",
    dateISO: "2025-07-30T09:00:00+06:00",
    lastUpdated: "2025-09-18",
    languages: ["Bangla"],
    accessibility: ["Shaded area"],
    content:
      "<p>Access to safe water reduces disease and time spent fetching water. Learn how community maintenance funds work.</p>",
    tickets: {
      currency: "USD",
      capacity: 220,
      seatsBooked: 160,
      registrationUrl: "#",
      tiers: [{ name: "Attendee", price: 0, includes: ["Entry"] }],
    },
    schedule: [
      {
        start: "09:00",
        end: "09:20",
        title: "Opening & Safety Brief",
        speakerId: "sp-04",
      },
      {
        start: "09:20",
        end: "10:30",
        title: "Well Installation Demo",
        speakerId: "sp-04",
      },
    ],
    speakers: [
      {
        id: "sp-04",
        name: "Rafi Karim",
        role: "WASH Engineer",
        avatar: "https://i.pravatar.cc/150?img=23",
        bio: "Community water systems specialist.",
      },
    ],
    gallery: [],
    sponsors: [],
    tags: ["wash", "hygiene", "water"],
    faq: [],
    updates: [
      {
        date: "2025-09-05",
        title: "Site survey done",
        body: "Hydro-geological survey completed.",
      },
    ],
  },
  {
    id: "ev-05",
    title: "Youth Digital Skills Lab",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80",
    dateDay: "30",
    dateMonth: "July",
    organizer: "SoulRise Foundation",
    organizerUrl: "https://example.org",
    excerpt:
      "Equip youths with basic digital skills and job readiness training.",
    location: "Rangpur, Bangladesh",
    venue: "ICT Center Hall",
    address: "Kazirhat, Rangpur",
    mapEmbedUrl: "",
    dateISO: "2025-07-30T13:00:00+06:00",
    lastUpdated: "2025-09-23",
    languages: ["Bangla", "English"],
    accessibility: ["Projector captions"],
    content:
      "<p>Laptops, internet, trainers, and mentorship for six months. Resume and interview coaching included.</p>",
    tickets: {
      currency: "USD",
      capacity: 100,
      seatsBooked: 76,
      registrationUrl: "#",
      tiers: [
        { name: "Participant", price: 0, includes: ["Workshop access"] },
        {
          name: "Supporter",
          price: 15,
          includes: ["Workshop access", "Shout-out"],
        },
      ],
    },
    schedule: [
      {
        start: "13:00",
        end: "13:20",
        title: "Orientation",
        speakerId: "sp-05",
      },
      {
        start: "13:20",
        end: "14:30",
        title: "Hands-on Session",
        speakerId: "sp-05",
      },
    ],
    speakers: [
      {
        id: "sp-05",
        name: "Nabila Sultana",
        role: "Trainer",
        avatar: "https://i.pravatar.cc/150?img=49",
        bio: "Frontline trainer for youth programs.",
      },
    ],
    gallery: [],
    sponsors: [],
    tags: ["skills", "youth", "jobs"],
    faq: [],
    updates: [
      {
        date: "2025-09-14",
        title: "Curriculum finalized",
        body: "Modules cover office apps and soft skills.",
      },
    ],
  },
  {
    id: "ev-06",
    title: "Emergency Shelter Repair (Monsoon)",
    image:
      "/assets/images/events/shelter.jpg",
    dateDay: "30",
    dateMonth: "July",
    organizer: "SoulRise Foundation",
    organizerUrl: "https://example.org",
    excerpt:
      "Repair flooded homes: tarps, bamboo, corrugated sheets, and tool kits.",
    location: "Barishal, Bangladesh",
    venue: "Ward 7 Relief Point",
    address: "Ward 7, Barishal",
    mapEmbedUrl: "",
    dateISO: "2025-07-30T17:30:00+06:00",
    lastUpdated: "2025-09-26",
    languages: ["Bangla"],
    accessibility: ["On-site first aid"],
    content:
      "<p>Rapid, cost-effective shelter fixes reduce displacement and health risks. Local artisans hired for repairs.</p>",
    tickets: {
      currency: "USD",
      capacity: 180,
      seatsBooked: 112,
      registrationUrl: "#",
      tiers: [{ name: "Volunteer", price: 0, includes: ["Tool orientation"] }],
    },
    schedule: [
      {
        start: "17:30",
        end: "17:45",
        title: "Safety & Tools",
        speakerId: "sp-06",
      },
      {
        start: "17:45",
        end: "19:00",
        title: "Team Assignments",
        speakerId: "sp-06",
      },
    ],
    speakers: [
      {
        id: "sp-06",
        name: "Shafin Rahman",
        role: "Relief Lead",
        avatar: "https://i.pravatar.cc/150?img=11",
        bio: "Coordinates rapid repair teams.",
      },
    ],
    gallery: [],
    sponsors: [],
    tags: ["shelter", "monsoon", "relief"],
    faq: [
      {
        q: "What should I wear?",
        a: "Closed-toe shoes; we provide gloves and basic PPE.",
      },
    ],
    updates: [
      {
        date: "2025-09-19",
        title: "Repair teams active",
        body: "Four teams covering five unions.",
      },
    ],
  },
];

// robust lookup: accepts "ev-01", "EV-01", "01", or "1"
export function getEventById(id) {
  const needle = String(id).toLowerCase();
  const digits = needle.replace(/\D/g, "");
  return events.find(
    (e) => e.id.toLowerCase() === needle || e.id.replace(/\D/g, "") === digits
  );
}
export function getAllEventIds() {
  return events.map((e) => e.id);
}
