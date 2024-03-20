import { Router, Request, Response } from 'express';
import { sendDiagramRequest } from '../../infrastructure/sendDiagramRequest.ts';
import path from 'path';

export const DiagramRoutes = (router: Router): void => {
  router.post('/api/diagram', async (req, res) => {
    try {
      const response = await sendDiagramRequest(req.body);
      if (response.status == 200) {
        const directory = '/shared';
        const filePath = path.join(directory, 'diagram.png');
        res.setHeader('Content-Type', 'image/png');
        res.sendFile(filePath);
      } else {
        res.status(response.status).send(response.statusText);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
};
