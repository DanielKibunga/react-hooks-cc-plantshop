// import React from "react";
// import Header from "./Header";
// import PlantPage from "./PlantPage";

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <PlantPage />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';  // Ensure this is imported
import NewPlantForm from './NewPlantForm';  // Ensure this is imported
import Search from './Search';  // Ensure this is imported

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  
  // Fetch plants from the API when the component mounts
  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch('http://localhost:6001/plants');
      const data = await response.json();
      setPlants(data);
    };

    fetchPlants();
  }, []);
  
  // Handle adding a new plant
  const handleAddPlant = async (newPlant) => {
    const response = await fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newPlant.name,
        image: newPlant.image,
        price: parseFloat(newPlant.price), // Ensure price is a number
        isSoldOut: false, // Default is false for a new plant
      }),
    });

    const addedPlant = await response.json();
    setPlants([...plants, addedPlant]);  // Add the new plant to the state
  };

  // Handle toggling the sold-out status of a plant
  const handleToggleSoldOut = async (id) => {
    const updatedPlants = plants.map((plant) => 
      plant.id === id ? { ...plant, isSoldOut: !plant.isSoldOut } : plant
    );
    setPlants(updatedPlants);

    // Optionally update the plant in the API
    const plantToUpdate = updatedPlants.find((plant) => plant.id === id);
    await fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isSoldOut: plantToUpdate.isSoldOut,
      }),
    });
  };

  // Filter plants based on search input
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Plantsy 🌱</h1>
      </header>

      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search search={search} setSearch={setSearch} />

      <ul className="plant-list">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}  // Make sure each child has a unique key prop
            plant={plant}
            onToggleSoldOut={handleToggleSoldOut}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
