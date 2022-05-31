import Play from "../images/play.svg";
import {Button} from 'reactstrap';
import Newnavbar from "./Newnavbar";
import { AiFillLock } from 'react-icons/ai';
const CourseContentFree = ({ content, playVideos }) => {
  // console.log("con" + content[0].section_name);
  return (
    <div>
      
      <h3>Course Content</h3>
      {content.map(function (item) {
        return (
          <div className="coursecontent">
            <div style={{ display: "flex", fontSize: "20px" }}>
              <img style={{ height: "55px" }} src={Play} />
              <p style={{ marginTop: "15px" }}>{item.section_name}</p>
            </div>

            <div>
              {item.is_paid == 1 ? (
                <>
                <button type="button" class="btn btn-outline-danger btn-lg">Locked Resourse&nbsp;
                <AiFillLock style={{color: '#9933C8'}}/>
                </button>
                </>
              ) : item.resource_type === "pdf" ? (
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
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseContentFree;
