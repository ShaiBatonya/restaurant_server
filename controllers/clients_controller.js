let controller_name = "client";
let object_name = "Client";
let objects_name = "clients";

let Model = require(`../models/${object_name}`);

module.exports = {
  add: async (req, res) => {
    try {
      // getting values from the body request
      const { client_name, client_email } = req.body;

      // creating new model using the values from req.body
      const new_model = new Model({
        client_name,
        client_email,
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
