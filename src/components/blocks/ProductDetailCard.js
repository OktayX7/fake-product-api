import {Badge, Button} from "components/base";
import {useThemeContext} from "context";

export const ProductDetailCard = ({product}) => {
  const {theme} = useThemeContext();
  return (
    <div className={`card mb-3 text-bg-${theme} ${theme === "dark" ? "border-success" : "border-dark"}`}>
      <img
        src={product.image}
        className="card-img-top img-fluid my-3 d-block mx-auto"
        alt={product.title}
        style={{width: "15rem", height: "15rem"}}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          {product.description.length > 200 ? product.description.substring(0, 200) + "..." : product.description}
        </p>
        <p className="card-text text-end">{`Price: ${product.price}$`}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Badge variant="warning" className="p-2 me-2">
              {`Count: ${product.rating.count}`}
            </Badge>
            <Badge variant="primary" className="p-2">
              {` Rate: ${product.rating.rate}`}
            </Badge>
          </div>
          <Button variant="success">Add to Basket</Button>

          {/* <Link to={`/product/${product.id}`}>
              <Badge text="View" />
            </Link> */}
        </div>
      </div>
    </div>
  );
};
