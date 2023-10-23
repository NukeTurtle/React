import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorld from './HelloWorld.jsx'
import Greeting from './Greeting.jsx'
import './App.css'
import './index.css'
import Button from './Button.jsx'
import Card from './Card.jsx'
import Icon from "@mui/material/Icon";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld />
    <Greeting />
    <Button />
    <Card />
    <Icon color='primary'>star</Icon>
    <Icon color='primary'>star</Icon>
    <Icon color='primary'>star</Icon>
    <Icon color='primary'>star</Icon>
    <Icon>star</Icon>
  </React.StrictMode>,
)
