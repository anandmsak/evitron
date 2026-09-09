/**
 * Centralised event catalogue for EVITRON 2K26.
 * TODO(backend): move to a database table + admin CRUD.
 */

export type EventCategory = "technical" | "workshop" | "non-technical";

export type SymposiumEvent = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: EventCategory;
  tagline: string;
  description: string;
  teamSize: { min: number; max: number };
  duration: string;
  venue: string;
  rules: string[];
  schedule: { time: string; item: string }[];
  prizes: string[];
  faq: { q: string; a: string }[];
  coordinatorIds: string[];
  active: boolean;
};

export const categoryMeta: Record<
  EventCategory,
  { label: string; blurb: string }
> = {
  technical: {
    label: "Technical Events",
    blurb: "Present your research, showcase your build, race your machine.",
  },
  workshop: {
    label: "Workshops",
    blurb: "Hands-on industry tooling led by domain experts.",
  },
  "non-technical": {
    label: "Non Technical Events",
    blurb: "Fast, playful rounds that reward instinct and teamwork.",
  },
};

const commonFaq = [
  { q: "Do I need to bring my own laptop?", a: "Recommended but not mandatory. Lab systems are available on request." },
  { q: "Will certificates be issued?", a: "Yes. Every participant receives an e-certificate; winners receive merit certificates." },
];

