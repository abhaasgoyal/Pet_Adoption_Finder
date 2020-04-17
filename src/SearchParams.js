import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  // Custom hooks
  const [animal, AnimalDropdown] = useDropdown("Animal", "All", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
  return (
    <div className="search-params">
      <h1> {location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder=" Location "
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
// key is for preventing re rendering - a unque identifier to tell react that I am not going to re render
