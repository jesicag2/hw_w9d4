import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// internal imports
import './App.css'; //keep as CSS stylesheet so global CSS styling
import Home from './components/Home';
import BrowseCharacters from "./components/BrowseCharacters";
import CharacterDetails from "./components/CharacterDetails";
import Comics from "./components/Comics";
import NotFound from './components/NotFound';

function App(){
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse-characters' element={<BrowseCharacters /> } /> 
        <Route path='/character/:characterId' element={<CharacterDetails />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}


export default App
