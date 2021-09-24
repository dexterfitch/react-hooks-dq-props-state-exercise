import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

let eyeColorMapper = {
  "normal": normalBaby,
  "sun": SunBaby,
  "blue": BlueBaby,
  "glowing": GlowingBaby
}

function BabyHog(props) {
  const [weight, setWeight] = useState(50);

  function handleChangeWeight(e) {
   return e.target.name === "+" ? setWeight(weight + 1) : setWeight(weight - 1)
  }

  return (
    <li className="hogbabies">
      <h1>{props.name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[props.eyeColor]}
          style={{ height: "200px" }}
          alt={"MasterBlaster Jr: " + props.name}
        />
      </div>
    </li>
  );
}

export default BabyHog;
