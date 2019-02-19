import { Router, Request, Response } from 'express';

const router: Router = Router();
router.use('/', (req: Request, res: Response) => {
    console.log('here');
      res.send("Made it");
});

export const FeatsRouter: Router = router;