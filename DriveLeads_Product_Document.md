# DriveLeads - Product Document
### Lead Management System for HSR Motors

---

## 1. Product Name & Vision

**Product Name:** DriveLeads
**Tagline:** "Drive Every Lead to a Sale"

**Vision:** DriveLeads is a real-time, collaborative lead management platform built specifically for automotive dealerships. It replaces HSR Motors' manual spreadsheet-based tracking with an intelligent system that captures, scores, assigns, and nurtures leads — helping the sales team convert more prospects into customers while giving business managers full visibility into performance.

---

## 2. Problem Statement

HSR Motors is a car dealership that advertises on multiple platforms (Facebook, Twitter, Google, Website, offline events). They currently manage all incoming leads through spreadsheet software, which creates the following problems:

- **No real-time collaboration** — Multiple sales reps cannot work on the same lead data simultaneously
- **Manual status tracking** — Leads fall through the cracks when reps forget to update spreadsheets
- **No automation** — Every follow-up, assignment, and status change requires manual work
- **Zero analytics** — The Business Manager has no quick-view dashboard to understand lead performance
- **No lead prioritization** — All leads are treated equally, regardless of urgency or value
- **Poor audit trail** — No history of who contacted whom and when

---

## 3. Target Users & Personas

### Persona 1: Sales Executive (Priya Sharma)
- **Role:** Sales Team Member
- **Goal:** Reach out to leads by phone, understand their car buying needs, qualify leads, and update status
- **Pain Points:** Wastes time scrolling through spreadsheets to find her assigned leads; forgets follow-ups; doesn't know which leads are most urgent
- **What she needs:** A clean list of her assigned leads, sorted by priority, with one-click calling and easy status updates

### Persona 2: Business Manager (Ravi Mehta)
- **Role:** Business Manager / Team Lead
- **Goal:** Get a quick-view dashboard to analyze lead data, track team performance, and identify bottlenecks
- **Pain Points:** Spends hours building manual reports from spreadsheets; can't see real-time team performance; doesn't know which ad channels give best ROI
- **What he needs:** A visual dashboard with KPIs, source breakdowns, conversion funnels, and team leaderboards

---

## 4. Key Features

### Core Features
| Feature | Description | User |
|---------|-------------|------|
| Lead Listing | Searchable, filterable, sortable table of all leads with status, source, score, and assignment info | Sales Team |
| Lead Details | Complete lead profile with contact info, vehicle interests, activity timeline, notes, and score breakdown | Sales Team |
| Lead Pipeline (Kanban) | Visual drag-and-drop pipeline board: New → Contacted → Qualified → Negotiation → Won/Lost | Sales Team + Manager |
| Analytics Dashboard | KPI cards, trend charts, source breakdown, conversion funnel, rep leaderboard, activity feed | Business Manager |

### Lead Status Workflow
```
New → Contacted → Qualified → Negotiation → Won
                                           → Lost
                → Not Interested
```

### Data Fields Per Lead
- **Contact Info:** Name, Phone, Email, Location, Preferred Contact Time
- **Source:** Facebook / Google Ads / Website / Twitter / Walk-in / Referral / Offline Event
- **Vehicle Interest:** Model, Variant, Fuel Type, Color Preference, Budget Range, Purchase Timeline
- **Exchange Info:** Has existing vehicle? Model, Year, Condition
- **Assignment:** Assigned Sales Rep, Assignment Date, SLA Deadline
- **Score:** Auto-calculated lead score (0-100) with factor breakdown

---

## 5. Automation Features (Key Differentiator)

These automation features eliminate manual work and ensure no lead is ever missed:

### 5.1 Auto Lead Assignment (Round-Robin)
- When a new lead arrives, the system automatically assigns it to the next available sales rep using round-robin logic
- Takes into account: rep workload, working hours, and specialization
- **Example:** If Priya has 15 active leads and Amit has 10, the next lead goes to Amit
- If unassigned for >1 hour, system alerts the manager

### 5.2 Smart Lead Scoring (0-100)
The system auto-scores every lead based on:
- **Budget Match (25 pts):** Does the customer's budget match available inventory?
- **Purchase Timeline (25 pts):** "Within 1 week" scores higher than "Just exploring"
- **Engagement Level (25 pts):** Did they fill a detailed form? Visit multiple times?
- **Location Proximity (25 pts):** Closer to the dealership = higher score

Scores are classified as:
- 🔴 **Hot (80-100):** Immediate attention required
- 🟡 **Warm (50-79):** Follow up within 24 hours
- 🔵 **Cold (0-49):** Nurture over time

### 5.3 Automated Welcome Message
- The moment a lead is captured, an automated SMS/WhatsApp message is sent:
  > "Hi [Name], thank you for your interest in [Car Model] at HSR Motors! Our team will reach out to you shortly. Reply STOP to opt out."
- Builds instant trust and sets expectations

