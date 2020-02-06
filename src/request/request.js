import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://www.liulongbin.top:3005/',
    timeout: 5000
  })
  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
  })
  // 回应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  })
  return instance(config)
}
