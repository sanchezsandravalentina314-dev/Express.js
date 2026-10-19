import { Router } from 'express';
import { loandashboard } from '../controllers/loan.dashboard';

const router = Router();

router.get('/', loandashboard.getResumenDashboard);
router.get('/resumen', loandashboard.getResumenDashboard);
router.get('/stats', loandashboard.getMetricasAnalitica);

export default router;
