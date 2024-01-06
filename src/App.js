import { useState } from 'react';
import './App.css';
import GenerateResut from './GenerateResut';
import Shortit from './Shortit';
import Bganimate from './Bganimate';
import Heading from './Heading';
function App() {
  const [inpvalue, setinpValue] = useState("");
  return (
    <div className='container'>
      <Heading/>
      <Shortit setinpValue={setinpValue}/>
      <GenerateResut inpvalue={inpvalue}/>
      <Bganimate/>
    </div>
  );
}

export default App;
