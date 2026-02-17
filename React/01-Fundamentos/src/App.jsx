import React from "react";
import posts from "./data/posts";
import Post from "./Post";

function App() {
  return (
    //React fragment
    <>
      {/*Comentario em jsx*/}
      <h1>Componente App</h1>

      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </>
  );
}

export default App;
