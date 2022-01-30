const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const News__ = sequelize.define('news', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.STRING(2000),
    allowNull: false
  }
})

module.exports = News__