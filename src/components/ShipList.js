import React, { useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import axios from "axios";

export const ShipList = () => {
  const { ships, removeShip, setShips } = useContext(GlobalContext);
  useEffect(() => {
    async function fetchMyAPI() {
      // let response = await axios.get('/api/ShipDetail')
      // response = await response.json()
      // setShips(response)
    }

    fetchMyAPI()  
   
  }, [])
  return (
    <ListGroup className="mt-4">
      {ships.length > 0 ? (
        <>
          {ships.map(ship => (
            <ListGroupItem className="d-flex" key={ship.id}>
              <strong>{ship.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${ship.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeShip(ship.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No ships</h4>
        )}
    </ListGroup>
  )
}