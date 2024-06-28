import { FcRating } from "react-icons/fc";
import MyNavbar from "../../Components/Navbar/MyNavbar";
import "./Offers.css";
import { RiVipCrown2Fill } from "react-icons/ri";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

const Offers = () => {
  const [selectedValue, setSelectedValue] = useState("default");

  const data = [
    {
      id: 1,
      category: "Desert",
      name: "Kwality walls Ice-cream",
      img: "./images/icecream.png",
      rating: "4.4 • 52 mins",
    },
    {
      id: 2,
      category: "Veg",
      name: "Veg Pizza",
      img: "./images/lapizza.png",
      rating: "4.4 • 52 mins",
    },
    {
      id: 3,
      category: "Veg",
      name: "Prantha Express",
      img: "./images/prantha.png",
      rating: "4.4 • 52 mins",
    },
    {
      id: 4,
      category: "NonVeg",
      name: "New Chauhan Dhaba",
      img: "./images/paneer.png",
      rating: "4.4 • 52 mins",
    },
    {
      id: 5,
      category: "NonVeg",
      name: "Non-Veg Pizza",
      img: "./images/lapizza.png",
      rating: "4.4 • 52 mins",
    },

    {
      id: 6,
      category: "Coffee",
      name: "Barista Coffee",
      img: "./images/barista.png",
      rating: "4.4 • 52 mins",
    },
    {
      id: 7,
      category: "Desert",
      name: "Sharman Jain Sweets",
      img: "./images/chawal.png",
      rating: "4.4 • 52 mins",
    },
    {
      id: 8,
      category: "NonVeg",
      name: "Subway",
      img: "./images/subway.png",
      rating: "4.4 • 52 mins",
    },
  ];

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const filterData =
    selectedValue !== "default"
      ? data.filter((item) => item.category == selectedValue)
      : data;

  return (
    <div>
      <MyNavbar />
      <div>
        <div className="container ">
          <div className="row ">
            <div className="offers-sec">
              <div className="col-md-12">
                <h2>Restaurants With Great Offers Near Me</h2>
              </div>
              <section className="btn-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex flex-wrap">
                        {/* <button className="mybtn mx-2 d-flex align-items-center">
                  <IoFilterSharp /> Filters
                </button> */}
                        <select
                          value={selectedValue}
                          onChange={handleSelectChange}
                          className="mybtn mx-2 bg-white"
                        >
                          <option value="none" disabled>
                            {" "}
                            Select Category
                          </option>
                          <option value="default">All</option>
                          <option value="Veg">Veg</option>
                          <option value="NonVeg">Non-Veg</option>
                          <option value="Desert">Desert</option>
                          <option value="Coffee">Coffee</option>
                        </select>
                        <button className="mybtn mx-2 d-flex align-items-center">
                          <RiVipCrown2Fill /> Gold
                        </button>
                        <button className="mybtn mx-2 d-flex align-items-center">
                          <FcRating /> Rating: 4.0+
                        </button>
                        <button className="mybtn mx-2 d-flex align-items-center">
                          {" "}
                          Outdoor Seating
                        </button>
                        <button className="mybtn mx-2 d-flex align-items-center">
                          {" "}
                          Serves Alcohal
                        </button>
                        <button className="mybtn mx-2 d-flex align-items-center">
                          {" "}
                          Open Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row my-5">
                    {filterData.map((item) => (
                      <div key={item.id} className="col-md-3 mt-2 animate">
                        <div className="food-card">
                          <img src={item.img} alt="" className="food-imgs" />
                        </div>
                        <div className="food-des">
                          <h6>{item.name}</h6>
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
