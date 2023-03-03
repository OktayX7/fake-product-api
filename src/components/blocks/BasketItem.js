import React from "react";
import {Button} from "components/base";
import {useBasketContext} from "context";

export const BasketItem = ({product}) => {
  const {basket, setBasket} = useBasketContext();
  return (
    <div>
      <div className="w-80 p-3 mx-auto my-3 border">
        <div className="d-flex align-items-center gap-4">
          <img src={product.image} alt={product.title} width={40} className="img-thumbnail" />
          <p className="fw-bold">{product.title}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-bold mt-1 mb-0">{`Price : ${product.price}$`}</p>
          <Button
            onClick={() => {
              setBasket(basket.filter((item) => item.id !== product.id));
            }}
            variant="danger"
            className="me-2 w-23 h-5 p-0">
            Remove
          </Button>
          <div className="d-flex align-items-center">
            <Button
              onClick={() => {
                setBasket(
                  basket.map((item) => (item.id === product.id ? {...item, quantity: item.quantity - 1} : item))
                );

                product.quantity === 1 && setBasket(basket.filter((item) => item.id !== product.id));
              }}
              variant="secondary"
              className="rounded-5 px-2 py-0">
              -
            </Button>
            <p className="fw-bold m-0 mx-2">{product.quantity}</p>
            <Button
              onClick={() => {
                setBasket(
                  basket.map((item) => (item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
                );
              }}
              variant="secondary"
              className="rounded-5 px-2 py-0">
              +
            </Button>
          </div>
        </div>
      </div>

      <p className="fw-bold mb-0">
        <span>Total :</span>
        <span className="text-danger ms-2">{`${product.price * product.quantity}$`}</span>
      </p>
      <hr className="dropdown-divider" />
    </div>
  );
};
