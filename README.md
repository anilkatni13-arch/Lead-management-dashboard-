# Real Estate Lead Management Dashboard 🏗️

A React-based lead management dashboard built for **Akshay Construction & Realty**, designed to track and manage leads for the **Star City Phase 1 & 2** residential project in Jabalpur/Katni.

## Features

- 📊 **Pipeline Overview** — Total leads, new leads, site visits scheduled, deals closed
- 🏢 **Unit Inventory Tracking** — Live sold/booked/available unit counts per project phase
- 📋 **Lead Table** — View and update lead status (New → Contacted → Site Visit → Negotiation → Closed)
- ➕ **Add New Leads** — Quick-add form with project, unit type, and source tracking
- 🔍 **Filter by Project** — Switch between Star City Phase 1 and Phase 2

## Tech Stack

- **React** (Create React App)
- **Recharts** — data visualization (extendable)
- **Lucide React** — icons

## Project Structure

```
src/
├── App.jsx                    # Main app layout
├── components/
│   ├── StatsCards.jsx         # Pipeline summary cards
│   ├── InventoryPanel.jsx     # Unit inventory per project
│   ├── LeadTable.jsx          # Lead list with status editing
│   └── AddLeadModal.jsx       # New lead form
├── data/
│   └── sampleData.js          # Sample leads & inventory data
└── index.js
```

## Getting Started

```bash
npm install
npm start
```

Runs on [http://localhost:3000](http://localhost:3000)

## Roadmap

- [ ] Backend integration (Firebase/Supabase) for persistent storage
- [ ] WhatsApp API integration for automated follow-ups
- [ ] Lead source analytics (which channel converts best)
- [ ] Export to Excel/CSV

## Author

Built by Ankush Kumar Dubey — Marketing Executive at Akshay Construction & Realty, Jabalpur, MP.
