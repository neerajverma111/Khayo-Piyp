import { useParams } from "react-router-dom";
import "./Menu.css";
import { BsCart2 } from "react-icons/bs";
import { foodItems } from "../../../data";
import MyNavbar from "../../../Components/Navbar/MyNavbar";
import { useContext, useEffect, useState } from "react";
import ShopContext from "../../../Components/Context/ShopContext";

const Menu = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = (itemId) => {
    return cartItems[itemId] || 0;
  };
  const [filteredData, setFilteredData] = useState([]);
  const params = useParams();
  const matchData = (params) => {
    let filteredItems = "";
    if (params) {
      filteredItems = foodItems.filter((item) => item.resto_id == params.id);
    }
    setFilteredData(filteredItems);
  };
  useEffect(() => {
    matchData(params);
  }, [params]);
  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);
  return (
    <>
      <MyNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 area">
            <img src="\images\Cakebg.jpg" className="bgimg" alt="" />
          </div>
          <div className="col-md-3 area">
            <img src="\images\menu2.jpg" className="bgimg2" alt="" />
            <img src="\images\menu3.jpg" className="bgimg2 mt-2" alt="" />
          </div>
          <div className="col-md-3 area">
            <img
              src="\images\menu4.jpg"
              alt=""
              width={300}
              height={407}
              className="bgimg3"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Cakes & Coffee</h3>
          </div>
          <div className="col-md-3  ">
            <div className="rating  text-center">
              <h6>500M</h6>
              <p>Dinning Ratings</p>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="rating  text-center">
              <h6>5000M</h6>
              <p>Delivery Ratings</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="menu-table shadow p-4">
              <table >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Resto ID</th>
                    <th>Menu Items</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Add to Cart</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {filteredData.map((item) => (
                    
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.resto_id}</td>
                      <td className="menu-item">{item.resto_item}</td>
                      <td className="price">{item.price}</td>
                      <td className="status">In Stock</td>
                      <td>
                        <div className="d-flex">

                          <button
                            className="cart"
                            onClick={() => addToCart(item.id)}
                            >
                        <BsCart2 /> ({cartItemAmount(item.id)})
                          </button>
                        
                            </div>
                      </td>
                    </tr>
                  ))}

                  {/* <tr >
                      <td>{filteredData.id}</td>
                   <td>{filteredData.resto_id}</td> 
                      <td className="menu-item">{filteredData.resto_item}</td>
                      <td className="price">{filteredData.price}</td>
                      <td className="status">In Stock</td>
                      <td>
                        <button className="cart">
                          <BsCart2 />
                        </button>
                      </td>
                    </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
