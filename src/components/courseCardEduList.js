import ButtonCustom from '../components/ButtonCustom';
import cardimg from '../images/cardimg.svg';
import LoadingScreen from 'react-loading-screen';
import { Favorite } from '@mui/icons-material';
import {useState, useEffect, useParams} from "react";
import { Link } from "react-router-dom";
import '../css/main.css';
import Heart from "react-animated-heart";
import { ToastContainer, toast } from 'react-toastify';
import ReactStars from "react-rating-stars-component";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CourseCardEduList = ({cartContent}) => {
    const [isClick, setClick] = useState(false);
    console.log("Cart Content is:", cartContent);
   
      if(cartContent.length<1){
        return(<div><LoadingScreen
          loading={true}
          bgColor='#f1f1f1'
          spinnerColor='#9ee5f8'
          textColor='#676767'
           > </LoadingScreen></div>)
      }
      return(  <div class="container">
      <div class="row">
       {cartContent.map(function(productItem) {

   return(<div className="d-flex list-card mt-4">
       <img className="image-List" src={productItem.image_url} />
       <div className="list-content">
       <div className="d-flex justify-content-between align-items-center name-div ps-4 pe-4" style={{height:'5em'}}>
    <div ><Link to={"/login"} style={{color:'black'}}><p className="text-name" >{productItem.product_name}</p></Link></div>
    {/* <div>  <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> </div> */}
    </div>
    <div className="auther-List ps-4">{productItem.creator_name} </div>
    <div className="float-end pe-4">
      <div><p>₹<span id="mrp-span2"><del>99999.00</del></span> <span id="price2">{productItem.price}</span></p></div> 
      </div>
      <div className="ps-4"><ReactStars
    count={5}
    value={productItem.course_rating}
    size={24}
    isHalf={true}
    edit={false}
    activeColor="#ffd700"
  /></div>
 
   <div style={{borderBottom:"2px solid #E2E2E2"}} className="card-text1 me-4 ms-4 pb-2 mt-2">{productItem.description.slice(0,300)+"..."}</div>
   <div className="d-flex">
  
    <button className="add-to-cart m-4"  ><p className="add-text">Add to cart</p></button>
  </div>
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
   </div>) })}
   </div>
   </div>)

}
export default CourseCardEduList;