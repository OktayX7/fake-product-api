import {Routes, Route} from "react-router-dom";

//layout
import {MasterLayout, ProductLayout} from "layout";

//pages
import {Home, ProductList, ProductDetail, Categories} from "pages";

//context
import {ProductContext, ThemeContext, BasketContext} from "context";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BasketContext>
            <ThemeContext>
              <ProductContext>
                <MasterLayout />
              </ProductContext>
            </ThemeContext>
          </BasketContext>
        }>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<ProductList />} />
          <Route path=":category" element={<Categories />} />
          <Route path=":category/:id" element={<ProductDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
