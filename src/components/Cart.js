import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () =>{
    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-bold p-4 m-4 text-2xl">Cart</h1>
            {items.length === 0 ?<h1>Cart is empty. Please add something</h1> :
            <button className="bg-black px-2 my-2 rounded text-white"
            onClick={handleClearCart}
            >Clear Cart</button>
            }
            
            <div className="w-6/12">
            <ItemList items={items}/>
            </div>
        </div>
    )
}

export default Cart;