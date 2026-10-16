import { Router } from 'express';
import loanRoutes from './loan.routes';
import loanusuarios from './loan.usuarios';
import loanambientes from './loan.ambientes';
const router = Router();
router.use('/loans', loanRoutes);
router.use('/usuarios', loanusuarios);
router.use('/ambientes', loanambientes);

export default router;