import './App.scss';
import { Nav } from "./views/Header/Nav";
import { Home } from './views/Body/HomePage/Home';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ListPokemon } from "./views/Body/Pokemon/ListPokemon";
import { CountDown, CountDownUseHook } from './views/Body/CountDown/CountDown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Blogs, BlogDetail } from './views/Body/Blogs/Blogs';
import { NoMatch } from './views/Body/ErrorRouter/NoMatch';
import { Youtube } from './views/Body/Youtube/Youtube';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/watch" >
              <Youtube />
            </Route>
            <Route path="/blogs/:id" exact>
              <BlogDetail />
            </Route>
            <Route path="/blogs" exact>
              <Blogs />
            </Route>
            <Route path="/count-down-hook">
              <CountDownUseHook />
            </Route>
            <Route path="/count-down-class">
              <CountDown />
            </Route>
            <Route path="/list-pokemon">
              <ListPokemon />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <ToastContainer
            position="top-right"
            autoClose={3000}
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
