import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Components/App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase"

ReactDOM.render(
  <div>
  <FirebaseContext.Provider value={{firebase, FieldValue}} />
  <App />,
  </FirebaseContext.Provider>
  </div>

  document.getElementById("root")
);
