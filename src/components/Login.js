import React from 'react';
import { useState } from "react";
import '../css/Login.css';
import axios from 'axios';
import md5 from 'md5';
import boy from '../images/boy.svg'
import { Link, useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import { Button } from '@mui/material';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdOutlineLock } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import {
    Button,
    Col,
    Row,
    Label,
    Input,
    FormGroup,
} from "reactstrap";
function Login() {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [passw, setPass] = useState("");
    const [userData1, setUserDAta] = useState();
    async function loginApi() {
        const createTask = await axios.post(`http://35.244.8.93:5011/api/users/auth/login`, {

            "user_email": email,
            "password":md5(passw)

        });
        if (createTask.data.flag == 1) {
          
                const instData = await axios.get(`https://d2hp90zy5ktxok.cloudfront.net/website/${createTask.data.details.inst_hash}.json`);
                if(instData){
                localStorage.setItem("footer_logo", instData.data.detail.footer_logo);
                localStorage.setItem("header_logo", instData.data.detail.header_logo );
                localStorage.setItem("contact1", instData.data.detail.contact1);
                localStorage.setItem("address1",instData.data.detail.address1);
                alert("Login successfully");
                //setUserDAta(createTask.data);
                localStorage.setItem("token", createTask.data.token);
                localStorage.setItem("userData", JSON.stringify(createTask.data.details));
                console.log(createTask.data);
                history.push('/homes');
    }
            
           
        }
        else {
            alert(createTask.data.msg);
        }

    }
    return (
        // <div className="login">
        //     <div className="login_area">
        //             <div className="login_card">
        //                 <h1>Login to Your Account</h1>
        //                 <p>Enter to continue and explore within your grasp</p>
        //                 <Box style={{display: 'flex', justifyContent:'center', flexDirection:'column',marginTop:'30px',marginLeft:'40px'}} component="form"
        //                     sx={{
        //                         '& > :not(style)': { m: 1, width: '40ch' },
        //                     }}
        //                     noValidate
        //                     autoComplete="off">
        //                 <TextField id="outlined-basic" label="Enter Email or Phone" variant="outlined" value={email}  onChange = {(e) =>setEmail(e.target.value)}/>
        //                 <TextField id="outlined-basic" type="password" label="Password" variant="outlined" value={passw}  onChange = {(e) =>setPass(e.target.value)}/>


        //                 <FormGroup>
        //                     <FormControlLabel control={<Checkbox/>} label="Remember Me" />
        //                 </FormGroup>
        //                 <Button style={{display:'flex', justifyContent:'center', fontWeight:"15px"}} variant="contained" size="large" onClick={()=>loginApi()}>
        //                     Login
        //                     </Button>
        //                 </Box>
        //                 <span className="login_stat">Don’t have an account ? <a className="login_links" href="">Sign up</a></span>
        //             </div>
        //     </div>
        // </div>
        <div className="loginmain-div">
            <div className="containermanual">

                <div className="d-flex justify-content-center align-items-center loginBlock" style={{height:"100%"}} >
                    <Col className='col-md-8'>
                        <h4 className="sign-text">Sign In to Learn the Best Course</h4>
                        <div className="d-flex learning-block-boy">
                            <div>
                                <p className="start-learning">
                                    Start learning with a wide range of
                                    online courses covering different subjects.
                                </p>
                                <p className='account'>Don’t have an account ?
                                    <br />
                                    <span className='register'>Register Here!</span>
                                </p>
                            </div>
                            <div>
                               <img src={boy} alt="boy-image??" className='boy-img'/>
                            </div>
                        </div>
                    </Col>


                    <div className='col-md-4 htl'>
                        <Col md={10} className="login-form-box">
                            <h3 className="form-heading">Login to your Account</h3>
                            <p className="form-text">
                                Enter to continue and explore within your grasp
                            </p>

                            <FormGroup action="" className="form">
                                <div className="form-input">

                                    <Input
                                        id="outlined-basic" placeholder="Enter Email or Phone" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup action="" className="form">
                                <div className="form-input">
                                    <span className="icon1">
                                        {isRevealPwd ? (
                                            <>
                                                {" "}
                                                <AiFillEye
                                                    onClick={() =>
                                                        setIsRevealPwd((prevState) => !prevState)
                                                    }
                                                />{" "}
                                            </>
                                        ) : (
                                            <>
                                                <AiFillEyeInvisible
                                                    onClick={() =>
                                                        setIsRevealPwd((prevState) => !prevState)
                                                    }
                                                />{" "}
                                            </>
                                        )}
                                    </span>
                                    {/* <MdOutlineLock className="icon2" /> */}
                                    <Input
                                        id="outlined-basic" type={isRevealPwd ? "text" : "password"} placeholder="Password" variant="outlined" value={passw} onChange={(e) => setPass(e.target.value)}
                                    />
                                </div>
                            </FormGroup>

                            <p className="validate" id="validate_id"></p>
                            <p className="login" id="login_id"></p>



                            <div className="d-flex justify-content-between">
                                <Label>
                                    Remember Me
                                    <Input id="exampleCheck" className="ms-2" name="check" type="checkbox" />

                                </Label>
                                <Link to="/verifyOTP" className="forget-textline">
                                    <div className=""> Forget Password?</div>
                                </Link>
                            </div>

                            <div className="d-flex">
                                <Button className="login-btn mt-3" onClick={() => loginApi()}>
                                    Login to Continue
                                </Button>
                            </div>

                            <br />
                        </Col>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login;