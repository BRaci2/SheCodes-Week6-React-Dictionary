import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results && props.results.meanings) {
    return (
      <span className="Results">
        <h2>{props.results.word}</h2>

        {props.results &&
          props.results.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <h3>
                  <Phonetic phonetic={phonetic} />
                </h3>
              </span>
            );
          })}

        {props.results &&
          props.results.meanings.map(function (meaning, index) {
            return (
              <span key={index}>
                <Meaning meaning={meaning} />
              </span>
            );
          })}
      </span>
    );
  } else {
    return "";
  }
}
