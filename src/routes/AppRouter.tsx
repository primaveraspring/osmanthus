import React, { ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from '../containers/Home';
import Course from '../containers/Course';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';

const engine = new Styletron();

export default function AppRouter() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
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
      </BaseProvider>
    </StyletronProvider>
  );
}
