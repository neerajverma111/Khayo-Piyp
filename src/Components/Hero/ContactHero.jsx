import { useForm } from "react-hook-form";
import "./ContactHero.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactHero = () => {
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
        },
        (error) => {
          console.log("FAILED...", error.text);
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
      <div className="contact-hero">
        <div className="img-sec text-center overlay">
          <h1>We Love To Hear From You!</h1>
        </div>
      </div>
      <div className="form-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              <div className="myform">
                <form
                  onSubmit={handleSubmit(sendEmail)}
                  ref={form}
                  className="contact-form"
                >
                  <select
                    className="issues"
                    defaultValue="default"
                    {...register("issue")}
                  >
                    <option disabled value="default">
                      Select an Issue
                    </option>
                    <option value="orderIssue">
                      I need help with my Khayo-Piyo online order.
                    </option>
                    <option value="infoIssue">
                      I found incorrect/outdated information on a page.
                    </option>
                    <option value="reportIssue">
                      There is a photo/review that is bothering me and I would
                      like to report it.
                    </option>
                    <option value="techIssue">
                      The website/app are not working the way they should.
                    </option>
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
                    placeholder="Message"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="error-message">Message is required</span>
                  )}

                  <button
                    type="submit"
                    onSubmit={sendEmail}
                    className="submitbtn"
                  >
                    <span>Submit</span>
                  </button>
                </form>
              </div>
            </div>

            <div className="col-md-4">
              <div className=" mycard1 shadow border-1 p-4 mt-4">
                <h3>Report a Safety Emergency</h3>
                <p>
                  We are committed to the safety of everyone using Khayo-Piyo
                </p>
                <a href="#">Report Here!</a>
              </div>
              <div className=" mycard1 shadow border-1 p-4 mt-4">
                <h3>Issue with your live order?</h3>
                <p>
                  Click on the Support or Online ordering help section in your
                  app to connect to our customer support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
