import { Router } from 'express';

const router = Router();

router.get('/result', (req, res) => {
  return res.send(req.context.models.line[req.context.me.id]);
});

export default router;
