import React, { useState } from "react";
import "./App.css";
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const XSpellCheck = () => {
  const [inputText, setInputText] = useState("");
  const [correction, setCorrection] = useState("");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputText(inputValue);
    setCorrection(getCorrection(inputValue));
  };

  const getCorrection = (text) => {
    const words = text.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (customDictionary[word]) {
        const correctedWord = customDictionary[word];
        return correctedWord;
      }
    }
    return "";
  };

  return (
    <div>
      <h2>Spell Check and Auto-Correction</h2>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
      {correction && (
        <p class="para">
          Did you mean: <span class="corrected">{correction}</span>?
        </p>
      )}
    </div>
  );
};

export default XSpellCheck;