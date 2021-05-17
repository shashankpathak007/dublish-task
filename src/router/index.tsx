import { ThemeProvider } from "@material-ui/core";
import { theme } from "../themeCustomize/theme";
import { BrowserRouter, Switch } from "react-router-dom";
import CommonRoutes from "./commonRoutes";
import HomePage from "../screens/homePage";
import Category from "../components/category";
import CategoryDetail from "../components/category/categoryDetail";

function Router() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <CommonRoutes exact path="/" component={HomePage} />
            <CommonRoutes
              exact
              path="/category/:dealerId/:branchId"
              component={Category}
            />
            <CommonRoutes
              exact
              path="/categoryDetail/:dealerId/:branchId/:categoryId"
              component={CategoryDetail}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default Router;
