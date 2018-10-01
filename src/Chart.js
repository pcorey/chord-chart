import React, { Fragment } from "react";
import _ from "lodash";
import styled from "styled-components";

const Chart = styled.pre`
  font-family: "Source Code Pro";
  text-align: center;
`;

const Finger = styled.span`
  font-weight: bold;
`;

const Label = styled.span``;

const Wire = styled.span``;

export default ({ chord, name }) => {
  let { min, max } = _.chain(chord)
    .map(string => (_.isArray(string) ? string[0] : string))
    .reject(_.isNull)
    .thru(frets => ({
      min: _.min(frets),
      max: _.max(frets)
    }))
    .value();

  const getFretRange = () => _.range(min, Math.max(max + 1, min + 5));

  const buildFretRow = frets =>
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
        <Label>{i == 0 && min != 0 ? _.pad(min, 2) : "  "}</Label>
        {row}
      </Fragment>
    ));

  const attachRightGutter = rows =>
    _.map(rows, (row, i) => (
      <Fragment>
        {row}
        <Label>
          {i == 0 && name
            ? ` ${name}`
            : name ? ` ${_.repeat(" ", name.length)}` : " "}
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

  return (
    <Chart>
      {_.chain()
        .thru(getFretRange)
        .thru(buildFretRow)
        .thru(intersperseFretWire)
        .thru(attachLeftGutter)
        .thru(attachRightGutter)
        .thru(joinRows)
        .value()}
    </Chart>
  );
};
