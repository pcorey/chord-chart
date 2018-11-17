import React from "react";
import _ from "lodash";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export default ({
  children,
  notes,
  from,
  fluidity = 1,
  playability = 1,
  invertedness = 1,
  spread = 1,
  reach = 1,
  allowOpen = true,
  setLoading
}) => (
  <Query
    query={gql`
      query chord(
        $required: [Int]
        $optional: [Int]
        $from: InputChord
        $fluidity: Float
        $playability: Float
        $invertedness: Float
        $spread: Float
        $reach: Float
      ) {
        chords(
          required: $required
          optional: $optional
          from: $from
          fluidity: $fluidity
          playability: $playability
          invertedness: $invertedness
          spread: $spread
          reach: $reach
        ) {
          score
          chord
        }
      }
    `}
    variables={{
      required: _.chain(notes)
        .reject(_.isArray)
        .value(),
      optional: _.chain(notes)
        .filter(_.isArray)
        .filter(([option, _note]) => option == "optional")
        .map(([_, note]) => note),
      highest: _.chain(notes)
        .filter(_.isArray)
        .filter(([option, _note]) => option == "highest")
        .map(([_, note]) => note),
      lowest: _.chain(notes)
        .filter(_.isArray)
        .filter(([option, _note]) => option == "lowest")
        .map(([_, note]) => note),
      from,
      fluidity,
      playability,
      invertedness,
      spread,
      reach
    }}
  >
    {({ loading, error, data }) => {
      setLoading(loading);
      return children({ loading, error, data });
    }}
  </Query>
);
