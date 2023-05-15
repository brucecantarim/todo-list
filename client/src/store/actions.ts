import React from 'react';
import { Action } from './types';

const URL = 'http://localhost:3000';

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

