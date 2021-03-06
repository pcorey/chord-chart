import React, { Fragment } from "react";
import _ from "lodash";
import styled from "styled-components";

const FRET_SIZE = `4px`;

const Fretboard = styled.div`
  padding: 10px;
`;

const Fret = styled.div`
  height: ${FRET_SIZE};
  margin: 1px;
  line-height: 0;
`;

const NotNote = styled.div`
  background-color: #615851;
  height: ${FRET_SIZE};
  width: ${FRET_SIZE};
  display: inline-block;
  margin: 0 1px 0 0;
`;
const Note = styled.div`
  background-color: #ebb23f;
  height: ${FRET_SIZE};
  width: ${FRET_SIZE};
  display: inline-block;
  margin: 0 1px 0 0;
`;

export default ({ note, octave }) => (
  <Fretboard>
    {_.map(_.range(12), fret => (
      <Fret>
        {_.map(
          [40, 45, 50, 55, 59, 64],
          open =>
            (open + fret) % 12 == note &&
            (octave ? Math.floor((open + fret) / 12) == octave : true) ? (
              <Note />
            ) : (
              <NotNote />
            )
        )}
      </Fret>
    ))}
  </Fretboard>
);
