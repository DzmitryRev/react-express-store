import { BrowserRouter, Route } from "react-router-dom";
import LoadingBox from "./components/LoadingBox";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazon
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path={"/product/:id"} component={ProductScreen} exact></Route>
          <Route path={"/"} component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All rigth reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
