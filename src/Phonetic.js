import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <span className="Phonetic">
      <span className="phoneticText">

        {props.phonetic.text}
      </span>
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
      </span>
    );
  } else {
    return ("wooooo");
  }
}
