import {Footer, Header} from "components/blocks";
import {Outlet} from "react-router-dom";
import {useThemeContext} from "context";

export const MasterLayout = () => {
  const {theme} = useThemeContext();
  return (
    <main className={`text-bg-${theme}`}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
