import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authServices";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      path={path}
      render={(props) => {
        if (!auth.getCurrentUser()) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
                // search: "?utm=your+face",
              }}
            />
          );
        } else {
          return Component ? <Component {...props} /> : render(props);
        }
      }}
      {...rest}
    />
  );
};

export default ProtectedRoute;
