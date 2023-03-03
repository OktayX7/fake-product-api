// import {useBasketContext} from "context";
import {useThemeContext, useBasketContext} from "context";
import {Button} from "components/base";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/js/dist/offcanvas";
import {BasketItem} from "./BasketItem";
import {getTotalBasket, getTotalBasketCount} from "function";

export const Basket = () => {
  const {basket} = useBasketContext();
  const {theme} = useThemeContext();
  // <hr className="dropdown-divider" />

  return (
    <>
      <Button
        variant="success"
        className="position-fixed bottom-0 start-0 m-3"
        atribute={{dataBsToggle: "offcanvas", dataBsTarget: "#shoppingCart"}}>
        <FontAwesomeIcon icon={faCartShopping} />
      </Button>
      <section className={`offcanvas offcanvas-end shopping-cart text-bg-${theme} `} id="shoppingCart">
        {basket && basket.map((item) => <BasketItem key={item.id} product={item} />)}

        <div className="d-flex justify-content-between align-items-center container ">
          <p className="fw-bold">{`Total Product Count : ${getTotalBasketCount(basket)}`}</p>
          <p className="fw-bold">{`Total Price : ${getTotalBasket(basket)}$`}</p>
        </div>
        <Button variant="warning" className="">
          Clear Basket
        </Button>
      </section>
    </>
  );
};
