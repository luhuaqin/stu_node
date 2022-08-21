const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('learn_mysql', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

class Student extends Model {}
Student.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNotNull: false  // 默认值为true
  },
  age: DataTypes.INTEGER
}, {
  sequelize,
  tableName: 'students',
  updatedAt: false,
  createdAt: false
})

class Course extends Model {}
Course.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNotNull: false  // 默认值为true
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNotNull: false
  }
}, {
  sequelize,
  tableName: 'courses',
  updatedAt: false,
  createdAt: false
})

class StudentCourse extends Model {}
StudentCourse.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    field: 'student_id',
    type: DataTypes.INTEGER,
    allowNotNull: false,
    references: {
      model: Student,
      key: 'id'
    }
  },
  courseId: {
    field: 'course_id',
    type: DataTypes.INTEGER,
    allowNotNull: false,
    references: {
      model: Course,
      key: 'id'
    }
  }
}, {
  tableName: 'students_select_courses',
  createdAt: false,
  updatedAt: false,
  sequelize
})

// 多对多的联系
Student.belongsToMany(Course, {
  through: StudentCourse,
  foreignKey: 'student_id',
  otherKey: 'course_id'
})

Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: 'course_id',
  otherKey: 'student_id'
})

async function queryStudentCourse() {
  const result = await Student.findAll({
    include: {
      model: Course
    }
  })
  console.log(result)
}
queryStudentCourse()
