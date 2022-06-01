import upload from '../images/upload.svg';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';

function Profile(){
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const [gender, setGender] = useState('');
    const genders = [
        {
            value: 'Male',
        },
        {
            value: 'Female'
        },
        {
            value: 'Others'
        },
    ];
    const handleChange = (event) => {
        setGender(event.target.value);
      };
    return(
        <div>
            <img src={upload} alt="" style={{height:'100px',width:'auto'}}/>
            <Box style={{width:'630px',marginTop:'10px'}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'310px'}} id="outlined-basic" label="First Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'315px'}} id="outlined-basic" label="Last Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'310px'}} id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <TextField
                        id="date"
                        label="Date of Birth"
                        type="date"
                        sx={{ width: 170 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Gender"
                        sx={{ width: 140,marginLeft:'15px' }}
                        value={gender}
                        onChange={handleChange}
                        >
                        {genders.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>  
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'310px'}} id="outlined-basic" label="Phone Number" variant="outlined" />
                    </Grid>  
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'315px'}} id="outlined-basic" label="Country" variant="outlined" />
                    </Grid>  
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'310px'}} id="outlined-basic" label="State" variant="outlined" />
                    </Grid>  
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'315px'}} id="outlined-basic" label="City" variant="outlined" />
                    </Grid>  
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'310px'}} id="outlined-basic" label="Address" variant="outlined" />
                    </Grid>  
                    <Grid item xs={12} sm={6}>
                        <TextField style={{width:'315px'}} id="outlined-basic" label="Zip Code" variant="outlined" />
                    </Grid>  
                    <Grid item xs={12} sm={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Write for yourself"
                        multiline
                        sx={{width: '630px'}}
                        rows={4}
                    />
                    </Grid> 
                    <Grid item xs={6} sm={4}>
                    <Button variant="contained">Save Changes</Button>
                    </Grid> 
                </Grid>
            </Box>
        </div>
    )
}

export default Profile;