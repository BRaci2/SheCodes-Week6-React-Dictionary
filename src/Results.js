import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

export default function Results(props) {
  console.log(props.results);
  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
              <Synonyms />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
