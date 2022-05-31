// import { KeyboardArrowDown } from "@mui/icons-material";
const InputCustom=({place,icon})=>{
    return(
        <div className='inputCustom'>
          <input className='input' placeholder={place}/>
          <p style={{margin:'0px',padding:'0px',marginRight:'40px'}}>{icon}</p>
        </div>
    )
}

export default InputCustom;