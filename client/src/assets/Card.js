// src/components/Card.js
import React, { useEffect, useState } from 'react';
import { getCards, createCard } from '../components/api';

const Card = ({ listId }) => {
  const [cards, setCards] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState('');

  useEffect(() => {
    fetchCards();
  }, [listId]);

  const fetchCards = async () => {
    const response = await getCards(listId);
    setCards(response.data);
  };

  const handleCreateCard = async () => {
    if (!newCardTitle) return;

    await createCard(listId, { title: newCardTitle });
    setNewCardTitle('');
    fetchCards();
  };

  return (
    <div>
      <h5>Cards</h5>
      <input
        type="text"
        value={newCardTitle}
        onChange={(e) => setNewCardTitle(e.target.value)}
        placeholder="New Card Title"
      />
      <button onClick={handleCreateCard}>Create Card</button>
      {cards.map((card) => (
        <div key={card._id}>
          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
