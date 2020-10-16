import React, { createContext, useContext, useReducer } from "react";

export const DataLayberContext = createContext();

export const DataLayer =({ initialState, reducer, children}) => (
    <DataLayberContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayberContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayberContext);