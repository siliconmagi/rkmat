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
import s from './Footer.css';
import Link from '../Link';

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <a className={s.link} href="https://siliconmagi.github.io">© Silicon Magi</a>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/">Home</Link>
        <span className={s.spacer}>·</span>
        <a className={s.link} href="https://github.com/siliconmagi/rkmat">Github</a>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/privacy">Privacy</Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/not-found">Not Found</Link>
      </div>
    </div>
  );
}

export default withStyles(s)(Footer);
