import React from "react";
import _ from "lodash";
import styled from "styled-components";

const Link = styled.span`
  color: #7e9d91;
  cursor: pointer;
  position: relative;
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
  z-index: 4;
  outline: none;
  &:focus {
    border: 2px solid #ebb23f;
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

const Bar = styled.div`
  background-color: #7e9d91;
  height: 1em;
`;

export default class extends React.Component {
  componentDidUpdate() {
    this.ref && this.ref.focus();
  }

  render() {
    let { y, value, setValue, open, toggleOpen, onChange } = this.props;
    return (
      <Link onClick={toggleOpen}>
        {(value * 10).toFixed(1)}x
        {open ? (
          <React.Fragment>
            <Cover
              onClick={() => {
                toggleOpen();
                onChange(value);
              }}
            />
            <OuterBox>
              <InnerBox
                tabIndex="0"
                innerRef={ref => (this.ref = ref)}
                onClick={e => {
                  let { left } = e.target.getBoundingClientRect();
                  setValue(Math.min(1, y((e.clientX - left) / 96)));
                  e.stopPropagation();
                  return false;
                }}
                style={{ width: `100px` }}
              >
                <Bar style={{ width: `${value * 96}px` }} />
              </InnerBox>
            </OuterBox>
          </React.Fragment>
        ) : null}
      </Link>
    );
  }
}
