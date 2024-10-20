// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust if your server is hosted elsewher5

export const getBoards = () => axios.get(`${API_URL}/board`);
export const createBoard = (board) => axios.post(`${API_URL}/board`, board);
export const updateBoard = (id, board) => axios.put(`${API_URL}/board/${id}`, board);
export const deleteBoard = (id) => axios.delete(`${API_URL}/board/${id}`);

export const getLists = (boardId) => axios.get(`${API_URL}/lists?boardId=${boardId}`);
export const createList = (boardId, list) => axios.post(`${API_URL}/lists`, { ...list, boardId });
export const updateList = (id, list) => axios.put(`${API_URL}/lists/${id}`, list);
export const deleteList = (id) => axios.delete(`${API_URL}/lists/${id}`);

export const getCards = (listId) => axios.get(`${API_URL}/lists/${listId}/cards`);
export const createCard = (listId, card) => axios.post(`${API_URL}/lists/${listId}/cards`, card);
export const updateCard = (listId, cardId, card) => axios.put(`${API_URL}/lists/${listId}/cards/${cardId}`, card);
export const deleteCard = (listId, cardId) => axios.delete(`${API_URL}/lists/${listId}/cards/${cardId}`);
