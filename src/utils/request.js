import axios from 'axios'
import Cookies from 'js-cookie'
import router from '@/router'
import qs from 'qs'
import { clearLoginInfo } from '@/utils'
import isPlainObject from 'lodash/isPlainObject'

const http = axios.create({
  baseURL: window.SITE_CONFIG['apiURL'],
  timeout: 1000 * 180,
  withCredentials: true
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  config.headers['Accept-Language'] = Cookies.get('language') || 'zh-CN'
  // if (config.url !== '/auth/oauth/token'&&config.url !== '/message/sms/sendCodeWithLogin') {
  //   config.headers['Authorization'] = 'Bearer ' + Cookies.get('access_token') || ''
  // }
  // 默认参数
  var defaults = {}
  // 防止缓存，GET请求默认带_t参数
  if (config.method === 'get') {
    config.params = {
      ...config.params,
      ...{ '_t': new Date().getTime() }
    }
  }
  if (isPlainObject(config.params)) {
    config.params = {
      ...defaults,
      ...config.params
    }
  }
  if (isPlainObject(config.data)) {
    config.data = {
      ...defaults,
      ...config.data
    }
    if (/^application\/x-www-form-urlencoded/.test(config.headers['content-type'])) {
      config.data = qs.stringify(config.data)
    }
  }

  // get序列化
  config.paramsSerializer = function (params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }

  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
  if (response.data.code === 401 || response.data.code === 10001) {
    let message = response.data.code === 401 ? "登录已过期" : response.data.msg
    // clearLoginInfo()
    // router.replace({ name: 'login' })
    return Promise.reject({ message: message })
  }
  return response
}, error => {
  console.error(error)
  return Promise.reject(error)
})

export default http
