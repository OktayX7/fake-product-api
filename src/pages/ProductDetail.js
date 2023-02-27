import {useParams} from "react-router-dom";
import {getProduct} from "apis/product";
import {useEffect, useState} from "react";
import {ProductDetailCard} from "components/blocks";

export const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then((res) => {
      setProduct(res);
      console.log(res);
    });
  }, [id]);
  return (
    <div className="container">
      <div className="w-35 mx-auto">{product && <ProductDetailCard product={product} />}</div>
    </div>
  );
};
