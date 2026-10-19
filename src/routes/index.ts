import { Router } from 'express';
import loanRoutes from './loan.routes';
import loanusuarios from './loan.usuarios';
import loanambientes from './loan.ambientes';
import loanequipos from './loan.equipos';
import loannovedades from './loan.novedades';
const router = Router();
router.use('/loans', loanRoutes);
router.use('/usuarios', loanusuarios);
router.use('/ambientes', loanambientes);
router.use('/equipos', loanequipos);
router.use('/novedades', loannovedades);

export default router;