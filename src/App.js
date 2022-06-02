import Header from "./components/Header";
import Location from "./components/Location";
import './App.css';
import NavBar from './components/NavBar';
import './css/main.css'
import UserProfile from "./Pages/userProfile";
import Billing from "./Pages/billing";
import Cart from "./Pages/cart";
import Home from "./Pages/Home";
import InstHome from "./Pages/InstHome";
import {useState, useEffect} from "react";
import UserDetails from "./Pages/userDetails";
import {Redirect, Switch,Route } from "react-router";
import Course from "./Pages/course";
import Freecourse from "./Pages/Freecourse";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Newhome from './Pages/newhome';
import axios from 'axios';
import { CartProvider } from "./store/CartStore";

function App() {
  const [cartItem, updateCartItem] = useState();
  const tokenData = localStorage.getItem('token');
  const userdata = JSON.parse(localStorage.getItem('userData'));
async function cartItemss(){
   console.log(tokenData);
   const bodyParameters = {
     "id": userdata.user_id,
  };
  const config = {
   headers: { Authorization: `Bearer ${tokenData}` }
};
   const cartElement = await axios.post(`http://35.244.8.93:5400/api/users/cart`, 
   bodyParameters,
   config
     );

     updateCartItem(cartElement.data);
     
    //  useEffect(()=>{cartItemss();},[]);
 }
  return (
    <div >
         {/* <Header/>
         <div className="home-main">
         <NavBar cartCount={cartItem}/>*/}
         <div className="App"> 
           
         
         <CartProvider>
          <Switch>
            <Route exact path="/" component={tokenData ? Newhome : Login}></Route>
            <Route exact path="/homes" component={Newhome}></Route>
            <Route exact path="/home/:hash" component={InstHome}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/course/:id" component={Freecourse}></Route>
            <Route exact path="/paidcourse/:id" component={Course}></Route> z
            <Route exact path="/userprofile" component={UserProfile}></Route>
            <Route exact path="/payment" component={Billing}></Route>
            <Route exact path="/mycart" component={Cart}></Route>
            <Route exact path="/myprofile" component={UserDetails}></Route>
          </Switch>
        </CartProvider>
          </div>
         {/* </div> */}
         
     </div>
  );
}

export default App;
