import ApolloClient from "apollo-boost";
import Chord from "./Chord";
import Header from "./Header";
import React, { Component } from "react";
import _ from "lodash";
import presets from "./presets";
import styled from "styled-components";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/api/graphql"
});

const App = styled.div`
  max-width: 800px;
  margin: 40px auto;
`;

export default () => (
  <App>
    <ApolloProvider client={client}>
      <Header />
      <Chord presets={presets} />
    </ApolloProvider>
  </App>
);
