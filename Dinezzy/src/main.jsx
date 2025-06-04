import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import store from "./redux/store";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <Profiler id="App" onRender={onRender}> */}

    <App />
    {/* </Profiler> */}
  </Provider>
    {/* <IntlProvider locale={locale} messages={messages[locale]}> */}
      {/* <App /> */}
    {/* </IntlProvider> */}
  </StrictMode>
);
