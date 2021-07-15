import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (!newTaskTitle || newTaskTitle === "") return;
    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };
    setTasks((oldState) => [...oldState, task]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const updatedTasks = [...tasks];

    const item = updatedTasks.find((task) => task.id === id);
    if (!item) return;

    item.done = item.done ? false : true;
    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newList = tasks.filter((task) => task.id !== id);
    setTasks(newList);
  }

  return (
    <>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
