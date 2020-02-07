import { request } from './request'

export function getImgNews () {
  return request({
    url: '/api/getimgcategory'
  })
}
export function getImgNewsList (id) {
  return request({
    url: '/api/getimages/' + id,
    params: {
      id
    }
  })
}
