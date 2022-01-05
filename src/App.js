import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {AddShip} from './components/AddShip';
import {EditShip} from './components/EditShip';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>

      <GlobalProvider>
        <Router>
          <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/add" component={AddShip}/>
             <Route path="/edit/:id" component={EditShip}/>
            </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
