import Navbar from './generalcomponents/navbar';
import Produc from './productscomponents/products';
import Singpr from './productscomponents/singleprod';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={Produc} />
        <Route path="/singprod/:prodid" component={Singpr} />
        <Route path="/" exact>
          <Produc />
        </Route>
      </Switch>


    </Router>

  );
}

export default App;
