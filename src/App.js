import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import store from './store/Store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
