import logo from './logo.svg';
import './App.css';
import data from './data';
import Tours from './components/Tours';
import React, { useState } from 'react';


const App=() =>{ 

  const[tours,setTours]=useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }
  
   if(tours.length==0){
    return(
        <div className='refresh'>
          <h2>
            NO TOURS LEFT
          </h2>
          <button className='btn-white' onClick={()=> setTours(data)}> 
            REFRESH
          </button>
        </div>
    );
   }

  return (
    <div className='App'>
      {/* <h2> Plan With Dipendra </h2> */}
      <Tours tours={tours} removeTour={removeTour}></Tours>

    </div>
  );
}

export default App;