### 5.4 Follow-Up Reminders & SLA Alerts
- Every new lead comes with an SLA timer (e.g., must be contacted within 2 hours)
- If the SLA deadline approaches, the assigned rep gets a push notification
- If SLA is breached, the Business Manager is alerted
- After every call, the system prompts: "Schedule next follow-up?"

### 5.5 Duplicate Lead Detection
- When a new lead arrives, the system checks phone number and email against existing records
- If a duplicate is found: merges the data and notifies the rep instead of creating a new entry
- Prevents the same customer from being contacted by multiple reps

### 5.6 Smart Status Suggestions
- If a lead has been in "Contacted" status for 7+ days with no activity → System suggests "Mark as Not Interested?"
- If a lead in "Negotiation" has had 3+ calls in the last week → System suggests "Mark as Hot Lead"
- Keeps the pipeline clean without manual effort

### 5.7 Automated Daily Digest Email
- Every morning at 9 AM, each sales rep receives an email:
  > "Good morning Priya! You have 5 new leads, 3 follow-ups due today, and 1 SLA at risk. Your top priority: Rahul Verma (Score: 92, Hyundai Creta)."
- Business Manager receives a summary with team-wide metrics

---

## 6. Screen-by-Screen Design Description

### Screen 1: Lead Listing

**Purpose:** The primary working screen for the Sales Team to view, filter, and act on leads.

**Layout:**
- **Top:** Filter bar with dropdowns for Status, Source, Assigned Rep, Date Range
- **Action buttons:** Export CSV, Import Leads, Bulk Actions
- **Center:** Data table with columns:
  - Checkbox (for bulk selection)
  - Lead Name (with avatar, name, email)
  - Phone Number
  - Source (color-coded badge — Facebook blue, Google red, etc.)
  - Interested Vehicle
  - Status (color-coded badge — New blue, Contacted teal, Qualified green, etc.)
  - Lead Score (circular badge: red=hot, yellow=warm, grey=cold)
  - Assigned Rep (avatar + name)
  - Created Date
  - Quick Actions (Call, Email, More options)
- **Bottom:** Pagination controls

**Key UX Details:**
- Clicking any row opens Lead Details
- Checkboxes enable bulk actions (assign multiple leads, change status in bulk)
- Sort by any column by clicking the header
- Search bar in the top navigation for instant search across all leads
- Color-coded status and source badges for instant visual recognition
- Lead score shown as a colored circle (red/yellow/grey) for quick prioritization

---

### Screen 2: Lead Details

**Purpose:** Complete 360° view of an individual lead for the Sales Rep to understand context before making a call.

**Layout — Two-Column:**

**Left Column (Main Content):**
1. **Header Card:** Large avatar, lead name, status badge, source badge, score badge + Quick action buttons (Call, Email, SMS, Schedule Test Drive)
2. **Contact Information Section:** Phone, Email, Location, Preferred Contact Time
3. **Vehicle Interest Section:** Interested Model & Variant, Budget Range, Purchase Timeline, Fuel Preference, Color Preference, Exchange Vehicle details
4. **Activity Timeline:** Chronological log of all interactions:
   - Lead Created (source, auto-assignment details)
   - Auto Lead Scoring result with factor breakdown
   - Automated SMS sent
   - Follow-up reminder created
   - Call made (with notes)
   - Status changes
5. **Notes Section:** Text area to add notes after calls; all previous notes shown with timestamps

**Right Column (Sidebar):**
1. **Lead Score Breakdown:** Circular progress chart (92/100) + individual factor bars (Budget Match: 95%, Timeline: 90%, Engagement: 85%, Location: 100%)
2. **Assigned Rep Card:** Rep name, photo, title, conversion stats + "Reassign" button
3. **Upcoming Actions:** Priority-ordered task list (Call Lead - due in 1h, Schedule Test Drive, Send Quotation)
4. **Similar Leads:** Other leads with similar interests or from the same locality
5. **Quick Status Update:** One-click buttons to change status (Contacted, Qualified, Not Interested, Won)

---

### Screen 3: Lead Management (Pipeline / Kanban Board)

**Purpose:** Visual pipeline management — see where every lead stands and move them through stages with drag-and-drop.

**Layout:**
- **Top:** Pipeline statistics bar showing total count per stage
- **Main Area:** 5 vertical columns (Kanban-style):
  1. **New** (Blue header) — Freshly captured leads
  2. **Contacted** (Teal header) — Reps have made first contact
  3. **Qualified** (Green header) — Customer is genuinely interested and meets criteria
  4. **Negotiation** (Orange header) — Price/model discussions underway
  5. **Won** (Green header) — Deal closed, car sold

**Each Lead Card Shows:**
- Source tag (color-coded)
- Lead score (circular badge)
- Customer name
- Interested vehicle
- Assigned rep avatar + name
- Time since last activity

**Smart Alerts on Cards:**
- 🟡 "Auto-assign in 1h" — for unassigned leads approaching the deadline
- 🔵 "Follow-up due today" — for leads that need a call today
- 🟢 "Hot lead — close soon!" — for high-score leads in Negotiation
- ✅ "Sold — ₹14.5L" — for won deals showing the value

