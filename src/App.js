import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import SideNav from './Components/SideNav';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
          <div className='has-navbar-vertical-aside navbar-vertical-aside-show-xl'>
                
                <BrowserRouter>                    
                    <Routes>
                        <Route exact path="/" element={<Login />}/>
                        <Route exact path="/dashboard" element={<Dashboard/>}/>
                    </Routes>                    
                </BrowserRouter>

            </div>
         
    </div>
  );
}

export default App;
