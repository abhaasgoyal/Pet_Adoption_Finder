import React from "react";
import { createContext } from "react";
// Empty function cuz it will use this function if no provider is provided above it
const ThemeContext = React.createContext(["green", () => {}]);

export default ThemeContext;
