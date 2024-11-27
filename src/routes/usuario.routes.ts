import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';
import { validateCreateUser } from '../middlewares/validation.middleware';

const router = Router();
const userController = new UsuarioController();

router.post('/usuarios', validateCreateUser, userController.createUser.bind(userController));
router.get('/usuarios', userController.getUsers.bind(userController));
router.get('/usuarios/:id', userController.getUserById.bind(userController));
router.put('/updateUsuario', validateCreateUser, userController.updateUser.bind(userController));

export default router;