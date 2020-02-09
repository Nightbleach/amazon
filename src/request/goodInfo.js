import { request } from './request'

export function getGoodInfo (pageIndex) {
  return request({
    url: '/api/getgoods?pageindex=' + pageIndex
  })
}
