import React, { useState } from "react";
import { Rnd } from "react-rnd";
import axios from "axios";

export default function FloorplanEditor() {
  const [zones, setZones] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addZone = () => {
    const newZone = {
      id: nextId,
      x: 50 + nextId * 10,
      y: 50 + nextId * 10,
      width: 100,
      height: 80,
      name: `Office ${nextId}`,
      identifier: `office-${nextId}`
    };
    setZones([...zones, newZone]);
    setNextId(nextId + 1);
  };

  const updateZone = (id, changes) => {
    setZones(zones.map(z => z.id === id ? { ...z, ...changes } : z));
  };

  const saveZones = async () => {
    const floorplanId = 1; // Replace with dynamic ID if needed
    for (const zone of zones) {
      await axios.post(`/api/floorplans/${floorplanId}/office_zones`, {
        ...zone
      });
    }
    alert("Zones saved!");
  };

  return (
    <div>
      <button onClick={addZone}>Add Office Zone</button>
      <button onClick={saveZones}>Save</button>
      <div style={{ position: "relative", width: 800, height: 600, marginTop: 10 }}>
        <img src="/floorplan.png" style={{ width: "100%", height: "100%" }} alt="floorplan" />
        {zones.map(zone => (
          <Rnd
            key={zone.id}
            default={{
              x: zone.x,
              y: zone.y,
              width: zone.width,
              height: zone.height
            }}
            bounds="parent"
            onDragStop={(e, d) => updateZone(zone.id, { x: d.x, y: d.y })}
            onResizeStop={(e, dir, ref, delta, pos) => {
              updateZone(zone.id, {
                x: pos.x,
                y: pos.y,
                width: ref.offsetWidth,
                height: ref.offsetHeight
              });
            }}
            style={{
              border: "2px dashed #007bff",
              backgroundColor: "rgba(0,123,255,0.05)",
              position: "absolute"
            }}
          >
            <input
              value={zone.name}
              onChange={(e) => updateZone(zone.id, { name: e.target.value })}
              style={{ width: "90%" }}
            />
          </Rnd>
        ))}
      </div>
    </div>
  );
}
