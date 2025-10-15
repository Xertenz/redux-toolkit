import { Products as products } from "../../data";
import "./Products.scss";
import Product from "../Product/Product";

export default function Products(): React.ReactNode {

  return (
    <section className="wrapper px-8 sm:px-0 mb-10">
      <div className="container mx-auto">
        <div className="products">
          {products.map((product) => <Product product={product} inCart={false} key={product.id} />)}
        </div>
      </div>
    </section>
  );
}
