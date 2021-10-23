import {createAPI} from '../utils/request'

export const list = (data)=>createAPI('/api/getList','get',data)
