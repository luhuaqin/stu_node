const app = require('./app')
require('./app/database')

const envConfig = require('./app/config')

app.listen(envConfig.APP_PORT, () => {
  console.log(`server start success at port ${envConfig.APP_PORT}`)
})


// CREATE TABLE IF NOT EXISTS users (
// 	id INT PRIMARY KEY AUTO_INCREMENT,
// 	name VARCHAR(50),
// 	password VARCHAR(50),
// 	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// 	updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );
