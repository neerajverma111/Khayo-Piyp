import { useState } from "react";
import MyNavbar from "../../Components/Navbar/MyNavbar";
import "./Restaurants.css";
import Footer from "../../Components/Footer/Footer";
import { FaArrowTurnDown } from "react-icons/fa6";
import { data } from "../../data";
const Restaurants = () => {

  const [selectedValue, setSelectedValue] = useState("default");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
   const filterData =
    selectedValue !== "default"
      ? data.filter((item) => item.category == selectedValue)
      : data;


  return (
    <>
      <MyNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="myResto">
            <h3>Famous Restros in Ludhiana <FaArrowTurnDown  className="fs-5"/></h3> 
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
            </div>
          </div>
          <div className="row  mb-4">
         
                    {filterData.map((item) => (
                      <div key={item.id} className="col-md-3 mt-2 ">
                        <div className="food-card " >
                          <a href={`/menu/${item.id}`}>
                          <img src={item.img} alt="" className="food-imgs animate " /></a>
                        </div>
                        <div className="food-des">
                          <h6>{item.name}</h6>
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
              
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurants;
