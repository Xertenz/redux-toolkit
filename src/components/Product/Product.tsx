import { useDispatch } from "react-redux";
import { addToCart, type ProductType } from "../../redux/cartSlice";

export default function Product({
  product,
  inCart,
}: {
  product: ProductType;
  inCart: boolean;
}): React.JSX.Element {
  const dispatch = useDispatch();

  const addToCartHandler = (product: ProductType) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product text-center flex flex-col">
      <img className="max-w-full m-auto" src={product.imgSrc} />
      <div className="product-info p-7">
        <h3 className="product-title mb-2 font-bold text-xl">
          {product.title}
        </h3>
        <p className="mb-2">{product.description}</p>
        <div className="buttons flex justify-center gap-3">
          <button className="rounded bg-blue-500 text-white px-4 py-1.5">
            {product.price} ₹
          </button>
          {!inCart ? (
            <button
              onClick={() => addToCartHandler(product)}
              className="rounded bg-yellow-600 hover:bg-yellow-700 transition-colors text-white px-4 py-1.5 cursor-pointer"
            >
              Add to Cart
            </button>
          ) : (
            <button className="rounded bg-yellow-600 hover:bg-yellow-700 transition-colors text-white px-4 py-1.5 cursor-pointer">
              Buy now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
