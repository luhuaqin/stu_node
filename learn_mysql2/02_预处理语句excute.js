/**
 *  预编译语句的优点：
 *  1、减少编译冗余
 *  2、避免SQL注入
 */

const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,  // 默认3306端口，可以省略不写
  database: 'learn_mysql',
  user: 'root',
  password: 'root'
})

const statement = `
  SELECT * FROM products where price > ? AND score > ?;
`

// 如果需要重复执行statement查询语句，statement只会编译一次
connection.execute(statement, [5000, 5], (err, result, fields) => {
  console.log(result)
  // console.log(fields)
})
