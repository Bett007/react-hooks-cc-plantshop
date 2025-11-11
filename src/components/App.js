import Header from "./Header";
import PlantPage from "./PlantPage";
import PlantCard from "./PlantCard";
import React, { useState, useEffect } from "react";

function App() {
  const [plants, setPlants] = useState([]);

  function handleAddPlant(newPlant) {
  setPlants((prevPlants) => [...prevPlants, newPlant]);
}

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
