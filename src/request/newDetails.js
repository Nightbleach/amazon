import { request } from './request'

export function getNewDetails (id) {
  return request({
    url: '/api/getnew/' + id,
    params: {
      id
    }
  })
}
