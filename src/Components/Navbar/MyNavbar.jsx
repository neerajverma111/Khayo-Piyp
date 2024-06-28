import "./MyNavbar.css";
import { MdContactPage } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  return (
    <section className="nav-bar-custom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <a className="navbar-brand" href="/">
              <img src="/images/Food_Logo.png" alt="" className="logo mx-4" />
            </a>
          </div>

          <div className="col-md-8">
            <div className="d-flex justify-content-around align-items-center ">
              {/* <button  className="button1">
                {" "}
                {/* <a href="">
                  <FaSearch /> Search
                </a> */}
              {/* </button>  */}
              <div className="mynav-search d-flex justify-content-center align-items-center">
                <input type="text" placeholder="Search" className=" me-2" />
                <Link to={""} >
                  <FaSearch />
                </Link>
              </div>
              <button className="button2">
                {" "}
                <Link to={"/offers"} >
                  <BiSolidOffer /> Offers
                </Link>
              </button>

              <button className="button1">
                {" "}
                <Link to={"/contact"}>
                  <MdContactPage /> Contact Us
                </Link>
              </button>

              <button className="button2">
                {" "}
                <Link to={"/help"} >
                  <IoMdHelpCircleOutline /> Help
                </Link>
              </button>
              <button className="button1">
                {" "}
                <Link to={"/login"} >
                  <FiLogIn /> Sign In
                </Link>
              </button>
              <Link to={"/cart"} >
                <button className="cart">
                  <BsCart2 />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyNavbar;
