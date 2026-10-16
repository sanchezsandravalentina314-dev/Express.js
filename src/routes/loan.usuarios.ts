import { Router } from 'express';
import { loanusuarios } from '../controllers/loan.usuarios';

const router = Router();

router.get('/search', loanusuarios.getregisteredusers);
router.post('/', loanusuarios.createusers);
router.patch('/:id/accept', loanusuarios.patchuserupdated);
router.get('/:id', loanusuarios.getusersById);
router.patch('/:id', loanusuarios.patchuserbool);

export default router;