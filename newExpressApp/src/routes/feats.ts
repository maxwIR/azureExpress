import { Router, Request, Response } from 'express';

const router: Router = Router();
router.use((req: Request, res: Response) => {
   res.sendFile('feats.json', {root: __dirname+'/../public'});
});

export const FeatsRouter: Router = router;