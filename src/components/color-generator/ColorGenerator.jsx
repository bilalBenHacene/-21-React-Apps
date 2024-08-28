import React, { useEffect, useState } from "react";
import "./ColorGenerator.css";

const ColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState(["f8","fa","fc"]);
  const RandomFunc = (length) => {
    return Math.floor(Math.random() * length);
  };

  const rgbToHex = (r, g, b) => [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  });
  const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      , (m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16))

  const handleRGBColor = () => {
    const r=RandomFunc(256);
    const b=RandomFunc(256);
    const g=RandomFunc(256);
    const clr = [r,g,b];
    setColor(clr);
  };
  const convertColor=(type)=>{
    if (type == "hex") {
      setColor(rgbToHex(color[0],color[1],color[2]));
    }
    else {
      setColor(hexToRgb(`#${color[0]}${color[1]}${color[2]}`));
    }
  }
  const handleHEXColor = () => {
    const hexString = "0123456789ABCDEF";
    const hexArray = hexString.split("");
    const lentgh = hexArray.length;
    const hex1=`${hexArray[RandomFunc(lentgh)]}${hexArray[RandomFunc(lentgh)] }`;
    const hex2=`${hexArray[RandomFunc(lentgh)]}${hexArray[RandomFunc(lentgh)] }`;
    const hex3=`${hexArray[RandomFunc(lentgh)]}${hexArray[RandomFunc(lentgh)] }`;
    const clr = [hex1,hex2,hex3];
    setColor(clr);
  };
  
  return (
    <div className="color-generator" style={{ backgroundColor: (typeOfColor=="hex")? `#${color.join('')}`:`rgb(${color.toString()})` }}>
      <h1 className="font-bold text-xl">Color Generator</h1>
      <section className="h-full flex justify-center items-center flex-col">
        <div className="buttons">
          <button type="button" 
            className={typeOfColor == "hex"? "enabled":null}
            onClick={() => {setTypeOfColor("hex");convertColor('hex')}}>
            Create HEX Color
          </button>
          <button type="button" 
            className={typeOfColor == "rgb"? "enabled":null}
            onClick={() => {setTypeOfColor("rgb");convertColor('rgb')}}>
            Create RGB Color
          </button>
          <button
            type="button"
            onClick={typeOfColor === "hex" ? handleHEXColor : handleRGBColor}
          >
            Generate Random Color
          </button>
        </div>
        <label>{`${typeOfColor.toUpperCase()} Color`}</label>
        <label>{(typeOfColor=="hex")? `#${color.join('').toUpperCase()}`:`RGB(${color.toString()})`}</label>
      </section>
    </div>
  );
};

export default ColorGenerator;
