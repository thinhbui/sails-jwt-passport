import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Drawer from '../components/Drawer/Drawer';
import SimpleTable from '../components/Table/Table';
import Login from '../layouts/Login/Login';
// const routes = [
//   {
//     path: '/',
//     exact: true,
//     // side,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: '/bubblegum',
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: '/shoelaces',
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ];

const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div
        style={{
          padding: '10px',
          width: '20%',
          background: '#f0f0f0'
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/asda">Drawer</Link>
          </li>
          <li>
            <Link to="/hello">Hello</Link>
          </li>
        </ul>

        {/* {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))} */}
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {/* {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))} */}
        <Route
          key={'123123'}
          path={'/asda'}
          // exact={route.exact}
          component={Drawer}
        />
        <Route
          key={'hello'}
          path={'/hello'}
          // exact={route.exact}
          component={Login}
        />
        <Route
          key={'1231213'}
          path={'/table'}
          // exact={route.exact}
          component={SimpleTable}
        />
      </div>
    </div>
  </Router>
);

export default SidebarExample;
