import React from "react";
import {Outlet} from "react-router";
import {CategoriesButton} from "components/blocks";

export const ProductLayout = () => {
  return (
    <>
      <CategoriesButton />
      <Outlet />
    </>
  );
};
