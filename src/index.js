import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";

import { client } from "./apollo";
import { Routes } from "./routes";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);

