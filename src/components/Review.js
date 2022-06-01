import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useState, useParams } from 'react';
import { styled } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Review({idss}){
    const tokenData = localStorage.getItem('token');
    
const [rating, updateRating] = useState();
const [title, updateTitle] = useState("");
const [description, updateDescription] = useState("");
     console.log("Data jo hai",idss);
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
      }));
    
    
      const ratingChanged = (newRating) => {
        updateRating(newRating);
      };
     
        async function submitReviews() {
            
            const bodyParameters = {
                rating: rating,
                title: title,
                description: description
            };
            const config = {
               headers: { Authorization: `Bearer ${tokenData}` }
            };
            const review = await axios.post(`http://35.244.8.93:5011/api/users/product/${idss}/addreview`,
               bodyParameters,
               config
            );
            alert(review.data.msg);
            
         }
     
    
    return(
        <div>
            
                
                        <ReactStars
                    count={5}
                    value={5}
                    onChange={ratingChanged}
                    size={28}
                    isHalf={true}
                    edit={true}
                    activeColor="#ffd700"
                  />
                    <div className="mb-3">
          
          <input type="text" className="form-control" id="exampleFormControlInput1"value={title}  onChange = {(e) =>updateTitle(e.target.value)} placeholder="Title" />
        </div>
        <div className="mb-3">
          
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>
                    
                <button className="btn btn-primary" onClick={()=>{submitReviews();}} variant="contained"> Submit </button>
                
            
        </div>
    )
}

export default Review;