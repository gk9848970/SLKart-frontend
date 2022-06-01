import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

import '../css/Home.css';
import { Link, useHistory } from "react-router-dom";
import CourseCard from '../components/CourseCard';
import LoadingScreen from "react-loading-screen";
import search from '../images/search.svg';
import Footer from "../components/Footer";
import bannerImg from '../images/banner_image.png';
import { Checkbox, Row, Col } from 'antd';
import Newnavbar from '../components/Newnavbar';
function Newhome() {
    const [category, updateCategory] = useState([]);
    const [toggleState, setToggleState] = useState(1);
    const [productData, updateProductData] = useState([]);
    const [productDataDemo, updateProductDataDemo] = useState([]);
    const [checked, setChecked] = useState(new Array(category.length).fill(false))
    const userdata = JSON.parse(localStorage.getItem('userData'));
    const tokenData = localStorage.getItem('token');
    const history = useHistory();
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef);
    const [searchText, setSearchText] = useState("");

    async function productApi() {

        const productDatas = await axios.post(`http://35.244.8.93:5011/api/users/product/marketplace`, {

            "instId": userdata.user_inst_id

        });

        console.log(productDatas.data.products);
        updateProductData(productDatas.data.products);
        updateProductDataDemo(productDatas.data.products);
        console.log("data " , productData, productDataDemo);


        //      if(productData.data.length>0)
        //      {
        //      updateProductData(productData.data);

        //  }
        //      else{
        //          alert("No product");
        //      }

    }

    async function categoryFilter(checkedValues) {
        if (checkedValues.length > 0) {
            const productDatas = await axios.post(`http://35.244.8.93:5011/api/users/product/categorys`, {
                "instId": userdata.user_inst_id,
                "id": checkedValues
            });
            console.log(productDatas.data.products);
            updateProductData(productDatas.data.products);
            console.log("data " + productData);
        }
        else {
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

    async function getCategory() {
        const getCategory = await axios.get(`http://35.244.8.93:5011/api/users/category/allcategories?institute=${userdata.user_inst_id}`);
        updateCategory(getCategory.data);
    }

    const addProductFilter = () => {
        const data = [];
        productData.forEach((p) => {
            if(p.description.toString().toLowerCase().includes(searchText.toLowerCase()) || p.product_name.toString().toLowerCase().includes(searchText.toLowerCase())) {
                data.push(p);
            }
        });
        updateProductDataDemo(data);
    }


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

    useEffect(() => {
        if (tokenData) { 
            getCategory(); 
            productApi();
            // updateProductDataDemo(productData);
            // console.log("productDataDemo",productData, productDataDemo);
        }
        else {
            history.push('/login');
        }
    }, []);

    const handleChange = (event) => {
        console.log(event.target.checked);
    };

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    return (<div>
        <Newnavbar />
        <div className='banner-div'>
            <div className='containermanual bannerdiv2'>
                <div className='div1'>
                    <p className='banner-text '>
                        <b>Marketplace For All Your<br /><span className='spantext'></span></b>
                    </p>
                    <p className='banner-text2 mt-4'>
                        Start learning with a wide range of online courses <br /> covering different subjects.
                    </p>
                    <button onClick={executeScroll} className='btn btn1 mt-2'>View all courses</button>
                </div>
                <div className='banner-image mt-5'>
                    <img src={bannerImg}/>
                </div>
            </div>
        </div>
        <div className="courses-section" ref={myRef}>
            <center><h2 className='mt-2 heading-section'>Our Courses</h2></center>
            {productData && productData.length > 0 ? <div className='d-flex container justify-content-between search-sort-container'>   <div className="categ">
                <div className="dropdown">
                    <button className="btn  dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '200px', backgroundColor: '#6A2F85', color: 'white', border: 'none' }}>
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
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(val) => {
                        setSearchText(val.target.value);
                        // addProductFilter();
                    }}/>
                    {/* <i className='fa fa-search mt-auto mb-auto fa-2x'></i> */}
                    <button className="btn btn2" type="submit" onClick={addProductFilter}>Search</button>
                </div>
            </div> 
            : <h4 className='d-flex containermanual justify-content-between'>No Course present</h4>}
            <div className='container'>
                {productDataDemo && productDataDemo.length > 0 ? <CourseCard cartContent={searchText ? productDataDemo : productData} /> : <h4 className='d-flex containermanual justify-content-between'>No Course present</h4>}
            </div>
        </div>
        <Footer /> </div>);
}

export default Newhome;