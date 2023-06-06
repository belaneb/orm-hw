const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./product');
const Tag = require('./tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product
      }
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tag
    },
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
Product.belongsToMany(Tag, { through: ProductTag });
Tag.belongsToMany(Product, { through: ProductTag });
module.exports = ProductTag;
