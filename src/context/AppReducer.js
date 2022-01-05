import axios from "axios";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_SHIP':
      // axios.delete(`/api/ShipDetail/${action.payload}`)
      return {
        ...state,
        ships: state.ships.filter(ship => {
          return ship.id !== action.payload;
        })
      }
    case 'ADD_SHIP':
      // axios.post('/api/ShipDetail', action.payload)
      return {
        ...state,
        ships: [action.payload, ...state.ships]
      }
      case 'SET_SHIPS':
        return {
          ...state,
          ships: [action.payload, ...state.ships]
        }
    case 'EDIT_SHIP':
      const updateShip = action.payload;
      // axios.put(`/api/ShipDetail/${updateShip.id}`,updateShip)
      const updateShips = state.ships.map(ship => {
        if (ship.id === updateShip.id) {
          return updateShip;
        }
        return ship;
      })
      return {
        ...state,
        ships: updateShips
      }

    default:
      return state;
  }
}