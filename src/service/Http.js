import queryString from 'query-string'

require('es6-promise').polyfill()
require('isomorphic-fetch')
export const root = '/'

function parseJSON (response) {
  return response.json()
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function request (url, options) {
  options = {
    ...options,
    headers: {
      ...(options && options.headers),
      _t: Date.now()
    }
  }
  return fetch(`${root}${url}`, { ...options, credentials: 'include' })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(error => ({ error }))
}

/**
 * get 请求
 * @param {*} url
 * @param {*} data
 */
export function get (url, data) {
  const query = queryString.stringify(data)
  return request(url + '?' + query)
}
/**
 * post 请求
 * 处理查询以及登录的请求
 * @param {*} url
 * @param {*} options
 */
export function post (url, data, options) {
  return requestMethod('POST', url, data, options)
}
// 处理添加的请求
export function put (url, data, options) {
  return requestMethod('PUT', url, data, options)
}
// 处理更新数据的请求
export function patch (url, data, options) {
  return requestMethod('PATCH', url, data, options)
}
// 处理删除数据的请求
export function remove (url, data, options) {
  return requestMethod('DELETE', url, data, options)
}

function requestMethod (method, url, data, options) {
  options = {
    ...options,
    method,
    headers: {
      'content-type': 'application/json;charset=utf-8'
    },
    body: data && JSON.stringify(data)
  }
  return request(url, options)
}
