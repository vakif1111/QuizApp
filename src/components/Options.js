// import { useState } from "react";

const Options = ({category, setCategory, difficulty, setDifficulty, getNewQuestion}) => {
 

  return (
    <div className="optionsWrap">
      <label for="category">Category:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        getNewQuestion();
        }}
      >
        <option>any</option>
        <option>arts and literature</option>
        <option>film and tv</option>
        <option>food and drink</option>
        <option>general knowledge</option>
        <option>geography</option>
        <option>history</option>
        <option>music</option>
        <option>science</option>
        <option>society and culture</option>
        <option>sport and leisure</option>
      </select>
      <label for="difficulty">Difficulty:</label>
      <select
        id="difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option>any</option>
        <option>easy</option>
        <option>medium</option>
        <option>hard</option>
      </select>
    </div>
  );
};

export default Options;
