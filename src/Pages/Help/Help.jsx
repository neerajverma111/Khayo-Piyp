import "./Help.css";
import MyNavbar from "../../Components/Navbar/MyNavbar";
import Footer from "../../Components/Footer/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Help = () => {
  const form = useRef();

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9c7n3mr", "template_emk3zf9", form.current, {
        publicKey: "0Iwz5AG01l70_cBg3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed");
        }
      );
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch("example"));

  return (
    <>
      <div className="nav-pos">
        <MyNavbar />
      </div>

      <div className="container">
        <div className="row">
          <div className="help-main ">
            <div className="col-md-12">
              <div className="logo-main">
                <img src="images/Food_Logo.png" alt="" width={200} />
              </div>
              <div className="help-head mt-3">
                <h2>Welcome to Khayo-Piyo Support</h2>
                <p>How we can help you with today?</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="help-img card shadow bg-white d-flex justify-content-center align-items-center">
              <img
                src="images/Customer_new.svg"
                alt="customer-support"
                width={300}
              />
            </div>
            <div className="text-center help-txt">Customer Support</div>
          </div>
          <div className="col-md-4">
            <div className="help-img card shadow bg-white  d-flex justify-content-center align-items-center">
              <img
                src="images/Dasher_new.svg"
                alt="khayo-pio support"
                width={300}
              />
            </div>
            <div className="text-center help-txt">Khayo-Piyo-Wala Support</div>
          </div>
          <div className="col-md-4">
            <div className="help-img card shadow bg-white  d-flex justify-content-center align-items-center">
              <img
                src="images/Merchant_new.svg"
                alt="Merchant-support"
                width={250}
              />
            </div>
            <div className="text-center help-txt">Merchant Support</div>
          </div>
        </div>
      </div>
      <div className="form-section mt-4">
        <div className="container">
          <div className="row">
          <div className="col-md-4">
              <div className=" mycard1 shadow border-1 p-4 mt-4">
                <h3>Do you need any help!</h3>
                <p>
                 Feel free to fill the form and you will get a reply within 1-2 working days
                </p>
                <a href="#">Get Help!</a>
              </div>
              <div className=" mycard1 shadow border-1 p-4 mt-4">
                <h3>Feedback</h3>
                <p>
                  {"Fill the form and select the FAQ's as Feedback."}
                </p>
              </div>
            </div>
            <div className="col-md-8 col-sm-8">
              <div className="myform">
                <form
                  onSubmit={handleSubmit(sendEmail)}
                  ref={form}
                  className="contact-form"
                >
                  <select
                    className="issues"
                    name="FAQ"
                    defaultValue="default"
                    {...register("FAQ")}
                  >
                    <option disabled value="default">
                      {"FAQ's"}
                    </option>
                    <option value="customer-care">
                      What is Khayo-Piyo Customer Care Number?
                    </option>
                    <option value="career">
                      I want to explore career opportunities with Khayo-Piyo.
                    </option>
                    <option value="feedback">I want to provide feedback</option>
                    <option value="orderIssue">Can I edit my order?</option>
                    <option value="query">
                      Can I change the address / number?
                    </option>
                    <option value="otpIssue">Did not receive OTP?</option>

                    <option value="coupon">
                      Did not receive referral coupon?
                    </option>

                    <option value="deactivateAccount">
                      Deactivate my account
                    </option>

                    <option value="detailsIssue">
                      Unable to view the details in my profile
                    </option>
                    <option value="query">What is Khayo-Piyo Money?</option>
                    <option value="paylater">
                      Do you accept PayLater policies, Ticket Restaurant etc ?
                    </option>
                    <option value="bill">I want an invoice for my order</option>

                    <option value="other">Other</option>
                  </select>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && (
                    <span className="error-message">Full Name is required</span>
                  )}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="error-message">Email is required</span>
                  )}

                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    {...register("mobileNumber")}
                  />

                  <textarea
                    name="message"
                    placeholder="What Kind of Help you needed!"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="error-message">Message is required</span>
                  )}

                  <button
                    type="submit"
                    className="submitbtn"
                    onClick={() => {
                      alert("Form Submitted");
                    }}
                  >
                    <span>Submit</span>
                  </button>
                </form>
              </div>
            </div>

          
          </div>
        </div>
      </div>
      <div className="help-foot">
        <Footer />
      </div>
    </>
  );
};

export default Help;
