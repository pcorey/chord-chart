import React from "react";
import _ from "lodash";

const getNoteName = note => {
  let value = _.isArray(note) ? note[1] : note;
  switch (value % 12) {
    case 0:
      return "C";
    case 1:
      return "C♯/D♭";
    case 2:
      return "D";
    case 3:
      return "D♯/E♭";
    case 4:
      return "E";
    case 5:
      return "F";
    case 6:
      return "F♯/G♭";
    case 7:
      return "G";
    case 8:
      return "G♯/A♭";
    case 9:
      return "A";
    case 10:
      return "A♯/B♭";
    case 11:
      return "B";
  }
};

const getNoteOctave = note => {
  let pitch = _.isArray(note) ? note[1] : note;
  if (pitch > 120) {
    return "9";
  } else if (pitch > 107) {
    return "8";
  } else if (pitch > 95) {
    return "7";
  } else if (pitch > 83) {
    return "6";
  } else if (pitch > 71) {
    return "5";
  } else if (pitch > 59) {
    return "4";
  } else if (pitch > 47) {
    return "3";
  } else if (pitch > 35) {
    return "2";
  } else if (pitch > 23) {
    return "1";
  } else {
    return "";
  }
};

const getNoteOption = optional => (optional ? "(?)" : "");

export default ({ note, optional }) => (
  <span>
    {getNoteName(note)}
    {getNoteOption(optional)}
    {getNoteOctave(note)}
  </span>
);
