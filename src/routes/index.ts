import { Router } from 'express';
import loanRoutes from './loan.routes';
import loanusuarios from './loan.usuarios';
import loanambientes from './loan.ambientes';
import loanequipos from './loan.equipos';
const router = Router();
router.use('/loans', loanRoutes);
router.use('/usuarios', loanusuarios);
router.use('/ambientes', loanambientes);
router.use('/equipos', loanequipos);

export default router;