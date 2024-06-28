import { MdNavigateNext } from "react-icons/md";
import "./Hero.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { GrFormNextLink } from "react-icons/gr";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="food-bg">
                <div className="row justify-content-center align-items-lg-end">
                  <div className="col-md-12">
                    <div className="food-font text-center">
                      Your Favourite Food Site. <br />
                      <div className="logo-hero">
                        <img src="./images/Food_Logo.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="collection">
        <div className="container">
          <div className="row">
            <h2>Collections</h2>
            <div className="col-md-8">
              <h6>
                Explore curated lists of top restaurants, cafes, pubs, and bars
                in Ludhiana, based on trends
              </h6>
            </div>
            <div className="col-md-4 text-end">
              <a href="#">
                All Restaurants in Ludhiana <MdNavigateNext />{" "}
              </a>
            </div>
          </div>

          <div className="category-section">
            <div className="row">
              <div className="col-md-3">
                <div className="card1 animate">
                  <a href="/restaurants">
                    {" "}
                    <img src="./images/card1.jpg" alt="card" />
                  </a>
                  <div className="text-img p-3">
                    <h5>15 North Indian Delicacies </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card1 animate">
                  <a href="/restaurants">
                    <img src="./images/card2.png" alt="card" />
                  </a>
                  <div className="text-img p-3">
                    <h5>8 Great Cafes</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card1 animate">
                  <a href="/restaurants">
                    {" "}
                    <img src="./images/card4.jpeg" alt="card" />
                  </a>
                  <div className="text-img p-3">
                    <h5>19 Best Bars & Pubs</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card1 animate">
                  <a href="/restaurants">
                    {" "}
                    <img src="./images/card3.png" alt="card" />
                  </a>
                  <div className="text-img p-3 ">
                    <h5>9 Premium Coffee Shops</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="offer">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="offer-bg my-4 ">
                <div className="row justify-content-center align-items-lg-end">
                  <div className="col-md-12">
                    <div className="offer-font d-flex justify-content-center align-items-center">
                      Upto 50% Off on Major restaurants
                      <div className="logo-offer text-end mx-3">
                        <img src="./images/Food_Logo.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <div className="opts">
                <div className="opts-img">
                  <img
                    src="./images/ScootScoot.svg"
                    alt="ScootyPic"
                    width={154}
                    height={154}
                  />
                </div>
                <div className="opt-text">
                  <h3 className="fw-bold mytxt">Become a Dasher</h3>
                  <span className="opt-text2">
                    As a delivery driver, you will make reliable money-working
                    anytime, anywhere.
                  </span>
                  <br />
                  <a href="#">
                    Start earning
                    <GrFormNextLink />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opts">
                <div className="opts-img">
                  <img
                    src="./images/Storefront.svg"
                    alt="StorePic"
                    width={154}
                    height={154}
                  />
                </div>
                <div className="opt-text">
                  <h3 className="fw-bold mytxt">Become a Partner</h3>
                  <span className="opt-text2">
                    Grow your business and reach new customers by partnering
                    with us.
                  </span>
                  <br />
                  <a href="#">
                    Sign up your store
                    <GrFormNextLink />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="opts">
                <div className="opts-img">
                  <img
                    src="./images/iphone.svg"
                    alt="IphonePic"
                    width={154}
                    height={154}
                  />
                </div>
                <div className="opt-text">
                  <h3 className="fw-bold mytxt">
                    Get the best Khayo-Piyo experience
                  </h3>
                  <span className="opt-text2">
                    Experience the best your neighborhood has to offer, all in
                    one app.
                  </span>{" "}
                  <br />
                  <a href="#">
                    Get the app
                    <GrFormNextLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <div className="location-p">
                <p>
                  Popular localities in and around <b>Ludhiana</b>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card location-cols animate">
                <a href="/restaurants">
                  <h6>
                    Sarabha Nagar <GrFormNextLink />
                  </h6>
                  <p className="text-center">160 Places</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card location-cols animate ">
                <a href="/restaurants">
                  <h6>
                    Kipps Market <GrFormNextLink />
                  </h6>
                  <p className="text-center">160 Places</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card location-cols animate">
                <a href="/restaurants">
                  <h6>
                    Hero Bakery <GrFormNextLink />
                  </h6>

                  <p className="text-center">160 Places</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card location-cols animate">
                <a href="/restaurants">
                  <h6>
                    Ferozpur Road <GrFormNextLink />
                  </h6>
                  <p className="text-center">160 Places</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card location-cols animate">
                <a href="/restaurants">
                  <h6>
                    Clock Tower <GrFormNextLink />
                  </h6>
                  <p className="text-center">160 Places</p>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card location-cols animate">
                <a href="/restaurants">
                  <h6>
                    Chandigarh Rd <GrFormNextLink />
                  </h6>
                  <p className="text-center">160 Places</p>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row my-5">
            <div className="col-md-3 mt-2 animate">
              <div className="food-card">
                <img
                  src="./images/food1.png"
                  alt=""
                  className="food-imgs "
                  width={254}
                  height={170}
                />
              </div>
              <div className="food-des">
                <h6>Johar Sweet Corner</h6>
                <span>4.4 • 52 mins</span>
              </div>
            </div>
            <div className="col-md-3 mt-2 animate">
              <div className="food-card">
                <img
                  src="./images/subway.png"
                  alt=""
                  className="food-imgs "
                  width={254}
                  height={170}
                />
              </div>
              <div className="food-des">
                <h6>Subway</h6>
                <span>4.4 • 52 mins</span>
              </div>
            </div>
            <div className="col-md-3 mt-2 animate">
              <div className="food-card">
                <img
                  src="./images/prantha.png"
                  alt=""
                  className="food-imgs "
                  width={254}
                  height={170}
                />
              </div>
              <div className="food-des">
                <h6>Parantha Express</h6>
                <span>4.4 • 52 mins</span>
              </div>
            </div>
            <div className="col-md-3 mt-2 animate">
              <div className="food-card">
                <img
                  src="./images/pizza.png"
                  alt=""
                  className="food-imgs "
                  width={254}
                  height={170}
                />
              </div>
              <div className="food-des">
                <h6>Food Court</h6>
                <span>4.4 • 52 mins</span>
              </div>
            </div>
            <div className="col-md-3 mt-2 animate">
              <div className="food-card">
                <img
                  src="./images/barista.png"
                  alt=""
                  className="food-imgs "
                  width={254}
                  height={170}
                />
              </div>
              <div className="food-des">
                <h6>Barista Coffee</h6>
                <span>4.4 • 52 mins</span>
              </div>
            </div>
            <div className="col-md-3 mt-2 animate">
              <div className="food-card">
                <img
                  src="./images/naan.png"
                  alt=""
                  className="food-imgs "
                  width={254}
                  height={170}
                />
              </div>
              <div className="food-des">
                <h6>Refreshment PindiRawal</h6>
                <span>4.4 • 52 mins</span>
              </div>
            </div>
            <div className="col-md-3 mt-2 animate">
              <div className="food-card">
                <img
                  src="./images/chawal.png"
                  alt=""
                  className="food-imgs "
                  width={254}
                  height={170}
                />
              </div>
              <div className="food-des">
                <h6>Sharman Jain Sweets</h6>
                <span>4.4 • 52 mins</span>
              </div>
            </div>
            <div className="col-md-3 mt-2 animate">
              <div className="food-card ">
                <img
                  src="./images/paneer.png"
                  alt=""
                  className="food-imgs "
                  width={254}
                  height={170}
                />
              </div>
              <div className="food-des">
                <h6>New Chauhan Dhaba</h6>
                <span>4.4 • 52 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
