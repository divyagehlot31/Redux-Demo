
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import './App.css'
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () =>(
  <Provider store={store}>
 
        <RouterProvider router={router} />
    
  </Provider>

  )


export default App;