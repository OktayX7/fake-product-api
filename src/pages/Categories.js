import React from "react";
import {useParams} from "react-router-dom";
import {useProductContext} from "context";
import {ProductCard} from "components/blocks";

export const Categories = () => {
  const {category} = useParams();
  const {products} = useProductContext();

  const categoryProducts = products.filter((item) => {
    return item.slug === category;
  });

  return (
    <div className="container">
      <div className="row">
        {categoryProducts.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
};
