import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import { Route, Switch } from "react-router-dom";


function HatPage() {
  return <h1>HATS PAGE</h1>;
}

function JacketPage() {
  return <h1>JACKET PAGE</h1>;
}

function App() {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/hats" component={HatPage} />
        <Route path="/jackets" component={JacketPage} />
      </Switch>
  );
}

export default App;
