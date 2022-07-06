import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <span className="Phonetic">
        <h2>{props.phonetic.text}</h2>
      </span>
    );
  } else {
    return ("wooooo");
  }
}
