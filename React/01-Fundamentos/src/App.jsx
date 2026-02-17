import React, { useState } from "react";
import Post from "./Post";
import initialPosts from "./data/initialPosts";

function App() {
  const [posts, setPosts] = useState(initialPosts);



  // Atualiza a lista com +1 post
  function handleRefresh() {
    
    setPosts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        title: `Post #${prevState[prevState.length - 1].id + 1}`,
      },
    ]);
  }

  // Reseta para lista original
  function handleReset() {
    setPosts(initialPosts);
  }

  // Apaga o post
  function handleRemove(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }
  return (
    //React fragment
    <>
      {/*Comentario em jsx*/}
      <h1>Componente App</h1>
      <button onClick={handleRefresh}>Atualizar</button>
      <button onClick={handleReset}>Resetar</button>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          read={post.read}
          onRemove={handleRemove}

        />
      ))}
    </>
  );
}

export default App;
