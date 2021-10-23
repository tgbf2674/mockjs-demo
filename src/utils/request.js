import axios from 'axios'

const instance = axios.create({
  // baseUrl: ""
  timeout: 1000
})

export const createAPI = (url,method,data)=>{
  let config = {}
  if(method.toUpperCase() === 'GET'){
    config.params = data
  }else {
    config.data = data
  }
  return instance({
    url,
    method,
    ...config
  })
}
