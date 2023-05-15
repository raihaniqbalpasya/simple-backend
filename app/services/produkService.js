const { Produk } = require("../models");

module.exports = {
  async getAll() {
    return await Produk.findAll();
  },

  async getById(id) {
    return await Produk.findOne(id);
  },

  async create() {
    return await Produk.create();
  },

  async update(id) {
    return await Produk.update(id);
  },

  async delete(id) {
    return await Produk.destroy(id);
  },
};
