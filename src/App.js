import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import HomePage from "./pages/homepage.page";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
