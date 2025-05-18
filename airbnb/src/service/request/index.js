import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class HYRequest {
  constructor(baseURL, timeout) {
    // 每次创建一个HYRequest实例对象,都会创建一个新的axios实例,可以对每个axios实例进行个性化配置
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 拦截响应数据,成功的数据获取里面的data
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.instance.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.instance.request({ ...config, method: 'post' })
  }

}

export default new HYRequest(BASE_URL, TIMEOUT)