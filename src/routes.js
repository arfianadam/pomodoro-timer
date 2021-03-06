import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, NotFound } from 'containers';

// eslint-disable-next-line import/no-dynamic-require
if (typeof System.import === 'undefined') System.import = module => Promise.resolve(require(module));

export default () =>
  (<Route path="/" component={App}>
    {/* Home (main) route */}
    <IndexRoute component={Home} />
    {/* Catch all route */}
    <Route path="*" component={NotFound} status={404} />
  </Route>);
