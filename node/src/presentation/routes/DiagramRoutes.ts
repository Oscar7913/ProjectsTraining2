import { Router, Request, Response } from 'express';
import path from 'path';
import { generateDiagram } from '../../application/services/DiagramService.ts';

export const DiagramRoutes = (router: Router): void => {
  router.post('/api/diagram', async (req: Request, res: Response) => {
    try {
      const body = req.body;
      // console.log(body);
      const name = await generateDiagram(body);
      console.log(name);
      const directory = '/shared';
      const filePath = path.join(directory, `${name}.png`);
      res.setHeader('Content-Type', 'image/png');
      res.status(200).sendFile(filePath);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  });
};
