import React, { useEffect, useState } from 'react';
import './Board.css';

const Board = () => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    // Fetch the board data from the backend
    fetch('http://localhost:5000/api/board')
      .then((response) => response.json())
      .then((data) => setBoard(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="board-container">
      <h2>My Trello Board</h2>
      <div className="lists">
        {board.map((list) => (
          <div className="list" key={list.id}>
            <h3>{list.title}</h3>
            {list.cards.map((card) => (
              <div className="card" key={card.id}>
                {card.title}
              </div>
            ))}
            <button className="add-card-btn">+ Add a card</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
