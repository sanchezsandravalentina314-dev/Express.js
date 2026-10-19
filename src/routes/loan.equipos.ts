import { Router } from 'express';
import { loanequipos } from '../controllers/loan.equipos';

const router = Router();

router.get('/', loanequipos.getEquipos);
router.get('/search', loanequipos.getEquipos);
router.get('/:id', loanequipos.getEquipoById);
router.post('/', loanequipos.createEquipo);
router.patch('/:id', loanequipos.patchEstadoEquipo);

export default router;
