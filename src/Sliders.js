import React, { useState } from "react";
import './Slider.css';

import Slider from "@material-ui/core/Slider";
import {withStyles } from "@material-ui/core/styles";
import Label from "./Label";


const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
    
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &€active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "0%",
    
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  markLabel:{
      color: "white",
  }
})(Slider);

export default function Sliders() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [maxPer, setMax] = useState(100);
  const [feeRange, setFee] = useState(0);

  const handlePrice = (event, newValue) => {
    setValue(newValue);
    if (newValue>0){
    let x = Math.round(900 / newValue);
    setMax(x);
    setValue2(x);
    setValue3(0);
    setValue4(0);
    setFee(0);
    }
    else{
        setMax(0);
        setValue2(0);
        setValue3(9);
        setValue4(0);
    }

  };

  const handlePercent = (event, newValue) => {
    setValue2(newValue);
    let x = -((newValue * value) / 100 - 9);
    setFee(Number.parseFloat(x).toFixed(1));
    
    setValue3(0);
    setValue4(feeRange);
    
    
  };

  const euroPrice = Number.parseFloat(value*value2/100).toFixed(1);

  const handleRes = (event, newValue) => {
    newValue = Number.parseFloat(newValue).toFixed(1)
    setValue3(newValue);
    setValue4(Number.parseFloat(feeRange-newValue).toFixed(1));

  };

  const handleCus = (event, newValue) => {
    newValue = Number.parseFloat(newValue).toFixed(1)
    setValue4(newValue);
    setValue3(Number.parseFloat(feeRange-newValue).toFixed(1));
  };

  const PriceSlider = PrettoSlider;
  const PercentSlider = PrettoSlider;
  const CusSlider = PrettoSlider;
  const ResSlider = PrettoSlider;

  const marks = [
    {
      value: 9,
      label: "0€",
    },

    {
      value: 50,
      label: "50€",
    },
  ];

  const marks2 = [
    {
      value: 0,
      label: "0%",
    },

    {
      value: maxPer,
      label: maxPer + "%",
    },
  ];

  const marks3 = [
    {
      value: 0,
      label: "0€",
    },

    {
      value: feeRange,
      label: feeRange + "€",
    },
  ];

  const marks4 = [
    {
      value: 0,
      label: "0€",
    },

    {
      value: feeRange,
      label: feeRange + "€",
    },
  ];

  
  return (
    <div className="slide">
      <Label
      text="Minimum Order"
      value={value}
      sign={"€"}
      color="hsl(230, 89%, 62%)"
      />

      <PriceSlider
        value={value}
        min={9}
        step={1}
        max={50}
        onChange={handlePrice}
        valueLabelDisplay="auto"
        marks={marks}
      />
         <Label
      text="Percent fee"
      value={euroPrice}
      sign="€"
      color="hsl(261, 73%, 60%)"

      />
      <PercentSlider
        value={value2}
        min={0}
        step={1}
        max={maxPer}
        onChange={handlePercent}
        valueLabelDisplay="auto"
        marks={marks2}
      />
             <Label
      text="Resturant fee"
      value={value3}
      sign="€"
      color="hsl(349, 71%, 52%)"

      />
      <ResSlider
        value={value3}
        min={0}
        step={0.05}
        max={feeRange}
        onChange={handleRes}
        valueLabelDisplay="auto"
        marks={marks3}
      />
        
        <Label
      text="Customer Fee"
      value={value4}
      sign="€"
      color="hsl(39, 89%, 49%)"

      />
    <CusSlider
        value={value4}
        min={0}
        step={0.05}
        max={feeRange}
        onChange={handleCus}
        valueLabelDisplay="auto"
        marks={marks4}
      />   
    </div>
  );
}
