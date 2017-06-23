/* @flow */
/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import ConnectedRouter from 'react-router-redux/ConnectedRouter';
import WebFontLoader from 'webfontloader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { ApolloProvider, createBatchingNetworkInterface } from 'react-apollo';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { cyan, pink } from 'material-ui/styles/colors';

import createApolloClient from '../shared/core/createApolloClient';
import configureStore from '../shared/state/store';
import App from '../shared/App';
import { checkAuth } from '../shared/scenes/Account/state/actions';
import { getToken } from '../shared/core/authentication/token';
import ReactHotLoader from './ReactHotLoader';

// click helper required for Material-UI
injectTapEventPlugin();
function createStyleManager() {
  return MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({
      palette: createPalette({
        primary: cyan,
        accent: pink,
        type: 'light',
      }),
    }),
  });
}

// Async font loading
WebFontLoader.load({
  google: {
    families: ['Roboto:300,600', 'Chivo:400,600', 'Material Icons'],
  },
  custom: {
    families: ['FontAwesome'],
    urls: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'],
  },
});

const MOUNT_POINT = document.getElementById('app');
// Load the JWT if it exists.
// Get token will return null if it does not exist
const token = getToken();

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory = 'pushState' in window.history;

// Apollo network interface
const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:3000/api/v1/graphql',
  batchInterval: 10,
});
networkInterface.use([
  {
    applyBatchMiddleware(req, next) {
      // If headers dont exist for some reason
      // create them.
      if (!req.options.headers) {
        req.options.headers = {};
      }

      // Add our auth token to the headers
      // Authorization: 'Bearer Token'
      if (token) {
        req.options.headers.authorization = `Bearer ${token}`;
      }
      next();
    },
  },
]);
const client = createApolloClient(networkInterface);
const history = createHistory();
const preloadedState = window.__APOLLO_STATE__;
const store = configureStore(client, preloadedState, history);
const { dispatch } = store;
const { styleManager, theme } = createStyleManager();
if (token) {
  // Update application state. User has token and is probably authenticated
  dispatch(checkAuth(token));
}
function renderApp(passedApp) {
  ReactDOM.render(
    <ReactHotLoader>
      <ApolloProvider store={store} client={client}>
        <ConnectedRouter history={history} forceRefresh={!supportsHistory}>
          <MuiThemeProvider styleManager={styleManager} theme={theme}>
            {passedApp}
          </MuiThemeProvider>
        </ConnectedRouter>
      </ApolloProvider>
    </ReactHotLoader>,
    MOUNT_POINT,
  );
}

if (module.hot) {
  module.hot.accept('../shared/App', () => {
    const NewApp = require('../shared/App').default;
    renderApp(<NewApp />);
  });
}
renderApp(<App />);
