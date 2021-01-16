import React from 'react';

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong>
              <br /> {item.portrayed}
            </li>
            <li>
              <strong>Character Name:</strong>
              <br /> {item.name}
            </li>
            <li>
              <strong>Nickname:</strong>
              <br /> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong>
              <br /> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> <br />
              {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
