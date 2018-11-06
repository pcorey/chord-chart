import ApolloClient from "apollo-boost";
import Chord from "./Chord";
import React, { Component } from "react";
import _ from "lodash";
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
      <Chord
        chord={[null, [10, 2], [10, 3], [8, 1], [12, 4], null]}
        notes={[0, 3, ["optional", 7], 71]}
      />
    </ApolloProvider>
  </App>
);
