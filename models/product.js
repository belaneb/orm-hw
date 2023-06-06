// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      },
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      },
      allowNull: false,
      defaultValue: 10
      },
    category_id :{
      type: DataTypes.INTEGER,
      references:{
        model:'category'
      }
    },
  },{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);
Category.hasMany(Product);
Product.belongsTo(Category)
module.exports = Product;
