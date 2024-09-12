import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import PNF from './PNF';
import Counter from './pages/Counter';
import'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './components/Navbar';
import ExpenseTrade from './pages/ExpenseTrade';
import TrailApi from './pages/TrailApi';
import Recipe from './pages/Recipe';
import View from './pages/View';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Recipe/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/counter' element={<Counter/>}/>
    <Route path='/expense' element={<ExpenseTrade/>}/>
    <Route path='/api' element={<TrailApi/>}/>
    <Route path='/views' element={<View/>}/>
    

    <Route path='/*' element={<PNF/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
