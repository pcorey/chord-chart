import Dropdown from "../Dropdown";
import Fretboard from "../Fretboard";
import Note from "../Note";
import NoteName from "./NoteName";
import React from "react";
import _ from "lodash";
import styled from "styled-components";

const Left = styled.div``;

const Right = styled.div`
  flex: 1;
`;

const Link = styled.span`
  color: #7e9d91;
  cursor: pointer;
  position: relative;
`;

const Info = styled.span`
  color: #615851;
  display: block;
  &:hover {
    color: #7e9d91;
  }
`;

const Label = styled.span`
  color: #aeb036;
  color: #ebb23f;
`;

const Cover = styled.div`
  background: #25282899;
  position: absolute;
  top: -100vh;
  bottom: -100vh;
  left: -100vw;
  right: -100vw;
`;

const InputRow = styled.div`
  margin: 10px;
`;

const OuterBox = styled.div`
  background-color: #1d2021;
  left: 0;
  margin: 10px;
  min-width: 100%;
  padding: 10px;
  position: absolute;
  z-index: 3;
`;

const InnerBox = styled.div`
  background-color: #1d2021;
  border: 2px solid #3c3836;
  white-space: nowrap;
  outline: none;
  &:focus {
    border: 2px solid #ebb23f;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  & > *:first-of-type {
    flex: 1;
  }
  & > * {
    margin: 10px;
  }
`;

export default class extends React.Component {
  componentDidUpdate() {
    this.ref && this.ref.focus();
  }

  render() {
    let {
      open,
      toggleOpen,
      note,
      setNote,
      option,
      setOption,
      octave,
      setOctave,
      originalNote,
      originalOption,
      onRemove,
      onUpdate
    } = this.props;
    return (
      <Link onClick={toggleOpen}>
        {originalNote === undefined ? (
          <span>+</span>
        ) : (
          <NoteName note={originalNote} option={originalOption} />
        )}
        {open ? (
          <React.Fragment>
            <Cover onClick={toggleOpen} />
            <OuterBox
              onClick={event => {
                event.stopPropagation();
                return false;
              }}
            >
              <InnerBox
                tabIndex="0"
                innerRef={ref => (this.ref = ref)}
                onKeyDown={event => {
                  switch (event.key) {
                    case "?":
                      setOption("optional");
                      break;
                    case "$":
                      setOption("highest");
                      break;
                    case "^":
                      setOption("lowest");
                      break;
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                      setOctave(parseInt(event.key));
                      break;
                    default:
                      break;
                  }
                  event.stopPropagation();
                }}
              >
                <Top>
                  <Left>
                    <InputRow>
                      <Label>Note: </Label>
                      <Dropdown
                        options={[
                          { label: "C", value: 0 },
                          { label: "C♯/D♭", value: 1 },
                          { label: "D", value: 2 },
                          { label: "D♯/E♭", value: 3 },
                          { label: "E", value: 4 },
                          { label: "F", value: 5 },
                          { label: "F♯/G♭", value: 6 },
                          { label: "G", value: 7 },
                          { label: "G♯/A♭", value: 8 },
                          { label: "A", value: 9 },
                          { label: "A♯/B♭", value: 10 },
                          { label: "B", value: 11 }
                        ]}
                        key={`note-${note !== undefined ? note % 12 : 0}`}
                        value={note !== undefined ? note % 12 : 0}
                        onChange={setNote}
                      />
                    </InputRow>
                    <InputRow>
                      <Label>Options: </Label>
                      <Dropdown
                        options={[
                          { label: "Optional (?)", value: "optional" },
                          { label: "Highest ($)", value: "highest" },
                          { label: "Lowest (^)", value: "lowest" }
                        ]}
                        key={`option-${option}`}
                        value={option}
                        onChange={setOption}
                      />
                    </InputRow>
                    <InputRow>
                      <Label>Octave: </Label>
                      <Dropdown
                        options={[
                          { label: "Any", value: 0 },
                          { label: "1", value: 1 },
                          { label: "2", value: 2 },
                          { label: "3", value: 3 },
                          { label: "4", value: 4 },
                          { label: "5", value: 5 }
                        ]}
                        key={`octave-${octave}`}
                        value={octave}
                        onChange={setOctave}
                      />
                    </InputRow>
                  </Left>
                  <Right>
                    <Fretboard
                      key={`fretboard-${note}-${Math.floor((note || 0) / 12)}`}
                      note={note ? note % 12 : 0}
                      octave={Math.floor((note || 0) / 12)}
                    />
                  </Right>
                </Top>
                <Bottom>
                  {originalNote !== undefined ? (
                    <Link
                      onClick={() => {
                        onRemove(
                          originalOption
                            ? ["optional", originalNote || 0]
                            : originalNote || 0
                        );
                        toggleOpen();
                      }}
                    >
                      [remove]
                    </Link>
                  ) : (
                    <Link />
                  )}
                  <Link
                    onClick={() => {
                      onUpdate(
                        option ? [option, note || 0] : note || 0,
                        originalOption
                          ? [originalOption, originalNote]
                          : originalNote
                      );
                      toggleOpen();
                    }}
                  >
                    {originalNote === undefined ? "[add]" : "[update]"}
                  </Link>
                </Bottom>
              </InnerBox>
            </OuterBox>
          </React.Fragment>
        ) : null}
      </Link>
    );
  }
}
