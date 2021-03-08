import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './components/App.css';

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
];


render(<App tasks={DATA}/>, document.getElementById('root'));
