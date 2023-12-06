import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state/index.js";
import { Provider } from "react-redux";
import { api } from "./state/api.js";
import { authApi } from "./state/authApi.js";
import { eventApi } from "./state/eventApi.js";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(
      api.middleware,
      authApi.middleware,
      eventApi.middleware
    ),
});

setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
