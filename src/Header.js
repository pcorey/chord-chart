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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
  background-color: #1d2021;
  border: 2px solid #3c3836;
`;

const Link = styled.span`
  color: #7e9d91;
  cursor: pointer;
  white-space: pre;
`;

const Pro = styled.span`
  color: #ea483a;
  cursor: pointer;
  white-space: pre;
`;

export default () => (
  <OuterBox>
    <InnerBox>
      <Link> [hotkeys]</Link>
      <Link> [faq]</Link>
      <Link> [tunes]</Link>
      <Link> [about]</Link>
      <Pro> [pro]</Pro>
    </InnerBox>
  </OuterBox>
);