**Interaction:** Drag and drop any card from one column to another to instantly update its status. The system logs this change in the activity timeline.

---

### Screen 4: Dashboard (Analytics)

**Purpose:** Business Manager's command center — quick-view analytics of all lead data.

**Layout:**

**Row 1 — KPI Cards (4 cards in a row):**
1. **Total Leads:** 1,247 (↑12.5% vs last month)
2. **Conversion Rate:** 23.4% (↑3.2%)
3. **Avg Response Time:** 2.4 hrs (↓18min — improved)
4. **Pipeline Value:** ₹4.2 Cr (↑8.1%)

**Row 2 — Charts:**
- **Lead Trends (Line Chart - 2/3 width):** Two lines showing "New Leads" and "Conversions" over time (Weekly/Monthly/Yearly toggle)
- **Lead Sources (Donut Chart - 1/3 width):** Breakdown — Facebook 35%, Google 25%, Website 18%, Twitter 8%, Walk-in 8%, Referral 6%

**Row 3 — Insights (3 equal cards):**
- **Conversion Funnel:** Visual funnel showing drop-off at each stage (New 1247 → Contacted 1022 → Qualified 686 → Negotiation 436 → Won 292)
- **Top Sales Reps Leaderboard:** Ranked list with conversion counts and bar chart (1. Priya Sharma - 68, 2. Amit Kumar - 54, etc.)
- **Recent Activity Feed:** Real-time log of team activities (conversions, calls, new leads, auto-assignments, alerts)

---

## 7. User Journey / Workflow

### Journey 1: New Lead Arrives (Automated)
1. Customer clicks Facebook ad for Hyundai Creta and fills the inquiry form
2. **DriveLeads** captures the lead automatically via API integration
3. System checks for duplicates → No duplicate found → Creates new lead
4. **Auto-scoring** runs → Score: 92 (Hot) — budget matches, timeline urgent, location nearby
5. **Auto-assignment** triggers → Assigned to Priya Sharma (lowest workload)
6. **Welcome SMS** sent to customer automatically
7. **SLA timer** starts → Priya must call within 2 hours
8. Priya gets a push notification: "New Hot Lead: Rahul Verma, Hyundai Creta, Score 92"

### Journey 2: Sales Rep Works a Lead
1. Priya opens **Lead Listing** → Sees Rahul at the top (sorted by score)
2. Clicks on Rahul → Opens **Lead Details**
3. Reviews vehicle interest, budget, and timeline
4. Clicks **"Call"** button → Makes the call
5. After the call, adds notes: "Customer wants test drive this Saturday"
6. Updates status from "New" → "Contacted"
7. Schedules follow-up for Saturday
8. System updates the activity timeline automatically

### Journey 3: Business Manager Reviews Performance
1. Ravi opens **Dashboard** → Sees KPI cards at a glance
2. Notices conversion rate is up 3.2% → Checks which source is performing best
3. Views **Lead Sources** donut chart → Facebook is 35% of leads
4. Checks **Conversion Funnel** → Major drop-off between Contacted and Qualified
5. Reviews **Top Reps Leaderboard** → Identifies top performer for recognition
6. Switches to **Lead Pipeline** → Sees 5 leads stuck in Negotiation for 7+ days
7. Takes action: reassigns stale leads or asks reps for updates

---

## 8. Design Principles

1. **Information Density:** Business users need to scan lots of data quickly — use tables, badges, and color-coding instead of large whitespace
2. **Color-Coded Everything:** Status, source, score — each has a distinct color so users can identify at a glance
3. **One-Click Actions:** Call, email, status change — minimum clicks to complete common actions
4. **Automation Visibility:** Every automated action is clearly labeled in the timeline so users always know what the system did vs. what was manual
5. **Real-Time Collaboration:** All changes are reflected instantly for all users — no stale data

---

## 9. Navigation Structure

```
Sidebar Navigation:
├── Dashboard (Business Manager's home)
├── Lead Listing (Sales Team's home)
├── Lead Pipeline (Kanban view)
├── Lead Details (opens from Listing or Pipeline)
├── AUTOMATION
│   ├── Auto-Assign Rules
│   ├── Smart Alerts
│   └── Lead Scoring Settings
└── SETTINGS
    ├── Team Management
    └── Integrations (Facebook, Google, Website, etc.)
```

---

## 10. Mockup Screens

*(Screenshots from the interactive prototype are attached below — take screenshots from the desktop browser at http://localhost:3000)*

**How to capture mockups:**
1. Open the prototype in a desktop browser (Chrome recommended)
2. Set browser width to 1440px (standard desktop)
3. Screenshot each of the 4 screens:
   - Dashboard
   - Lead Listing
   - Lead Pipeline (Kanban)
   - Lead Details
4. Paste these screenshots into the Google Doc template

---

*Product Designed by: Rima Patle*
*For: DeltaX Product Analyst Assignment*
*Date: March 2026*
