/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 * Modified work Copyright (c) 2016 Matthew Sitthideth, Silicon Magi. All rights reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Appbar from '../Appbar';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {purple900} from 'material-ui/styles/colors';

function Layout({ children }) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme({
        userAgent: navigator.userAgent,
        palette: {
          primary1Color: purple900,
        }
      })}>
    <div>
      <Appbar />
      <Header />
      {React.Children.only(children)}
      <Footer />
    </div>
    </MuiThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStyles(s)(Layout);
