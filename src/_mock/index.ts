import Mock from 'mockjs'

Mock.mock('/api/test', 'get', () => {
  return {
    code: 0,
    data: {
      name: '@cname',
      age: 20,
      sex: '@integer(0, 1)',
      birthday: '@date("yyyy-MM-dd")',
      email: '@email',
      mobile: /^1[3456789]\d{9}/,
    },
  }
})
