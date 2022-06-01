import { Facebook, Twitter,Google } from "@mui/icons-material";
import {useState, useEffect} from 'react';
import CourseCard from "../components/CourseCard";
import LatestCourse from "../components/LatestCourse";
import { Home,ListAlt,AccessTime ,PersonOutline,SettingsOutlined,CalendarTodayOutlined} from "@mui/icons-material";
import StarsIcon from '@mui/icons-material/Stars';
import Location from "../components/Location";
import '../css/Home.css';
import LoadingScreen from 'react-loading-screen';
import Footer from "../components/Footer";
import Newnavbar from "../components/Newnavbar";
import PriceCard from "../components/PriceCard";
import { Link } from "react-router-dom";
import { useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from "react-toastify";
import Banner from "../components/Banner";
import HorizontalBar from "../components/HorizontalBar";
import Tabss from "../components/Tabss";
import CourseImg from '../images/home.svg';
import axios from 'axios';
const Freecourse=()=>{
    const {id} = useParams();
    const [detailss, updateDetails] = useState();
    const [productData, updateProductData] = useState([]);
    const [urlPlay, updateUrl] = useState("");
    const [plays, updatePlays] = useState(false);
    const [urlType, updateurlType] = useState("");
    const userdata = JSON.parse(localStorage.getItem('userData'));
    const tokenData = localStorage.getItem('token');
    console.log(id);
    const scrollTop = () =>{ window.scrollTo({top: 0, behavior: 'smooth'});};
    function playVideo(urls, type){
      updateUrl(urls);
      updatePlays(true);
      updateurlType(type);
      scrollTop();
    }
    async function productItems(){
        console.log(tokenData);
        
        const bodyParameters = {
          "id": userdata.user_id,
       };
       const config = {
        headers: { Authorization: `Bearer ${tokenData}` }
     };
        const detailsAll = await axios.get(`http://35.244.8.93:5011/api/users/product/${id}?institute=${userdata.user_inst_id}`, 
        config
          );
     console.log(detailsAll.data.details);
          updateDetails(detailsAll.data.details);
          
      }
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
      
      useEffect(()=>{productItems();LatestCourseAi();},[]);
      if(!detailss){
        return(<div><LoadingScreen
          loading={true}
          bgColor='#f1f1f1'
          spinnerColor='#9ee5f8'
          textColor='#676767'
           > </LoadingScreen></div>)
      }
      console.log(detailss.id);
    return(
    <div>
      <Newnavbar/>
      <Location path="All Courses > Course Details"/>
    
        <div className="course containermanual course-div">
        <div style={{flex:"75%"}}>
                <div className="heading"><h2>{detailss.product_name}</h2></div>
                {urlPlay ? (
            urlType === "video" || urlType === "youtube"  ? (
              <div>
                <ReactPlayer
                  url={urlPlay}
                  light="https://www.groovyprint.co.uk/images/D/back_image54d107615dfb1.png"
                  playing={urlPlay}
                  controls={true}
                  width="100%"
                  height="450px"
                  marginBottom="10px"
                  textAlign="left"
                />
              </div>
            ) : (
              <div>
                <embed
                  src={`${urlPlay}#toolbar=0`}
                  title="testPdf"
                  width="100%"
                  height="450px"
                />
              </div>
            )
          ) : (
            <div>
              <img
                src={
                  detailss.image_url != ""
                    ? detailss.image_url
                    : "https://images.justlanded.com/directory_images/India_Maharashtra_Mumbai/85792/Speedlabs-148991/photo/scaled_148991_168566_logo.jpg"
                }
                style={{
                  width: "100%",
                  height: "450px",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
                alt=""
              />
            </div>
          )}
                <div className="mb-2 mobile-latest"> <div><p>₹<span><del>{detailss.price}</del></span> <span><b>{detailss.discount!=0 ? detailss.price - detailss.discount : detailss.price }</b></span></p></div>
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
                      className="cart-button " style={{border:"#fff", background:"#9933C8", color:"#fff", width:"200px", marginLeft:"0px" , marginTop:"5px" }}
                      onClick={() => addtoCard(id)}
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
                /></div>
                   <div><Tabss detail = {detailss} playVideo={playVideo}/></div>
                   <div className="mt-2 mobile-latest"><center><h2 >Latest Courses</h2></center>
                   <div className="container">
                   <center>  <div className="row">
                     {productData.map(function(productItem){return(<div className="card m-2 col-md-4" style={{ width: "18rem" }}>
              <Link to="/course">
                <img
                  className="img-nav"
                  src={productItem.image_url!= "" ? productItem.image_url: "https://images.justlanded.com/directory_images/India_Maharashtra_Mumbai/85792/Speedlabs-148991/photo/scaled_148991_168566_logo.jpg" }
                  style={{ height: "200px" }}
                  className="card-img-top"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center name-div">
                  <div className="card-title">
                    <Link
                      to={"/course/" + productItem.id}
                      style={{ color: "black" }}
                    >
                      {productItem.product_name}
                    </Link>
                  </div>
                  {/* <div>
                    {" "}
                    <Heart
                      isClick={isClick}
                      onClick={() => setClick(!isClick)}
                    />{" "}
                  </div> */}
                </div>
                <h6 className="mt-0" style={{ color: "#6E798C" }}>
                  {productItem.creator_name}
                </h6>
                <div className="d-flex align-items-center">
                  <ReactStars
                    count={5}
                    value={productItem.course_rating}
                    size={24}
                    isHalf={true}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="ms-1">
                    <b>{Number(productItem.course_rating).toFixed(2)}</b>
                  </div>
                </div>
                <div
                  style={{ borderBottom: "2px solid #E2E2E2" }}
                  className="card-text mb-2"
                >
                  {productItem.description.slice(0, 200) + "..."}
                </div>
                <div className="card-text mt-3">
                  <p>
                    ₹
                    <span id="mrp-span">
                      <del>{detailss.price}</del>
                    </span>{" "}
                    <span id="price">{detailss.price - detailss.discount}</span>
                  </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  {/* <div>
                    {
                      <ButtonCustom
                        text="Buy Now"
                        border="#fff"
                        background="#9933C8"
                        color="#fff"
                        width="200px"
                        marginl="0px"
                        margint="5px"
                      />
                    }
                  </div> */}
                  <div>
                    <button
                      className="cart-button " style={{border:"#fff", background:"#9933C8", color:"#fff", width:"200px", marginLeft:"0px" , marginTop:"5px" }}
                      onClick={() => addtoCard(productItem.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
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
                     </div>)})}
                   </div></center>
                    </div>

                   {/* <div style={{display:'flex',marginTop:'15px'}}><p style={{margin:'0px',marginRight:'10px'}}>Share:</p><Facebook style={{color:'#0085FF',marginRight:'10px'}}/><Twitter style={{color:'#47A7FF',marginRight:'10px'}} /><Google style={{color:'#fff',backgroundColor:'#D80000',borderRadius:'50%'}} /></div> */}
                   </div>
                   </div>
                <div style={{flex:"25%"}} >
                <div className="desktop-latest">{<PriceCard ids={id} detailss={detailss}/>}</div>
                   <div className="desktop-latest ms-5 w-75">{<LatestCourse/>}</div>
                </div>
            </div>
        
            <Footer/>
        </div>
    )
}

export default Freecourse;