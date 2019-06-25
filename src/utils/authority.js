// use localStorage to store the authority info, which might be sent from server in actual project.
import jwtDecode from 'jwt-decode';
export function getAuthority(str) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? localStorage.getItem('antd-pro-authority') : str;
  let authority;

  try {
    authority = jwtDecode(authorityString).auth;
    console.log("11111authority:", authority)
  } catch (e) {
    authority = authorityString;
  }

  if (typeof authority === 'string') {
    return [authority];
  }
  console.log("authority:", authority);
  return authority;
}
export function setAuthority(authority) {
  console.log("setAuthority:", authority)
  return localStorage.setItem('antd-pro-authority', authority);
}
