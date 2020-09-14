import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); //Prepares the data layer

//Wrap the app and provide the Data Layer to every component in the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
