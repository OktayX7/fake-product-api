import {Badge, Button} from "components/base";
import {useThemeContext, useBasketContext} from "context";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {ifElse, addToBasket} from "function";
export const ProductCard = ({product}) => {
  const {theme} = useThemeContext();
  const {basket, setBasket} = useBasketContext();
  const {category} = useParams();
  return (
    <div className="col-md-6 col-lg-4 ">
      <div
        className={`card mb-3 text-bg-${theme} ${ifElse.ternary({
          condition: theme === "dark",
          ifTrue: "border-primary",
          ifFalse: "border-success",
        })}`}>
        <img
          src={product.image}
          className="card-img-top img-fluid my-3 d-block mx-auto"
          alt={product.title}
          style={{width: "15rem", height: "15rem"}}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{product.title}</h5>
          <p className="card-text">
            {product.description.length > 200 ? product.description.substring(0, 200) + "..." : product.description}
          </p>
          <p className="card-text text-end">{`Price: ${product.price}$`}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Badge variant="warning" className="p-2 mb-2 me-2 mb-xxl-0">
                {`Count: ${product.rating.count}`}
              </Badge>
              <Badge variant="primary" className="p-2">
                {` Rate: ${product.rating.rate}`}
              </Badge>
            </div>

            <Link
              to={ifElse.ternary({
                condition: category,
                ifTrue: `${product.id}`,
                ifFalse: `${product.slug}/${product.id}`,
              })}>
              <Button className="me-md-4 me-xxl-0" variant="primary">
                Detail
              </Button>
            </Link>
            <Button
              variant="success"
              onClick={() => {
                basket.find((item) => item.id === product.id)
                  ? setBasket(
                      basket.map((item) => (item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
                    )
                  : addToBasket(product, basket, setBasket);
              }}>
              Add to Basket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
