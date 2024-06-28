import MyNavbar from "../../Components/Navbar/MyNavbar";
import Footer from "../../Components/Footer/Footer";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassworrd] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth", { fname, lname, phone, email, password })
      .then((result) => {console.log(result)
      navigate('/login')
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <MyNavbar />
      <div className="container ">
        <div className="h100">
          <div className="row myrow">
            <form onSubmit={handleSubmit} className="login-box shadow-lg p-5">
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="logheading">
                  <h2>Sign-Up</h2>
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLName(e.target.value)}
                    required

                    
                  />
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="inputBox">
                  <input
                    type="tel"
                    placeholder="Phone No."
                    maxLength="10"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="inputBox">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="inputBox">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassworrd(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center mt-2">
                <div className="inputBox">
                  <input
                    type="submit"
                    className="buttonSubmit"
                    onClick={() => {
                      alert("done");
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <Link to="/login">
                  <button className="inputLink buttonSubmit">Login</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
