"use client"
import React, { useState } from 'react';

/**
 * My To Do List App
 *
 * @format
 */

import {
  SafeAreaView
} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';




export function App() {
  const [tasks, setTasks] = useState([
    "Do laundry",
    "Go to gym",
    "Walk dog"
  ])

  return (
    <SafeAreaView>
      <ToDoList taskItems={tasks}/>
      <ToDoForm/>
    </SafeAreaView>
  );
}



export default App;
