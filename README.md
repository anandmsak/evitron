# Evitron Portal

Build Phase 1 of EVITRON 2K26 — a premium national-level technical symposium website for Mahendra Engineering College, Department of ECE in association with VELOCITY.

Use the attached poster and EVITRON 2K26 logo as primary visual references (futuristic electronics, circuit traces, electric blue + deep blue + violet + metallic accents, restrained glow, responsive design).

Public routes:
- / (Home: hero with countdown to 08 Oct 2026, about, 3 category cards, event previews, workshop highlights, dates, fee ₹350/participant, food/kit note, CTAs, footer)
- /events (Technical: Techpaper, Evolvex, Tracktron; Workshops: Silicon 2 GDS, Embedded System, Virtual Instrumentation; Non-Technical: Mind Maze, Promptify, Memix, Detective 404; single reusable card)
- /events/:slug (Reusable dedicated event page with placeholder sections for rules, schedule, prizes, FAQ, and data-driven coordinator info)
- /register (Multi-step form: Participant -> Team -> Event selection enforcing strict rules: Technical + 1 Non-Technical OR 1 Workshop only; ₹350/participant with full team payment in single transaction -> Summary)
- /payment (Mock checkout UI with Razorpay placeholder and UPI QR placeholder, fee calculation)
- /registration-success (Confirmation with mock generated QR code and download summary)
- /faq (Categorized accordion FAQ)
- /contact (Faculty coordinator Dr. M. Ravikumar, student coordinators Anandha Krishnan P & Sri Sarvesan M G, email evitron26@gmail.com, Instagram @velocity_ece_mec)

Admin UI (/admin):
- Mock auth login (evitron26@gmail.com)
- Full sidebar: Dashboard (metrics & mock charts), Registrations (search, filter, view drawer, export), Events (CRUD mock state), Coordinators (assignment), Participants, Payments & Payment Settings, Important Dates (08/10/2026 symposium, 01/10/2026 reg close, 27/09/2026 abstract), FAQ manager, Contact Settings, Registration Control (Open/Closed toggle), Exports, Site Settings.

Centralize all mock data (events, coordinators, dates, site settings, registrations) and cleanly separate service abstractions with TODO integration points for backend/Razorpay later. Do not build QR scanner or production backend yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c91386a2-da5b-453f-9147-5868b282e7f4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
--------------------------------------
# EVITRON 2K26

National Level Technical Symposium organized by the Department of Electronics and Communication Engineering (ECE × VELOCITY).

## Tech Stack
- React / TanStack Router
- Vite
- Tailwind CSS
- TypeScript

## Local Development
```bash
npm install
npm run dev
----------------------------------