const express = require('express')
const userRouter = require('./routers/users')

const app = express()

app.use('/users', userRouter)

app.listen(8000, () => {
  console.log("server start success")
})
