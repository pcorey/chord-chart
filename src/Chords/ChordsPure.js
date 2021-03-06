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
  height: 60vh;
  padding: 10px;
  position: fixed;
  z-index: 3;
  left: calc(50vw - 400px);
  top: 20vh;
`;

const InnerBox = styled.div`
  height: 100%;
  background-color: #1d2021;
  border: 2px solid #3c3836;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
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

export default ({ chords, open, toggleOpen, setChord }) => (
  <Link onClick={toggleOpen}>
    {"   "}[change]
    {open ? (
      <React.Fragment>
        <Cover onClick={toggleOpen} />
        <OuterBox>
          <InnerBox>
            {_.chain(chords)
              .map(chord => (
                <Chord>
                  <Chart chord={chord} onClick={() => setChord(chord)} />
                </Chord>
              ))
              .value()}
          </InnerBox>
        </OuterBox>
      </React.Fragment>
    ) : null}
  </Link>
);
