import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch articles from backend
        fetch('/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div>
            {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;
