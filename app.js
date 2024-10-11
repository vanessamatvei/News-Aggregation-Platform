import React from 'react';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';

function App() {
    return (
        <div>
            <Navbar />
            <h1>Moldova News Aggregator</h1>
            <ArticleList />
        </div>
    );
}

export default App;
