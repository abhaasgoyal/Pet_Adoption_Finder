import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

// Also see template tagging
// class is a reserved word in JS so <div class = ""> ?
// without useState const location would be fixed and we couldn't change the input
// useState gives two things - first parameter is the current value and the second value we get is the new value
// setlocation is called onChange mein to change the state
const SearchParams = () => {
  // all hooks begin in use and useState returns an array 1st parameter is the current state and second is the updater function
  const [location, setLocation] = useState("Seattle, WA");
  //   Default state is Seattle
  // More hooks below
  const [animal, setAnimal] = useState("dog");
  // React states must not be inside an if condition and must be called in the same order as they were
  // list of strings to components
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
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
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            key={animal}
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option> All </option>
            {ANIMALS.map((animal) => (
              <option value={animal}> {animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disable={!breeds.length === 0}
          >
            <option> All </option>
            {breeds.map((breedString) => (
              <option key={breedString} value={breedString}>
                {breedString}
              </option>
            ))}
          </select>
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
// key is for preventing re rendering - a unque identifier to tell react that I am not going to re render
