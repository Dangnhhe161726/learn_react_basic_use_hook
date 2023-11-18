import './App.css';
import { Nav } from "./views/Header/Nav";
import { Home } from './views/Body/HomePage/Home';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ListPokemon } from "./views/Body/Pokemon/ListPokemon";
import { CountDown, CountDownUseHook } from './views/Body/CountDown/CountDown';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <Home /> */}
        {/* <ListPokemon /> */}
        <CountDown />
        <CountDownUseHook />
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
