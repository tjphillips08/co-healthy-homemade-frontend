
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Navigation from './components/Navbar'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumbs from './components/Breadcrumbs'

function App() {
  return (
    <>
    
    <div className="App">
      <Header/>
      <Navigation/>
      <Breadcrumbs/>
      <Main/>
     
    </div>
    </>
  );
}

export default App;
