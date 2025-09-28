// data/events.js
export const events = [
  {
    id: "ev-01",
    title: "Education for Poor Children",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80",
    dateDay: "30",
    dateMonth: "July",
    organizer: "David James",
    organizerUrl: "#",
    excerpt:
      "Podcasting operational change management inside of workflows to establish a framework indicators.",
    // (optional fields we can use later)
    location: "Dhaka, Bangladesh",
    dateISO: "2025-07-30T10:00:00+06:00",
    content:
      "<p>Session on education access, supplies distribution and mentor sign-ups.</p>",
  },
  {
    id: "ev-02",
    title: "Healthy Food for Growing",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
    dateDay: "30",
    dateMonth: "July",
    organizer: "Jake Gibson",
    organizerUrl: "#",
    excerpt:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    location: "Chattogram, Bangladesh",
    dateISO: "2025-07-30T15:00:00+06:00",
    content: "<p>Food kit distribution with nutrition tips for families.</p>",
  },
  {
    id: "ev-03",
    title: "Healthy Food for Growing",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
    dateDay: "30",
    dateMonth: "July",
    organizer: "Jake Gibson",
    organizerUrl: "#",
    excerpt:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    location: "Khulna, Bangladesh",
    dateISO: "2025-07-30T11:30:00+06:00",
    content: "<p>Local vendors + volunteers pack and deliver healthy kits.</p>",
  },
  {
    id: "ev-04",
    title: "Healthy Food for Growing",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
    dateDay: "30",
    dateMonth: "July",
    organizer: "Jake Gibson",
    organizerUrl: "#",
    excerpt:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    location: "Sylhet, Bangladesh",
    dateISO: "2025-07-30T09:00:00+06:00",
    content: "<p>Morning briefing and route assignment for field teams.</p>",
  },
  {
    id: "ev-05",
    title: "Healthy Food for Growing",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
    dateDay: "30",
    dateMonth: "July",
    organizer: "Jake Gibson",
    organizerUrl: "#",
    excerpt:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    location: "Rangpur, Bangladesh",
    dateISO: "2025-07-30T13:00:00+06:00",
    content: "<p>Community center distribution with youth volunteers.</p>",
  },
  {
    id: "ev-06",
    title: "Healthy Food for Growing",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80",
    dateDay: "30",
    dateMonth: "July",
    organizer: "Jake Gibson",
    organizerUrl: "#",
    excerpt:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test divide with additional.",
    location: "Barishal, Bangladesh",
    dateISO: "2025-07-30T17:30:00+06:00",
    content: "<p>Closing session and feedback collection.</p>",
  },
];

export function getEventById(id) {
  return events.find((e) => e.id === id);
}
export function getAllEventIds() {
  return events.map((e) => e.id);
}
