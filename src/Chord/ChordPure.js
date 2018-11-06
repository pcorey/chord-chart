import Chart from "../Chart";
import Chords from "../Chords";
import Dropdown from "../Dropdown";
import Loader from "../Loader";
import Note from "../Note";
import React from "react";
import _ from "lodash";
import styled from "styled-components";

const getMinAndMax = chord =>
  _.chain(chord)
    .map(string => (_.isArray(string) ? string[0] : string))
    .reject(_.isNull)
    .thru(frets => ({
      min: _.min(frets),
      max: _.max(frets)
    }))
    .value();

const OuterBox = styled.div`
  background-color: #1d2021;
  padding: 10px;
  margin: 10px;
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
`;

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
`;

const InputRow = styled.div``;

export default ({
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
  Chord
}) => {
  if (
    _.chain(data)
      .get("chords")
      .first()
      .value() &&
    !_.chain(data)
      .get("chords")
      .map("fingerings")
      .flatten()
      .includes(chord)
      .value()
  ) {
    setChord(
      _.chain(data)
        .get("chords")
        .first()
        .get("fingerings")
        .first()
        .value()
    );
  }
  return (
    <React.Fragment>
      <OuterBox>
        <InnerBox
          tabIndex="0"
          onKeyDown={event =>
            _.chain(event)
              .thru(({ key, charCode }) => {
                switch (key) {
                  case "Backspace":
                  case "Delete":
                    return removeNote(_.last(notes));
                  case "+":
                    return addNext();
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
                  default:
                    return undefined;
                }
              })
              .value()
          }
        >
          <Left>
            <Chart chord={chord || [null, null, null, null, null, null]} />
            <Chords
              chords={_.chain(data)
                .get("chords")
                .map(chord => chord.fingerings)
                .flatten()
                .value()}
              setChord={setChord}
            />
          </Left>
          <Middle>
            <br />
            <InputRow>
              <Label>Notes:</Label>
              {" { "}
              {_.chain(notes)
                .map(note => (
                  <Link>
                    <Note
                      note={_.isArray(note) ? note[1] : note}
                      optional={_.isArray(note) ? note[0] == "optional" : false}
                      onUpdate={addNote}
                      onRemove={removeNote}
                    />
                  </Link>
                ))
                .concat(<Note onUpdate={addNote} />)
                .flatMap(note => [<span>, </span>, note])
                .drop(1)
                .value()}
              {" }"}
            </InputRow>
            <br />
            <InputRow>
              <Label>Preset:</Label>{" "}
              <Dropdown
                options={[
                  "Pete's Magic Sauce",
                  "Playability be Damned",
                  "Keep it Together"
                ]}
                value={_.chain([
                  "Pete's Magic Sauce",
                  "Playability be Damned",
                  "Keep it Together"
                ])
                  .shuffle()
                  .first()
                  .value()}
              />
            </InputRow>
            <br />
            <InputRow>
              <Label>Fluidity:</Label>{" "}
              <Link>{Math.floor(Math.random() * 100)}%</Link>
            </InputRow>
            <InputRow>
              <Label>Invertedness:</Label>{" "}
              <Link>{Math.floor(Math.random() * 100)}%</Link>
            </InputRow>
            <InputRow>
              <Label>Spread:</Label>{" "}
              <Link>{Math.floor(Math.random() * 100)}%</Link>
            </InputRow>
            <InputRow>
              <Label>Reach:</Label>{" "}
              <Link>{Math.floor(Math.random() * 100)}%</Link>
            </InputRow>
            {_.chain(chord)
              .thru(getMinAndMax)
              .thru(({ min, max }) => _.range(Math.max(1, max - min - 3) * 2))
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
                <Info>Who needs a chord book when you've got a computer?</Info>
              )}
            </InputRow>
          </Middle>
          <Right>
            <RightTop>
              <br />
              <Link>?</Link> <Link>⛓</Link>
            </RightTop>
            <RightBottom>
              <Link onClick={() => addNext()}>+</Link> <Link>-</Link>
              <br />
              &nbsp;
            </RightBottom>
          </Right>
        </InnerBox>
      </OuterBox>
      {hasNext ? <Chord from={chord} /> : null}
    </React.Fragment>
  );
};
