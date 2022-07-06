import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState({});
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleApiResponse(response) {
    setResults(response.data[0]);
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let pexelsApiKey =
      `563492ad6f917000010000013e7ee9bbbc0d4daca24136e8aaff0e87`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }
  function handleWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            className="Search"
            type="search"
            defaultValue={props.defaultKeyword}
            placeholder="Dictionary search..."
            autoFocus={true}
            onChange={handleWordChange}
          />
          <input className="OK" type="submit" value="OK" />
        </form>
        <Results results={results} />
        <Photos photos={photos}/>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
