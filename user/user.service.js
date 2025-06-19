import Utils from '../common/utils/utils.js';
import UserRepository from './user.repository.js';

class UserService {
  static create = async (data) => {
    const isUserExist = await UserRepository.getByName(data?.name);

    if (isUserExist) {
      throw new Error("Cet Utilisateur existe déjà !");
    }

    const response = await UserRepository.create(data);

    return response;
  };

  static getById = async (id) => {
    if (!Utils.objectId.isValid(id)) {
      throw new Error("L'id est invalide.");
    }
    const response = await UserRepository.getById(id);

    return response;
  };

  static getAll = async () => {
    const response = await UserRepository.getAll();

    return response;
  };

  static update = async (id, data) => {
    if (!Utils.objectId.isValid(id)) {
      throw new Error("L'id est invalide.");
    }

    const response = await UserRepository.update(id, data);

    return response;
  };

  static delete = async (id) => {
    if (!Utils.objectId.isValid(id)) {
      throw new Error("L'id est invalide.");
    }

    const response = await UserRepository.getById(id);

    if (!response) {
      throw new Error("Cet utilisateur n'existe pas ou a déjà été supprimé.");
    }

    await UserRepository.delete(id);

    return {
      message: "Utilisateur supprimé avec succès.",
    };
  };
}

export default UserService;
