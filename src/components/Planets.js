import React, { useState, useEffect } from "react";
import axios from "axios";

function Planets({ setSelectedPlanets }) {
  const [planets, setPlanets] = useState([]);
  const [selects, setSelects] = useState({ p1: "", p2: "", p3: "", p4: "" });

  const getPlanets = async () => {
    try {
      const planets = await axios.get(
        "https://findfalcone.herokuapp.com/planets"
      );
      setPlanets(planets.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "dest1") {
      selects.p1 = e.target.value;
    }
    if (e.target.name === "dest2") {
      selects.p2 = e.target.value;
    }
    if (e.target.name === "dest3") {
      selects.p3 = e.target.value;
    }
    if (e.target.name === "dest4") {
      selects.p4 = e.target.value;
    }

    setSelectedPlanets(selects);
  };

  //console.log(planets);
  return (
    <div className="select-planet">
      <div className="planets">
        <label htmlFor="dest1">Destination 1</label>
        <select name="dest1" id="dest1" onChange={handleChange}>
          <option value="">Select a Planet</option>
          {planets.map((planet) => {
            return (
              <option key={planet.name} value={`${planet.name}`}>
                {planet.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="planets">
        <label htmlFor="dest2">Destination 2</label>
        <select name="dest2" id="dest2" onChange={handleChange}>
          <option value="">Select a Planet</option>
          {planets.map((planet) => {
            return (
              <option key={planet.name} value={`${planet.name}`}>
                {planet.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="planets">
        <label htmlFor="dest3">Destination 3</label>
        <select name="dest3" id="dest3" onChange={handleChange}>
          <option value="">Select a Planet</option>
          {planets.map((planet) => {
            return (
              <option key={planet.name} value={`${planet.name}`}>
                {planet.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="planets">
        <label htmlFor="dest4">Destination 4</label>
        <select name="dest4" id="dest4" onChange={handleChange}>
          <option value="">Select a Planet</option>
          {planets.map((planet) => {
            return (
              <option key={planet.name} value={`${planet.name}`}>
                {planet.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Planets;
