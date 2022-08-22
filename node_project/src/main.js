const app = require('./app')
require('./app/database')

const envConfig = require('./app/config')

app.listen(envConfig.APP_PORT, () => {
  console.log(`server start success at port ${envConfig.APP_PORT}`)
})
