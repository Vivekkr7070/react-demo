import React,{useState} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import { ITask } from './components/interfaces';

const App:React.FC=()=> {

const [todo,setTodo]=useState<ITask[]>([])

  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route   path='/'  element={<Home />} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
