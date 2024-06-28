import { FaOpencart } from "react-icons/fa";
import MyNavbar from "../../Components/Navbar/MyNavbar";
import "./AddToCart.css";
// import { MdDeleteForever } from "react-icons/md";
import { foodItems } from "../../data";
import { useContext } from "react";
import ShopContext from "../../Components/Context/ShopContext";

const AddToCart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div>
      <MyNavbar />
      <div className="container">
        <div className="row">
          <div className="cartData">
            <div className="col-md-12 cart-heading">
              <h2>
                <FaOpencart /> Your Cart Items
              </h2>
            </div>
            <div className="card shadow mt-4" >

            
            <table className="cart-table ">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Delete/Add Item</th>
                </tr>
              </thead>
              <tbody>
                {foodItems.map((items) => {
                  if (cartItems[items.id] !== 0) {
                    return (
                      <tr key={items.id}>
                        <td>{items.resto_item}</td>
                        <td>
                          <input
                            type="text"
                            className="cart-input"
                            value={cartItems[items.id]}
                            onChange={(e) =>
                              updateCartItemCount(
                                Number(e.target.value),
                                items.id
                              )
                            }
                          />
                        </td>
                        <td>${items.price}</td>
                        <td>
                          <div className="d-flex">
                            {/* <button>
                              <MdDeleteForever />
                            </button> */}
                            <button
                              className="cart"
                              onClick={() => removeFromCart(items.id)}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="cart-input"
                              value={cartItems[items.id]}
                              onChange={(e) =>
                                updateCartItemCount(
                                  Number(e.target.value),
                                  items.id
                                )
                              }
                            />
                            <button
                              className="cart"
                              onClick={() => addToCart(items.id)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
            </div>
            <div className=" d-flex justify-content-end align-items-center mt-3">
              <div className="shadow d-flex align-items-center p-4 checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button className="cart-btn"> Continue Shopping</button>
                <button className="cart-btn"> Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
