"use client";

import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  // Task content
  const [newTask, setNewTask] = useState("");

  // Add task

  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: false },
    { id: 3, title: "Deploy the App", completed: true },
  ]);

  const addTask = () => {
    if (newTask.trim() != "") {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
        },
      ]);
    }
  };

  // Modify completed status

  const ToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Remove task

  const RemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Update Task title

  const UpdateTitle = (id: number, title: string) => {
    if (title.trim() == "") RemoveTask(id);
    else
      setTasks(
        tasks.map((task) => (task.id === id ? { ...task, title: title } : task))
      );
  };

  // LocalStorage manager

  useEffect(() => {
    const saveTasks = localStorage.getItem("tasks");
    if (saveTasks) {
      setTasks(JSON.parse(saveTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h2 className="text-xl font-bold w-full text-center">TODO LIST</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter your task here"
            className="border-2 border-gray-500 p-2 bg-white focus:outline-none"
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <button
            className="font-bold text-white border-2 border-gray-500 bg-gray-500 p-2"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <TodoList
          tasks={tasks}
          ToggleTask={ToggleTask}
          RemoveTask={RemoveTask}
          UpdateTitle={UpdateTitle}
        />
      </main>
    </div>
  );
}
