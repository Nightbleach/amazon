import { request } from './request'

export function getImgInfoDetails (id) {
  return request({
    url: '/api/getimageInfo/' + id,
    params: {
      id
    }
  })
}
export function getImgPreList (id) {
  return request({
    url: '/api/getthumimages/' + id,
    params: {
      id
    }
  })
}
