import {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
function ResetPass(){
    return(
        <div>
            <Box style={{width:'630px',marginTop:'10px'}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <TextField style={{width:'630px'}} id="outlined-basic" label="First Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'310px'}} id="outlined-basic" label="Last Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'310px'}} id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Button variant="contained">Reset Password</Button>
                    </Grid> 
                </Grid>
            </Box>
        </div>
    )
}

export default ResetPass;