import './App.css';

import Section1 from './components/Section1/Section1.component';
import { Section2 } from './components/Section2/Section2.component';
import CardContainer from './components/Card/CardContainer';


function App() {
  return (
    <div className="App">
      <Section1></Section1>
      <Section2></Section2>
      <CardContainer></CardContainer>
      
    </div>
  );
}

export default App;
