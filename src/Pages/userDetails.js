import ProfileButton from "../components/ProfileButton";
import { PersonOutline,FavoriteOutlined,StarHalf,ShoppingCartOutlined,SettingsOutlined,LogoutOutlined, Logout } from "@mui/icons-material";
import Location from "../components/Location";
import Avatar from '@mui/material/Avatar';
import {useState, useEffect} from "react";
import axios from 'axios';
import Footer from "../components/Footer";
import Newnavbar from '../components/Newnavbar';
import { Link, useHistory } from 'react-router-dom';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../css/main.css';

import UserProfile from "./userProfile";
import PurchaseHistory from "../components/PurchaseHistory";
import EnrolledCourse from "../components/EnrolledCourse";
const { TabPane } = Tabs;


const UserDeatils=()=>{
  const [purchased, setPurchased] = useState([]);
  const tokenData = localStorage.getItem('token');
  const [orders, setOrders] = useState([]);
  const history = useHistory();
    async function order(){
     
     const config = {
      headers: { Authorization: `Bearer ${tokenData}` }
   };
      const orderData = await axios.get(`http://35.244.8.93:5011/api/users/orders`, 
      config
        );
   
        setOrders(orderData.data);
        
  }


  async function prurchasedP(){
   
   const config = {
    headers: { Authorization: `Bearer ${tokenData}` }
 };
    const purchasedData = await axios.get(`http://35.244.8.93:5011/api/users/product`, 
    config
      );
 
      setPurchased(purchasedData.data);
      
 
  }
  function Logout(){
    history.push('/login');
    localStorage.clear();
  }

  useEffect(()=>{if(tokenData){ prurchasedP(); order();}
else{
  history.push('/login');
}
},[])
  console.log("purchased",purchased);
   const userdata = JSON.parse(localStorage.getItem('userData'));
    return tokenData ? (
      <><Newnavbar/>
      <Location path="My Profile"/>
      <div className="userDetails">
      
      <div style={{display:'flex',flexDirection:'row', gap: '15px' ,marginTop:'50px', paddingLeft:'20px'}}>
            <Avatar sx={{width:'84px',height:'84px'}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div style={{marginTop:'22px',fontFamily:'Mulish',fontSize:'25px',fontWeight:'bold',fontStyle:'normal'}}>
               <h2>Hello, {userdata.user_first_name}</h2>
            </div>
         </div>

         <Tabs style={{marginTop:'50px'}} tabPosition="left">
          <TabPane tab={<span>
            {/* <UserOutlined/> */}
               My Profile
          </span>} key="1">
          <div className="profileDetails" >
               <h1>My Profile</h1>
               <table class="table table-borderless">
                <tr class="table-active">
                 <td className="user-detail">Registration Date :</td>
                 <td className="user-value"> 27/1/2021 </td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">First Name :</td>
                 <td className="user-value">{userdata.user_first_name}</td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">Last Name :</td>
                 <td className="user-value">{userdata.user_last_name}  </td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">Email :</td>
                 <td className="user-value">{userdata.user_email} </td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">Phone Number :</td>
                 <td className="user-value">{userdata.country_code} {userdata.user_contact_no}  </td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">Date of Birth :</td>
                 <td className="user-value"> {userdata.user_dob ? userdata.user_dob.slice(0,10) : "Please Update your profile"} </td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">Gender :</td>
                 <td className="user-value"> {userdata.user_gender ? userdata.user_gender : "Please Update your profile" } </td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">Country :</td>
                 <td className="user-value"> { userdata.user_country_name ?userdata.user_country_name : "Please Update your profile"}</td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">State :</td>
                 <td className="user-value"> { userdata.user_state_name ? userdata.user_state_name : "Please Update your profile"} </td>
               </tr>
               <tr className="mt-5">
               <td className="user-detail">City :</td>
                 <td className="user-value"> { userdata.user_location ? userdata.user_location : "Please Update your profile"} </td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">Address :</td>
                 <td className="user-value"> { userdata.user_address ?userdata.user_address : "Please Update your profile"} </td>
               </tr>
               <tr className="mt-2">
               <td className="user-detail">Bio :</td>
                 <td className="user-value"> {userdata.user_about ? userdata.user_about : "no bio available" } </td>
               </tr>
               </table>    
                 
               
            </div>

          </TabPane>
          <TabPane tab={<span>
            Enrolled Course
          </span>} key="2">
            <EnrolledCourse purchased={purchased}/>
          </TabPane>
          {/* <TabPane tab={<span>
            Wishlist
          </span>} key="3">
            Content of Tab 3
          </TabPane> */}
          {/* <TabPane tab={<span>
            Review
          </span>} key="4">
            Content of Tab 3
          </TabPane> */}
          <TabPane tab={<span>
            Purchase History
          </span>} key="5">
            <PurchaseHistory orderH={orders}/>
          </TabPane>
          {/* <TabPane tab={<span>
            Settings
          </span>} key="6">
            <UserProfile/>
          </TabPane> */}
          <TabPane  tab={<span onClick ={()=>{Logout();}}>
            Logout
          </span>} key="7">
            
          </TabPane>
        </Tabs>
      </div>
      <Footer/></> ) : (<div></div>)
}

export default UserDeatils;