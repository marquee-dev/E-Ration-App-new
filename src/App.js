import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Pages/LoginPage';
import CreateAcct_1 from './components/Pages/CreateAcct_1';
import CreateAcct_2 from './components/Pages/CreateAcct_2';
import CustProfile from './components/Pages/CustProfile';
import SplashScreen from './components/splashscreen';
import AvailItems from './components/Pages/AvailItems';
import BookedAppointments from "./components/Pages/BookedAppointments"
import Transaction from "./components/Pages/Transaction"
import AdminShop from "./components/Pages/AdminShop"
import Stocks from "./components/Pages/Stocks"
import { useEffect, useState } from 'react';

function App() {
  const [showSplash,setShowSplash]=useState(true);
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setShowSplash(false);
    },2000);
    return ()=> clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash && <SplashScreen/>}
     <BrowserRouter>
     <Routes>
      <Route element={<LoginPage/>} path='/' />
      <Route element={<CreateAcct_1/>} path='/create' />
      <Route element={<CreateAcct_2/>} path='/verify' />
      <Route element={<CustProfile/>} path='/profile' />
      <Route element={<AvailItems/>} path='/items' /> 
      <Route element={<BookedAppointments/>} path='/booking' />
      <Route element={<Transaction/>} path='/transaction' />
      <Route element={<AdminShop/>} path='/adminshop' />
      <Route element={<Stocks/>} path='/stocks' />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
