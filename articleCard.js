import React from 'react';

const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <p><strong>Source:</strong> {article.source}</p>
            <p><span style={{color: 'red'}}>{article.biasAlert ? '⚠️ Different opinion but same info' : ''}</span></p>
            {/* Add links to contrasting articles */}
        </div>
    );
};

export default ArticleCard;
