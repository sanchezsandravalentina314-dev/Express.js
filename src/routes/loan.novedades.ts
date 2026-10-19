import { Router } from 'express';
import { loannovedades } from '../controllers/loan.novedades';

const router = Router();

router.get('/', loannovedades.getNovedades);
router.get('/search', loannovedades.getNovedades);
router.get('/:id', loannovedades.getNovedadById);
router.post('/', loannovedades.createNovedad);
router.patch('/:id', loannovedades.patchEstadoNovedad);
router.patch('/:id/estado', loannovedades.patchEstadoNovedad);

export default router;
