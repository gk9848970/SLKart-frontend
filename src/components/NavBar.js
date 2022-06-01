import Logo from '../images/logo.svg';
import '../css/nav.css';
import { PersonOutline, ShoppingBagOutlined } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import Location from "./Location";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const NavBar = ({ cartCount }) => {
  // console.log("cartDatais",cartCount.cartItems.Items.length);
  return (<div>
    <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#ffffff" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> 
          <img src={Logo} alt="" width={100} height={80} className="d-inline-block align-text-top" id="logoImage" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navcoldesk navcolmob nav navbar-nav ms-auto d-flex justify-content-end" >
            <Link to="/homes" style={{ textDecoration: 'none', color: " #6A2F85" }}>
              <li className="home-div me-5  nav-item"><HomeIcon />Home</li>
            </Link>
            <Link to="/myprofile" style={{ textDecoration: 'none', color: " #6A2F85" }}>
            <li className="link nav-item home-div me-5" ><PersonOutline />Profile
            </li>
              </Link>
              <Link to="/mycart" style={{ textDecoration: 'none', color: " #6A2F85" }}>
            <li className="link nav-item home-div " >
              <ShoppingCartIcon />Cart &nbsp;
            </li>
                 </Link>
          </ul>
        </div>
      </div>
    </nav>

  </div>

    //         <nav className="navbar navbar-light " style={{backgroundColor:"#ffffff"}}>
    //   <div className="container-fluid">
    //     <a className="navbar-brand " style={{marginLeft:"10%"}} href="#">
    //       <img src={Logo} alt="" width={100} height={80} className="d-inline-block align-text-top" />
    //     </a>
    //     <ul className="nav navbar-nav ms-auto nbs">
    //       <li className="nav-item"><Link to="/" style={{textDecoration:'none', color:" #6A2F85"}}>Home</Link></li>
    //       <li className="nav-item">hello</li>
    //       <li className="nav-item">hello</li>
    //     </ul>
    //   </div>
    // </nav>
    // <div className="navbar w-100 d-flex justify-content-between">
    //    <div className="logo"><img src={Logo}/></div>

    //    <div className=" d-flex  justify-content-around  " style={{marginRight:"6em"}} > 
    //        <Link to="/" style={{textDecoration:'none', color:" #6A2F85"}}><div className="home-div me-5">Home</div></Link>
    //        <div className="link" className="home-div me-5"><PersonOutline/><Link to="/myprofile" style={{textDecoration:'none', color:" #6A2F85"}}>Profile</Link></div>
    //        <div className="link" className="home-div me-5">
    //            <ShoppingCartIcon/>
    //            <Link to="/mycart" style={{textDecoration:'none', color:" #6A2F85"}}>Cart &nbsp; </Link>
    //         </div>
    //    </div>

    // </div>
  )
}

export default NavBar;