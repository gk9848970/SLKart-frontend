import ButtonCustom from "../components/ButtonCustom";
import cardimg from "../images/cardimg.svg";
import LoadingScreen from "react-loading-screen";
import { Favorite } from "@mui/icons-material";
import { useState, useEffect, useParams, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

// import Heart from "react-animated-heart";
import { ToastContainer, toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CartContext } from "../store/CartStore";
import { observer } from "mobx-react-lite";

const CourseCard = ({ cartContent }) => {
  const userdata = JSON.parse(localStorage.getItem("userData"));
  const tokenData = localStorage.getItem("token");
  const [isClick, setClick] = useState(false);
  console.log(userdata.user_inst_id);

  const cartStore = useContext(CartContext);
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
  async function addtoCard(item) {
    console.log(tokenData);
    const bodyParameters = {
      id: userdata.user_id,
      product_id: item,
    };
    const config = {
      headers: { Authorization: `Bearer ${tokenData}` },
    };
    const addCart = await axios.post(
      `http://35.244.8.93:5011/api/users/cart/addtocart`,
      bodyParameters,
      config
    );

    console.log("add cart",addCart);
    if(addCart.data.flag == 1) cartStore.count = cartStore.count + 1 ; // (localStorage.getItem("count_cart"))+1);
    toast(addCart.data.msg);
  }

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
  ) : (<>
  
    <div class="container-fluid">
      <div class="row course-container">
        {cartContent.map(function (productItem) {
          return (
            <div className="card m-2 col-md-4 col-lg-4" style={{ width: "18rem", minHeight:'fit-content'}}>
              <Link to="/course" style={{ height: "200px" }}>
                <img
                  className="img-nav card-img-top"
                  src={productItem.image_url!= "" ? productItem.image_url: "https://images.justlanded.com/directory_images/India_Maharashtra_Mumbai/85792/Speedlabs-148991/photo/scaled_148991_168566_logo.jpg" }
                  style={{ height: "200px" }}
                  
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center name-div">
                  <div className="card-title">
                    <Link
                      to={"/course/" + productItem.id}
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
                  className="card-text mb-3"
                  style={{ height: "132px" }}
                >
                  {productItem.description.slice(0, 200) + "..."}
                </div>
                <div className="card-text mt-3 d-flex justify-content-between" style={{ borderTop: "2px solid #E2E2E2", paddingTop: "8px"}}>
                  
                    <span id="mrp-span">
                    ₹ <del>{productItem.price}</del>
                    
                    </span>{" "}
                    <span id="price">{(((100-(productItem.discount))*productItem.price))/100}</span>
                  
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
                      className="cart-button mt-3" style={{border:"#fff", background:"#6A2F85", color:"#fff", width:"200px", marginLeft:"0px" , marginTop:"5px" }}
                      onClick={() => addtoCard(productItem.id)}
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
    </>
  );
};
export default CourseCard;
