import React from "react";
import _ from "lodash";
import styled from "styled-components";
import DatGui, {
  DatBoolean,
  DatButton,
  DatColor,
  DatFolder,
  DatNumber,
  DatSelect,
  DatString
} from "react-dat-gui";
import "./react-dat-gui.css";

const Chord = styled.pre`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 1em 2em;
  vertical-align: top;
  border: 0 dashed black;
`;

const Chart = styled.pre`
  font-family: "Source Code Pro";
  text-align: center;
  padding-right: 4em;
`;

const Wire = styled.span`
  color: #333;
`;

const Finger = styled.span`
  color: #ccc;
  font-weight: bold;
`;

const Fingering = styled.span`
  color: #ccc;
`;

const Open = styled.span`
  color: #ccc;
  font-weight: bold;
`;

const Fret = styled.span`
  color: #ccc;
`;

const Name = styled.span`
  color: #ccc;
`;

const Controls = styled.div`
  width: 100%;
`;

export default ({ chord, name }) => {
  let min = _.chain(chord)
    .map(string => (_.isArray(string) ? string[0] : string))
    .reject(_.isNull)
    .min()
    .value();
  let max = _.chain(chord)
    .map(string => (_.isArray(string) ? string[0] : string))
    .reject(_.isNull)
    .max()
    .value();
  let frets = Math.max(5, max - min);

  return (
    <Chord>
      <Chart>
        {_.chain(new Array(frets))
          .fill()
          .map((_fret, fret) => fret + min)
          .map(fret => {
            return _.flatten([
              fret == min && min != 0 ? (
                <Fret>{_.pad(min, 2)}</Fret>
              ) : (
                <span>&nbsp;&nbsp;</span>
              ),
              _.chain(new Array(6))
                .fill()
                .map((_string, string) => {
                  return (_.isArray(chord[string])
                    ? chord[string][0]
                    : chord[string]) == fret ? (
                    fret == 0 ? (
                      <Open>○</Open>
                    ) : (
                      <Finger>●</Finger>
                    )
                  ) : fret == 0 ? (
                    <Wire>┬</Wire>
                  ) : (
                    <Wire>│</Wire>
                  );
                })
                .concat([
                  fret == min && name ? (
                    <span>
                      &nbsp;<Name>{name}</Name>
                    </span>
                  ) : name ? (
                    <span>{_.repeat(" ", name.length + 1)}</span>
                  ) : (
                    <span>&nbsp;</span>
                  )
                ])
                .value()
            ]);
          })
          .map(row => [
            row,
            <span>
              <br />&nbsp;&nbsp;
              <Wire>├┼┼┼┼┤</Wire>
              {name ? _.repeat(" ", name.length + 1) : " "}
              <br />
            </span>
          ])
          .flatten()
          .concat(
            "  ",
            _.chain(chord)
              .map(string => (
                <Fingering>{_.isArray(string) ? string[1] : " "}</Fingering>
              ))
              .value(),
            name ? _.repeat(" ", name.length + 1) : " "
          )
          .value()}
      </Chart>
      <Controls>
        <DatGui
          data={{
            root: "C",
            quality: "Major 7",
            voice: Math.random(),
            finger: Math.random(),
            gravity: Math.random(),
            isAwesome: true,
            feelsLike: "#CCCCCC"
          }}
          onUpdate={() => {}}
        >
          <DatSelect
            path="root"
            label="Root"
            options={[
              "C",
              "C#/Db",
              "D",
              "D#/Eb",
              "E",
              "F",
              "F#/Gb",
              "G",
              "G#/Ab",
              "A",
              "A#/Bb",
              "B"
            ]}
          />
          <DatSelect
            path="quality"
            label="Quality"
            options={["Major", "Minor", "Major 7", "Minor 7"]}
          />
          <br />
          <DatBoolean path="isAwesome" label="Linked?" />
          <br />
          <DatNumber
            path="voice"
            label="Voice leading"
            min={0}
            max={1}
            step={0.01}
          />
          <DatNumber
            path="finger"
            label="Playability"
            min={0}
            max={1}
            step={0.01}
          />
          <DatNumber
            path="gravity"
            label="Invertedness"
            min={0}
            max={1}
            step={0.01}
          />
        </DatGui>
      </Controls>
    </Chord>
  );
};
