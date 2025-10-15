import { IoIosCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { type ProductType } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Navbar(): React.ReactNode {
  const products: ProductType[] = useSelector((state: any) => state.cart.items);
  const totalPrices: number = products.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <nav className="sticky top-0 bg-blue-800 text-white py-3 select-none mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left">
          <h2 className="logo text-xl font-bold cursor-pointer">
            <Link to="/">Redux-Toolkit</Link>
          </h2>
        </div>
        <div className="middle text-white bg-yellow-600 font-bold py-2 px-4 rounded">
          <p>Cart Items Total Price: {totalPrices} ₹</p>
        </div>
        <Link to="/cart" className="inline-block">
          <div className="right bg-blue-500 p-1.5 rounded relative">
            <IoIosCart className="text-2xl" />
            <span className="badge absolute -top-[5px] -right-[5px] bg-red-500 rounded-full min-w-4 min-h-4 flex justify-center items-center font-bold text-[10px]">
              {products.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
