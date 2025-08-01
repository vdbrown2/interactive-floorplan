import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FloorPlan() {
  const [zones, setZones] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const floorplanId = 1; // adjust if you support multiple floorplans
    axios
      .get(`/api/floorplans/${floorplanId}/office_zones`)
      .then((res) => setZones(res.data));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "relative", width: 800, height: 600 }}>
        <img
          src="/floorplan.png"
          alt="floorplan"
          style={{ width: "100%", height: "100%" }}
        />
        {zones.map((zone) => {
          const isOccupied = zone.status === "occupied";
          return (
            <div
              key={zone.id}
              onClick={() => setSelected(zone)}
              title={zone.name}
              style={{
                position: "absolute",
                top: zone.y,
                left: zone.x,
                width: zone.width,
                height: zone.height,
                border: "2px solid",
                borderColor: isOccupied ? "#ff6961" : "#77dd77",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
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
            <p>Status: {selected.status || "Unknown"}</p>
            <p>Occupant: {selected.occupant || "None"}</p>
            <p>Move-in Date: {selected.move_in_date || "Not set"}</p>
          </div>
        ) : (
          <p>Click a room to view details</p>
        )}
      </div>
    </div>
  );
}
