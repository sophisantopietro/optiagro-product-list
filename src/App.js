import React from 'react';
import ProductList from './components/ProductList'
import {Container} from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Container>
        <ProductList />
      </Container>
    </div>
  );
}

export default App;
