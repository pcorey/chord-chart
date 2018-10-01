import Chart from "./Chart";
import React from "react";
import _ from "lodash";
import styled from "styled-components";

const Input = styled.input`
  background: #f8f8f8;
  border: none;
  display: block;
  margin: 0.5em;
  padding: 0.5em;
  width: 100%;
`;

const Select = styled.select`
  background: #f8f8f8;
  border: none;
  display: block;
  width: 100%;
  margin: 0.5em;
  padding: 0.5em;
`;

const Option = styled.option``;

export default ({ chord, name }) => {
  return (
    <div>
      <Chart chord={chord} name={name} />
      {/* <Input type="text" />
          <Input type="text" />
          <Select>
          <Option>C</Option>
          <Option>C#/Db</Option>
          </Select> */}
    </div>
  );
};
