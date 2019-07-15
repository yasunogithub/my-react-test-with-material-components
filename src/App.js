import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Title from "./Title";
import Map from "./Map";
import Button from '@material/react-button';
import './App.scss';
import Card from "@material/react-card";
import MyApp from "./MyApp";
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Map/>
      <Button
          raised
          className='button-alternate'
          onClick={() => console.log('clicked!')}
      >
        Click Me!
      </Button>
      <Card />
      <MyApp/>
    </div>

  );
}

export default App;
