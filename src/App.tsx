import React from "react";
import "./app.css";
import RandomUser from "./RandomUser";
import { Provider } from "react-redux";
import { Rootprovider } from "./services/RootContext";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Rootprovider>
        <div className="main">
          <RandomUser />
        </div>
      </Rootprovider>
    </Provider>
  );
}

export default App;