export const events: SymposiumEvent[] = [
  {
    id: "e-techpaper",
    slug: "techpaper",
    title: "TECHPAPER",
    subtitle: "Paper Presentation",
    category: "technical",
    tagline: "Defend your research before a national panel.",
    description:
      "Present original technical work in electronics, communication, VLSI, embedded systems, signal processing, IoT or AI hardware. Abstracts are screened before the symposium and shortlisted teams present on stage.",
    teamSize: { min: 1, max: 3 },
    duration: "8 min presentation + 2 min Q&A",
    venue: "ECE Seminar Hall",
    rules: [
      "Abstract of maximum 250 words must be submitted before 27/09/2026.",
      "Maximum of 3 authors per paper; all authors must register individually.",
      "Presentation format: PPTX or PDF, maximum 12 slides.",
      "Plagiarised work is disqualified without appeal.",
      "Judges' decision is final.",
    ],
    schedule: [
      { time: "09:00 AM", item: "Reporting and slide upload" },
      { time: "09:45 AM", item: "Session I presentations" },
      { time: "11:30 AM", item: "Session II presentations" },
      { time: "01:30 PM", item: "Results announcement" },
    ],
    prizes: ["Winner - cash prize + merit certificate", "Runner up - cash prize + merit certificate"],
    faq: [
      { q: "Can I submit a review paper?", a: "Yes, provided it presents original analysis or comparison." },
      ...commonFaq,
    ],
    coordinatorIds: ["c-ravikumar", "c-anandha"],
    active: true,
  },
  {
    id: "e-evolvex",
    slug: "evolvex",
    title: "EVOLVEX",
    subtitle: "Project Presentation",
    category: "technical",
    tagline: "Working hardware beats a beautiful slide deck.",
    description:
      "Bring a working prototype and demonstrate it live. Evaluation weighs innovation, technical depth, completeness of the build and real-world relevance.",
    teamSize: { min: 1, max: 4 },
    duration: "10 min demo + 5 min Q&A",
    venue: "ECE Project Lab",
    rules: [
      "Prototype must be functional at the time of evaluation.",
      "Teams arrange their own components, power adapters and consumables.",
      "Projects previously awarded at a national symposium are not eligible.",
      "A one-page project abstract must be carried to the venue.",
    ],
    schedule: [
      { time: "09:15 AM", item: "Setup and table allocation" },
      { time: "10:00 AM", item: "Jury round I" },
      { time: "12:00 PM", item: "Jury round II" },
      { time: "02:00 PM", item: "Results announcement" },
    ],
    prizes: ["Winner - cash prize", "Runner up - cash prize", "Best innovation special mention"],
    faq: commonFaq,
    coordinatorIds: ["c-prabakaran", "c-sarvesan"],
    active: true,
  },
  {
    id: "e-tracktron",
    slug: "tracktron",
    title: "TRACKTRON",
    subtitle: "Line Follower Race",
    category: "technical",
    tagline: "Fastest clean lap on the black line takes it.",
    description:
      "Autonomous line following bots race a timed track with curves, junctions and gap sections. Fastest completion without manual intervention wins.",
    teamSize: { min: 1, max: 3 },
    duration: "2 timed attempts per team",
    venue: "ECE Arena",
    rules: [
      "Bot dimensions must not exceed 25cm x 25cm x 20cm.",
      "Onboard power only; supply voltage limited to 12V.",
      "Wired or wireless remote control is not permitted.",
      "Each manual touch adds a 5 second penalty; maximum 3 touches per run.",
      "Best of two attempts is considered.",
    ],
    schedule: [
      { time: "09:30 AM", item: "Bot inspection" },
      { time: "10:15 AM", item: "Practice laps" },
      { time: "11:00 AM", item: "Timed rounds" },
      { time: "02:30 PM", item: "Finals" },
    ],
    prizes: ["Winner - cash prize", "Runner up - cash prize"],
    faq: [
      { q: "Is the track surface glossy?", a: "Matte white vinyl with 3cm black tape; practice laps are provided." },
      ...commonFaq,
    ],
    coordinatorIds: ["c-anandha"],
    active: true,
  },
  {
    id: "e-silicon2gds",
    slug: "silicon-2-gds",
    title: "SILICON 2 GDS",
    subtitle: "Workshop on VLSI design using Cadence",
    category: "workshop",
    tagline: "From schematic intent to a taped-out layout.",
    description:
      "A guided hands-on session covering the digital and analog VLSI flow in Cadence: schematic entry, simulation, layout, DRC/LVS checks and GDSII export.",
    teamSize: { min: 1, max: 1 },
    duration: "Full day, 09:30 AM to 04:00 PM",
    venue: "VLSI Lab",
    rules: [
      "Individual registration only; seats are limited and allotted first come first served.",
      "Basic knowledge of digital electronics is expected.",
      "Systems with licensed tools are provided in the lab.",
      "Participation certificate issued on completing both sessions.",
    ],
    schedule: [
      { time: "09:30 AM", item: "VLSI flow overview" },
      { time: "10:30 AM", item: "Schematic entry and simulation" },
      { time: "01:30 PM", item: "Layout, DRC and LVS" },
      { time: "03:15 PM", item: "GDSII export and wrap-up" },
    ],
    prizes: ["Participation certificate for all attendees"],
    faq: [
      { q: "Do I need prior Cadence experience?", a: "No. The session starts from tool basics." },
      ...commonFaq,
    ],
    coordinatorIds: ["c-prabakaran"],
    active: true,
  },
  {
    id: "e-embedded",
    slug: "embedded-system",
    title: "EMBEDDED SYSTEM",
    subtitle: "Workshop",
    category: "workshop",
    tagline: "Firmware, sensors and a board that actually boots.",
    description:
      "Hands-on embedded development: microcontroller architecture, GPIO and peripheral drivers, sensor interfacing, interrupts and a guided mini project.",
    teamSize: { min: 1, max: 1 },
    duration: "Full day, 09:30 AM to 04:00 PM",
    venue: "Embedded Systems Lab",
    rules: [
      "Individual registration only; seats are limited.",
      "Development boards and kits are provided during the session.",
      "Familiarity with C programming is helpful.",
    ],
    schedule: [
      { time: "09:30 AM", item: "Architecture and toolchain setup" },
      { time: "11:00 AM", item: "Peripheral programming" },
      { time: "01:30 PM", item: "Sensor interfacing" },
      { time: "03:00 PM", item: "Mini project build" },
    ],
    prizes: ["Participation certificate for all attendees"],
    faq: commonFaq,
    coordinatorIds: ["c-ravikumar"],
    active: true,
  },
  {
    id: "e-virtual-instrumentation",
    slug: "virtual-instrumentation",
    title: "VIRTUAL INSTRUMENTATION",
    subtitle: "Workshop on LabVIEW",
    category: "workshop",
    tagline: "Wire your instrument instead of coding it.",
    description:
      "Graphical programming with LabVIEW: dataflow fundamentals, front panel design, loops and structures, data acquisition and building a measurement application.",
    teamSize: { min: 1, max: 1 },
    duration: "Full day, 09:30 AM to 04:00 PM",
    venue: "Instrumentation Lab",
    rules: [
      "Individual registration only; seats are limited.",
      "Licensed LabVIEW systems are provided in the lab.",
      "Attendance for the full session is mandatory for certification.",
    ],
    schedule: [
      { time: "09:30 AM", item: "Dataflow and VI basics" },
      { time: "11:00 AM", item: "Front panel and block diagram design" },
      { time: "01:30 PM", item: "Data acquisition" },
      { time: "03:00 PM", item: "Measurement application build" },
    ],
    prizes: ["Participation certificate for all attendees"],
    faq: commonFaq,
    coordinatorIds: ["c-prabakaran"],
    active: true,
  },
  {
    id: "e-mindmaze",
    slug: "mind-maze",
    title: "MIND MAZE",
    subtitle: "Logic and puzzle rounds",
    category: "non-technical",
    tagline: "Three rounds. Rising difficulty. No calculators.",
    description:
      "A rapid elimination contest of logical reasoning, circuits-inspired riddles and lateral thinking puzzles played in teams of two.",
    teamSize: { min: 1, max: 2 },
    duration: "3 rounds, 90 minutes total",
    venue: "Classroom Block A",
    rules: [
      "Teams of maximum 2 participants.",
      "Mobile phones and calculators are not allowed during rounds.",
      "Tie-breakers are decided by a sudden-death puzzle.",
    ],
    schedule: [
      { time: "10:00 AM", item: "Round 1 - prelims" },
      { time: "11:15 AM", item: "Round 2 - elimination" },
      { time: "12:15 PM", item: "Round 3 - finals" },
    ],
    prizes: ["Winner - cash prize", "Runner up - cash prize"],
    faq: commonFaq,
    coordinatorIds: ["c-sarvesan"],
    active: true,
  },
  {
    id: "e-promptify",
    slug: "promptify",
    title: "PROMPTIFY",
    subtitle: "AI prompt battle",
    category: "non-technical",
    tagline: "The best output wins, not the longest prompt.",
    description:
      "Participants are given creative and technical briefs and must craft prompts that produce the closest match to a target output. Judged on accuracy, creativity and efficiency.",
    teamSize: { min: 1, max: 2 },
    duration: "2 rounds, 75 minutes",
    venue: "Computer Lab 2",
    rules: [
      "Teams of maximum 2 participants.",
      "Only the tools provided at the venue may be used.",
      "Pre-written prompt libraries are not permitted.",
      "Outputs must be generated within the time limit of each round.",
    ],
    schedule: [
      { time: "11:00 AM", item: "Round 1 - creative brief" },
      { time: "12:15 PM", item: "Round 2 - technical brief" },
    ],
    prizes: ["Winner - cash prize", "Runner up - cash prize"],
    faq: commonFaq,
    coordinatorIds: ["c-anandha"],
    active: true,
  },
  {
    id: "e-memix",
    slug: "memix",
    title: "MEMIX",
    subtitle: "Meme and caption contest",
    category: "non-technical",
    tagline: "Engineering humour with a deadline.",
    description:
      "Build memes on the spot from supplied templates and themes drawn from campus and engineering life. Scored on wit, originality and relevance.",
    teamSize: { min: 1, max: 2 },
    duration: "60 minutes",
    venue: "Seminar Hall II",
    rules: [
      "Content must be original and created at the venue.",
      "Offensive, political or personal content leads to disqualification.",
      "Themes are announced at the start of the round.",
    ],
    schedule: [
      { time: "01:30 PM", item: "Theme reveal and creation window" },
      { time: "02:30 PM", item: "Screening and judging" },
    ],
    prizes: ["Winner - cash prize", "Runner up - cash prize"],
    faq: commonFaq,
    coordinatorIds: ["c-sarvesan"],
    active: true,
  },
  {
    id: "e-detective404",
    slug: "detective-404",
    title: "DETECTIVE 404",
    subtitle: "Clue hunt and debugging trail",
    category: "non-technical",
    tagline: "Follow the broken trail across the campus.",
    description:
      "A mystery trail mixing cryptic clues, buggy code snippets and hidden checkpoints across the department. First team to close the case wins.",
    teamSize: { min: 1, max: 3 },
    duration: "2 hours",
    venue: "ECE Block (multiple checkpoints)",
    rules: [
      "Teams of maximum 3 participants.",
      "Clues must not be removed or damaged; the trail is shared by all teams.",
      "Any tampering with checkpoints results in disqualification.",
      "Time penalties apply for skipped checkpoints.",
    ],
    schedule: [
      { time: "10:30 AM", item: "Briefing and first clue" },
      { time: "10:45 AM", item: "Trail begins" },
      { time: "12:45 PM", item: "Case closed - results" },
    ],
    prizes: ["Winner - cash prize", "Runner up - cash prize"],
    faq: commonFaq,
    coordinatorIds: ["c-anandha", "c-sarvesan"],
    active: true,
  },
];

export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);

export const eventsByCategory = (category: EventCategory) =>
  events.filter((e) => e.category === category);
