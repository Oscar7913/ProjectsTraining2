import React, { useState , useEffect} from 'react';
import axios from 'axios';

const InputCode = ({setImageData}) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  useEffect(() => {
    if (inputText.trim() !== '') {
      sendPostRequest(inputText);
    }
  }, [inputText]);

  const sendPostRequest = (inputText:string) => {
    axios.post('http://localhost:3000/api/diagram',  inputText , {
        headers:{
            'Content-Type':'text/plain'
        },
        responseType:'arraybuffer'
    })
      .then(response => {
        console.log('Request sent successfully:', response);
        setImageData(response);
      })
      .catch(error => {
        console.error('Error sending request:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Diagram code..."
      />
      {/* <button onClick={handleInputChange}>Send</button> */}
    </div>
  );
};

export default InputCode;
