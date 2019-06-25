import React from 'react';
import { CURRENT } from './renderAuthorize'; // eslint-disable-next-line import/no-cycle

import PromiseRender from './PromiseRender';


function hasPermission(authority) {
  let currentAuthority = CURRENT;
  if (Array.isArray(currentAuthority)) {
    if (currentAuthority.some(item => authority === item)) {
      return true;
    }
  } else if (authority === currentAuthority) {
    return true;
  }
  return false;
}

export default hasPermission;