import React, { ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from '../containers/Home';
import Course from '../containers/Course';
import Unit from '../containers/Unit';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import Practice from '../containers/Practice';

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
                <Route path="/:course/:unit" element={<Unit />} />
                <Route path="/:course/practice" element={<Practice />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}
