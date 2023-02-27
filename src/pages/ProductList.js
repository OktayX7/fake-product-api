import {useProductContext} from "context";
import {getProducts} from "apis/product";
import {useState} from "react";
import {Loading} from "components/base";

import {useEffect} from "react";
import {ProductCard} from "components/blocks";

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

export const ProductList = () => {
  const {products, setProducts} = useProductContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        const products = response.map((item) => {
          const slug = slugify(item.category);
          return {...item, slug};
        });
        console.log(products);
        setProducts(products);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
};
