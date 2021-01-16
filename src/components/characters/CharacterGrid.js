import React from 'react';
import CharcaterItem from './CharacterItem';
import Spinner from '../Spinner';
const CharacterGrid = ({ items, isLoading }) => {
  console.log(items);
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharcaterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
