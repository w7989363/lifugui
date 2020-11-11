import React, { useState } from 'react';
import Gallery from './components/Gallery';
import fileList from './configs';
import './App.css';

const App = () => {
  console.log(fileList);
  const [file, setFile] = useState({});
  return (
    <div className="App">
      <div className="button-container">
        {fileList.map(item => {
          const { button } = item;
          return (<div className="button" onClick={() => setFile(item)}>{button}</div>)
        })}
      </div>
      <Gallery image={file.image}/>
    </div>
  );
}

export default App;
