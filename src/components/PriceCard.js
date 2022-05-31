import { Home,ListAlt,AccessTime ,PersonOutline,SettingsOutlined,CalendarTodayOutlined} from "@mui/icons-material";
import StarsIcon from '@mui/icons-material/Stars';
import ButtonCustom from "./ButtonCustom";
import { useState, useEffect, useParams } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from "react-toastify";


const PriceCard=({ids, detailss})=>{
    const userdata = JSON.parse(localStorage.getItem("userData"));
    const tokenData = localStorage.getItem("token");
    async function addtoCard(item) {
        console.log(tokenData);
        const bodyParameters = {
          id: userdata.user_id,
          product_id: item,
        };
        const config = {
          headers: { Authorization: `Bearer ${tokenData}` },
        };
        const addCart = await axios.post(
          `http://35.244.8.93:5011/api/users/cart/addtocart`,
          bodyParameters,
          config
        );
    
        console.log(addCart);
        toast(addCart.data.msg);
      }
    return(
        <div className="priceCard ms-5 w-75" style={{marginLeft:'5px',padding:'10px'}}>
            <div><p>₹<span><del>{detailss.price}</del></span> <span><b>{detailss.discount!=0 ? detailss.price - detailss.discount : detailss.price }</b></span></p></div>
            <div style={{color:'#081F32',display:'flex',alignItems:'center'}}><SettingsOutlined/><p style={{margin:'4px'}}><span style={{fontWeight:'normal',color:'#000'}}>Language</span>: English </p></div>
                    <div style={{color:'#081F32',display:'flex',alignItems:'center'}}><PersonOutline/><p style={{margin:'4px'}}><span style={{fontWeight:'normal',color:'#000'}}>Enrolled</span>: {detailss.tot_students} </p></div>
                    <div style={{color:'#081F32',display:'flex',alignItems:'center'}}><StarsIcon/><p style={{margin:'4px'}}><span style={{fontWeight:'normal',color:'#000'}}>Rating</span> : {detailss.course_rating} </p></div>
                   <div style={{color:'#081F32',display:'flex',alignItems:'center'}}><p style={{margin:'4px'}}> <span> <ReactStars
                    count={5}
                    value={detailss.course_rating}
                    size={24}
                    isHalf={true}
                    edit={false}
                    activeColor="#ffd700"
                  />  </span></p>
                     </div>
            <button
                      className="cart-button " style={{border:"#fff", background:"#6A2F85", color:"#fff", width:"200px", marginLeft:"0px" , marginTop:"5px" }}
                      onClick={() => addtoCard(ids)}
                    >
                      Add to Cart
                    </button>
                  
            {/* <div style={{color:'#081F32',display:'flex',alignItems:'center'}}><ListAlt/><p style={{margin:'4px'}}><span style={{fontWeight:'normal',color:'#000'}}>Lectures</span> : 14 </p></div>
            <div style={{color:'#081F32',display:'flex',alignItems:'center'}}><AccessTime/><p style={{margin:'4px'}}><span style={{fontWeight:'normal',color:'#000'}}>Duration </span>: 10 weeks </p></div>
            <div style={{color:'#081F32',display:'flex',alignItems:'center'}}><PersonOutline/><p style={{margin:'4px'}}><span style={{fontWeight:'normal',color:'#000'}}>Enrolled</span>: 75 student  </p></div>
            
            <div style={{color:'#081F32',display:'flex',alignItems:'center'}}><CalendarTodayOutlined/><p style={{margin:'4px'}}><span style={{fontWeight:'normal',color:'#000'}}>Deadline</span> : 30 October </p></div> */}
            <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
        </div>
    )
}

export default PriceCard;