import { spawn } from 'child_process';

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
  });
}
