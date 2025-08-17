
import { Card } from "react-bootstrap";

function Card() {
  return (
    <div class="container">
      <div class="row">
         {products.map(product => (
        <div class="col-lg-3 mb-5">
          <div class="card" style="width: 15rem">
            <div class="card-body">
              <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
              <h5 class="card-title">Product 1</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <p>Price $ 250</p>
              <button
                type="button"
                class="btn btn-primary"
                data-id="1"
                data-name="product-1"
                data-price="250"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
         ))
}
      </div>
    </div>
  );
}

export default Card;
