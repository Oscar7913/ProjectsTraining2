import { Router, Request, Response } from 'express';
import path from 'path';
import { spawn } from 'child_process';
import { generateDiagram } from '../../application/services/DiagramService.ts';
// import { sendDiagramRequest } from '../../infrastructure/sendDiagramRequest.ts';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export const DiagramRoutes = (router: Router): void => {
  router.post('/api/diagram', async (req: Request, res: Response) => {
    try {
      const body = req.body;
      console.log(body);
      await generateDiagram(body);
      const directory = '/shared';
      const filePath = path.join(directory, 'diagram.png');
      res.setHeader('Content-Type', 'image/png');
      res.sendFile(filePath);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // router.post('/api/diagram', async (req, res) => {
  //   console.log(__dirname);
  //   const pythonPath = '../';
  //   try {
  //     // const response = await sendDiagramRequest(req.body);
  //     const body = req.body;
  //     const pythonProcess = await spawn('python3', ['DiagramMaker.py', body], {
  //       cwd: __dirname, // Current directory where this Node.js script resides
  //     });

  //     let outputData = '';
  //     pythonProcess.stdout.on('data', (data) => {
  //       console.log('1'+data);
  //       outputData += data.toString();
  //     });

  //     pythonProcess.on('exit', (code) => {
  //       if (code === 0) {
  //         const outputJson = JSON.parse(outputData);
  //         const directory = '/shared';
  //         const filePath = path.join(directory, 'diagram.png');
  //         res.setHeader('Content-Type', 'image/png');
  //         res.sendFile(filePath);
  //       } else {
  //         res.status(500).send('Error generating diagram');
  //       }
  //     });

  //     pythonProcess.stderr.on('data', (data) => {
  //       console.error(`stderr: ${data}`);
  //       res.status(500).send('Error generating diagram');
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send('Internal Server Error');
  //   }
  // });
};
