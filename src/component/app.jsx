import axios from 'axios';
import { useEffect } from 'react';

useEffect(() => {
  axios.get('https://api.example.com/tasks')
    .then(response => setTasks(response.data))
    .catch(error => console.error(error));
}, []);

const addTask = () => {
  if (input.trim() === '') return;
  const newTask = { id: Date.now(), text: input, completed: false };
  axios.post('https://api.example.com/tasks', newTask)
    .then(() => {
      setTasks([...tasks, newTask]);
      setInput('');
    })
    .catch(error => console.error(error));
};