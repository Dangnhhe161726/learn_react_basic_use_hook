import './App.css';
import { Nav } from "./views/Header/Nav";
import { Home } from './views/Body/HomePage/Home';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ListPokemon } from "./views/Body/Pokemon/ListPokemon";
import { CountDown, CountDownUseHook } from './views/Body/CountDown/CountDown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/count-down-hook">
              <CountDownUseHook />
            </Route>
            <Route path="/count-down-class">
              <CountDown />
            </Route>
            <Route path="/list-pokemon">
              <ListPokemon />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </header>

      </div>
    </Router>
  );
}

export default App;
