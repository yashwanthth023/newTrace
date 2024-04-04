import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Admin from './routes/admin';
import versionDetailRoute from './routes/admin/versionDetails';

import ElectroChemRoute from './routes/admin/elctrochem'
import addComponentRoute from './routes/admin/addComponentRoute';

import Auth from './routes/auth';
import './static/css/style.css';
import config from './config/config';
import ProtectedRoute from './components/utilities/protectedRoute';
import 'antd/dist/antd.less';

const { theme } = config;
function ProviderConfig() {
  const { rtl, isLoggedIn, topMenu, darkMode } = useSelector((state) => {
    return {
      darkMode: state.ChangeLayoutMode.data,
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      isLoggedIn: state.auth.login,
    };
  });

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [setPath]);

  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...theme, rtl, topMenu, darkMode }}>
        <Router basename={process.env.PUBLIC_URL}>
          {!isLoggedIn ? <Route path="/" component={Auth} /> : <ProtectedRoute path="/Prototype" component={Admin} />}
          {isLoggedIn && (path === process.env.PUBLIC_URL || path === `${process.env.PUBLIC_URL}/`) && (
            <Redirect to="/Prototype" />
          )}
          <ProtectedRoute path="/versionDetails" component={versionDetailRoute} />
          <ProtectedRoute path="/electroChem" component={ElectroChemRoute} />
          <ProtectedRoute path="/AddComponent" component={addComponentRoute} />
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ProviderConfig />
      </PersistGate>
    </Provider>
  );
}

export default hot(App);
