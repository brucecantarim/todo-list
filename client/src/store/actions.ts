import React from 'react';
import { Action } from './types';

const URL = `${import.meta.env.PROD ? import.meta.env.BASE_URL : 'http://localhost'}:3000`;

export const fetchTodos = async (dispatch: React.Dispatch<Action>) => {
  try {
    const response = await fetch(`${URL}/api/todos`);
    const data = await response.json();
    dispatch({ type: 'SET_TODOS', payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchIncompletedTodos = async (dispatch: React.Dispatch<Action>) => {
  try {
    const response = await fetch(`${URL}/api/todos?incompleted=true`);
    const data = await response.json();
    dispatch({ type: 'SET_INCOMPLETED_TODOS', payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const fetchCompletedTodos = async (dispatch: React.Dispatch<Action>) => {
  try {
    const response = await fetch(`${URL}/api/todos?completed=true`);
    const data = await response.json();
    dispatch({ type: 'SET_COMPLETED_TODOS', payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const createTodo = async (dispatch: React.Dispatch<Action>, task: string) => {
  try {
    const response = await fetch(`${URL}/api/todos`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task })
    });
    const data = await response.json();
    if (data) {
      dispatch({ type: 'ADD_TODO', payload: data });
    }
  } catch (err) {
    console.error(err);
  }
};

export const completeTodo = async (dispatch: React.Dispatch<Action>, id: number) => {
  try {
    const response = await fetch(`${URL}/api/todos/${id}`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isCompleted: true })
    });
    const { success, todo } = await response.json();
    if (success) {
      dispatch({ type: 'COMPLETE_TODO', payload: todo });
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (dispatch: React.Dispatch<Action>, id: number) => {
  try {
    const response = await fetch(`${URL}/api/todos/${id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    if (data) {
      dispatch({ type: 'DELETE_TODO', payload: data });
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodos = async (dispatch: React.Dispatch<Action>) => {
  try {
    const response = await fetch(`${URL}/api/todos`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const { success } = await response.json();
    if (success) {
      dispatch({ type: 'DELETE_TODOS', payload: success });
    }
  } catch (err) {
    console.error(err);
  }
};

export const setFilter = (filter: string): Action => ({
  type: 'SET_FILTER',
  payload: filter,
});
