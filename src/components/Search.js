import React, { useState } from 'react';

const Search = ({ sendQuery }) => {
  const [text, setText] = useState('');

  const setQuery = (q) => {
    setText(q);
    sendQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={text}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
