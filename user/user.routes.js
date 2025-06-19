import { Router } from 'express';

import validator from '../common/middlewares/validator.middleware.js';
import UserController from './user.controller.js';
//import ProductSchemaValidator from './validators/product.validator.js';

const route = Router();

route.post("/", UserController.create);
route.get("/:id", UserController.getById);
route.get("/", UserController.getAll);
route.patch("/:id", UserController.update);
route.delete("/:id", UserController.delete);

export default route;
