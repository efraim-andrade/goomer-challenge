import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from 'src/routes';
import { Header } from 'src/components';
import GlobalStyles from 'src/theme/global';

export default function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <Routes />

      <ToastContainer autoClose={4000} />
    </>
  );
}
