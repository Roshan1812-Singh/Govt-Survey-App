import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import Contact from './components/Contact';
import Policy from './pages/Policy';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
         <Route path='/' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='/dashboard' element={<Dashboard />}/>
         <Route path='/forgot' element={<ForgotPassword/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/policies' element={<Policy/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
