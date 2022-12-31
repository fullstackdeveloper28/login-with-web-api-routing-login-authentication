/* import logo from './logo.svg'; */
import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router,Link, Route,Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Aboutus from './Components/Aboutus';
import Protected from './Components/Protected';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='dashboard'>Dashboard</Link> &nbsp;
        <Link to='aboutus'>Aboutus</Link> &nbsp;
        <Link to='/'>Login</Link> 
        <Routes>
          <Route path='/dashboard' element={<Protected cmd={Dashboard}/>}> </Route>
          <Route path='/aboutus' element={<Aboutus/>}> </Route>
          <Route path='/' element={<Login/>}> </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
