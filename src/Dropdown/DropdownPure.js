import React from "react";
import _ from "lodash";
import styled from "styled-components";

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

const Box = styled.div`
  background-color: #1d2021;
  border: 2px solid #3c3836;
  left: 0;
  margin: 1.6em 0 0 0;
  min-width: 100%;
  padding: calc(1ch - 2px);
  position: absolute;
  top: 0;
  white-space: nowrap;
  z-index: 1;
`;

const getLabel = option => _.get(option, "label", option);

export default ({ open, options, value, setValue, toggleOpen }) => (
  <Link onClick={toggleOpen}>
    {_.chain(options)
      .find(option => _.get(option, "value", option) === value)
      .thru(getLabel)
      .value()}
    {open ? (
      <Box>
        {_.chain(options)
          .map(option => (
            <Info
              key={_.get(option, "value", option)}
              onClick={() => setValue(_.get(option, "value", option))}
            >
              {_.get(option, "label", option)}
            </Info>
          ))
          .value()}
      </Box>
    ) : null}
  </Link>
);
