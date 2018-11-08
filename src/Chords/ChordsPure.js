import Chart from "../Chart";
import React from "react";
import _ from "lodash";
import styled from "styled-components";

const Link = styled.span`
  color: #7e9d91;
  cursor: pointer;
  white-space: pre;
`;

const OuterBox = styled.div`
  background-color: #1d2021;
  left: 0;
  margin: 0;
  width: 800px;
  height: calc(100vh - 4em);
  padding: 10px;
  position: fixed;
  z-index: 3;
  left: calc(50vw - 400px);
  top: 2em;
`;

const InnerBox = styled.div`
  height: 100%;
  background-color: #1d2021;
  /* border: 2px solid #ebb23f; */
  border: 2px solid #3c3836;
  display: flex;
  flex-direction: column;
`;

const ChordBox = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  /* border-top: 2px solid #ebb23f; */
  border-top: 2px solid #3c3836;
`;

const Chord = styled.div`
  color: #615851;
  margin: 10px 0;
  &:hover {
    color: #7e9d91;
  }
`;

const Cover = styled.div`
  background: #25282899;
  position: absolute;
  top: -100vh;
  bottom: -100vh;
  left: -100vw;
  right: -100vw;
`;

export default ({ chords, open, toggleOpen, setChord, drop, setDrop }) => (
  <Link onClick={toggleOpen}>
    {"   "}[change]
    {open ? (
      <React.Fragment>
        <Cover onClick={toggleOpen} />
        <OuterBox>
          <InnerBox>
            <ChordBox>
              {_.chain(chords)
                .drop(drop)
                .map(chord => (
                  <Chord>
                    <Chart chord={chord} onClick={() => setChord(chord)} />
                  </Chord>
                ))
                .take(21)
                .value()}
            </ChordBox>
            <Controls>
              <Link
                onClick={e => {
                  e.stopPropagation();
                  setDrop(Math.max(0, drop - 21));
                }}
              >
                [previous]
              </Link>
              <span>
                {Math.floor(drop / 21) + 1}/{Math.ceil(chords.length / 21)}{" "}
                pages.
              </span>
              <Link
                onClick={e => {
                  console.log("click");
                  e.stopPropagation();
                  setDrop(Math.min(chords.length - 21, drop + 21));
                }}
              >
                [next]
              </Link>
            </Controls>
          </InnerBox>
        </OuterBox>
      </React.Fragment>
    ) : null}
  </Link>
);
