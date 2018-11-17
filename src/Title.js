import React, { Component } from "react";
import _ from "lodash";
import styled from "styled-components";
import Image from "./title.png";

/* const Title = styled.p`
 *   color: #615851;
 *   font-size: 2em;
 *   margin: 1em 0;
 *   text-align: center;
 * `;
 * 
 * export default () => <Title>glorious.voice.leader</Title>; */

// https://textcraft.net/

const Title = styled.img`
  display: block;
  width: 50%;
  margin: 2em auto;
`;

export default () => <Title src={Image} />;
