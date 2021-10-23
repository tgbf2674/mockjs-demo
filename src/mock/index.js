import Mock from 'mockjs'

Mock.mock('/api/getList','get',{
    status: 0,
    "msg|4": [
      {
        id: '@increment(1)',
        name: '@cword(3,8)',
        time: '@date(yyyy-MM-dd hh:mm:ss)'
      }
    ],
})
