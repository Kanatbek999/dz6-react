import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
// import ItemList from '../item-list';
// import PersonDetails from '../item-details';
import PeoplePages from '../Pages';
import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
       <PeoplePages/>
      {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <ItemDetails />
        </div>
      </div>*/}
    </div> 
  );
};

export default App;