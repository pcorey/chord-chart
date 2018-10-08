import "./App.css";
import ApolloClient from "apollo-boost";
import Chord from "./Chord";
import Chords from "./Chords";
import React, { Component } from "react";
import _ from "lodash";
import styled from "styled-components";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/api/graphql"
});

const App = styled.div`
  font-size: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-flow: row wrap;
  max-width: 800px;
  margin: 40px auto;
`;

const randomChord = chord => (
  <Chord
    chord={_.chain(_.range(0, 6))
      .map(string => _.random(-4, 4, false))
      .map(fret => (fret >= 0 ? fret : null))
      .thru(chord => {
        let offset = _.random(0, 7, false);
        return _.map(chord, fret => (fret == null ? fret : fret + offset));
      })
      .tap(console.log)
      .value()}
  />
);

export default () => (
  <App>
    <ApolloProvider client={client}>
      <strong
        style={{
          width: "100%",
          fontFamily: "Source Code Pro",
          textAlign: "center",
          margin: "0 0 40px 0",
          fontSize: "16px"
        }}
      >
        Cmaj7 (0 4 7 11)
      </strong>
      <br />
      <Chords />
    </ApolloProvider>
  </App>
);
