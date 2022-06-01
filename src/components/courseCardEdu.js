import ButtonCustom from "../components/ButtonCustom";
import cardimg from "../images/cardimg.svg";
import LoadingScreen from "react-loading-screen";
import { Favorite } from "@mui/icons-material";
import { useState, useEffect, useParams } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import Heart from "react-animated-heart";
import { ToastContainer, toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const CourseCardEdu = ({ cartContent }) => {

  const [isClick, setClick] = useState(false);
  
  //   async function productApi(){
  //       const productDatas = await axios.post(`http://localhost:5400/api/users/product/marketplace`, {

  //          "instId": userdata.user_inst_id

  //       });

  //       console.log(productDatas.data.products);
  //       updateProductData(productDatas.data.products);
  //       console.log("data "+productData);
  //  //      if(productData.data.length>0)
  //  //      {
  //  //      updateProductData(productData.data);

  //  //  }
  //  //      else{
  //  //          alert("No product");
  //  //      }

  //   }
  

  return cartContent.length < 1 ? (
    <div>
      <LoadingScreen
        loading={true}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        style={{height:'130vh'}}
      >
        {" "}
      </LoadingScreen>
    </div>
  ) : (
    <div class="container">
      <div class="row">
        {cartContent.map(function (productItem) {
          return (
            <div className="card m-2 col-md-4" style={{ width: "17rem" , height:'fit-content'}}>
              <Link to="/login">
                <img
                  className="img-nav card-img-top"
                  src={productItem.image_url}
                  style={{ height: "200px" }}
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center name-div">
                  <div className="card-title">
                    <Link
                      to={"/login"}
                      style={{ color: "black" }}
                    >
                      {productItem.product_name}
                    </Link>
                  </div>
                  {/* <div>
                    {" "}
                    <Heart
                      isClick={isClick}
                      onClick={() => setClick(!isClick)}
                    />{" "}
                  </div> */}
                </div>
                <h6 className="mt-0" style={{ color: "#6E798C" }}>
                  {productItem.creator_name}
                </h6>
                <div className="d-flex align-items-center">
                  <ReactStars
                    count={5}
                    value={productItem.course_rating}
                    size={24}
                    isHalf={true}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="ms-1">
                    <b>{Number(productItem.course_rating).toFixed(2)}</b>
                  </div>
                </div>
                <div
                  style={{ borderBottom: "2px solid #E2E2E2" }}
                  className="card-text mb-2"
                >
                  {productItem.description.slice(0, 200) + "..."}
                </div>
                <div className="card-text mt-3">
                  <p>
                    ₹
                    <span id="mrp-span">
                      <del>99999.00</del>
                    </span>{" "}
                    <span id="price">{productItem.price}</span>
                  </p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  {/* <div>
                    {
                      <ButtonCustom
                        text="Buy Now"
                        border="#fff"
                        background="#9933C8"
                        color="#fff"
                        width="200px"
                        marginl="0px"
                        margint="5px"
                      />
                    }
                  </div> */}
                  <div>
                    <button
                      className="cart-button " style={{border:"#fff", background:"#6A2F85", color:"#fff", width:"200px", marginLeft:"0px" , marginTop:"5px" }}
                      
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CourseCardEdu;
