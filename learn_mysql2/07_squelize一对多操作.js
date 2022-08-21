const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('learn_mysql', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

class Brand extends Model {}
Brand.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNotNull: false  // 默认值为true
  },
  website: DataTypes.STRING,
  phoneRank: DataTypes.INTEGER
}, {
  sequelize,
  tableName: 'brand',
  updatedAt: false,
  createdAt: false
})

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
  url: DataTypes.STRING,
  brandId: {
    field: 'brand_id',
    type: DataTypes.INTEGER,
    references: {
      model: Brand,
      key: 'id'
    }
  }
}, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
  sequelize
})

// 关联两张有联系的表
Product.belongsTo(Brand, {
  foreignKey: 'brandId'
})

async function queryProducts() {
  const result = await Product.findAll({
    include: {
      model: Brand
    }
  })
  console.log(result)
}
queryProducts()
