import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>

        {props.results &&
          props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <h3>
                  <Phonetic phonetic={phonetic} />
                </h3>
              </div>
            );
          })}

        {props.results &&
          props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
      </div>
    );
  } else {
    return "";
  }
}
