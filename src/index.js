// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.scss";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "macro-css";
// import store from "./redux/store";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>
// );

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "macro-css";
import App from "./App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
