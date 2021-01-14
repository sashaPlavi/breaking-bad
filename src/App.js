import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(results.data);
      setItems(results);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
