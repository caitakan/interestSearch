import * as React from "react";
import * as ReactDOM from "react-dom";
import { Fabric } from "office-ui-fabric-react";
import Layout from "./containers/LayoutContainer"
import { Hello } from "./components/Hello";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import fetchUser from "./reducers/LayoutReducer";
import { StoreState } from "./models/RootState";

import "./index.css";

const store = createStore<StoreState>(
  fetchUser,
  {
    auth: {
      email: "",
      name: "",
      googleID: ""
    }
  },
  applyMiddleware(reduxThunk)
);


ReactDOM.render(
  <Provider store={store}>
    <Fabric>
      <Layout actions={null} />
    </Fabric>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
