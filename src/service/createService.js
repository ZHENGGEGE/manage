import * as http from './Http'

export default function createSerivce (url) {
  var httpService = {}

  httpService['list'] = function (filter) {
    return http.post(`${url}/list`, filter)
  }

  httpService['find'] = function (filter) {
    console.log(filter)
    return http.post(`${url}/find`, filter)
  }

  httpService['add'] = function (bean) {
    return http.put(`${url}/add`, bean)
  }

  httpService['update'] = function (bean) {
    return http.patch(`${url}/update`, bean)
  }

  httpService['remove'] = function (filter) {
    return http.remove(`${url}/remove`, filter)
  }
  httpService.root = http.root
  return httpService
}
