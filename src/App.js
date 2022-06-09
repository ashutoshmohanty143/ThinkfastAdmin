import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import Dashboard from './Components/Dashboard';

function App() {
  const setSession = function setSessionValue(){
    let session = false;
    return session;
  }
  return (
    <div className="App" >
      {/* if(!sessionStorage.getItem('userToken')){
        window.location.href = "/"
      } else{
        window.location.href = "/dashboard"
      } */}
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
    
          <Route exact path="/" element={<Login />} />
            {/* <Route index element={<Home />} /> */}
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/adduser" element={<AddUser />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
