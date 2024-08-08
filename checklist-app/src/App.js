import React, { useState } from 'react';

function App() {
  const [isCitizen, setIsCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);
  const style = {
    margin: '50px 38%',
    display: 'block'
  };

  return (
    <div style={style}>
      <h1>Are you Citizen: {isCitizen ? 'Yes' : 'No'}</h1>
      <h1>Are you Over 21: {isOver21 ? 'Yes' : 'No'}</h1>

      <div >
        <label>
          Are you Citizen
          <input 
            type="checkbox" 
            checked={isCitizen} 
            onChange={() => setIsCitizen(!isCitizen)} 
          />
        </label>
      </div>
      <div>
        <label>
          Are you Over 21
          <input 
            type="checkbox" 
            checked={isOver21} 
            onChange={() => setIsOver21(!isOver21)} 
          />
        </label>
      </div>
    </div>
  );
}

export default App;
