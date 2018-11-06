import DropdownContainer from "./DropdownContainer";
import DropdownPure from "./DropdownPure";
import React from "react";

export default ({ options, value, onChange }) => (
  <DropdownContainer value={value} onChange={onChange}>
    {({ open, toggleOpen, onChange, value, setValue }) => (
      <DropdownPure
        options={options}
        value={value}
        setValue={setValue}
        open={open}
        toggleOpen={toggleOpen}
      />
    )}
  </DropdownContainer>
);
