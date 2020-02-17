import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from 'src/routes';
import { Header } from 'src/components';
import GlobalStyles from 'src/theme/global';
import { store, persistor } from 'src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />

        <Header />

        <Routes />

        <ToastContainer autoClose={4000} />
      </PersistGate>
    </Provider>
  );
}
