import React from 'react';
import Category from './components/Category.jsx';
import Search from './components/Search.jsx';
import Pages from './pages/Pages.jsx';

function App() {
  return (
    <div className="App">
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
