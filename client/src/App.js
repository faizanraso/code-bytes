import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import CodeEditor from './components/CodeEditor';
import LanguageSelection from './components/LanguageSelection';
import './App.css';

import './App.css';
function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/language-selection' element={<LanguageSelection />} />
          <Route path='/editor/:languageSelected/:id' element={<CodeEditor/>} />
      </Routes>
    </Router>
  );
}

export default App;
