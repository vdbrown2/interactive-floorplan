import React, { useEffect, useState } from "react";
import axios from "axios";

const OFFICE_ZONES = [
  { id: "office-1", name: "Office 1", top: 40, left: 50, width: 100, height: 80 },
  { id: "office-2", name: "Office 2", top: 40, left: 170, width: 100, height: 80 },
  { id: "office-3", name: "Office 3", top: 40, left: 290, width: 100, height: 80 },
  { id: "office-4", name: "Office 4", top: 40, left: 410, width: 100, height: 80 },
  { id: "office-5", name: "Office 5", top: 40, left: 530, width: 100, height: 80 },
  { id: "office-6", name: "Office 6", top: 140, left: 50, width: 100, height: 80 },
  { id: "office-7", name: "Office 7", top: 140, left: 170, width: 100, height: 80 },
  { id: "office-8", name: "Office 8", top: 140, left: 290, width: 100, height: 80 },
  { id: "office-9", name: "Office 9", top: 140, left: 410, width: 100, height: 80 },
  { id: "office-10", name: "Office 10", top: 140, left: 530, width: 100, height: 80 },
];

export default function FloorPlan() {
  const [units, setUnits] = useState({});
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("/api/office_units").then((res) => {
      const map = {};
      res.data.forEach((u) => {
        map[u.identifier] = u;
      });
      setUnits(map);
    });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "relative", width: 800, height: 600 }}>
        <img
          src="/floorplan.png"
          alt="floorplan"
          style={{ width: "100%", height: "100%" }}
        />

        {OFFICE_ZONES.map((zone) => {
          const office = units[zone.id];
          const status = office?.status || "unknown";
          const isOccupied = status === "occupied";

          return (
            <div
              key={zone.id}
              title={zone.name}
              onClick={() => setSelected(office)}
              style={{
                position: "absolute",
                top: zone.top,
                left: zone.left,
                width: zone.width,
                height: zone.height,
                border: "2px solid",
                borderColor: isOccupied ? "#ff6961" : "#77dd77",
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>

      <div style={{ marginLeft: 20 }}>
        {selected ? (
          <div>
            <h3>{selected.name}</h3>
            <p>Status: {selected.status}</p>
            <p>Occupant: {selected.occupant || "None"}</p>
            <p>Move-in Date: {selected.move_in_date}</p>
          </div>
        ) : (
          <p>Click a room to view details</p>
        )}
      </div>
    </div>
  );
}
