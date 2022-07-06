import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <span className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>;
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <span key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </span>
        );
      })}
    </span>
  );
}
