import React from 'react';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";

import store from '../redux/store';

const Application = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

const makeStore = () => store;

export default withRedux(makeStore)(Application);