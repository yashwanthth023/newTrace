import './App.css';
import React from 'react';
import RecoilSetup from './recoil/RecoilSetup';
import AppNavigator from './navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RecoilSetup>
          <React.Suspense fallback={<div>Loading...</div>}>
            <AppNavigator />
          </React.Suspense>
        </RecoilSetup>
      </PersistGate>
    </Provider>
  );
}

export default App;
