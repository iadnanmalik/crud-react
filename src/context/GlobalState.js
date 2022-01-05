import React, { createContext, useReducer } from 'react';
import {AppReducer} from './AppReducer';
import axios from "axios";
// Initial State

const initialState = {
  ships: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeShip = (id) => {
    dispatch({
      type: 'REMOVE_SHIP',
      payload: id
    })
  }

    const addShip = (ship) => {

    dispatch({
      type: 'ADD_SHIP',
      payload: ship
    })
  }

  const editShip =(ship) =>{
      dispatch({
          type: 'EDIT_SHIP',
          payload:ship
      })
  }
  const setShips =(ships) =>{
    dispatch({
      type: 'SET_SHIPS',
      payload:ships
  })
  }
  return (
    <GlobalContext.Provider value={{
      ships: state.ships,
      removeShip,
      addShip,
      editShip,
      setShips
    }}>
      {children}
    </GlobalContext.Provider>
  )
}