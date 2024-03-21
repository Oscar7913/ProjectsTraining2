import { spawn } from 'child_process';
import path from 'path';

export function generateDiagram(body: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const pythonPath = '/src/src/';
    const pythonProcess = spawn('python3', ['DiagramMaker.py', body], {
      cwd: pythonPath,
    });
    pythonProcess.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });

    pythonProcess.on('error', (error) => {
      reject(error);
    });
    // return new Promise<string>((resolve, reject) => {
    //     let outputData = '';

    //     pythonProcess.stdout.on('data', (data) => {
    //         outputData += data.toString();
    //     });

    //     pythonProcess.on('exit', (code) => {
    //         if (code === 0) {
    //             resolve(outputData);
    //         } else {
    //             reject(new Error('Error generating diagram'));
    //         }
    //     });

    //     pythonProcess.stderr.on('data', (data) => {
    //         console.error(`stderr: ${data}`);
    //         reject(new Error('Error generating diagram'));
    //     });
  });
}
