// import React from "react";

// function NewPlantForm() {
//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form>
//         <input type="text" name="name" placeholder="Plant name" />
//         <input type="text" name="image" placeholder="Image URL" />
//         <input type="number" name="price" step="0.01" placeholder="Price" />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default NewPlantForm;
import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name,
      image,
      price: parseFloat(price),      // ✅ Send price as number
      isSoldOut: false               // ✅ Add isSoldOut field
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // ✅ Lowercase as expected
      },
      body: JSON.stringify(newPlant)
    })
      .then((r) => r.json())
      .then(onAddPlant);

    // Clear form
    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="number"
        name="price"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
