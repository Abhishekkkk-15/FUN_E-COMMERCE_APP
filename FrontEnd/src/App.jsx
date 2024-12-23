import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AddProd from './assets/components/AddProd.jsx'
import GetAllProd from './assets/components/GetAllProd'
import Navbar from './assets/components/Navbar'
import {Routes,Route } from 'react-router-dom';
import Register from './assets/components/Register.jsx'
import Login from './assets/components/Login.jsx'
import PlcaeOrder from './assets/components/PlcaeOrder.jsx'
import UserInfo from './assets/components/User.jsx'
import ShowProduct from './assets/components/ShowProduct.jsx'
import RequestAdmin from './assets/components/RequestAdmin.jsx'
import ShowCart from './assets/components/ShowCart.jsx'
import Dashboard from './assets/components/Dashboard.jsx';

function App() {

  return (
 <div>
  <Navbar />
  <Routes>
   <Route path={"/"} element={<GetAllProd/>}/>
   <Route path={"/add"} element={<AddProd/>}/>
   <Route path={"/login"} element={<Login />} />
   <Route path={"/reg"} element={<Register/>}/>
   <Route path={"/buy"} element={<PlcaeOrder  />}/>
   <Route path={"/userInfo"} element={<UserInfo />}/>
   <Route path={"/showProduct"} element={<ShowProduct />}/>
   <Route path={"/requestAdmin"} element={<RequestAdmin />}/>
   <Route path={"/showCart"} element={<ShowCart />}/>
   <Route path={"/dashboard"} element={<Dashboard />}/>
  </Routes>
 </div>
  )
}

export default App
