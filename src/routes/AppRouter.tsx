import React, { ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from '../containers/Home';
import Course from '../containers/Course';

export default function AppRouter(children: any) {
  return (
    <Router>
      <div>
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:course" element={<Course />}>
            <Route path="/:course/:unit" />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
