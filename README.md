# 🚌 Bus Boarding Sequence Generator (API + UI)

This project implements a system that generates an optimal **boarding sequence for bus passengers** based on seat distance from a **single front entry**, with the goal of reducing aisle blockage and overall boarding time.

The solution includes:
- A **Node.js (Express) backend API**
- A **minimal HTML + JavaScript frontend**
- A **clear service-oriented architecture**

---

## 📌 Problem Overview

- All passengers board from a **single front entry**
- Seat labels (e.g., `A1`, `B10`, `A20`) imply **relative distance from entry**
- A single booking can include **multiple seats**
- Boarding order is decided based on the **maximum seat distance per booking**
- In case of ties, **lower Booking ID gets priority**

This mirrors real-world boarding constraints where aisle blocking occurs if passengers seated farther inside board later.

---

## 🧠 Solution Approach

1. Parse seat labels to extract numeric distance
2. For each booking, compute the **maximum seat distance**
3. Sort bookings by:
   - Descending seat distance
   - Ascending booking ID (tie-breaker)
4. Generate a sequential boarding order



