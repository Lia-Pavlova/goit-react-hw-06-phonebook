import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import reducerPhonebook from './reducer';

const contactsPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

//--- Via 'toolkit' ---

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, reducerPhonebook),
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devtools: process.env.NODE_ENV !== 'development',
});

const persistor = persistStore(store);

export { store, persistor };

//------------------------------------------------
//--- Via import { createStore } from 'redux' ---

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
//------------------------------------------------
