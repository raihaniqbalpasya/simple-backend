'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produk.init({
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    kuantitas: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    gambar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};