import React from 'react'
import Dropdown from './Dropdown';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Clothes from './Clothes';
import Stationary from './Stationary';
import Shadow from './Shadow';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dropdown />} />
          <Route path='/cloths' element ={<Clothes />} />
          {/* <Route path='/Stationary' element ={<Stationary />} /> */}
          <Route path='/Stationary' element ={<Shadow />} />
          Stationary
        </Routes>
      </BrowserRouter><br />
    </div> 
    
     
  )
}

export default App
