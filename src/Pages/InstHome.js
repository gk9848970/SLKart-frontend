import { Button } from '@mui/material';
import React, { useRef } from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import Location from "../components/Location";
import '../css/Home.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Grid from '../images/grid.svg';
import List from '../images/list.svg';
import arrow from '../images/downarrow.svg';
import CourseCardEdu from '../components/courseCardEdu';
import CourseCardEduList from '../components/courseCardEduList';
import Footer from "../components/Footer";
import bannerImg from '../images/banner_image.png';
import search from '../images/search.svg';
import { useParams} from "react-router-dom";
import Newnavbar from '../components/Newnavbar';
import FormGroup from '@mui/material/FormGroup';
import { BsGridFill } from 'react-icons/bs';
import { Checkbox, Row, Col } from 'antd';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { color } from '@mui/system';
import ReactLoading from 'react-loading';

// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
function InstHome(){
    const {hash} = useParams();
    const [category, updateCategory] = useState([]);
    const [instituteID, updateID] = useState([]);
    const [toggleState, setToggleState] = useState(1);
    const [productData, updateProductData] = useState([]);
    const [flags, setflags] = useState(false);
    const [checked, setChecked] = useState( new Array(category.length).fill(false))
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop); 
    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);
    async function instId(){
        const instIds = await axios.get(`http://35.244.8.93:5011/api/users/auth/instid/${hash}`);
        updateID(instIds.data);
        productApi(instIds.data.instId);
        getCategory(instIds.data.instId);

    }

    async function productApi(items){
        const productDatas = await axios.post(`http://35.244.8.93:5011/api/users/product/marketplace`, {
       
           "instId": items
       
        });

        console.log(productDatas.data.products);
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
    async function categoryFilter(checkedValues){
        if(checkedValues.length>0)
        {const productDatas = await axios.post(`http://35.244.8.93:5011/api/users/product/categorys`, {
       
            "instId" : instituteID,
            "id": checkedValues
       
        });

        console.log(productDatas.data.products);
        updateProductData(productDatas.data.products);
        console.log("data "+productData);}
        else{
            window.location.reload(true);
        }
   //      if(productData.data.length>0)
   //      {
   //      updateProductData(productData.data);
        
   //  }
   //      else{
   //          alert("No product");
   //      }
       
    }
   async function getCategory(items){
        const getCategory = await axios.get(`http://35.244.8.93:5011/api/users/category/allcategories?institute=${items}`);
        updateCategory(getCategory.data);
        
    }

    const theme = createTheme({
        palette:{
            purple:{
                main:'#9933C8'
            },
            fourth:{
                main:'#E5E5E5'
            }
        },
    })


    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      };
      const toggleTab = (index) => {
        setToggleState(index);
      };
     console.log("instIDs",instituteID);
     useEffect(async ()=>{ instId();
        const instData = await axios.get(`https://d2hp90zy5ktxok.cloudfront.net/website/${hash}.json`);
        if(instData){
        localStorage.setItem("footer_logo", instData.data.detail.footer_logo);
        localStorage.setItem("header_logo", instData.data.detail.header_logo );
        localStorage.setItem("contact1", instData.data.detail.contact1);
        localStorage.setItem("address1",instData.data.detail.address1);
            setflags(true);
    }
    },[]);
     
     return flags ? (<div>
        <Newnavbar/>
        <div className='banner-div'>
            <div className='containermanual bannerdiv2 ' style={{height:"100%"}}>
                <div className='div1' >
                    <p className='banner-text '>
                      <b>  Marketplace For All Your<br/><span className='spantext'></span></b>
                    </p>
                    <p className='banner-text2 mt-4'>
                    Start learning with a wide range of online courses <br/> covering different subjects.
                    </p>
                    <button onClick={executeScroll} className='btn btn1 mt-2'>View all courses</button>
                </div>
                <div className='banner-image mt-5'>
                <img src={bannerImg} height="100%"/>
                </div>
            </div>
        </div>
        <div ref={myRef}>
            <center><h2 className='mt-2'>Our courses</h2></center>
            {productData && productData.length>0 ? <div className='d-flex container justify-content-between'>   <div className="categ">
                        <div className="dropdown">
                            <button className="btn  dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '200px', backgroundColor:'#6A2F85', color: 'white', border: 'none' }}>
                                Sort By Category
                            </button>
                            <ul className="dropdown-menu p-2 mb-2" aria-labelledby="dropdownMenuButton1">
                                {/* <li><a className="dropdown-item" href="#">Low to High</a></li>
                                <li><a className="dropdown-item" href="#">High to Low</a></li> */}
                                <Checkbox.Group style={{ width: '100%' }} onChange={categoryFilter}>
                                    {category && category.map(function (items) {
                                        return (
                                            <Row>
                                                <Checkbox className="border-bottom " style={{ fontSize: "15px", height: "2%" }} value={items.id}>{items && items.name}</Checkbox><br /><br />
                                            </Row>
                                        )
                                    })}
                                </Checkbox.Group>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex mb-2'>
                    <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn2" type="submit">Search</button>
                    </div>
                   
                     </div> : <h4  className='d-flex containermanual justify-content-between'>No Course present</h4>}
                     <div className='container'>
                    <CourseCardEdu cartContent={productData} />
                    </div>
        </div>
        <Footer/> </div>):(<div >
            <ReactLoading type={'spin'} color={"#642C90"} height={'100px'} width={'100px'} />
        </div>);
}
export default InstHome;