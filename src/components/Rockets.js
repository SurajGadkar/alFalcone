import React, { useState, useEffect } from "react";
import axios from "axios";

function Rockets({ setSelectedRockets }) {
  //const [selectedRockets, setSelectedRockets] = useState(null);
  const [rockets, setRockets] = useState([]);
  const [selects, setSelects] = useState({ v1: "", v2: "", v3: "", v4: "" });

  const getRockets = async () => {
    try {
      const rockets = await axios.get(
        "https://findfalcone.herokuapp.com/vehicles"
      );
      setRockets(rockets.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getRockets();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "rocket1") {
      selects.v1 = e.target.value;
    }
    if (e.target.name === "rocket2") {
      selects.v2 = e.target.value;
    }
    if (e.target.name === "rocket3") {
      selects.v3 = e.target.value;
    }
    if (e.target.name === "rocket4") {
      selects.v4 = e.target.value;
    }

    setSelectedRockets(selects);
  };

  //console.log(rockets);
  return (
    <div className="select-rocket">
      <div className="rockets">
        <label htmlFor="rocket1">Rocket 1</label>
        <select name="rocket1" id="rocket1" onChange={handleChange}>
          <option value="">Select a Vehicle</option>
          {rockets.map((rocket) => {
            return (
              <option key={rocket.name} value={`${rocket.name}`}>
                {rocket.name} ({rocket.total_no})
              </option>
            );
          })}
        </select>
      </div>

      <div className="rockets">
        <label htmlFor="rocket2">Rocket 2</label>
        <select name="rocket2" id="rocket2" onChange={handleChange}>
          <option value="">Select a Vehicle</option>
          {rockets.map((rocket) => {
            return (
              <option key={rocket.name} value={`${rocket.name}`}>
                {rocket.name} ({rocket.total_no})
              </option>
            );
          })}
        </select>
      </div>

      <div className="rockets">
        <label htmlFor="rocket3">Rocket 3</label>
        <select name="rocket3" id="rocket3" onChange={handleChange}>
          <option value="">Select a Vehicle</option>
          {rockets.map((rocket) => {
            return (
              <option key={rocket.name} value={`${rocket.name}`}>
                {rocket.name} ({rocket.total_no})
              </option>
            );
          })}
        </select>
      </div>

      <div className="rockets">
        <label htmlFor="rocket4">Rocket 4</label>
        <select name="rocket4" id="rocket4" onChange={handleChange}>
          <option value="">Select a Vehicle</option>
          {rockets.map((rocket) => {
            return (
              <option key={rocket.name} value={`${rocket.name}`}>
                {rocket.name} ({rocket.total_no})
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Rockets;
