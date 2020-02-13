import { request } from './request'

export function getCartDetails (ids) {
  return request({
    url: '/api/goods/getshopcarlist/' + ids.join(','),
    params: {
      ids
    }
  })
}
