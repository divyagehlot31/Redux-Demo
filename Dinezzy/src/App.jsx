
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import './App.css'
// import { Provider } from "react-redux";
// import store from "./redux/store";
import { IntlProvider } from "react-intl";
import en from "../src/Local/messages/en-Us.json";
import ja from "../src/Local/messages/japanese.json";
import { useSelector } from "react-redux";
import hi from "../src/Local/messages/hindi.json";
import ga from "../src/Local/messages/german.json";


const messages = {
  en,
  ja,
  hi,
  ga
};

// const locale = "ja";

const App = () =>{

  const locale = useSelector((state) => state.language.locale);

return(
   <IntlProvider locale={locale} messages={messages[locale]}>

        <RouterProvider router={router} />
        </IntlProvider>
)
   
}


export default App;