import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from '../../pages/Layout';
import PostList from '../../pages/PostList';
import PostPage from '../../pages/PostPage';
import UserPage from '../../pages/User';
import UsersList from '../../pages/UserList';
import IntroPic from '../IntroPic';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={
              <div className='containerSmall'>
                <PostList />
              </div>
            } />
            <Route path='users/all' element={
              <div className='containerSmall'>
                <UsersList />
              </div>
            } />
            <Route path='users/' element={
              <div className='containerBig'>
                <UserPage />
              </div>
            } />
            <Route path='posts/' element={
              <div className='containerBig'>
                <PostPage />
              </div>
            } />

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