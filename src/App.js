import Head from './Component/Firstpage/Head';
import './App.css';
// import Head1 from './Component/Karthick/Head1';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import First from './Component/Firstpage/First';
import Create from './Component/Sweatha/Create';
import Content  from './Component/Secondpage/Content';
import Table from './Component/Subasri/DocumentChecklist/Table';

// import Dc from './Component/Karthick/Dc';
// import Join from './Component/Karthick/Join';
// import Empid from './Component/Karthick/Empid';
// import Cheq from './Component/Karthick/Cheq';
// import Main from './Component/Karthick/Main';
function App() {
  return (
    <div className="App">

     <Router>
   
       <Route path='/' exact component={First}/>
      <Route path='/Head' exact component={Head}/>
   
      <Route path='/Content' exact component={Content}/>
      <Route path='/Create' exact component={Create}/>
      <Route path='/Table' exact component={Table}/>
      
      
    
      </Router>
      
      
     
    </div>
  );
}

export default App;
