## Bus Boarding Sequence Generator

### Logic
Passengers seated farther from the front entry board first to avoid aisle blockage.
For group bookings, the farthest seat determines priority.

### Sorting Rules
1. Descending by max seat distance
2. Ascending by booking ID

### API
POST /api/boarding/sequence
