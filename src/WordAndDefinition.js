import React, { useState, useEffect } from "react";

export function WordAndDefinition(props){
  const [entry, setEntry] = useState(null);

  async function fetchEntry(x){
    const response = await fetch("/"+ x);
    setEntry(await response.json());
  }

  useEffect(()=>{
    fetchEntry(props.word)
  }, [props.word])

  if(!entry){
    return "try looking up a word in the searchbox";
  }

  return(
    <div className="dictionaryEntry">
      <p className="word">{entry.word}</p>
      <p className="definition">{entry.definition}</p>
    </div>
  )
}
