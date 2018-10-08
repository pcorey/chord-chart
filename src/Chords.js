import Chord from "./Chord";
import React from "react";
import _ from "lodash";
import gql from "graphql-tag";
import styled from "styled-components";
import { Query } from "react-apollo";

export default () => (
  <Query
    query={gql`
      {
        chords
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return "Loading...";
      } else if (error) {
        return error.toString();
      }
      console.log(data.chords.length);
      return _.chain(data)
        .get("chords", [])
        .map(chord => <Chord chord={chord} />)
        .value();
    }}
  </Query>
);
