import { Router } from 'express';
import loanRoutes from './loan.routes';
import loanusuarios from './loan.usuarios';
const router = Router();
router.use('/loans', loanRoutes);
router.use('/usuarios', loanusuarios);

export default router;