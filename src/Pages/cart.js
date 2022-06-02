import { Clear } from "@mui/icons-material";
import rectangle from "../images/rectangle.svg";
import ButtonCustom from "../components/ButtonCustom";
import Location from "../components/Location";
import LoadingScreen from "react-loading-screen";
import { Link, useHistory } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Footer from "../components/Footer";
import { useState, useEffect, useContext } from "react";
import "../css/Home.css";
import "../css/main.css";
import cardProductItem from "../images/card.png";
import Newnavbar from '../components/Newnavbar';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import Razorpay from "../components/Razorpay";
import { observer } from "mobx-react-lite";
import { CartContext } from "../store/CartStore";

const Cart = observer((props) => {
  const [cartItem, updateCartItem] = useState();
  // const [count, setCount] = useState();
  const [couponRes, updatecouponRes] = useState();
  const [coupon, setcoupon] = useState("");
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  const userdata = JSON.parse(localStorage.getItem("userData"));
  const tokenData = localStorage.getItem("token");
  const cartStore = useContext(CartContext);

  async function cartItemss() {
    console.log(tokenData);
    const bodyParameters = {
      id: userdata.user_id,
    };
    const config = {
      headers: { Authorization: `Bearer ${tokenData}` },
    };
    const cartElement = await axios.post(
      `http://35.244.8.93:5011/api/users/cart`,
      bodyParameters,
      config
    );
    console.log(cartElement);
    updateCartItem(cartElement.data);
  }
  function retirecLogin() {
    if (tokenData) {
      cartItemss();
    } else {
      history.push("/login");
    }
  }
  async function applyCoupan(id) {
    console.log(tokenData);
    const config = {
      headers: { Authorization: `Bearer ${tokenData}` },
    };
    const detailsAll = await axios.get(
      `http://35.244.8.93:5011/api/users/cart/${id}?apply=${coupon}`,
      config
    );
    console.log(detailsAll.data);
    updatecouponRes(detailsAll.data);
    toast(detailsAll.data.msg);
    window.location.reload(true);
    setcoupon("");
  }
  async function removeCoupan(item) {
    const config = {
      headers: { Authorization: `Bearer ${tokenData}` },
    };
    const deleteCoupan = await axios.get(
      `http://35.244.8.93:5011/api/users/cart/${item}/removecoupon`,
      config
    );
    toast(deleteCoupan.data.msg);
    window.location.reload(true);
  }
  async function deleteItem(item) {
    console.log(item);
    const bodyParameters = {
      id: userdata.user_id,
    };
    const config = {
      headers: { Authorization: `Bearer ${tokenData}` },
    };
    const cartDelete = await axios.post(
      `http://35.244.8.93:5011/api/users/cart/${item}/remove`,
      bodyParameters,
      config
    );
    toast(cartDelete.data.msg);
    cartItemss();
  }
  console.log(coupon);

  async function emptyCart() {
    const config = {
      headers: { Authorization: `Bearer ${tokenData}` },
    };
    const deleteCart = await axios.delete(
      `http://35.244.8.93:5011/api/users/cart/emptycart`,
      config
    );
    toast(deleteCart.data.msg);
    cartItemss();
  }
  console.log();
  useEffect(() => {
    retirecLogin();
  }, []);
  if (!cartItem) {
    return (
      <div>
        <LoadingScreen
          loading={true}
          bgColor="#F1F1F1"
          spinnerColor="#9EE5F8"
          textColor="#676767"
        >
          {" "}
        </LoadingScreen>
      </div>
    );
  }
  return (
    <>
    <Newnavbar/>
      <Location path="My cart" />
      <div className="cart-div container d-flex">
        <div className="div-left ">
        {cartItem && cartItem.cartItems && cartItem.cartItems.Items ? <h5>{cartItem.cartItems.Items.length} products found in cart</h5> : <></>}
          {cartItem &&
            cartItem.cartItems.Items.map(function (productItem) {
              return (
                <div className="cart-items mb-4 d-flex border-bottom p-4">
                  <div className="imgBlock">
                    <img
                      //  src={productItem.image_url}
                      src={productItem.image_url}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ height: "auto", width: "100%" }}
                    />
                  </div>
                  <div className="card-title p-2 ms-4" style={{ width: "100%" }}>
                    {productItem.product_name}
                    <h6 className="mt-2" style={{ color: "#6E798C" }}>
                      by - {productItem.creator_name}
                    </h6>
                    <div className="mb-2">
                      Price - ₹ {productItem.price_before_coupon}
                    </div>
                    <div className="mb-2">
                      Final Price - ₹
                      {productItem.net_price}
                    </div>

                    <div>
                      {" "}
                      <input
                        type="text"
                        className="form-control mb-2"
                        onChange={(e) => setcoupon(e.target.value)}
                        placeholder="Enter the Coupon"
                      />
                      {cartItem ? (
                        productItem.coupon_id ? (
                          <button
                            className="btn btn-danger"
                            onClick={() => removeCoupan(productItem.product_id)}
                          >
                            Remove Coupon
                          </button>
                        ) : (
                          <button
                            className="btn btn-primary"
                            onClick={() => applyCoupan(productItem.product_id)}
                          >
                            Apply Coupon
                          </button>
                        )
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => applyCoupan(productItem.product_id)}
                        >
                          Apply Coupon
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="ms-2">
                    <a onClick={() => deleteItem(productItem.product_id)}>
                      <span>
                        {" "}
                        <i class="fas fa-times-circle"></i>
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
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
        <div className="cartcontainerr div-right">
          <h2>Total Cart</h2>
          <div className="totalCart">
            <div>
              <td>Subtotal-</td>
              <td>&#8377; {cartItem && cartItem.cartItems.total_amt}</td>
            </div>
            <div>
              <td>Discount-</td>
              <td>&#8377; 00.00</td>
            </div>
            <hr />
            <div>
              <td>Total-</td>
              <td>&#8377; {cartItem && cartItem.cartItems.total_amt}</td>
            </div>
          </div>
          <Razorpay />
        </div>
      </div>
      <Footer/>  </>
  );
});

export default Cart;
