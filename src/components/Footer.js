import React from "react";
import "../css/Footer.css";
import boy from "../images/boy.svg";
// import { Link } from "react-router-dom";
import hat from "../images/hat.svg";
import { Link } from 'react-router-dom';
// import Logo from "../images/logo1.png";
// import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import Logo from '../images/logo.svg';
function Footer() {
  return (
    <>
      <footer className="footer-block mt-5">
        <div className="d-flex justify-content-between mt-5 footer-box footer-container">
          <div className="d-flex block1">
            <img
              src={Logo}
              alt=''
              className='img-fluid'
            />
            <p className="p-div">Lorem Ipsum is simply dummy <br />
              text of the printing and <br />
               typesetting industry.</p>
            <ul className="social-icons">
              <li className='list-inline-item'>
                <a className="a-div" target='_blank' href="">
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a className="a-div" target='_blank' href="">
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a className="a-div" target='_blank' href="">
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a className="a-div" target='_blank' href="">
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a className="a-div" target='_blank' href="">
                  <i className='fab fa-youtube'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a className="a-div" target='_blank' href="">
                  <i className='fab fa-android'></i>
                </a>
              </li>

            </ul>
          </div>
          <div className="block2">
            <h5 className="h5-div">Useful Links</h5>
            <ul>
              <li style={{textAlign:'left !important'}}>
                <Link
                  to=""
                >
                  <IoIosArrowForward />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to=""
                >
                  <IoIosArrowForward />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to=""
                >
                  <IoIosArrowForward />
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to=""
                >
                  <IoIosArrowForward />
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="block3">
          <h5 className="h5-div">Useful Links</h5>
            <ul>
              <li>
                <Link
                  to=""
                >
                  <IoIosArrowForward />
                  CBSE Questions
                </Link>
              </li>
              <li>
                <Link
                  to=""
                >
                  <IoIosArrowForward />
                  ICSE Questions
                </Link>
              </li>
              <li>
                <Link
                  to=""
                >
                  <IoIosArrowForward />
                  Exams
                </Link>
              </li>
              <li>
                <Link
                  to=""
                >
                  <IoIosArrowForward />
                  Q&A
                </Link>
              </li>
            </ul>
          </div>
          <div className="block4">
          <h5 className="h5-div">Contact</h5>
            <ul>
              <li>
                <Link
                  to=""
                >
                  <AiOutlineMail />{" "}
                  info@speedlabs.in
                </Link>
              </li>
              <li>
                <Link
                  to=""
                >
                  <IoMdCall />{" "}
                  022 4120 3067
                </Link>
              </li>
              <li>
                <Link
                  to=""
                >
                  <IoMdCall/>{" "}
                  1800-419-8902 (Toll Free)
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
          <div className="mt-5 mb-5 footer-container">
            <p className="p-div copyright-para">© Copyright Teevra Edutech Pvt Ltd 2019</p>
          </div>
      </footer>
    </>);
}
export default Footer;