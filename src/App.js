import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
         <Route path='/' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
