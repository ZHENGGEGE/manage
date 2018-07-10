import * as http from './Http'
const url = 'access'
export function verify (user) {
  return http.post(`${url}/login`, user)
}

export function logout (user) {
  return http.post(`${url}/logout`, user)
}

export function getLoginInfo (params) {
  return http.get(`${url}`)
}
