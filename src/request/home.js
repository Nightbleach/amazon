import { request } from './request'

export function getCarousel () {
  return request({
    url: 'api/getlunbo'
  })
}
