/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 * Modified work Copyright (c) 2016 Matthew Sitthideth, Silicon Magi. All rights reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>Silicon Magi Starter Kit</h1>
          <p className={s.bannerDesc}>Featuring:  react-starter-kit, material-ui, universal router, deep linking, responsive mobile design, google analytics and more!</p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
