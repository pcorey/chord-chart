import React, { Component } from "react";
import _ from "lodash";
import styled from "styled-components";

/* const Title = styled.p`
 *   color: #615851;
 *   font-size: 2em;
 *   margin: 1em 0;
 *   text-align: center;
 * `;
 * 
 * export default () => <Title>glorious.voice.leader</Title>; */

const Title = styled.pre`
  margin: 2em 0;
  text-align: center;
`;

export default () => (
  <Title>{`
       _            _                            _            _                _           
  __ _| | ___  _ __(_) ___  _   _ _____   _____ (_) ___ ___  | | ___  __ _  __| | ___ _ __ 
 / _\` | |/ _ \\| '__| |/ _ \\| | | / __\\ \\ / / _ \\| |/ __/ _ \\ | |/ _ \\/ _\` |/ _\` |/ _ \\ '__|
| (_| | | (_) | |  | | (_) | |_| \\__ \\\\ V / (_) | | (_|  __/_| |  __/ (_| | (_| |  __/ |   
 \\__, |_|\\___/|_|  |_|\\___/ \\__,_|___(_)_/ \\___/|_|\\___\\___(_)_|\\___|\\__,_|\\__,_|\\___|_|   
 |___/                                                                                     
        `}</Title>
);
