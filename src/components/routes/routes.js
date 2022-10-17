import React from 'react';
import { BrowserRouter as Router,
  Routes as RouterCover,
  Route, } from 'react-router-dom';
import Page from '../Pages/pages';
import Jobs from '../Pages/jobs';
// import MoviesPage from '../pages/Movies/MoviesPage';
// import AirBnB from '../pages/AirBnB/AirBnB';




export const Routes = () => {
  return (
    <Router>
      <RouterCover>
        <Route path='/home' element={< Page />} />
        <Route path='/jobs' element={< Jobs />} />
        {/* <Route path='/businesscard' element={< BusinessCard />} /> */}
        {/* <Route path='/hotel' element={< AirBnB />} /> */}
      </RouterCover>
    </Router>

  );
};
export default Routes;