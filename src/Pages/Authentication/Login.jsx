import "./auth.css";
import MyNavbar from "../../Components/Navbar/MyNavbar";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassworrd] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <MyNavbar />
      <div className="container ">
        <div className="h100">
          <div className="row">
            <form onSubmit={handleSubmit} className="login-box shadow-lg p-5">
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="logheading">
                  <h2>Login</h2>
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="inputBox">
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="inputBox">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassworrd(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center mt-2">
                <div className="inputBox">
                  <input type="submit" className="buttonSubmit" />
                </div>
              </div>
              <div className="col-md-12  d-flex justify-content-center align-items-center">
                <div className="inputLink">
                  Dont have a account ? <a href="/register">Sign-up Now!</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
