import Chart from "../Chart";
import ChordBook from "../ChordBook";
import Dropdown from "../Dropdown";
import Fretboard from "../Fretboard";
import Loader from "../Loader";
import Note from "../Note";
import React from "react";
import Slider from "../Slider";
import _ from "lodash";
import styled from "styled-components";

const getMinAndMax = chord =>
  _.chain(chord)
    .map(string => (_.isArray(string) ? string[0] : string))
    .reject(_.identity)
    .thru(frets => ({
      min: _.min(frets),
      max: _.max(frets)
    }))
    .value();

const OuterBox = styled.div`
  background-color: #1d2021;
  padding: 10px;
  margin: 10px 0;
`;

const InnerBox = styled.div`
  background-color: #1d2021;
  border: 2px solid #3c3836;
  padding: 10px;
  display: flex;
  flex-direction: row;
  outline: none;
  &:focus {
    border: 2px solid #ebb23f;
  }
`;

const Left = styled.div`
  color: #615851;
`;

const Middle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MiddleTop = styled.div`
  flex: 1;
`;

const MiddleBottom = styled.div``;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightTop = styled.div`
  flex: 1;
`;

const RightBottom = styled.div``;

const Link = styled.span`
  color: #7e9d91;
  cursor: pointer;
`;

const Info = styled.span`
  color: #c9ba9b;
`;

const Error = styled.span`
  color: #ea483a;
`;

const Label = styled.span`
  color: #aeb036;
  color: #ebb23f;
`;

const Title = styled.span`
  color: #c9ba9b;
`;

const InputRow = styled.div``;

export default class extends React.Component {
  componentDidMount() {
    this.ref.focus();
  }

  render() {
    let {
      from,
      chord,
      notes,
      loading,
      error,
      data,
      addNote,
      removeNote,
      setChord,
      hasNext,
      addNext,
      Chord,
      pressKey,
      releaseKey,
      preset,
      setPreset,
      fluidity,
      playability,
      invertedness,
      spread,
      reach,
      setFluidity,
      setPlayability,
      setInvertedness,
      setSpread,
      setReach,
      loadingParent,
      allowOpen,
      setAllowOpen,
      addChord,
      removeChord
    } = this.props;
    if (
      !loading &&
      !error &&
      _.chain(data)
        .get("chords")
        .map("chord")
        .first()
        .value() &&
      !_.chain(data)
        .get("chords")
        .map("chord")
        .includes(chord)
        .value()
    ) {
      setChord(
        _.chain(data)
          .get("chords")
          .map("chord")
          .first()
          .value()
      );
    }
    if (
      !loading &&
      !error &&
      _.chain(data)
        .get("chords")
        .isEmpty()
        .value() &&
      !_.isEqual(chord, [null, null, null, null, null, null])
    ) {
      setChord([null, null, null, null, null, null]);
    }
    return (
      <React.Fragment>
        <OuterBox
          style={{
            opacity: loadingParent ? "0.5" : "1",
            pointerEvents: loadingParent ? "none" : "auto"
          }}
        >
          <InnerBox
            tabIndex="0"
            innerRef={ref => (this.ref = ref)}
            onKeyDown={event =>
              _.chain(event)
                .thru(({ key, charCode }) => {
                  switch (key) {
                    case "Backspace":
                    case "Delete":
                      return removeNote(_.last(notes));
                    case "+":
                      return addChord();
                    case "a":
                      return addNote(0);
                    case "w":
                      return addNote(1);
                    case "s":
                      return addNote(2);
                    case "e":
                      return addNote(3);
                    case "d":
                      return addNote(4);
                    case "f":
                      return addNote(5);
                    case "t":
                      return addNote(6);
                    case "g":
                      return addNote(7);
                    case "y":
                      return addNote(8);
                    case "h":
                      return addNote(9);
                    case "u":
                      return addNote(10);
                    case "j":
                      return addNote(11);
                    case "k":
                      return addNote(0);
                    case "o":
                      return addNote(1);
                    case "l":
                      return addNote(2);
                    case "p":
                      return addNote(3);
                    case ";":
                      return addNote(4);
                    case "'":
                      return addNote(5);
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                      var note = _.last(notes);
                      var octave = parseInt(key);
                      return addNote(note % 12 + (octave + 1) * 12);
                    case "?":
                      var note = _.last(notes);
                      return addNote([
                        "optional",
                        _.isArray(note) ? note[1] : note
                      ]);
                    case "$":
                      var note = _.last(notes);
                      return addNote([
                        "highest",
                        _.isArray(note) ? note[1] : note
                      ]);
                    case "^":
                      var note = _.last(notes);
                      return addNote([
                        "lowest",
                        _.isArray(note) ? note[1] : note
                      ]);
                    default:
                      return undefined;
                  }
                })
                .value()
            }
          >
            <Left>
              <Chart
                chord={chord || [null, null, null, null, null, null]}
                onClick={() => {}}
              />
              <ChordBook
                chords={_.chain(data)
                  .get("chords")
                  .map("chord")
                  .value()}
                setChord={setChord}
              />
            </Left>
            <Middle>
              <MiddleTop>
                <br />
                <InputRow>
                  <Label>Notes:</Label>
                  {" { "}
                  {_.chain(notes)
                    .map(note => (
                      <Link key={`foo-${JSON.stringify(note)}`}>
                        <Note
                          key={`note-${JSON.stringify(note)}`}
                          note={_.isArray(note) ? note[1] : note}
                          option={_.isArray(note) ? note[0] : undefined}
                          onUpdate={addNote}
                          onRemove={removeNote}
                        />
                      </Link>
                    ))
                    .concat(<Note key="new-note" onUpdate={addNote} />)
                    .flatMap((note, i) => [<span key={i}>, </span>, note])
                    .drop(1)
                    .value()}
                  {" }"}
                </InputRow>
              </MiddleTop>
              <MiddleBottom>
                <InputRow>
                  <Label>Fluidity:</Label>{" "}
                  <Slider
                    value={fluidity}
                    onChange={setFluidity}
                    key={fluidity}
                  />
                </InputRow>
                <InputRow>
                  <Label>Playability:</Label>{" "}
                  <Slider
                    value={playability}
                    onChange={setPlayability}
                    key={playability}
                  />
                </InputRow>
                <InputRow>
                  <Label>Invertedness:</Label>{" "}
                  <Slider
                    value={invertedness}
                    onChange={setInvertedness}
                    key={invertedness}
                  />
                </InputRow>
                {_.chain(chord)
                  .thru(getMinAndMax)
                  .thru(
                    ({ min, max }) =>
                      _.range(Math.max(0, max - min - 3) * 2) + 1
                  )
                  .map((_, i) => <br key={i} />)
                  .value()}
                <InputRow>
                  {error ? (
                    <Error>{error.toString()}</Error>
                  ) : loading ? (
                    <Info>
                      <Loader />
                    </Info>
                  ) : (
                    <Info>
                      Who needs a chord book when you've got a computer?
                    </Info>
                  )}
                </InputRow>
              </MiddleBottom>
            </Middle>
            <Right>
              <RightTop>
                <Link onClick={() => removeChord()}>x</Link>{" "}
                {/*<Link>⛓</Link>*/}
              </RightTop>
              <RightBottom>
                <Link onClick={() => addChord()}>+</Link>
              </RightBottom>
            </Right>
          </InnerBox>
        </OuterBox>
      </React.Fragment>
    );
  }
}
