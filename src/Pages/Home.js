import { Button } from '@mui/material';
import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import Location from "../components/Location";
import '../css/Home.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useHistory } from "react-router-dom";
import Grid from '../images/grid.svg';
import List from '../images/list.svg';
import arrow from '../images/downarrow.svg';
import CourseCard from '../components/CourseCard';
import CourseCardList from '../components/CourseCardList';
import LoadingScreen from "react-loading-screen";
import search from '../images/search.svg';
import FormGroup from '@mui/material/FormGroup';
import { BsGridFill } from 'react-icons/bs';
import { Checkbox, Row, Col } from 'antd';
import { color } from '@mui/system';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
function Home() {
    const [category, updateCategory] = useState([]);
    const [toggleState, setToggleState] = useState(1);
    const [productData, updateProductData] = useState([]);
    const [checked, setChecked] = useState(new Array(category.length).fill(false))
    const userdata = JSON.parse(localStorage.getItem('userData'));
    const tokenData = localStorage.getItem('token');
    const history = useHistory();
    async function productApi() {

        const productDatas = await axios.post(`http://35.244.8.93:5011/api/users/product/marketplace`, {

            "instId": userdata.user_inst_id

        });

        console.log(productDatas.data.products);
        updateProductData(productDatas.data.products);
        console.log("data " + productData);
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

    const theme = createTheme({
        palette: {
            purple: {
                main: '#9933C8'
            },
            fourth: {
                main: '#E5E5E5'
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

    useEffect(() => {
        if (tokenData) { getCategory(); productApi(); }
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
    return productData.length < 1 ? (
        <div>
            <LoadingScreen
                loading={true}
                bgColor="#f1f1f1"
                spinnerColor="#9ee5f8"
                textColor="#676767"
                style={{ height: '130vh' }}
                height="150%"
            >
                {" "}
            </LoadingScreen>
        </div>
    ) : (
        <div>

            <Location path="All Course" />

            <div className="home_left">

                <div className="me-5 mb-4" style={{width: '300px', display: 'flex', justifyContent: 'space-between', marginLeft: '11px' }} >
                    <div className="tabsdiv">
                        <ThemeProvider theme={theme}>
                            <Button className={toggleState === 1 ? "tabs active-tabs me-4 " : "tabs me-4"} onClick={() => toggleTab(1)} style={{ width: '123px', height: '55px' }} ><BsGridFill style={{ width: '18px', height: '18px', color: 'black' }} /> &nbsp;&nbsp;<span className="font-div" >Grid</span></Button>

                            <Button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} style={{ width: '123px', height: '55px' }} ><img src={List} style={{ width: "18px", height: "18px" }} alt="list" />&nbsp;&nbsp;<span className="font-div">List</span></Button>

                        </ThemeProvider>
                    </div>
                    <div className="categ">
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '200px', color: 'purple', border: 'none' }}>
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
                </div>
            </div>
            <div style={{backgroundColor: 'black'}}>

            </div>
            <div className="d-flex"  >
                <div className={toggleState === 1 ? "  active-content" : "content"} >
                    <CourseCard cartContent={productData} />
                </div>
                <div className={toggleState === 2 ? "  active-content" : "content"}>
                    <CourseCardList cartContent={productData} />
                </div>
                {/* <div className="home_right me-5" style={{marginTop:'5%'}}> */}
                {/* <div style={{display:'flex'}}>
                        <input className="course_search" style={{width:'80%'}} type='search' placeholder="Search here"/>
                        <img  src={search} style={{marginLeft:'-40px'}} alt=""/>
                    </div> */}

                {/* <div className="course_select_card me-5" style={{height: "fit-content",left: '1070px',position: 'absolute',marginBottom: '10rem'}} > */}
               <Col md={6} className="course_select_card" style={{height:"fit-content",position:'sticky',left:'1050px'}} >
               <h3>Course Categories</h3>
                    <hr style={{ color: '#CFD2DE' }} />
                    <Checkbox.Group onChange={categoryFilter}>
                        {category && category.map(function (items) {
                            return (
                                <Row>
                                    <Checkbox style={{ fontSize: "100%", height: "50px"}} value={items.id}>{items && items.name.slice(0, 24)}</Checkbox>
                                </Row>
                            )
                        })}
                    </Checkbox.Group>
               </Col>
                {/* <div className="course_select_card" style={{height:"fit-content",position:'sticky',left:'1050px'}} >
                    <h3>Course Categories</h3>
                    <hr style={{ color: '#CFD2DE' }} />
                    <Checkbox.Group onChange={categoryFilter}>
                        {category && category.map(function (items) {
                            return (
                                <Row>
                                    <Checkbox style={{ fontSize: "100%", height: "50px"}} value={items.id}>{items && items.name.slice(0, 24)}</Checkbox>
                                </Row>
                            )
                        })}
                    </Checkbox.Group>
                </div> */}
            </div>
            {/* <div className="course_rating">
​                           style={{display: 'flex',flexDirection:'row',marginTop:'20px',flexWrap:'wrap',maxWidth:'830px',justifyContent:'space-between'}}
                    </div> */}
            {/* </div> */}
        </div>
    )
}
export default Home;