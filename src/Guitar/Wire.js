import React from 'react';
import PropTypes from 'prop-types';

const PressedWire = (
  <div style={{
      position: 'relative',
      display: 'inline-block',
      margin: '0px 1px',
      width: 10,
      height: '100%',
      textAlign: 'center'
    }}>
    <span style={{
      display: 'inline-block',
      backgroundColor: '#d1d1cf',
      width: 2,
      height: '100%'
    }}></span>

    <span style={{
      position: 'absolute',
      top: 'calc(50% - 6px)',
      left: 'calc(50% - 6px)',
      display: 'inline-block',
      backgroundColor: 'white',
      borderRadius: '50%',
      width: 12,
      height: 12
    }}></span>

    <span style={{
      position: 'absolute',
      top: 'calc(50% - 4px)',
      left: 'calc(50% - 4px)',
      display: 'inline-block',
      backgroundColor: 'black',
      borderRadius: '50%',
      width: 8,
      height: 8
    }}></span>
  </div>);

const ReleasedWire = (
  <div style={{
      position: 'relative',
      display: 'inline-block',
      margin: '0px 1px',
      width: 10,
      height: '100%',
      textAlign: 'center'
    }}>
    <span style={{
      display: 'inline-block',
      backgroundColor: '#d1d1cf',
      width: 2,
      height: '100%'
    }}></span>
  </div>);

const Wire = ({ pressed }) => {
  if(pressed) return PressedWire;
  return ReleasedWire;
};

Wire.propTypes = {
  pressed: PropTypes.bool,
}

export default Wire;
