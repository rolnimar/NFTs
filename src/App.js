import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';
import Web3 from 'web3';

function App() {

  var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws"));
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
 
  return (
      
       <Router>
        <Home />
      </Router>
      
  
    
  );
}

export default App;
