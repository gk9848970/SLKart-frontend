import { FavoriteOutlined,Share } from "@mui/icons-material";
const Banner=()=>{
   return(
       <div className="banner">
          <div className="buttoncontainer">
            <button><FavoriteOutlined style={{fontSize:'16px'}}/>Favourite</button>
            <button><Share style={{fontSize:'16px'}}/>Share</button>
          </div>
       </div>
   )
}

export default Banner;