const produkService = require("../services/produkService");

module.exports = {
  async getAll(req, res) {
    try {
      const produk = await produkService.getAll();
      return res.status(200).json({
        status: "success",
        message: "Data produk berhasil ditampilkan",
        data: produk,
      });
    } catch (error) {
      return res.status(404).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async getById(req, res) {
    try {
      const produk = await produkService.getById(req.params.id);
      return res.status(200).json({
        status: "success",
        message: "Data produk berhasil ditampilkan",
        data: produk,
      });
    } catch (error) {
      return res.status(404).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async create(req, res) {
    try {
      const produk = await produkService.create(req.body);
      return res.status(201).json({
        status: "success",
        message: "Data produk berhasil dibuat",
        data: produk,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      const produk = await produkService.update(req.body, req.params.id);
      return res.status(200).json({
        status: "success",
        message: "Data produk berhasil diubah",
        data: produk,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },

  async delete(req, res) {
    try {
      const produk = await produkService.delete(req.params.id);
      return res.status(200).json({
        status: "success",
        message: "Data produk berhasil dihapus",
        data: produk,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
};
