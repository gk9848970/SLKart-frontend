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
const PurchasedCard = ({ purchased }) => {
    const [isClick, setClick] = useState(false);
 console.log("purchased data",purchased);
  return purchased.length < 1 ? (
    <div>
      <LoadingScreen
        loading={true}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
      >
        {" "}
      </LoadingScreen>
    </div>
  ) : (
    <div class="container">
      <div class="row">
        {purchased.products ? purchased.products.map(function (productItem) {
          return (
            <div className="card1 m-4" style={{ width: "18rem" }}>
              <Link to="/course">
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
                      to={"/paidcourse/" + productItem.id}
                      style={{ color: "black" }}
                    >
                      {productItem.product_name}
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Heart
                      isClick={isClick}
                      onClick={() => setClick(!isClick)}
                    />{" "}
                  </div>
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
                    edit={false}X 
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
              

              </div>
            </div>
          );
        }): <h2>No course yet? <br></br> Buy now !!</h2>}
      </div>
    </div>
  );
};
export default PurchasedCard;
