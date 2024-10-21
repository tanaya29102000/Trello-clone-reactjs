

import React, { useEffect, useState } from 'react';
import './Board.css';

const Board = () => {
  const [board, setBoard] = useState([]); // Holds all lists and cards
  const [newListTitle, setNewListTitle] = useState(''); // New list title
  const [newCardTitle, setNewCardTitle] = useState(''); // New card title
  const [draggedCard, setDraggedCard] = useState(null); // Card being dragged
  const [sourceListId, setSourceListId] = useState(null); // Source list of the dragged card

  // Fetch board data from backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/api/board')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((list) => ({
          ...list,
          cards: list.cards || [], // Ensure cards property is initialized
        }));
        setBoard(formattedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Add a new list
  const handleAddList = async () => {
    if (!newListTitle) return alert('Please enter a list title');
    try {
      const response = await fetch('http://localhost:5000/api/board', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newListTitle, cards: [] }), // Initialize with empty cards array
      });
      const newList = await response.json();
      setBoard([...board, { ...newList, cards: [] }]);
      setNewListTitle(''); // Clear input field
    } catch (error) {
      console.error('Error adding list:', error);
    }
  };

  // Add a new card to a specific list
  const handleAddCard = async (listId) => {
    if (!newCardTitle) return alert('Please enter a card title');
    try {
      const updatedBoard = board.map((list) => {
        if (list._id === listId) {
          return {
            ...list,
            cards: [...list.cards, { title: newCardTitle }],
          };
        }
        return list;
      });
      setBoard(updatedBoard);
      setNewCardTitle(''); // Clear input field
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  // Delete a list by ID
  const handleDeleteList = async (listId) => {
    try {
      await fetch(`http://localhost:5000/api/board/${listId}`, { method: 'DELETE' });
      setBoard(board.filter((list) => list._id !== listId)); // Update board state
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  // Delete a card from a specific list
  const handleDeleteCard = (listId, cardIndex) => {
    const updatedBoard = board.map((list) => {
      if (list._id === listId) {
        const updatedCards = list.cards.filter((_, index) => index !== cardIndex);
        return { ...list, cards: updatedCards };
      }
      return list;
    });
    setBoard(updatedBoard);
  };

  // Handle drag start
  const handleDragStart = (card, listId) => {
    setDraggedCard(card);
    setSourceListId(listId);
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow drop
  };

  // Handle drop
  const handleDrop = (targetListId) => {
    if (!draggedCard || !sourceListId) return;

    const updatedBoard = board.map((list) => {
      if (list._id === sourceListId) {
        return { ...list, cards: list.cards.filter((c) => c.title !== draggedCard.title) }; // Remove from source
      }
      if (list._id === targetListId) {
        return { ...list, cards: [...list.cards, draggedCard] }; // Add to target
      }
      return list; // Return unmodified list
    });

    setBoard(updatedBoard); // Update board state
    setDraggedCard(null); // Reset dragged card
    setSourceListId(null); // Reset source list
  };

  return (
    <div className="board-container">
      <h2>My Trello Board</h2>

      {/* Add new list */}
      <div className="add-list">
        <input
          type="text"
          placeholder="Enter list title..."
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
        />
        <button onClick={handleAddList}>+ Add List</button>
      </div>

      <div className="lists">
        {board.map((list) => (
          <div
            className="list"
            key={list._id}
            onDragOver={handleDragOver} // Allow drop on the list
            onDrop={() => handleDrop(list._id)} // Handle drop event
          >
            <div className="list-header">
              <h3>{list.title}</h3>
              <button onClick={() => handleDeleteList(list._id)}>Delete List</button>
            </div>

            {list.cards.map((card, index) => (
              <div
                className="card"
                key={index}
                draggable // Make card draggable
                onDragStart={() => handleDragStart(card, list._id)} // Handle drag start
              >
                <p>{card.title}</p>
                <button onClick={() => handleDeleteCard(list._id, index)}>Delete Card</button>
              </div>
            ))}

            {/* Add new card */}
            <div className="add-card">
              <input
                type="text"
                placeholder="Enter card title..."
                value={newCardTitle}
                onChange={(e) => setNewCardTitle(e.target.value)}
              />
              <button onClick={() => handleAddCard(list._id)}>+ Add Card</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
