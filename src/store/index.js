import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';

import reducers from './modules';

const persistedReducers = persistReducer(
  {
    key: 'goomer-challenge',
    storage,
    whitelist: ['restaurants'],
  },
  reducers
);

const store = createStore(persistedReducers);
const persistor = persistStore(store);

export { store, persistor };
