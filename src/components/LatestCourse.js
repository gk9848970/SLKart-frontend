import user from '../images/user.jpg'
import ButtonCustom from '../components/ButtonCustom';
import cardimg from '../images/cardimg.svg';
import { Link } from "react-router-dom";
import { Favorite } from '@mui/icons-material';
import {useState, useEffect} from "react";
import axios from 'axios';
const  LatestCourse = () => {

   const [productData, updateProductData] = useState([]);
   const userdata = JSON.parse(localStorage.getItem('userData'));

    async function LatestCourseAi(){
        const productDatas = await axios.post(`http://35.244.8.93:5011/api/users/product/latestCourse`, {
       
           "instId": userdata.user_inst_id
       
        });

        updateProductData(productDatas.data.products);
        console.log("data "+productData);
   //      if(productData.data.length>0)
   //      {
   //      updateProductData(productData.data);
        
   //  }
   //      else{
   //          alert("No product");
   //      }
       
    }
    console.log("data "+productData);
   
    useEffect(()=>{LatestCourseAi();},[]);
    return(<div className="latestCourse" style={{marginTop:'15px',marginLeft:'5px'}}>
       <p style={{fontSize:'18px'}}>Latest Course</p>
       { productData.map(function(productItem){
    return (
        <div >
           
           <div  style={{display:'flex',alignItems:'center',marginBottom:'5px'}}>
              <div><img src={productItem.image_url} style={{width:'50px'}}/></div>&nbsp;&nbsp;
              <div ><b onClick={()=>{window.location.reload(true);}} style={{margin:'0px'}}>  <Link
                      to={"/course/" + productItem.id}
                      style={{ color: "black" }}
                    >
                      {productItem.product_name}
                    </Link></b><p style={{margin:'0px'}}>₹<span><del>{productItem.price}</del></span> <span>{productItem.price - productItem.discount}</span></p></div>
           </div>
        </div>
      );})}</div>)
}
 
export default LatestCourse ;