import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState({});
  let [loaded, setLoaded] = useState(false);

  function handleApiResponse(response) {
    setResults(response.data[0]);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWordChange(event) {
    event.preventDefault();
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            className="Search"
            type="search"
            placeholder="Dictionary search..."
            autoFocus={true}
            defaultValue={props.defaultKeyword}
            onChange={handleWordChange}

          />
          <input className="OK" type="submit" value="OK" />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
