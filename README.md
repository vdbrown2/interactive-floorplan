# 🗺 Interactive Office Floorplan App

This is a full-stack app that allows you to upload a floorplan image, draw and save interactive office zones, and view occupancy status for a coworking or office space layout.

Built with:

- **React** (frontend)
- **Ruby on Rails (API-only)** (backend)
- **PostgreSQL**
- **`react-rnd`** for drawing zones
- **RESTful API for zone management**

---

## 📦 Getting Started

### 🔧 Backend Setup (`/backend`)

```bash
cd backend
bundle install
rails db:reset   # drops, migrates, and seeds with floorplan + zones
rails s          # runs on http://localhost:3000
```

This creates:
- `Floorplan` with ID = 1
- 10 predefined `OfficeZone`s (x, y, width, height)
- Matching `OfficeUnit` records with status and occupants

---

### ⚛️ Frontend Setup (`/frontend`)

```bash
cd frontend
npm install
npm start        # runs on http://localhost:3001 (with proxy to Rails API)
```

Dependencies include:
- `react-rnd` — drawing/resizing zones
- `axios` — API communication
- `react-router-dom` — routing between viewer/editor

---

## 🧪 Routes

| Path         | Description                        |
|--------------|-------------------------------------|
| `/`          | View the floorplan + zone statuses |
| `/editor`    | Draw, name, resize zones, and save |

---

## 🗃 Data Models

### Floorplan

| Field   | Type    |
|---------|---------|
| id      | integer |
| name    | string  |

### OfficeZone

| Field        | Type    |
|--------------|---------|
| identifier   | string  |
| name         | string  |
| x, y         | integer |
| width/height | integer |
| floorplan_id | FK to Floorplan |

---

## 🔐 Future Ideas

- Upload custom floorplan images
- Snap-to-grid or drag assist
- Authentication for editors
- Assign bookings to zones
- Real-time collaboration via WebSockets

## Next Steps

- I can make the OfficeUnit object link to the OfficeZone but storing an unitid on the zone. That will be like adding the roomid in Coworks
- when saving the zones, I would just have the select which room they want to map first
- Then when a zone is selected,  we can pull the room object to dispaly the relevant data
