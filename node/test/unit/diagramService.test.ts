import { generateDiagram } from '../../src/application/services/DiagramService';
import { spawn, ChildProcessWithoutNullStreams, SpawnOptionsWithoutStdio } from 'child_process';

jest.mock('child_process');

describe('generateDiagram', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should resolve the promise if the python process exits with code 0', async () => {
    const mockedPythonProcess: Partial<ChildProcessWithoutNullStreams> = {
      on: jest.fn(),
    };

    (spawn as jest.Mock).mockImplementation(
      (command: string, args: string[], options: SpawnOptionsWithoutStdio) => {
        console.log(typeof options);
        expect(command).toBe('python3');
        expect(args).toEqual(['DiagramMaker.py', 'someBody']);
        expect(options).toEqual({ cwd: '/src/src/' });
        return mockedPythonProcess as ChildProcessWithoutNullStreams;
      }
    );

    mockedPythonProcess.on = jest
      .fn()
      .mockImplementation((event: string, callback: (code:number)=> void) => {
        if (event === 'exit') {
          callback(0);
        }
      });

    await expect(generateDiagram('someBody')).resolves.toBeUndefined();

    expect(spawn).toHaveBeenCalledWith(
      'python3',
      ['DiagramMaker.py', 'someBody'],
      {
        cwd: '/src/src/',
      }
    );
  });

  it('should reject the promise if the python process exits with non-zero code', async () => {
    const mockedPythonProcess: Partial<ChildProcessWithoutNullStreams> = {
      on: jest.fn(),
    };

    (spawn as jest.Mock).mockImplementation(
      (command: string, args: string[], options: SpawnOptionsWithoutStdio) => {
        expect(command).toBe('python3');
        expect(args).toEqual(['DiagramMaker.py', 'someBody']);
        expect(options).toEqual({ cwd: '/src/src/' });
        return mockedPythonProcess as ChildProcessWithoutNullStreams;
      }
    );

    mockedPythonProcess.on = jest
      .fn()
      .mockImplementation((event: string, callback: (code:number)=> void) => {
        if (event === 'exit') {
          callback(1);
        }
      });

    await expect(generateDiagram('someBody')).rejects.toThrowError(
      new Error('Process exited with code 1')
    );

    expect(spawn).toHaveBeenCalledWith(
      'python3',
      ['DiagramMaker.py', 'someBody'],
      {
        cwd: '/src/src/',
      }
    );
  });
});
