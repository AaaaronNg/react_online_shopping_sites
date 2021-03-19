import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Layout from "./hoc/layout";
import RegisterLogin from "./component/Register_login";
import Register from "./component/Register_login/register";
import Login from "./component/Register_login/login";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/test" exact component={RegisterLogin} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Layout>
  );
};

export default Routes;
