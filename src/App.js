import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./component/Cart";

function App() {
  return (
    <Provider store={store}>
      <Cart />
      <div className="app-logo-cover">
      <div className="App-logo">
         aman
      </div>
      </div>
    </Provider>
  );
}

export default App;
