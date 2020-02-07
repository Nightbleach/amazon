import { request } from './request'

export function getNewDetails (id) {
  return request({
    url: '/api/getnew/' + id,
    params: {
      id
    }
  })
}

export function getComments (id, page) {
  return request({
    url: '/api/getcomments/' + id + '?pageindex=' + page,
    params: {
      id,
      page
    }
  })
}
