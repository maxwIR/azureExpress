import { Router, Request, Response } from 'express';

const router: Router = Router();
router.get('/search', (req: Request, res: Response) => {
   res.send(`Searched for ${JSON.stringify(req.body)}`);
});
router.use((req: Request, res: Response) => {
   res.sendFile('feats.json', {root: __dirname+'/../public'});
});

export const FeatsRouter: Router = router;