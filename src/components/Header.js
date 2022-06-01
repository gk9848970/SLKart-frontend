import {Call,Mail,LocationOn} from '@mui/icons-material';
const Header=()=>{
    return(
        <div className="headbar">
              <div className="contact">
                 <div className="d-flex justify-content-center align-items-center p-2"><Call/><p className="mt-2 ms-1">1800-419-8902  &nbsp;| &nbsp;</p></div> 
                 <div className="d-flex justify-content-center align-items-center p-2"><Mail/><p className="mt-2 ms-1"> info@speedlabs.in</p></div>
              </div>

              <div className="address">
                 <div className="d-flex justify-content-center align-items-center p-2"><LocationOn/><p className="mt-2 ms-1">Address: 9015 Sunset Boulevard United Kingdom</p></div>
              </div>
        </div>
    )
}

export default Header;