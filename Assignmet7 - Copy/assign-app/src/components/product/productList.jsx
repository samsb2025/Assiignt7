import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const products = [
  { id: 1, name: "Product 1", price: 250 },
  { id: 2, name: "Product 2", price: 250 },
  { id: 3, name: "Product 3", price: 250 },
  { id: 4, name: "Product 4", price: 250 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
