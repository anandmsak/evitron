/** Mock registration records powering the admin UI. TODO(backend): read from Cloud. */

export type PaymentStatus = "paid" | "pending" | "failed";

export type TeamMember = {
  name: string;
  email: string;
  phone: string;
  year: string;
  department: string;
};

export type Registration = {
  id: string;
  createdAt: string;
  leader: TeamMember;
  college: string;
  teamName: string;
  members: TeamMember[];
  eventSlugs: string[];
  amount: number;
  paymentStatus: PaymentStatus;
  paymentRef: string;
  checkedIn: boolean;
};

const member = (
  name: string,
  email: string,
  phone: string,
  year = "III",
  department = "ECE",
): TeamMember => ({ name, email, phone, year, department });

export const mockRegistrations: Registration[] = [
  {
    id: "EVT-2K26-1001",
    createdAt: "2026-09-02T10:12:00+05:30",
    leader: member("Harini R", "harini.r@example.com", "+91 90000 10001"),
    college: "Kongu Engineering College",
    teamName: "Signal Surge",
    members: [member("Deepak S", "deepak.s@example.com", "+91 90000 10002")],
    eventSlugs: ["techpaper", "mind-maze"],
    amount: 700,
    paymentStatus: "paid",
    paymentRef: "pay_MOCK_8f21ac",
    checkedIn: false,
  },
  {
    id: "EVT-2K26-1002",
    createdAt: "2026-09-03T15:44:00+05:30",
    leader: member("Vignesh M", "vignesh.m@example.com", "+91 90000 10003", "IV"),
    college: "Mahendra Engineering College",
    teamName: "Nano Nodes",
    members: [
      member("Aravind K", "aravind.k@example.com", "+91 90000 10004", "IV"),
      member("Sneha P", "sneha.p@example.com", "+91 90000 10005", "IV"),
    ],
    eventSlugs: ["evolvex", "detective-404"],
    amount: 1050,
    paymentStatus: "paid",
    paymentRef: "pay_MOCK_1cd934",
    checkedIn: true,
  },
  {
    id: "EVT-2K26-1003",
    createdAt: "2026-09-04T09:05:00+05:30",
    leader: member("Kavya S", "kavya.s@example.com", "+91 90000 10006", "II"),
    college: "Sona College of Technology",
    teamName: "Solo",
    members: [],
    eventSlugs: ["techpaper", "silicon-2-gds"],
    amount: 350,
    paymentStatus: "pending",
    paymentRef: "pay_MOCK_pending",
    checkedIn: false,
  },
  {
    id: "EVT-2K26-1004",
    createdAt: "2026-09-05T18:20:00+05:30",
    leader: member("Mohammed Irfan", "irfan@example.com", "+91 90000 10007"),
    college: "Bannari Amman Institute of Technology",
    teamName: "Track Titans",
    members: [member("Sathish V", "sathish.v@example.com", "+91 90000 10008")],
    eventSlugs: ["tracktron", "memix"],
    amount: 700,
    paymentStatus: "paid",
    paymentRef: "pay_MOCK_77aa12",
    checkedIn: false,
  },
  {
    id: "EVT-2K26-1005",
    createdAt: "2026-09-06T11:35:00+05:30",
    leader: member("Ananya B", "ananya.b@example.com", "+91 90000 10009", "III", "EEE"),
    college: "Mahendra Engineering College",
    teamName: "Solo",
    members: [],
    eventSlugs: ["evolvex", "embedded-system"],
    amount: 350,
    paymentStatus: "failed",
    paymentRef: "pay_MOCK_failed",
    checkedIn: false,
  },
  {
    id: "EVT-2K26-1006",
    createdAt: "2026-09-07T14:02:00+05:30",
    leader: member("Praveen R", "praveen.r@example.com", "+91 90000 10010", "IV"),
    college: "PSG College of Technology",
    teamName: "Prompt Pilots",
    members: [member("Nithya A", "nithya.a@example.com", "+91 90000 10011", "IV")],
    eventSlugs: ["techpaper", "promptify"],
    amount: 700,
    paymentStatus: "paid",
    paymentRef: "pay_MOCK_5be901",
    checkedIn: true,
  },
  {
    id: "EVT-2K26-1007",
    createdAt: "2026-09-08T08:48:00+05:30",
    leader: member("Sruthi L", "sruthi.l@example.com", "+91 90000 10012", "II"),
    college: "Government College of Engineering, Salem",
    teamName: "Lab Loop",
    members: [member("Yogesh N", "yogesh.n@example.com", "+91 90000 10013", "II")],
    eventSlugs: ["evolvex", "virtual-instrumentation"],
    amount: 700,
    paymentStatus: "paid",
    paymentRef: "pay_MOCK_a19f4c",
    checkedIn: false,
  },
  {
    id: "EVT-2K26-1008",
    createdAt: "2026-09-09T12:26:00+05:30",
    leader: member("Rahul D", "rahul.d@example.com", "+91 90000 10014"),
    college: "Mahendra Engineering College",
    teamName: "Maze Runners",
    members: [
      member("Divya M", "divya.m@example.com", "+91 90000 10015"),
      member("Karthik S", "karthik.s@example.com", "+91 90000 10016"),
    ],
    eventSlugs: ["tracktron", "mind-maze"],
    amount: 1050,
    paymentStatus: "paid",
    paymentRef: "pay_MOCK_c40dd8",
    checkedIn: false,
  },
];

export const registrationTrend = [
  { day: "Aug 26", count: 3 },
  { day: "Aug 29", count: 7 },
  { day: "Sep 01", count: 12 },
  { day: "Sep 04", count: 21 },
  { day: "Sep 06", count: 30 },
  { day: "Sep 08", count: 42 },
  { day: "Sep 09", count: 51 },
];
