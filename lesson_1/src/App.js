import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
       <div className='wrapper'>
         <h1>Hello World!</h1>
        <SayFullName name='Пукан' surname='Пинтев' link='ya.ru'/> 
        <SayFullName name='Алеша' surname='Пикулев' link='ya.ru'/>
        <SayFullName name='Олежа' surname='Лонджа' link='ya.ru'/>
       </div>
    );
  }
}

export default App;

function SayFullName(props){
  return (
    <div>
      <h1>Мое имя {props.name}, фамилия - {props.surname} </h1>
      <a href={props.link}>ссылка на профиль</a>
    </div>
    )
}
