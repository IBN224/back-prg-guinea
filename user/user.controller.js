import UserService from './user.service.js';

class UserController {
  static create = async (req, res) => {
    const { name, form } = req.body;

    try {
      const data = { name, form };
      const response = await UserService.create(data);

      return res.status(201).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static getById = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await UserService.getById(id);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static getAll = async (req, res) => {
    try {
      const response = await UserService.getAll();

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static update = async (req, res) => {
    const { id } = req.params;
    const { reference, name, form, state } = req.body;

    try {
      const data = { reference, name, form, state };
      const response = await UserService.update(id, data);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;

    try {
      const response = await UserService.delete(id);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}

export default UserController;
