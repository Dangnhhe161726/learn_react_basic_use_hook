import logo from './logo.svg';
import './App.css';
import { Nav } from "./views/Header/Nav";
import { Home } from './views/Body/HomePage/Home';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ListPokemon } from "./views/Body/Pokemon/ListPokemon"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <Home /> */}
        <ListPokemon />
      </header>
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
    </div>
  );
}

export default App;
