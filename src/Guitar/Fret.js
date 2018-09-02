import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Wire from './Wire';

const FretWire = styled.div`
  position: relative;
  left: calc(50% - 36px);
  width: 72px;
  height: 2px;
  background-color: #d1d1cf;
  color: #f66157;
  font-weight: bold;
  font-family: "Source Code Pro";

  &:before {
    content: '${prop => prop.number}';
    position: absolute;
    top: 10px;
    right: 100%;
  }
`;

const Fret = ({ notes = [], number }) => {
  return (
    <div style={{
      height: 40,
      textAlign: 'center'
    }}>
      <FretWire number={number} />
      <Wire pressed={notes.includes('E') || notes.includes('|')} />
      <Wire pressed={notes.includes('A') || notes.includes('|')} />
      <Wire pressed={notes.includes('D') || notes.includes('|')} />
      <Wire pressed={notes.includes('G') || notes.includes('|')} />
      <Wire pressed={notes.includes('B') || notes.includes('|')} />
      <Wire pressed={notes.includes('e') || notes.includes('|')} />
    </div>
  )
};

Fret.propTypes = {
  notes: PropTypes.number.isRequired,
}

export default Fret;
