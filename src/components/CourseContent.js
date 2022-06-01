import Play from "../images/play.svg";
import ModalVideo from 'react-modal-video';
import React,{useState} from 'react';
const CourseContent=({content, playVideos})=>{
    const [isOpen, setOpen] = useState(false);
    console.log(content);
    return(
        <div>
        <h3>Course Content</h3>
        {content.map(function(item){
            return(<div className="coursecontent">
             <div style={{display:'flex',fontSize:'20px'}}>
                <img style={{height:'55px'}} src={Play}/>
                <p style={{marginTop:'15px'}}>{item.section_name}</p>
            </div>
             <div>{item.resource_type === "pdf" ? (
                <a>
                  <button
                    onClick={() => {
                      playVideos(item.resource_url, item.resource_type);
                    }}
                    type="button" class="btn btn-outline-danger btn-lg color-purple view-btn"
                  
                  >
                    View
                  </button>
                </a>
              ) : (
                <button
                  onClick={() => {
                    playVideos(item.resource_url, item.resource_type);
                  }}
                  type="button" class="btn btn-outline-danger btn-lg color-purple view-btn"
        
                >
                  View
                </button>
              )}</div>
      
          </div>)
        })}
          

        </div>
    )
}

export default CourseContent;