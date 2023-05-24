import  './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import BookingCar from './pages/BookingCar.js';
//import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">

      
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/bookingCar' element={<BookingCar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;