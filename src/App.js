import React from 'react';
import Header from './Components/Header/Headers.components'
import Cards from './Components/Cards/Cards.components';
import Cart from './Components/Cart/Cart.components';
import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Header/>

        <Switch>
          <Route exact path="/">
            <Cards />
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
    </div>
    
  );
}

export default App;
