import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search sendQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
