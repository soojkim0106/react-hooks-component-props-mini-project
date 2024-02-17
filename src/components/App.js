import React from "react";
import Header from './Header.js'
import About from './About.js'
import ArticleList from "./ArticleList.js";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About 
        image={blogData.image} 
        about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
