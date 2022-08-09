const path = require('path')

const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 文件操作
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname) )
  }
})
const upload = multer({
  // dest: './uploads/' // 直接使用文件不可定义文件名及后缀，直接自动生成
  storage
})
// app.use(upload.any());

app.post('/login', (req, res, next) => {
  res.end('welcome back')
})

app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log(req.file)
  res.end('file upload success')
})

app.listen(8000, () => {
  console.log('server start success')
})
