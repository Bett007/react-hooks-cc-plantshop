import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants on mount
  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        // Ensure each plant has an inStock property by default
        const normalized = data.map((p) => ({ ...p, inStock: p.inStock ?? true }));
        setPlants(normalized);
      })
      .catch((err) => {
        console.error("Failed to fetch plants:", err);
      });
  }, []);

  // Handler to add a plant (POST)
  function handleAddPlant(newPlant) {
    // newPlant is { name, image, price }
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to create plant");
        return r.json();
      })
      .then((created) => {
        // Normalise and add inStock default
        setPlants((prev) => [...prev, { ...created, inStock: true }]);
      })
      .catch((err) => {
        console.error("Error creating plant:", err);
      });
  }

  // Toggle stock status for a plant (local state only)
  function handleToggleStock(id) {
    setPlants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p))
    );
  }

  // Filter plants by search term (case-insensitive)
  const displayedPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={displayedPlants} onToggleStock={handleToggleStock} />
    </main>
  );
}

export default PlantPage;