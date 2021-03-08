import React from 'react';

const Article = () => {
    const body = <section>body</section>
    return (
        <div>
            <h2>title</h2>
            {body}
            <h3>creation date: {(new Date()).toLocaleDateString()}</h3>
        </div>
    )
}

export default Article;