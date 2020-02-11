import { request } from './request'

export function getGoodInfo (pageIndex) {
  return request({
    url: '/api/getgoods?pageindex=' + pageIndex
  })
}

export function getProductDetails (id) {
  return request({
    url: '/api/goods/getdesc/' + id,
    params: {
      id
    }
  })
}

export function getProductCarousel (id) {
  return request({
    url: '/api/getthumimages/' + id,
    params: {
      id
    }
  })
}

export function getGoodParams (id) {
  return request({
    url: '/api/goods/getinfo/' + id,
    params: {
      id
    }
  })
}

export function getProductDesc (id) {
  return request({
    url: '/api/goods/getdesc/' + id,
    params: {
      id
    }
  })
}
