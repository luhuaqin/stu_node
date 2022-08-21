const mysql = require('mysql2')

// 创建连接池
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'learn_mysql',
  user: 'root',
  password: 'root',
  connectionLimit: 10  // 表示会建立几个连接
})

// 使用连接池
const statement = `
  SELECT * FROM products where price > ? AND score > ?;
`

connections.execute(statement, [5000, 5], (err, result, fields) => {
  console.log(result)
})

