import { useDispatch, useSelector } from "react-redux";
import type { ProductType } from "../../redux/cartSlice";
import Product from "../Product/Product";
import { clearCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Cart(): React.JSX.Element {
  const productsInCart: ProductType[] = useSelector(
    (state: any) => state.cart.items
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    console.log(productsInCart);

    dispatch(clearCart());
    toast("Cart has been cleared");
  };

  return (
    <section className="wrapper px-8 sm:px-0 mb-10">
      <div className="container mx-auto">
        {productsInCart.length > 0 ? (
          <div>
            <div className="products mb-8">
              {productsInCart.map((product) => (
                <Product product={product} inCart={true} key={product.id} />
              ))}
            </div>
            <div className="clear-cart text-center">
              <button
                onClick={clearCartHandler}
                className="bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer capitalize text-white px-4 py-2 rounded"
              >
                clear cart
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-red-500 capitalize font-bold mb-4">
              No items in the cart
            </p>
            <button
              onClick={() => navigate("/")}
              className="rounded bg-yellow-600 hover:bg-yellow-700 transition-colors text-white px-4 py-1.5 cursor-pointer"
            >
              Continue Shopping...
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
