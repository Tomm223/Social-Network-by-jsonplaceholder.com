import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from '../Layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >

          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;


/**
 <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>INDEX</h1>} >
          </Route>
          <Route path='/index' element={<h1>TRUEEEE</h1>} />
        </Routes>
      </BrowserRouter>
 */