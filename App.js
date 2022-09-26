import './App.css';
import './shortner.css';
import { Component } from 'react';
import URLShort from './URLShort';

class App extends Component
{
   
  constructor()
  {
    super();
    this.state={subject:"ReactJS"}
  }


  render()
  {
    return(
      <div>
         <URLShort/>
      </div>
      
    )
  }
}
export default App;
