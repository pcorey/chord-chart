import React from "react";
import _ from "lodash";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export default ({ children, notes, from }) => (
  <Query
    query={gql`
      query chord($required: [Int], $optional: [Int], $from: InputChord) {
        chords(required: $required, optional: $optional, from: $from) {
          name
          frets
          fingerings
        }
      }
    `}
    variables={{
      required: _.chain(notes)
        .reject(_.isArray)
        .value(),
      optional: _.chain(notes)
        .filter(_.isArray)
        .map(([_, note]) => note),
      from
    }}
  >
    {({ loading, error, data }) => children({ loading, error, data })}
  </Query>
);
