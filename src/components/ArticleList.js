import React from 'react'
import Article from './Article.js'

const ArticleList = ({posts}) => {
    const articleElement = posts.map((post) => (
        <Article
        key= {post.id}
        title= {post.title}
        date= {post.date}
        preview ={post.preview}
    /> 
    ))
    return <main>{articleElement}</main>
}

export default ArticleList