import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Product from "./pages/product";
import FooterContainer from "./containers/footerContainer";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/product" component={Product} />
      </Switch>
      <FooterContainer />
    </Provider>
  );
}

export default App;
