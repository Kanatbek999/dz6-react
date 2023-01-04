import React, { useState } from 'react'
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row/row';

const PeoplePages = () => {
    const [state, SetState] = useState({itemId: 1})
console.log(state);
    const leftElement = <ItemList setItemId={(id) => SetState({itemId: id})}/>
    const rightElement = <ItemDetails itemId={state.itemId}/>
     return (
        <Row left={leftElement} right={rightElement}/>
    //     <div>
    //          <div className="row mb2">
    //     <div className="col-md-6">
    //       <ItemList />
    //     </div>
    //     <div className="col-md-6">
    //       <ItemDetails />
    //     </div>
    //   </div>
    // </div>
     
     )
}


export default PeoplePages;