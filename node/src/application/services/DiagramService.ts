import { spawn } from 'child_process';
// import { PythonShell } from 'python-shell';

export function generateDiagram(body: string): Promise<void> {
  return new Promise((resolve, reject) => {
    let result: any;
    const pythonPath = '/src/src/';
    const pythonProcess = spawn('python3', ['DiagramMaker.py', body], {
      cwd: pythonPath,
    });

    pythonProcess.stdout.on('data', (data) => {
      try {
        console.log(data.toString());
        result = JSON.parse(data.toString());
        if (result.status === 200) {
          console.log();
        } else {
          reject(new Error(result.message));
        }
      } catch (error) {
        reject(error);
      }
    });

    pythonProcess.on('exit', (code) => {
      if (code === 0) {
        resolve(result.message);
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });

    pythonProcess.on('error', (error) => {
      reject(error);
    });
  });
}
