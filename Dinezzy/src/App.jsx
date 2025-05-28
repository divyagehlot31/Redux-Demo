
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import './App.css'


const App = () =>(
  // <Provider store={store}>
 
        <RouterProvider router={router} />
    
  //  </Provider>

  )


export default App;