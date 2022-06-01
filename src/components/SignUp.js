import React from 'react';
import '../css/Signup.css';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';

function SignUp(){
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [inst, setInst] = useState();
    const history = useHistory();
    async function signupApi(){
        const result = await axios.post(`http://35.244.8.93:5011/api/users/auth/register`, {
        
            "user_first_name": fname,
            "user_last_name": lname,
            "user_email": email,
            "password": pass,
            "user_inst_id": parseInt(inst)
           
        
        });
        if(result.data.flag ==1)
        {alert("signup successfully");
        //setUserDAta(createTask.data);
        console.log(result.data);
        history.push('/');
        //console.log(createTask.data);
    }
        else{
            alert(result.data.msg);
        }
        
    }

    return(
        <div>
            <div className="signup">
            <div className="signup_area">
                    <div className="signup_card">
                        <h1>Sign up to Your Account</h1>
                        <p>Enter to continue and explore within your grasp</p>
                        <Box style={{padding: '40px'}} component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '40ch' },
                            }}
                            noValidate
                            autoComplete="off">
                        <TextField id="outlined-basic" label="Enter First Name" variant="outlined" value={fname}  onChange = {(e) =>setFname(e.target.value)}/>
                        <TextField id="outlined-basic" label="Enter Last Name" variant="outlined" value={lname}  onChange = {(e) =>setLname(e.target.value)}/>
                        <TextField id="outlined-basic" label="Enter Email or Phone" variant="outlined" value={email}  onChange = {(e) =>setEmail(e.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" value={pass}  onChange = {(e) =>setPass(e.target.value)}/>
                        <TextField id="outlined-basic" label="Enter Institute Id" variant="outlined" value={inst}  onChange = {(e) =>setInst(e.target.value)}/>
                            <Button style={{display:'flex', justifyContent:'center'}} variant="contained" size="large" onClick={()=>signupApi()}>
                            Sign Up
                            </Button>
                            <span className="signup_stat">Already having an account ? <a className="signup_links" href="">Log In</a></span>
                        </Box>
                    </div>
            </div>
        </div>
            
        </div>
    )
}

export default SignUp;