import React from "react";
import {Outlet} from "react-router";
import {CategoriesButton, Basket} from "components/blocks";

export const ProductLayout = () => {
  return (
    <>
      <CategoriesButton />
      <Outlet />
      <Basket />
    </>
  );
};
