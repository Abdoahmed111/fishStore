import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Product from "./pages/product";
import FooterContainer from "./containers/footerContainer";
import store from "./store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import firebase from "./firebase";

function App() {
  useEffect(() => {
    const messaging = firebase.messaging();
    Notification.requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) =>
        window.localStorage.setItem("device_token", JSON.stringify(token))
      )
      .catch((error) => console.log(error));
  }, []);

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
