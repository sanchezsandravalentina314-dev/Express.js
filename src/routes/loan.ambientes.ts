import { Router } from 'express';
import { Loanambientes } from '../controllers/loan.ambientes';


const router = Router();

router.get('/search', Loanambientes.getcontrolLabs);
router.post('/', Loanambientes.postcreatelabs);
router.patch('/:id/accept', Loanambientes.patchlabs);

export default router;