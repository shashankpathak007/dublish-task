import { Route } from "react-router-dom";
import Container from "../components/container";

function CommonRoutes({ component: Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Container {...props}>
          <Component {...props} />
        </Container>
      )}
    />
  );
}

export default CommonRoutes;
