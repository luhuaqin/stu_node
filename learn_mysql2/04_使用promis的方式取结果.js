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
connection.promise().execute(statement, [5000, 5]).then(([result, fields]) => {
  console.log(result)
}).catch(err => {
  console.log(err)
})
