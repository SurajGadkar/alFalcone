import "./App.css";
import Planets from "./components/Planets";
import Rockets from "./components/Rockets";

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState(null);
  const [selectedRockets, setSelectedRockets] = useState(null);
  const [selectedPlanets, setSelectedPlanets] = useState(null);
  const [find, setFind] = useState(false);

  const getToken = async () => {
    try {
      const newToken = await axios.post(
        "https://findfalcone.herokuapp.com/token",
        {},
        { headers: { Accept: "application/json" } }
      );
      setToken(newToken.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getToken();
  }, [find]);

  const findFalcone = () => {
    console.log(selectedPlanets, selectedRockets);
  };
  return (
    <div className="App">
      <h1>Finding Al Falcone !</h1>
      <div className="container">
        <h2>Select the planets you want to search</h2>

        <div className="selection-menu">
          <Planets setSelectedPlanets={setSelectedPlanets} />
          <Rockets setSelectedRockets={setSelectedRockets} />
        </div>

        <div className="findFalcone" onClick={findFalcone}>
          <button className="find-btn"> Find Falcone !</button>
        </div>
      </div>
    </div>
  );
}

export default App;
