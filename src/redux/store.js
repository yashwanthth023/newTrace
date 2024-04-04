// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './rootReducers';

// // (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
// const reduxDevTool =
//   process.env.NODE_ENV === 'development'
//     ? composeWithDevTools(applyMiddleware(thunk.withExtraArgument()))
//     : compose(applyMiddleware(thunk.withExtraArgument()));
// const store = createStore(rootReducer, reduxDevTool);

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

const store = createStore(persistedReducer, composeEnhancers);
const persistor = persistStore(store);

export { store, persistor };
