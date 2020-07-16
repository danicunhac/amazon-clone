// Setup data layer
// -> Track the basket
import React, { createContext, useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  // Hook useReducer
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* App goes as children in index.js */}
    {children}
  </StateContext.Provider>
);

// Using inside a component
export const useStateValue = () => useContext(StateContext);
