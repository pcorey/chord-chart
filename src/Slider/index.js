import SliderContainer from "./SliderContainer";
import SliderPure from "./SliderPure";
import React from "react";

export default ({ y = x => x, value, onChange }) => {
  return (
    <SliderContainer value={value} onChange={onChange}>
      {({ open, toggleOpen, value, setValue }) => (
        <SliderPure
          y={y}
          value={value}
          setValue={setValue}
          open={open}
          toggleOpen={toggleOpen}
          onChange={onChange}
        />
      )}
    </SliderContainer>
  );
};
