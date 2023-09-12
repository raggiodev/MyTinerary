import React from "react";
import ReactDOM from "react-dom/client";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {Provider} from "react-redux";
// import {store} from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <GoogleOAuthProvider clientId={import.meta.env["VITE_GOOGLE_ID"]}>
        <App />
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </GoogleOAuthProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
