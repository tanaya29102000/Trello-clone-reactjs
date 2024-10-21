
// import React, { useEffect, useState } from 'react';
// import { getCards, createCard } from '../components/api';
// import './Card.css'; // Import your CSS file

// const Card = ({ listId }) => {
//   const [cards, setCards] = useState([]);
//   const [newCardTitle, setNewCardTitle] = useState('');
//   const [draggedCardIndex, setDraggedCardIndex] = useState(null); // Track the dragged card index
//   const [status, setStatus] = useState('todo'); // Default status

//   useEffect(() => {
//     fetchCards();
//   }, [listId]);

//   const fetchCards = async () => {
//     const response = await getCards(listId);
//     setCards(response.data);
//   };

//   const handleCreateCard = async () => {
//     if (!newCardTitle) return;

//     await createCard(listId, { title: newCardTitle });
//     setNewCardTitle('');
//     fetchCards();
//   };

//   const handleDragStart = (index) => {
//     setDraggedCardIndex(index); // Set the index of the card being dragged
//   };

//   const handleDrop = (newStatus) => {
//     if (draggedCardIndex === null) return;

//     const updatedCards = [...cards];
//     const [movedCard] = updatedCards.splice(draggedCardIndex, 1); // Remove the dragged card
//     movedCard.status = newStatus; // Update the status of the moved card
//     updatedCards.push(movedCard); // Add the moved card to the end of the list

//     setCards(updatedCards); // Update state with the new card order
//     setDraggedCardIndex(null); // Reset the dragged card index
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault(); // Prevent default behavior to allow dropping
//   };

//   const getCardColor = (cardStatus) => {
//     switch (cardStatus) {
//       case 'todo':
//         return '#e0f7fa'; // Light blue for To Do
//       case 'doing':
//         return '#ffe0b2'; // Light orange for Doing
//       case 'done':
//         return '#c8e6c9'; // Light green for Done
//       default:
//         return '#ffffff'; // Default white
//     }
//   };

//   const handleCardStatusChange = (index, newStatus) => {
//     const updatedCards = [...cards];
//     updatedCards[index].status = newStatus; // Update the status of the card
//     setCards(updatedCards); // Update state with the new card order
//   };

//   return (
//     <div>
//       <h5>Cards</h5>
//       <input
//         type="text"
//         value={newCardTitle}
//         onChange={(e) => setNewCardTitle(e.target.value)}
//         placeholder="New Card Title"
//       />
//       <button onClick={handleCreateCard}>Create Card</button>
      
//       {/* To Do Section */}
//       <h6>To Do</h6>
//       <div
//         className="card-column"
//         onDragOver={handleDragOver}
//         onDrop={() => handleDrop('todo')}
//       >
//         {cards.filter(card => card.status === 'todo').map((card, index) => (
//           <div
//             key={card._id}
//             draggable
//             onDragStart={() => handleDragStart(cards.indexOf(card))} // Handle drag start
//             className="card"
//             style={{ backgroundColor: getCardColor(card.status) }}
//           >
//             <p>{card.title}</p>
//             <button onClick={() => handleCardStatusChange(cards.indexOf(card), 'doing')}>Move to Doing</button>
//           </div>
//         ))}
//       </div>

//       {/* Doing Section */}
//       <h6>Doing</h6>
//       <div
//         className="card-column"
//         onDragOver={handleDragOver}
//         onDrop={() => handleDrop('doing')}
//       >
//         {cards.filter(card => card.status === 'doing').map((card, index) => (
//           <div
//             key={card._id}
//             draggable
//             onDragStart={() => handleDragStart(cards.indexOf(card))} // Handle drag start
//             className="card"
//             style={{ backgroundColor: getCardColor(card.status) }}
//           >
//             <p>{card.title}</p>
//             <button onClick={() => handleCardStatusChange(cards.indexOf(card), 'done')}>Move to Done</button>
//           </div>
//         ))}
//       </div>

//       {/* Done Section */}
//       <h6>Done</h6>
//       <div
//         className="card-column"
//         onDragOver={handleDragOver}
//         onDrop={() => handleDrop('done')}
//       >
//         {cards.filter(card => card.status === 'done').map((card, index) => (
//           <div
//             key={card._id}
//             draggable
//             onDragStart={() => handleDragStart(cards.indexOf(card))} // Handle drag start
//             className="card"
//             style={{ backgroundColor: getCardColor(card.status) }}
//           >
//             <p>{card.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;
import React, { useEffect, useState } from 'react';
import { getCards, createCard, updateCard } from '../components/api'; // Import updateCard function
import './Card.css';

const Card = ({ listId }) => {
  const [cards, setCards] = useState([]);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [draggedCardIndex, setDraggedCardIndex] = useState(null);

  useEffect(() => {
    fetchCards();
  }, [listId]);

  const fetchCards = async () => {
    const response = await getCards(listId);
    setCards(response.data);
  };

  const handleCreateCard = async () => {
    if (!newCardTitle) return;
    await createCard(listId, { title: newCardTitle, status: 'todo' });
    setNewCardTitle('');
    fetchCards();
  };

  const handleDragStart = (index) => {
    setDraggedCardIndex(index);
  };

  const handleDrop = async (newStatus) => {
    if (draggedCardIndex === null) return;

    const updatedCards = [...cards];
    const [movedCard] = updatedCards.splice(draggedCardIndex, 1); // Remove the dragged card
    movedCard.status = newStatus; // Update status locally

    try {
      // Update the card's status in the backend
      await updateCard(movedCard._id, { status: newStatus });

      updatedCards.push(movedCard); // Add the updated card back
      setCards(updatedCards); // Update state with new order
    } catch (error) {
      console.error('Failed to update card status:', error);
    } finally {
      setDraggedCardIndex(null); // Reset the dragged index
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow dropping by preventing default behavior
  };

  const getCardColor = (status) => {
    switch (status) {
      case 'todo':
        return '#e0f7fa'; // Light blue
      case 'doing':
        return '#ffe0b2'; // Light orange
      case 'done':
        return '#c8e6c9'; // Light green
      default:
        return '#fff';
    }
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

      {['todo', 'doing', 'done'].map((status) => (
        <div key={status}>
          <h6>{status.charAt(0).toUpperCase() + status.slice(1)}</h6>
          <div
            className="card-column"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(status)}
          >
            {cards
              .filter((card) => card.status === status)
              .map((card, index) => (
                <div
                  key={card._id}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  className="card"
                  style={{ backgroundColor: getCardColor(card.status) }}
                >
                  <p>{card.title}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
