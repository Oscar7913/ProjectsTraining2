import axios from 'axios';

const diagramServiceUrl = 'http://flask:5000/testing';

export async function sendDiagramRequest(data: any) {
  try {
    const response = await axios.post(diagramServiceUrl, data, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
