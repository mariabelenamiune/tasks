import React from 'react';
import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
export const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    createTask({
      title: title,
      description: description,
    });

    setTitle('');
    setDescription('');
  }
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="pg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="pg-slate-300 p-3 w-full mb-2"
        ></textarea>

        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-300">
          Agregar tarea
        </button>
      </form>
    </div>
  );
};
