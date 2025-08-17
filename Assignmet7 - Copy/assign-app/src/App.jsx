import ProductList from "./components/product/productList.jsx";
import Cart from "./components/cart/cart.jsx";
import { Card } from "react-bootstrap";

function App() {
  return (
    <div>
      <ProductList />
      <Cart />
      <Card />
    </div>
  );
}

export default App;
