import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from '~/routes';
import { Header } from '~/components';
import GlobalStyles from '~/theme/global';

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
