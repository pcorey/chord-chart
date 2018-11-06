import React, { Fragment } from "react";
import _ from "lodash";
import styled from "styled-components";

const Chart = styled.pre`
  text-align: center;
  margin: 0;
`;

const Finger = styled.span`
  font-weight: bold;
`;

const Label = styled.span``;

const Wire = styled.span``;

const Fingering = styled.span``;

const getMinAndMax = chord =>
  _.chain(chord)
    .map(string => (_.isArray(string) ? string[0] : string))
    .reject(_.isNull)
    .thru(frets => ({
      min: _.min(frets) || 0,
      max: _.max(frets) || 0
    }))
    .value();

export default ({ chord, name, onClick, selected }) => {
  let { min, max } = getMinAndMax(chord);

  const buildFretRange = () => _.range(min, Math.max(max + 1, min + 5));

  const buildFretRows = frets =>
    _.map(frets, fret =>
      _.chain(_.range(chord.length))
        .map(
          string =>
            (_.isArray(chord[string]) ? chord[string][0] : chord[string]) ==
            fret ? (
              <Finger>{fret == 0 ? "○" : "●"}</Finger>
            ) : (
              <Wire>{fret == 0 ? "┬" : "│"}</Wire>
            )
        )
        .value()
    );

  const intersperseFretWire = rows =>
    _.flatMap(rows, row => [
      row,
      <Wire>{`├${_.repeat("┼", chord.length - 2)}┤`}</Wire>
    ]);

  const attachLeftGutter = rows =>
    _.map(rows, (row, i) => (
      <Fragment>
        <Label>
          {"  "}
          {i == 0 && min != 0 ? _.pad(min, 2) : "  "}
        </Label>
        {row}
      </Fragment>
    ));

  const attachRightGutter = rows =>
    _.map(rows, (row, i) => (
      <Fragment>
        {row}
        <Label>
          {i == 0 && name
            ? `     ${name}`
            : name ? `     ${_.repeat(" ", name.length)}` : "     "}
        </Label>
      </Fragment>
    ));

  const joinRows = rows =>
    _.map(rows, row => (
      <Fragment>
        {row}
        <br />
      </Fragment>
    ));

  const appendFingering = rows => [
    ...rows,
    <Fingering>
      {_.chain(chord)
        .map(
          fret => (_.isArray(fret) ? (_.isNull(fret[1]) ? " " : fret[1]) : " ")
        )
        .value()}
    </Fingering>
  ];

  return (
    <Chart onClick={() => onClick(chord, name)}>
      {_.chain()
        .thru(buildFretRange)
        .thru(buildFretRows)
        .thru(intersperseFretWire)
        .thru(appendFingering)
        .thru(attachLeftGutter)
        .thru(attachRightGutter)
        .thru(joinRows)
        .value()}
    </Chart>
  );
};
