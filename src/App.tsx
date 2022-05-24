import React from "react";
import "./app.css";
import RandomUser from "./RandomUser";

import { Rootprovider } from "./context/RootContext";

function App() {
  return (
    <Rootprovider>
      <div className="main">
        <RandomUser />
      </div>
    </Rootprovider>
  );
}

export default App;
