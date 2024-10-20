// src/components/List.js
import React, { useEffect, useState } from 'react';
import { getLists, createList } from '../components/api';
import Card from './Card';

const List = ({ boardId }) => {
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState('');

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

  return (
    <div>
      <h3>Lists</h3>
      <input
        type="text"
        value={newListTitle}
        onChange={(e) => setNewListTitle(e.target.value)}
        placeholder="New List Title"
      />
      <button onClick={handleCreateList}>Create List</button>
      {lists.map((list) => (
        <div key={list._id}>
          <h4>{list.title}</h4>
          <Card listId={list._id} />
        </div>
      ))}
    </div>
  );
};

export default List;
