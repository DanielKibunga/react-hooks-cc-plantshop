// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList() {
//   return (
//     <ul className="cards">{/* render PlantCards components in here */}</ul>
//   );
// }

// export default PlantList;
<ul className="plant-list">
  <li className="plant-card" data-testid="plant-item">
    <img alt="Another Aloe" src="./images/aloe.jpg" />
    <h4>Another Aloe</h4>
    <p>Price: $12.88</p>
    <button>In Stock</button>
  </li>
  <li className="plant-card" data-testid="plant-item">
    <img alt="Another Jade" src="./images/jade.jpg" />
    <h4>Another Jade</h4>
    <p>Price: $4.92</p>
    <button>In Stock</button>
  </li>
  <li className="plant-card" data-testid="plant-item">
    <img alt="Another Fiddle Leaf Fig" src="./images/fiddle-leaf-fig.jpg" />
    <h4>Another Fiddle Leaf Fig</h4>
    <p>Price: $55</p>
    <button>In Stock</button>
  </li>
</ul>
