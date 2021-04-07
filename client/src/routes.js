import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Layout from "./hoc/layout";
import Auth from ".//hoc/auth";
import Register from "./component/Register_login/register";
import Login from "./component/Register_login/login";
import DialogSuccess from "./component/Register_login/dialogSuccess";
import UserDashboard from "./component/User/index";
import Shop from "./component/Shop";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route path="/test" exact component={DialogSuccess} />
      </Switch>
    </Layout>
  );
};

export default Routes;
