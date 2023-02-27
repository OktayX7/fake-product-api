import {Link} from "react-router-dom";
import {Button} from "components/base";
import {useThemeContext} from "context";

export const CategoriesButton = () => {
  const categories = [
    {
      id: 1,
      path: "mens-clothing",
      text: "Mens Clothing",
    },
    {
      id: 2,
      path: "jewelery",
      text: "Jewelery",
    },
    {
      id: 3,
      path: "electronics",
      text: "Electronics",
    },
    {
      id: 4,
      path: "womens-clothing",
      text: "Women Clothing",
    },
  ];

  const {theme} = useThemeContext();

  return (
    <div className="my-5">
      <Link to="/products" className="d-block text-center">
        <Button variant="success" className="text-white w-25">
          All Products
        </Button>
      </Link>
      <div className="d-flex flex-column align-items-center flex-md-row justify-content-center gap-2 mt-3">
        {categories.map((category) => {
          return (
            <Link to={`${category.path}`} key={category.id}>
              <Button variant={theme === "dark" ? "primary" : "success"} className="text-white">
                {category.text}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
