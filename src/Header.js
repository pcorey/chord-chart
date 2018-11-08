import React, { Component } from "react";
import _ from "lodash";
import styled from "styled-components";

const OuterBox = styled.div`
  background-color: #1d2021;
  left: 0;
  margin: 0 0 10px 0;
  padding: 10px;
`;

const InnerBox = styled.div`
  height: 100%;
  /* background-color: #1d2021; */
  /* border: 2px solid #3c3836; */
`;

export default () => (
  <OuterBox>
    <InnerBox>hi</InnerBox>
  </OuterBox>
);
