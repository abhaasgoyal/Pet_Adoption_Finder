import React from "react";
import { createContext } from "react";
const ThemeContext = React.createContext(["green", () => {}]);

export default ThemeContext;
