// import React from "react";

// function Search() {
//   return (
//     <div className="searchbar">
//       <label htmlFor="search">Search Plants:</label>
//       <input
//         type="text"
//         id="search"
//         placeholder="Type a name to search..."
//         onChange={(e) => console.log("Searching...")}
//       />
//     </div>
//   );
// }

import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Type a name to search..." // ✅ Matches the test exactly
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

