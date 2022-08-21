const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("learn_mysql", 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql' // 指定所用数据库
})

// 监听数据库是否启动成功
sequelize.authenticate(sequelize).then(() => {
  console.log('服务器启动成功')
}).catch(() => {
  console.log('服务器启动失败')
})
