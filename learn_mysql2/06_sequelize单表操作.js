const { Sequelize, DataTypes, Model, Op } = require('sequelize')

const sequelize = new Sequelize('learn_mysql', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

// 与数据库建立连接并初始化连接字段
class Product extends Model {}
Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNotNull: false  // 默认值为true
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNotNull: false
  },
  score: DataTypes.DECIMAL(2, 1),
  voteCnt: DataTypes.INTEGER,
  url: DataTypes.STRING
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
})

async function queryProducts() {
  // 查询products中所有的内容
  const result = await Product.findAll()
  console.log(result)
  // 条件查询
  // const result = await Product.findAll({
  //   where: {
  //     price: {
  //       // gt: 大于，gte：大于等于，lt: 小于，lte: 小于等于
  //       [Op.gte]: 5000
  //     }
  //   }
  // })
  // console.log(result)
  
  // 插入数据
  // const result = await Product.create({
  //   title: '华为nova10 Plus(全网通)',
  //   price: 2800,
  //   score: 6.3,
  //   voteCnt: 333
  // })
  // console.log(result)

  // 更新数据
  // const result = await Product.update({
  //   price: 3688
  // }, {
  //   where: {
  //     id: 1
  //   }
  // })
  // console.log(result)
}

queryProducts()

