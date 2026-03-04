import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {

  //! GOAL: to show added items on the cart page
  //* Step1: Subscribing to the store
  const cartItems = useSelector((store:any)=> store.cart.items)


  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return(
    <div className="p-2 text-center ">
      <h1 className="font-bold text-2xl m-2 text-green-900 shadow-md">Cart</h1>

      {/* //* step2: using itemList UI by importing itemList component n passing cartItems to it */}
      <div className="w-6/12 m-auto">

        <button className="p-1 m-1 border-green-700 border-2 bg-slate-200 rounded-lg font-semibold hover:bg-gray-300"
                onClick={handleClearCart}>
          Clear Cart
        </button>
        

        {cartItems.length === 0 && (
          <h1 className="font-mono m-7">Your Cart is empty :( 
            <br/>
            <p>Tap on{" "}
              <Link to="/" className="font-bold underline text-green-900">HOME</Link> to view restaurants.</p>
          </h1>
        )}

        <ItemList items={cartItems}/>
      </div>
    </div>
  )
    
}

export default Cart;