import React from 'react';
import ReactDOM from 'react-dom';
import { files } from './Files';
import btnComponent from './btnComponent';

function App() {
  

  const destructure = (files) => {
    for (let i = 0; i < files.children.length; i++) {
      console.log(files.children[i]);
      // let btns = document.getElementById('btns')
      // ReactDOM.render(<btnComponent name = {files.children[i].name}/>, btns)
      if(files.children[i].children) {
        destructure(files.children[i]);
      }
    }
  }


  return (
    <div id='btns'>
      <button onClick={() => destructure(files)}>Destructure</button>
    </div>
  );
}

export default App;
