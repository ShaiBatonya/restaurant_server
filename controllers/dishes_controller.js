let controller_name = "dishe";
let object_name = "Dishe";
let objects_name = "dishes";

let Model = require(`../models/${object_name}`);

module.exports = {
  add: async (req, res) => {
    try {
      // getting values from the body request
      const { name, description, price, category } = req.body;

      // creating new model using the values from req.body
      const new_model = new Model({
        name,
        description,
        price,
        category,
      });

      // actual saving
      await new_model.save();

      // return success message
      return res.status(200).json({
        success: true,
        message: `success to add new ${controller_name}`,
      });
    } catch (error) {
      return res.status(500).json({
        message: `error in add ${controller_name}`,
        error: error.message,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const models = await Model.find();

      return res.status(200).json({
        success: true,
        message: `success to find all ${objects_name}`,
        [objects_name]: models,
      });
    } catch (error) {
      return res.status(500).json({
        message: `error in get all ${objects_name}`,
        error: error.message,
      });
    }
  },

  getById: async (req, res) => {
    try {
      const models = await Model.findById(req.params.id);

      return res.status(200).json({
        success: true,
        message: `success to find ${controller_name} by id`,
        [objects_name]: models,
      });
    } catch (error) {
      return res.status(500).json({
        message: `error in find ${controller_name} by id}`,
        error: error.message,
      });
    }
  },

  updateById: async (req, res) => {
    try {
      const id = req.params.id;

      await Model.findByIdAndUpdate(id, req.body);

      return res.status(200).json({
        success: true,
        message: `success to update ${controller_name} by id`,
      });
    } catch (error) {
      return res.status(500).json({
        message: `error in update ${controller_name} by id`,
        error: error.message,
      });
    }
  },

  deleteById: async (req, res) => {
    try {
      const id = req.params.id;

      await Model.findByIdAndDelete(id);

      return res.status(200).json({
        success: true,
        message: `success to delete ${controller_name} by id`,
      });
    } catch (error) {
      return res.status(500).json({
        message: `error in delete ${controller_name} by id`,
        error: error.message,
      });
    }
  },
};
