import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MyBill from './components/Pages/MyBill/MyBill';
import Signin from './components/Pages/Signin/Signin';
import Signup from './components/Pages/Signup/Signup';
import Header from './components/shared/Header';

function App() {
  return (
    <div>

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/billing' element={<MyBill></MyBill>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
