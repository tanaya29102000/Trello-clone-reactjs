
// import React, { useEffect, useState } from 'react';
// import { getLists, createList } from '../components/api';
// import Card from './Card';

// const List = ({ boardId }) => {
//   const [lists, setLists] = useState([]);
//   const [newListTitle, setNewListTitle] = useState('');

//   useEffect(() => {
//     fetchLists();
//   }, [boardId]);

//   const fetchLists = async () => {
//     const response = await getLists(boardId);
//     setLists(response.data);
//   };

//   const handleCreateList = async () => {
//     if (!newListTitle) return;

//     await createList(boardId, { title: newListTitle });
//     setNewListTitle('');
//     fetchLists();
//   };

//   return (
//     <div>
//       <h3>Lists</h3>
//       <input
//         type="text"
//         value={newListTitle}
//         onChange={(e) => setNewListTitle(e.target.value)}
//         placeholder="New List Title"
//       />
//       <button onClick={handleCreateList}>Create List</button>
//       {lists.map((list) => (
//         <div key={list._id}>
//           <h4>{list.title}</h4>
//           <Card listId={list._id} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;
import React, { useEffect, useState } from 'react';
import { getLists, createList } from '../components/api';
import Card from './Card';
import './List.css'; // Import your CSS file

const List = ({ boardId, boardTitle }) => { // Added boardTitle as a prop
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState('');
  const [draggedListIndex, setDraggedListIndex] = useState(null); // Track the dragged list index

  useEffect(() => {
    fetchLists();
  }, [boardId]);

  const fetchLists = async () => {
    const response = await getLists(boardId);
    setLists(response.data);
  };

  const handleCreateList = async () => {
    if (!newListTitle) return;

    await createList(boardId, { title: newListTitle });
    setNewListTitle('');
    fetchLists();
  };

  const handleDragStart = (index) => {
    setDraggedListIndex(index); // Set the index of the list being dragged
  };

  const handleDrop = (index) => {
    if (draggedListIndex === null || draggedListIndex === index) return;

    const updatedLists = [...lists];
    const [movedList] = updatedLists.splice(draggedListIndex, 1); // Remove the dragged list
    updatedLists.splice(index, 0, movedList); // Insert the list at the new position

    setLists(updatedLists); // Update state with the new list order
    setDraggedListIndex(null); // Reset the dragged list index
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default behavior to allow dropping
  };

  return (
    <div className="list-container">
      <h3>{boardTitle}</h3> {/* Display the board title */}
      <input
        type="text"
        value={newListTitle}
        onChange={(e) => setNewListTitle(e.target.value)}
        placeholder="New List Title"
      />
      <button onClick={handleCreateList}>Create List</button>
      <div className="lists">
        {lists.map((list, index) => (
          <div
            key={list._id}
            draggable
            onDragStart={() => handleDragStart(index)} // Handle drag start
            onDragOver={handleDragOver} // Handle drag over
            onDrop={() => handleDrop(index)} // Handle drop event
            className="list-item"
          >
            <h4>{list.title}</h4>
            <Card listId={list._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
