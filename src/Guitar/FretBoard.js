import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Fret from './Fret';

const Chords = {
  'C': [['B'], ['D'], ['A']],
  'Cmaj7': [[], [], [], [], [], [], [], ['B', 'E'], ['G', 'D']],
  'D': [[], ['e', 'G'], ['B']],
  'G': [[], ['A'], ['e', 'E']],
  'F#': [[], ['|'], ['G'], ['D', 'A']],
  'B6': [[], [], [], [], [], [], [], [], [], [], ['|'], ['B'], ['D']],
};

const FretHeader = styled.div`
  position: relative;
  color: #f66157;
  font-weight: bold;
  font-family: "Source Code Pro";

  &:before {
    content: '${prop => prop.number}';
    position: absolute;
    top: 10px;
    right: 85%;
  }

  &:after {
    content: '${prop => prop.chord}';
    position: absolute;
    top: 10px;
    left: 90%;
  }
`;

const FretBoard = ({ chord }) => {
  if(!Chords[chord]) return null;

  return (
    <div style={{ display: 'inline-block', width: 100, verticalAlign: "top", padding: '0px 30px' }}>
      <FretHeader chord={chord} />
      {Chords[chord].map((notes, idx) => <Fret notes={notes} number={(idx % 5 === 0 ? idx+1 : null)} />)}
    </div>
  )
};

FretBoard.propTypes = {
  chord: PropTypes.string.isRequired
}

export default FretBoard;
