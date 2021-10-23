import Mock from 'mockjs'
//随机生成范围长度的字符串
// const data= Mock.mock({
//   'string|1-4': '我擦勒'
// })

//随机生成范围长度中文字符
// const data= Mock.mock({
//   string: '@cword(3,10)'
// })

// 随机生成范围长度中文标题和句子
// const data = Mock.mock({
//   title: "@ctitle(5,10)",
//   sentence: "@csentence(10,20)"
// })

// 随机生成段落
// const data = Mock.mock({
//   content: "@cparagraph(5)"
// })

//随机生成number数字
// const data = Mock.mock({
//   "number|1-100": 1
// })

// 生成增量数字
// const data = Mock.mock({
//   "id|40": "@increment(1)"
// })

// 生成名字,id,城市(true)表示是否显示省份
// const data = Mock.mock({
//   name: '@cname()',
//   idCard: '@id()',
//   address: '@city(true)'
// })

// 生成一张图片
// const data =Mock.mock({
//   image: "@image('200x100','#ffa07a','#ffbbff','png','坤坤')"
// })


// 生成时间
// const data = Mock.mock({
//   date: '@date(yyyy-MM-dd hh:mm:ss)'
// })

// 生成数组返回的条数
// const data = Mock.mock({
//   "list|9": [
//     {
//       name: '@cname()',
//       address: '@city(true)',
//       id: '@increment(1)'
//     }
//   ]
// })

// 定义get请求
// Mock.mock('/api/news','get',{
//   status: 200,
//   msg: '获取数据成功'
// })

//定义post请求
// Mock.mock('/api/post/news','post',{
//   status:200,
//   msg: '获取数据成功',
//   type: 'post'
// })


Mock.mock('/api/post/news','post',()=>{
  return {
    status:200,
    msg: 'post成功'
  }
})
