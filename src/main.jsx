import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import'./App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const notes = [
    {
        id:1,
        content:'one',
        important:true
    },
    {
        id:2,
        content:'two',
        important:true
    },
    {
        id:3,
        content:'three',
        important:false
    },
    {
        id:4,
        content:'four',
        important:true
    },
    {
        id:5,
        content:'five',
        important:false
    }
];

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


